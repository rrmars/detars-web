// Run after npm run build. Checks every generated scenario, not just visual samples.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { collectUrls } from "./indexnow.mjs";
import { labels, segments, siteLocales, scenarioPath } from "./scenarios/content.mjs";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((m) => [m[1], m[2]]));
const sitemap = readdirSync(join(root, "dist")).filter((f) => /^sitemap.*\.xml$/.test(f)).map((f) => read(`dist/${f}`)).join("\n");
const llms = read("public/llms.txt");
const queued = new Set(collectUrls());
const counts = {};
const hreflang = (locale) => (locale === "zh" ? "zh-Hans" : locale);
const dist = (path) => join(root, "dist", path.replace(/\/$/, ""), "index.html");
const fullChrome = ["en", "zh", "zh-Hant", "ja", "fr", "es", "ko", "pt-BR", "de"];
const scenarioOnly = siteLocales.filter((locale) => !fullChrome.includes(locale));
const internalLinks = (html) => [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1]).filter((h) => h.startsWith("/") && !h.startsWith("//"));
const switcher = (html) => [...(html.match(/<div class="lang-pop"[\s\S]*?<\/div>/)?.[0] ?? "").matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
const translated = new Set(["en", "zh"]);
const published = {};
let faqCount = 0;
for (const locale of siteLocales) {
  const dir = join(root, "src/content/scenarios", locale);
  if (!existsSync(dir)) continue;
  const files = readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  if (!files.length) continue;
  translated.add(locale);
  counts[locale] = files.length;
  for (const file of files) {
    const md = read(`src/content/scenarios/${locale}/${file}`);
    const data = parse(md.match(/^---\n([\s\S]*?)\n---/)[1]);
    const slug = file.slice(0, -3);
    const route = scenarioPath(locale, slug).replace(/\/$/, "");
    (published[slug] ??= []).push(locale);
    const url = `https://detars.xyz${route}`;
    const html = read(`dist${route}/index.html`);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0]));
    assert.ok(links.some((a) => a.rel === "canonical" && a.href.replace(/\/$/, "") === url), `${route}: canonical`);
    const alts = links.filter((a) => a.rel === "alternate");
    assert.deepEqual(alts.map((a) => a.hreflang).sort(), [...data.locales.map(hreflang), "x-default"].sort(), `${route}: hreflang`);
    assert.ok(new RegExp(`<html lang="${hreflang(locale)}"`).test(html), `${route}: html lang`);
    // The switcher offers exactly the real translations of this guide, each an existing page.
    assert.deepEqual(switcher(html).map((h) => h.replace(/\/$/, "")).sort(), data.locales.map((l) => scenarioPath(l, slug).replace(/\/$/, "")).sort(), `${route}: language switcher`);
    for (const href of internalLinks(html)) assert.ok(existsSync(dist(decodeURI(href.split("#")[0]) || "/")) || existsSync(join(root, "dist", decodeURI(href.split("#")[0]))) || existsSync(join(root, "public", decodeURI(href.split("#")[0]))), `${route}: dead internal link ${href}`);
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
    assert.ok(html.includes(labels[locale]), `${route}: producer`);
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
// Every English guide must exist; every translation must have its English original.
for (const [slug, locales] of Object.entries(published)) assert.ok(locales.includes("en"), `${slug}: English is required`);
// Scenario indexes: one per non-English locale. Real (self-canonical, in the sitemap) only where translated guides exist.
const guideCount = Object.keys(published).length;
const indexKinds = {};
for (const locale of siteLocales.filter((l) => l !== "en")) {
  const route = `${segments[locale] ? `/${segments[locale]}` : ""}/scenarios`;
  const html = read(`dist${route}/index.html`);
  const real = translated.has(locale);
  indexKinds[locale] = real ? "indexable" : "shell";
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1].replace(/\/$/, "");
  assert.equal(canonical, real ? `https://detars.xyz${route}` : "https://detars.xyz/scenarios", `${route}: canonical`);
  assert.equal(sitemap.includes(`<loc>https://detars.xyz${route}</loc>`) || sitemap.includes(`<loc>https://detars.xyz${route}/</loc>`), real, `${route}: sitemap membership`);
  assert.ok(new RegExp(`<html lang="${hreflang(locale)}"`).test(html), `${route}: html lang`);
  // Cards: every guide once; own translation if it exists, else the English guide with a visible English tag.
  const cards = [...html.matchAll(/<article class="scenario-card[^"]*"[^>]*data-card-locale="([^"]+)"[\s\S]*?<h2[^>]*><a href="([^"]+)"/g)];
  assert.equal(cards.length, guideCount, `${route}: one card per guide`);
  for (const [, cardLocale, href] of cards) {
    const slug = href.replace(/\/$/, "").split("/").pop();
    assert.equal(cardLocale, published[slug].includes(locale) ? locale : "en", `${route}: card locale for ${slug}`);
    assert.equal(href.replace(/\/$/, ""), scenarioPath(cardLocale, slug).replace(/\/$/, ""));
    assert.ok(existsSync(dist(href)), `${route}: dead card ${href}`);
  }
  assert.equal((html.match(/data-english-fallback/g) ?? []).length, cards.filter((c) => c[1] === "en").length, `${route}: English fallback tag`);
  // hreflang lists only real index pages; the switcher offers every index and each exists.
  const alts = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0])).filter((a) => a.rel === "alternate");
  assert.deepEqual(alts.map((a) => a.hreflang).sort(), [...[...translated].map(hreflang), "x-default"].sort(), `${route}: hreflang`);
  const offered = switcher(html);
  assert.equal(offered.length, siteLocales.length, `${route}: switcher offers every index`);
  for (const href of offered) assert.ok(existsSync(dist(href)), `${route}: switcher dead link ${href}`);
  for (const href of internalLinks(html)) assert.ok(existsSync(dist(decodeURI(href.split("#")[0]) || "/")) || existsSync(join(root, "dist", decodeURI(href.split("#")[0]))), `${route}: dead internal link ${href}`);
  if (scenarioOnly.includes(locale)) {
    // Scenario-only locales: nothing else exists under their prefix, and no page links into that void.
    assert.deepEqual(readdirSync(join(root, "dist", segments[locale])).filter((f) => f !== "scenarios"), [], `${locale}: only scenario pages`);
  } else {
    assert.equal(readdirSync(join(root, "dist", segments[locale], "scenarios")).filter((f) => f !== "index.html" && !published[f]?.includes(locale)).length, 0);
  }
}
// The English index lists every guide and offers every index.
{
  const html = read("dist/scenarios/index.html");
  assert.equal(switcher(html).length, siteLocales.length);
  assert.equal([...html.matchAll(/data-card-locale="en"/g)].length, guideCount);
}
// Non-scenario pages never point at scenario-only locales: no switcher entry, no hreflang, no link.
const pages = [];
const walk = (dir) => { for (const entry of readdirSync(dir, { withFileTypes: true })) { const p = join(dir, entry.name); if (entry.isDirectory()) { if (entry.name !== "_astro") walk(p); } else if (entry.name === "index.html") pages.push(p); } };
walk(join(root, "dist"));
const scenarioOnlyPrefix = new RegExp(`^/(?:${scenarioOnly.map((l) => segments[l]).join("|")})(?:/|$)`);
let checkedOrdinary = 0;
for (const file of pages) {
  const route = "/" + file.slice(join(root, "dist").length + 1, -"index.html".length).replace(/\/$/, "");
  if (/(?:^|\/)scenarios(?:\/|$)/.test(route) || scenarioOnlyPrefix.test(route)) continue;
  const html = readFileSync(file, "utf8");
  checkedOrdinary++;
  for (const href of switcher(html)) assert.ok(!scenarioOnlyPrefix.test(href), `${route}: switcher offers scenario-only locale ${href}`);
  for (const alt of [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0])).filter((a) => a.rel === "alternate")) assert.ok(!scenarioOnlyPrefix.test(new URL(alt.href).pathname), `${route}: hreflang to scenario-only locale`);
}
assert.ok(checkedOrdinary > 20);
for (const locale of scenarioOnly) assert.ok(!existsSync(join(root, "dist", segments[locale], "how-it-works")), `${locale}: no non-scenario pages`);
console.log(JSON.stringify({ counts, indexPages: Object.keys(indexKinds).length + 1, indexKinds, ordinaryPagesChecked: checkedOrdinary, faqPages: faqCount, status: "passed" }, null, 2));
