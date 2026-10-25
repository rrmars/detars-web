import assert from "node:assert/strict";
import { copyFile, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundleBytes = await readFile(path.join(site, "public", "knowledge.json"));
const sourceSkill = JSON.parse(bundleBytes).skills[0];

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "detars-knowledge-generator-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(path.join(root, "scripts"));
  await mkdir(path.join(root, "public"));
  await mkdir(path.join(root, "content", "skills"), { recursive: true });
  await symlink(path.join(site, "node_modules"), path.join(root, "node_modules"), process.platform === "win32" ? "junction" : "dir");
  for (const file of ["build-knowledge-skills.mjs", "validate-knowledge.mjs", "factory-skill-names.json"]) {
    await copyFile(path.join(site, "scripts", file), path.join(root, "scripts", file));
  }
  const bundlePath = path.join(root, "public", "knowledge.json");
  await writeFile(bundlePath, bundleBytes);
  const skillRoot = path.join(root, "content", "skills", sourceSkill.name);
  for (const file of sourceSkill.files) {
    const target = path.join(skillRoot, file.path);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, file.markdown);
  }
  const run = (...args) => spawnSync(process.execPath, [path.join(root, "scripts", "build-knowledge-skills.mjs"), ...args], { encoding: "utf8" });
  return { root, skillRoot, bundlePath, run };
}

test("unchanged sources are checkable and do not rewrite the bundle", async t => {
  const f = await fixture(t);
  for (const args of [["--check"], []]) {
    const result = f.run(...args);
    assert.equal(result.status, 0, result.stderr);
    assert.doesNotMatch(result.stderr, /factory copy/);
    assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
  }
});

test("both CLI entrypoints execute through a directory symlink", async t => {
  const f = await fixture(t);
  const alias = path.join(f.root, "alias");
  await symlink(f.root, alias, process.platform === "win32" ? "junction" : "dir");
  for (const [file, args, expected] of [
    ["build-knowledge-skills.mjs", ["--check"], /knowledge skills in sync/],
    ["validate-knowledge.mjs", [], /knowledge.json valid/]
  ]) {
    const result = spawnSync(process.execPath, [path.join(alias, "scripts", file), ...args], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, expected);
  }
  assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
});

test("check detects edited Markdown without writing; publish copies exact source bytes", async t => {
  const f = await fixture(t);
  const main = path.join(f.skillRoot, "SKILL.md");
  const edited = await readFile(main, "utf8") + "\nA checked update.\n";
  await writeFile(main, edited);
  assert.equal(f.run("--check").status, 1);
  assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
  const result = f.run();
  assert.equal(result.status, 0, result.stderr);
  const next = JSON.parse(await readFile(f.bundlePath, "utf8"));
  assert.equal(next.skills[0].files.find(f => f.path === "SKILL.md").markdown, edited);
  assert.equal(f.run("--check").status, 0);
});

for (const location of ["root", "references"]) {
  test(`ENOTDIR at ${location} fails both modes and preserves all bundle bytes`, async t => {
    const f = await fixture(t);
    const target = location === "root" ? path.join(f.root, "content", "skills") : path.join(f.skillRoot, "references");
    await rm(target, { recursive: true });
    await writeFile(target, "not a directory");
    for (const args of [[], ["--check"]]) {
      const result = f.run(...args);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /ENOTDIR/);
      assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
    }
  });
}

test("missing references is valid; missing source root intentionally withdraws Skills", async t => {
  const f = await fixture(t);
  await rm(path.join(f.skillRoot, "references"), { recursive: true });
  let result = f.run();
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(await readFile(f.bundlePath, "utf8")).skills[0].files.map(f => f.path), ["SKILL.md"]);
  await rm(path.join(f.root, "content", "skills"), { recursive: true });
  result = f.run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(await readFile(f.bundlePath, "utf8")).skills, undefined);
  assert.equal(f.run("--check").status, 0);
});

test("invalid updated content fails validation without replacing the bundle", async t => {
  const f = await fixture(t);
  await writeFile(path.join(f.skillRoot, "SKILL.md"), "---\nname: wrong-name\ndescription: Test.\n---\n");
  const result = f.run();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /invalid Bundle v1/);
  assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
});

test("factory name collisions warn but allow both check and publish", async t => {
  const f = await fixture(t);
  await writeFile(path.join(f.root, "scripts", "factory-skill-names.json"), JSON.stringify({ names: [sourceSkill.name] }));
  for (const args of [["--check"], []]) {
    const result = f.run(...args);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stderr, /factory copy may take precedence/);
    assert.match(result.stderr, /warning, not a publish restriction/);
    assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
  }
});

test("unavailable or malformed advisory snapshots report missing hints, not a publish failure", async t => {
  const f = await fixture(t);
  const snapshot = path.join(f.root, "scripts", "factory-skill-names.json");
  for (const value of [null, "invalid json", '{"names":42}']) {
    if (value === null) await rm(snapshot);
    else await writeFile(snapshot, value);
    const result = f.run("--check");
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stderr, /collision hints were not checked/);
    assert.deepEqual(await readFile(f.bundlePath), bundleBytes);
  }
});
