import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { readLatest, readOnboardingSources, validateOnboarding } from "./knowledge-onboarding.mjs";
import { validateKnowledge } from "./validate-knowledge.mjs";

const site = new URL("../", import.meta.url);
const editable = JSON.parse(await readFile(new URL("content/onboarding.json", site), "utf8"));
const bundle = JSON.parse(await readFile(new URL("public/knowledge.json", site), "utf8"));

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "detars-onboarding-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const dir of ["content", "src/content/research", "src/content/scenarios"]) {
    await mkdir(path.join(root, dir), { recursive: true });
  }
  await writeFile(path.join(root, "content", "onboarding.json"), JSON.stringify(editable));
  const article = async (collection, file, metadata) => {
    const target = path.join(root, "src", "content", collection, file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, `---\n${JSON.stringify(metadata)}\n---\nBody.\n`);
  };
  return { root, article };
}

test("latest uses publishedAt per kind/locale, excludes drafts/undated, and matches real routes", async t => {
  const { root, article } = await fixture(t);
  for (const [file, metadata] of [
    ["en/z-old.md", { title: "Old", locale: "en", publishedAt: "2026-01-01", updatedAt: "2099-01-01" }],
    ["en/b-new.mdx", { title: "New", locale: "en", publishedAt: "2026-11-10" }],
    ["en/a-tie.md", { title: "Tie", locale: "en", publishedAt: "2026-11-10" }],
    ["en/draft.md", { title: "Draft", locale: "en", publishedAt: "2099-01-01", draft: true }],
    ["zh/own-title.md", { title: "中文", locale: "zh", publishedAt: "2026-10-01" }]
  ]) await article("research", file, metadata);
  for (const [locale, slug, publishedAt] of [["en", "english", "2026-09-01"], ["zh", "chinese", "2026-11-01"],
    ["zh-Hant", "traditional", "2026-11-02"], ["pt-BR", "brazil", "2026-11-03"], ["id", "indonesia", "2026-11-04"]]) {
    await article("scenarios", `${locale}/different-filename.md`, { title: locale, locale, slug, publishedAt });
  }
  await article("scenarios", "en/undated.md", { title: "No date", locale: "en", slug: "undated", publishedAt: null });
  const latest = await readLatest(root);
  assert.equal(latest.length, 7);
  assert.deepEqual(latest.filter(item => item.kind === "research"), [
    { kind: "research", locale: "en", title: "Tie", url: "https://detars.xyz/research/a-tie/", publishedAt: "2026-11-10" },
    { kind: "research", locale: "zh", title: "中文", url: "https://detars.xyz/zh/research/own-title/", publishedAt: "2026-10-01" }
  ]);
  for (const [locale, segment, slug] of [["en", "", "english"], ["zh", "/zh", "chinese"],
    ["zh-Hant", "/zh-hant", "traditional"], ["pt-BR", "/pt-br", "brazil"], ["id", "/id", "indonesia"]]) {
    assert.equal(latest.find(item => item.kind === "scenario" && item.locale === locale).url,
      `https://detars.xyz${segment}/scenarios/${slug}/`);
  }
  const result = await readOnboardingSources(root);
  assert.deepEqual(result, { ...editable, latest });
});

test("empty collections do not invent translations; malformed published metadata fails", async t => {
  const { root, article } = await fixture(t);
  assert.deepEqual(await readLatest(root), []);
  for (const override of [{ publishedAt: "bad-date" }, { locale: "unknown" }, { slug: "../escape" }]) {
    await article("scenarios", "en/test.md", { title: "Title", locale: "en", slug: "test", publishedAt: "2026-01-01", ...override });
    await assert.rejects(readLatest(root), /Invalid published article/);
  }
});

test("editable defaults contain 8–12 bilingual concepts, C1 providers and all RAM tiers", () => {
  assert.deepEqual(Object.keys(editable).sort(), ["localModels", "providers", "tips"]);
  assert.doesNotThrow(() => validateOnboarding(editable));
  const ids = new Set(editable.tips.map(tip => tip.id));
  assert.ok(ids.size >= 8 && ids.size <= 12);
  for (const id of ids) {
    const translations = editable.tips.filter(tip => tip.id === id);
    assert.deepEqual(translations.map(tip => tip.locale).sort(), ["en", "zh"]);
    assert.equal(translations[0].feature, translations[1].feature);
  }
  const features = new Set(editable.tips.map(tip => tip.feature));
  for (const feature of ["cowork", "memory", "cron", "im", "knowledge", "voice", "packs"]) assert.ok(features.has(feature));
  assert.deepEqual(editable.providers, {
    cn: ["deepseek", "openrouter", "moonshot", "qwen", "minimax", "volcengine"],
    intl: ["openrouter", "anthropic", "openai", "google"]
  });
  assert.deepEqual(editable.localModels.map(model => [model.ramTier, model.ollamaTag, model.canDoTasks]),
    [["xl", "qwen3:30b", true], ["mid", "qwen3:4b", false], ["low", "", false]]);
  assert.equal(editable.localModels[2].sizeBytes, 0);
});

test("onboarding remains optional; rejects field drift, duplicates and invalid editable values", () => {
  for (const onboarding of [undefined, {}, { tips: [] }, { providers: {} }]) {
    assert.doesNotThrow(() => validateKnowledge({ ...bundle, onboarding }));
  }
  const tip = editable.tips[0];
  const model = editable.localModels[0];
  for (const bad of [null, [], { unknown: true }, { tips: 42 }, { tips: [tip, tip] },
    { tips: [{ ...tip, locale: "unknown" }] }, { tips: [{ ...tip, prompt: "" }] },
    { tips: [{ ...tip, extra: true }] }, { providers: { cn: ["deepseek", "deepseek"] } },
    { providers: { cn: "deepseek" } }, { localModels: [{ ...model, sizeBytes: -1 }] },
    { localModels: [{ ...model, canDoTasks: "yes" }] }, { localModels: [{ ...model, ollamaTag: "" }] },
    { localModels: [model, model] }, { latest: [{ kind: "research", locale: "en", title: "Title", url: "https://other.test/", publishedAt: "2026-01-01" }] }
  ]) assert.throws(() => validateKnowledge({ ...bundle, onboarding: bad }), /onboarding C1/);
});
