// Submit research URLs to IndexNow (Bing / Copilot / Yandex) on publish.
// Run after a research-content change. Enumerates non-draft reports from
// src/content/research and submits them plus the research index pages.
//
// Usage: node scripts/indexnow.mjs
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const HOST = "detars.xyz";
const KEY = "473acfa8ad1a5dd5eb541d231be60302";
const ORIGIN = `https://${HOST}`;
const ROOT = "src/content/research";

const urls = new Set([`${ORIGIN}/research`, `${ORIGIN}/zh/research`]);

for (const locale of ["en", "zh"]) {
  let files = [];
  try {
    files = readdirSync(join(ROOT, locale)).filter((f) => /\.(md|mdx)$/.test(f));
  } catch {
    continue;
  }
  for (const file of files) {
    const body = readFileSync(join(ROOT, locale, file), "utf8");
    if (/^\s*draft:\s*true\s*$/m.test(body)) continue;
    const slug = file.replace(/\.(md|mdx)$/, "");
    urls.add(locale === "zh" ? `${ORIGIN}/zh/research/${slug}` : `${ORIGIN}/research/${slug}`);
  }
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList: [...urls]
};

console.log("IndexNow submit:", payload.urlList);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload)
});

console.log("IndexNow response:", res.status, res.statusText);
// Don't fail the workflow on a non-2xx (e.g. first run before the key file is
// live, or transient verification lag) — IndexNow is best-effort. Network
// errors still throw and fail the step.
if (!res.ok) {
  console.warn("IndexNow non-2xx (key may not be live yet); will retry on next research change.");
}
