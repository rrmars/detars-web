import { readFile, realpath } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";
import YAML from "yaml";

// Standalone publisher mirror of the desktop Bundle v1 contract. No private repo dependency.
export function validateKnowledge(value, rawBytes = Buffer.byteLength(JSON.stringify(value))) {
  const fail = () => { throw new Error("knowledge.json: invalid Bundle v1"); };
  const text = (v, max) => typeof v === "string" && v.trim() && !v.includes("\0") && Buffer.byteLength(v) <= max && Buffer.from(v).toString("utf8") === v;
  const key = v => typeof v === "string" && v.length <= 64 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
  const date = v => text(v, 64) && Number.isFinite(Date.parse(v));
  if (!value || typeof value !== "object" || Array.isArray(value) || rawBytes > 256 * 1024 ||
    value.schemaVersion !== 1 || !date(value.publishedAt) || !Array.isArray(value.scope) ||
    value.scope.length < 1 || value.scope.length > 16 || !value.scope.every(v => text(v, 256)) ||
    !Array.isArray(value.documents) || value.documents.length > 64 || !Array.isArray(value.summaries) ||
    value.summaries.length > 64 || !text(value.indexMarkdown, 32 * 1024)) fail();
  const keys = new Set();
  for (const d of value.documents) {
    if (!d || !key(d.key) || keys.has(d.key) || !text(d.title, 512) || !text(d.markdown, 64 * 1024) ||
      !text(d.sourceUrl, 2048) || !date(d.updatedAt)) fail();
    const url = new URL(d.sourceUrl);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) fail();
    keys.add(d.key);
  }
  const summaries = new Set();
  for (const s of value.summaries) {
    if (!s || !key(s.key) || !keys.has(s.key) || summaries.has(s.key) || !text(s.text, 4096) || !Number.isSafeInteger(s.priority)) fail();
    summaries.add(s.key);
  }
  const replaced = value.indexMarkdown.replace(/\{\{doc:([^{}]+)\}\}/g, (_match, k) => {
    if (!key(k) || !keys.has(k)) fail();
    return k;
  });
  if (replaced.includes("{{")) fail();
  validateSkills(value.skills, keys, fail);
  return value;
}

// Optional official Skills (Markdown only). Mirrors decodeOnlineKnowledgeSkills in the app.
function validateSkills(skills, documentKeys, fail) {
  if (skills === undefined) return;
  const text = (v, max) => typeof v === "string" && v.trim() && !v.includes("\0") && Buffer.byteLength(v) <= max && Buffer.from(v).toString("utf8") === v;
  const date = v => text(v, 64) && Number.isFinite(Date.parse(v));
  const filePath = /^(?:SKILL\.md|references\/[a-z0-9]+(?:-[a-z0-9]+)*\.md)$/;
  if (!Array.isArray(skills) || skills.length > 16) fail();
  const names = new Set();
  let descriptionBytes = 0;
  for (const s of skills) {
    if (!s || typeof s !== "object" || typeof s.name !== "string" || s.name.length > 64 ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s.name) || names.has(s.name) || documentKeys.has(s.name) ||
      !date(s.updatedAt) || !text(s.sourceUrl, 2048) || !Array.isArray(s.files) ||
      s.files.length < 1 || s.files.length > 24) fail();
    const url = new URL(s.sourceUrl);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) fail();
    const paths = new Set();
    for (const f of s.files) {
      if (!f || typeof f.path !== "string" || !filePath.test(f.path) || paths.has(f.path) || !text(f.markdown, 64 * 1024)) fail();
      paths.add(f.path);
    }
    const main = s.files.find(f => f.path === "SKILL.md");
    const front = main && /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(main.markdown);
    let metadata;
    try { metadata = front && YAML.parse(front[1], { maxAliasCount: 0 }); }
    catch { fail(); }
    if (metadata?.name !== s.name || typeof metadata.description !== "string" || !metadata.description.trim()) fail();
    descriptionBytes += Buffer.byteLength(metadata.description);
    if (descriptionBytes > 4096) fail();
    names.add(s.name);
  }
}
export async function main() {
  const bytes = await readFile(new URL("../public/knowledge.json", import.meta.url));
  const value = validateKnowledge(JSON.parse(new TextDecoder("utf-8", {fatal:true}).decode(bytes)), bytes.length);
  console.log(`knowledge.json valid: documents=${value.documents.length}, summaries=${value.summaries.length}, skills=${value.skills?.length ?? 0}, bytes=${bytes.length}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(await realpath(path.resolve(process.argv[1]))).href) await main();
