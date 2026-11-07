import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { collectUrls } from "./indexnow.mjs";

test("IndexNow includes only actual published research/scenario translations", () => {
  const root = mkdtempSync(join(tmpdir(), "detars-indexnow-"));
  try {
    for (const [section, locale, slug, draft] of [
      ["scenarios", "en", "english-only", false],
      ["scenarios", "en", "bilingual", false],
      ["scenarios", "zh", "bilingual", false],
      ["scenarios", "zh", "not-ready", true],
      ["scenarios", "pt-BR", "bilingual", false],
      ["scenarios", "ko", "only-draft", true],
      ["research", "en", "original", false]
    ]) {
      const dir = join(root, "src/content", section, locale);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, `${slug}.md`), `---\ntitle: Example\ndraft: ${draft}\n---\nText`);
    }
    const urls = collectUrls(root);
    assert.ok(urls.includes("https://detars.xyz/scenarios/english-only"));
    assert.ok(urls.includes("https://detars.xyz/zh/scenarios/bilingual"));
    assert.ok(urls.includes("https://detars.xyz/research/original"));
    assert.ok(urls.includes("https://detars.xyz/pt-br/scenarios/bilingual"));
    assert.ok(urls.includes("https://detars.xyz/pt-br/scenarios"), "a locale index with a published guide");
    assert.ok(!urls.some((url) => /zh\/scenarios\/english-only|not-ready|only-draft|\/ja\/|\/ko\//.test(url)), "no drafts, no index shells");
    assert.deepEqual(urls, [...new Set(urls)].sort());
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
