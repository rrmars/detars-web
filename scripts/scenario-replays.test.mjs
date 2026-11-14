// Integrity of the public scenario replay data in src/data/scenario-replays.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildReplay } from "./scenarios/build-replays.mjs";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(repo, "src/data/scenario-replays");
const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")) : [];
const BANNED = /\/Users\/|\/Volumes\/|\btodo\b|\bledger\b|subagent|tool_call|cowork_|task-spawn|\bw\d+s?-[a-z0-9]/i;

test("every replay belongs to a published scenario in each of its locales", () => {
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
    assert.equal(file, `${data.slug}.json`);
    const locales = Object.keys(data.text);
    assert.ok(locales.length > 0, `${file}: no locale text`);
    for (const locale of locales) {
      assert.ok(existsSync(join(repo, "src/content/scenarios", locale, `${data.slug}.md`)), `${file}: no ${locale} article`);
    }
  }
});

test("replay structure, request template and visible copy are consistent", () => {
  for (const file of files) {
    const data = JSON.parse(readFileSync(join(dir, file), "utf8"));
    assert.match(data.startedAt, /^\d{4}-\d{2}-\d{2}$/, `${file}: startedAt`);
    assert.ok(data.activeSec > 0, `${file}: activeSec`);
    assert.ok(data.phases.length > 0, `${file}: phases`);
    assert.equal(typeof data.stats?.colleagues, "number", `${file}: stats`);
    const ordinals = data.phases.flatMap((p) => p.workers.map((w) => w.n));
    for (const p of data.phases) {
      assert.ok(p.end >= p.start, `${file}: phase order`);
      for (const url of p.chips) assert.match(url, /^https?:\/\//, `${file}: chip url ${url}`);
    }
    for (const [locale, t] of Object.entries(data.text)) {
      const where = `${file} [${locale}]`;
      assert.equal(t.phases.length, data.phases.length, `${where}: phase text count`);
      assert.ok(t.phases.every((p) => p.title.trim()), `${where}: phase titles`);
      const judgments = t.phases.filter((p) => p.judgment).length;
      assert.ok(judgments >= 1 && judgments <= 3, `${where}: ${judgments} judgments`);
      for (const n of ordinals) assert.ok(t.workers[n - 1]?.trim(), `${where}: colleague ${n} line`);
      const keys = t.fields.map((f) => f.key);
      const slots = [...new Set([...t.template.matchAll(/\{(\w+)\}/g)].map((m) => m[1]))];
      assert.deepEqual([...slots].sort(), [...keys].sort(), `${where}: template slots vs fields`);
      for (const f of t.fields) assert.ok(f.value.trim() || f.placeholder?.trim(), `${where}: field ${f.key} empty without example`);
      for (const p of data.phases) for (const url of p.chips) assert.ok(t.chipNames[url], `${where}: chip name for ${url}`);
      const m = JSON.stringify(t).match(BANNED);
      assert.equal(m, null, `${where}: internal text in visible copy: ${m?.[0]}`);
    }
  }
});

test("buildReplay numbers colleagues by start time and keeps them in their phase", () => {
  const skeleton = {
    run: { startedAt: "2026-11-05T04:49:11Z", activeSec: 600 },
    phases: [{ index: 0, startActiveSec: 0, endActiveSec: 300 }, { index: 1, startActiveSec: 300, endActiveSec: 600 }],
    workers: [
      { id: "b", role: "reviewer", phaseIndex: 1, startActiveSec: 320, endActiveSec: 500, parallelWith: [] },
      { id: "a", role: "researcher", phaseIndex: 0, startActiveSec: 10, endActiveSec: 200, parallelWith: ["c"] },
    ],
  };
  const config = {
    slug: "x", chips: { 0: ["https://example.org/a"] },
    i18n: { en: { askTitle: "a", runTitle: "r", headline: ["h", "i"], fields: [{ key: "k", label: "K", value: "v" }], template: "{k}",
      phases: [{ index: 0, title: "one", judgment: "j" }, { index: 1, title: "two" }],
      workers: [{ id: "a", line: "first" }, { id: "b", line: "second" }], chipNames: { "https://example.org/a": "A" } } },
  };
  const out = buildReplay(config, skeleton);
  assert.equal(out.startedAt, "2026-11-05");
  assert.deepEqual(out.phases[0].workers, [{ n: 1, minutes: 3, parallel: true, review: false }]);
  assert.deepEqual(out.phases[1].workers, [{ n: 2, minutes: 3, parallel: false, review: true }]);
  assert.deepEqual(out.text.en.workers, ["first", "second"]);
});
