// Submit published research and scenario URLs after release, never during a build.
// Usage: node scripts/indexnow.mjs [--dry-run]
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parse } from "yaml";

const HOST = "detars.xyz";
const KEY = "473acfa8ad1a5dd5eb541d231be60302";
const ORIGIN = `https://${HOST}`;

export function collectUrls(root = ".") {
  const urls = new Set();
  for (const section of ["research", "scenarios"]) {
    for (const locale of ["en", "zh"]) {
      urls.add(`${ORIGIN}${locale === "zh" ? "/zh" : ""}/${section}`);
      let files;
      try {
        files = readdirSync(join(root, "src/content", section, locale)).sort();
      } catch (error) {
        if (error.code === "ENOENT") continue;
        throw error;
      }
      for (const file of files.filter((f) => /\.(md|mdx)$/.test(f))) {
        const body = readFileSync(join(root, "src/content", section, locale, file), "utf8");
        const match = body.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!match) throw new Error(`Missing frontmatter: ${section}/${locale}/${file}`);
        const data = parse(match[1]);
        if (data.draft) continue;
        const slug = file.replace(/\.(md|mdx)$/, "");
        urls.add(`${ORIGIN}${locale === "zh" ? "/zh" : ""}/${section}/${slug}`);
      }
    }
  }
  return [...urls].sort();
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList: collectUrls()
  };
  console.log("IndexNow submit:", JSON.stringify(payload, null, 2));
  if (!process.argv.includes("--dry-run")) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });
    console.log("IndexNow response:", res.status, res.statusText);
    // IndexNow is best-effort; transient HTTP failures retry on the next content change.
    if (!res.ok) console.warn("IndexNow non-2xx; will retry on next content change.");
  }
}
