import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateKnowledge } from "./validate-knowledge.mjs";

// content/skills/<name>/{SKILL.md,references/*.md} is the source; public/knowledge.json
// carries it as `skills`. Edit the Markdown, then run `npm run sync:knowledge-skills`.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "content", "skills");
const bundlePath = path.join(root, "public", "knowledge.json");
const SOURCE_URL = "https://detars.xyz/";

async function listMarkdown(dir) {
  return (await readdir(dir, { withFileTypes: true }).catch(() => []))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
}

export async function readSkillSources() {
  const names = (await readdir(contentDir, { withFileTypes: true }).catch(() => []))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const skills = [];
  for (const name of names) {
    const dir = path.join(contentDir, name);
    const files = [{ path: "SKILL.md", markdown: await readFile(path.join(dir, "SKILL.md"), "utf8") }];
    for (const ref of await listMarkdown(path.join(dir, "references"))) {
      files.push({ path: `references/${ref}`, markdown: await readFile(path.join(dir, "references", ref), "utf8") });
    }
    skills.push({ name, files });
  }
  return skills;
}

const sameFiles = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

export async function main(args = process.argv.slice(2)) {
  const check = args.includes("--check");
  const bundle = JSON.parse(await readFile(bundlePath, "utf8"));
  const sources = await readSkillSources();
  const previous = new Map((bundle.skills ?? []).map((skill) => [skill.name, skill]));
  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  let changed = sources.length !== previous.size;
  const skills = sources.map(({ name, files }) => {
    const old = previous.get(name);
    if (old && sameFiles(old.files, files)) return old;
    changed = true;
    return { name, updatedAt: now, sourceUrl: SOURCE_URL, files };
  });
  if (check) {
    if (changed) {
      console.error("public/knowledge.json skills differ from content/skills; run npm run sync:knowledge-skills");
      process.exitCode = 1;
    } else console.log(`knowledge skills in sync: ${skills.length}`);
    return;
  }
  if (!changed) return console.log("knowledge skills unchanged");
  const next = { ...bundle, publishedAt: now };
  if (skills.length) next.skills = skills;
  else delete next.skills;
  const text = JSON.stringify(next, null, 2) + "\n";
  validateKnowledge(JSON.parse(text), Buffer.byteLength(text));
  await writeFile(bundlePath, text);
  console.log(`knowledge skills written: ${skills.map((s) => s.name).join(", ") || "none"}; bytes=${Buffer.byteLength(text)}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
