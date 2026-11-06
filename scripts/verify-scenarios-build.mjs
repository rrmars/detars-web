// Run after npm run build. Checks every generated scenario, not just visual samples.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { collectUrls } from "./indexnow.mjs";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [m[1], m[2]]));
const sitemap = readdirSync(join(root, "dist")).filter((f) => /^sitemap.*\.xml$/.test(f)).map((f) => read(`dist/${f}`)).join("\n");
const llms = read("public/llms.txt");
const queued = new Set(collectUrls());
const counts = {};
let faqCount = 0;
for (const locale of ["en", "zh"]) {
  const files = readdirSync(join(root, "src/content/scenarios", locale)).filter((f) => f.endsWith(".md")).sort();
  counts[locale] = files.length;
  for (const file of files) {
    const md = read(`src/content/scenarios/${locale}/${file}`);
    const data = parse(md.match(/^---\n([\s\S]*?)\n---/)[1]);
    const slug = file.slice(0, -3);
    const route = `${locale === "zh" ? "/zh" : ""}/scenarios/${slug}`;
    const url = `https://detars.xyz${route}`;
    const html = read(`dist${route}/index.html`);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0]));
    assert.ok(links.some((a) => a.rel === "canonical" && a.href.replace(/\/$/, "") === url), `${route}: canonical`);
    const alts = links.filter((a) => a.rel === "alternate");
    assert.deepEqual(alts.map((a) => a.hreflang).sort(), [...data.locales.map((l) => l === "zh" ? "zh-Hans" : l), "x-default"].sort(), `${route}: hreflang`);
    for (const alt of alts) {
      const path = new URL(alt.href).pathname.replace(/\/$/, "");
      assert.ok(existsSync(join(root, "dist", path, "index.html")), `${route}: missing alternate ${path}`);
    }
    const graphs = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
      .filter((m) => attrs(m[1]).type === "application/ld+json").flatMap((m) => JSON.parse(m[2]));
    assert.ok(!/"@type"\s*:\s*"(?:Review|AggregateRating)"/.test(JSON.stringify(graphs)), `${route}: rating markup`);
    const article = graphs.find((g) => g["@type"] === "Article");
    assert.ok(article, `${route}: Article`);
    assert.equal(article.author["@type"], "Organization");
    assert.equal(article.author.name, "DeTars");
    assert.equal(article.headline, data.title);
    assert.equal(article.description, data.description);
    assert.equal(article.datePublished?.slice(0, 10), data.publishedAt?.slice(0, 10), `${route}: original research date`);
    assert.ok(article.dateModified, `${route}: dateModified`);
    assert.ok(Array.isArray(article.citation), `${route}: citations`);
    assert.equal(article.citation.length, data.sources.length);
    const faq = graphs.find((g) => g["@type"] === "FAQPage");
    assert.equal(Boolean(faq), data.faq.length > 0, `${route}: FAQ existence`);
    if (faq) {
      faqCount++;
      assert.equal(faq.mainEntity.length, data.faq.length);
      assert.ok(faq.mainEntity.every((q) => q["@type"] === "Question" && q.acceptedAnswer?.["@type"] === "Answer"));
    }
    assert.ok(!/<meta[^>]+(?:noindex|nofollow)/i.test(html), `${route}: robots`);
    assert.ok(html.includes(locale === "zh" ? "本文由 DeTars.xyz 的通用 Cowork 任务产出" : "Produced by a general Cowork task on DeTars.xyz"), `${route}: producer`);
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      assert.ok(!/^(?:\.\.?\/|file:)/.test(href), `${route}: draft attachment ${href}`);
      if (href.startsWith("/scenarios/") && /\.xlsx(?:$|#)/.test(href)) {
        assert.ok(existsSync(join(root, "dist", decodeURI(href.split("#")[0]))), `${route}: workbook ${href}`);
      }
    }
    assert.ok(sitemap.includes(url), `${route}: sitemap`);
    assert.ok(llms.includes(url), `${route}: llms.txt`);
    assert.ok(queued.has(url), `${route}: IndexNow`);
  }
}
for (const locale of ["zh-hant", "ja", "fr", "es"]) {
  const html = read(`dist/${locale}/scenarios/index.html`);
  assert.ok(/rel="canonical" href="https:\/\/detars.xyz\/scenarios\/?"/.test(html));
  assert.ok(!sitemap.includes(`https://detars.xyz/${locale}/scenarios`));
  assert.equal(readdirSync(join(root, "dist", locale, "scenarios")).filter((f) => f !== "index.html").length, 0);
}
console.log(JSON.stringify({ counts, indexPages: 6, faqPages: faqCount, status: "passed" }, null, 2));
