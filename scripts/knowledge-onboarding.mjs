import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseArticle, scenarioPath, segments, siteLocales } from "./scenarios/content.mjs";

const fields = (value, names) => value && typeof value === "object" && !Array.isArray(value) &&
  Object.keys(value).every(key => names.includes(key));
const text = value => typeof value === "string" && value.trim().length > 0 &&
  !value.includes("\0") && Buffer.from(value).toString("utf8") === value;
const key = value => text(value) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
const unique = values => new Set(values).size === values.length;
const date = value => typeof value === "string" && Number.isFinite(Date.parse(value));

// C1 is optional, including each section. Empty/missing sections let App defaults apply.
export function validateOnboarding(value) {
  if (value === undefined) return;
  const fail = () => { throw new Error("knowledge.json: invalid onboarding C1 data"); };
  if (!fields(value, ["tips", "latest", "providers", "localModels"])) fail();
  if (value.tips !== undefined) {
    if (!Array.isArray(value.tips) || !unique(value.tips.map(tip => `${tip?.id}:${tip?.locale}`))) fail();
    for (const tip of value.tips) {
      if (!fields(tip, ["id", "locale", "title", "body", "prompt", "feature"]) ||
        !key(tip.id) || !siteLocales.includes(tip.locale) || !key(tip.feature) ||
        ![tip.title, tip.body, tip.prompt].every(text)) fail();
    }
  }
  if (value.latest !== undefined) {
    if (!Array.isArray(value.latest) || !unique(value.latest.map(item => `${item?.kind}:${item?.locale}`))) fail();
    for (const item of value.latest) {
      if (!fields(item, ["kind", "locale", "title", "url", "publishedAt"]) ||
        !["research", "scenario"].includes(item.kind) || !siteLocales.includes(item.locale) ||
        !text(item.title) || !date(item.publishedAt)) fail();
      let url;
      try { url = new URL(item.url); } catch { fail(); }
      if (url.origin !== "https://detars.xyz" || url.username || url.password) fail();
    }
  }
  if (value.providers !== undefined) {
    if (!fields(value.providers, ["cn", "intl"])) fail();
    for (const providers of Object.values(value.providers)) {
      if (!Array.isArray(providers) || !providers.every(key) || !unique(providers)) fail();
    }
  }
  if (value.localModels !== undefined) {
    if (!Array.isArray(value.localModels) || !unique(value.localModels.map(model => model?.ramTier))) fail();
    for (const model of value.localModels) {
      if (!fields(model, ["ramTier", "ollamaTag", "label", "sizeBytes", "canDoTasks"]) ||
        !["xl", "mid", "low"].includes(model.ramTier) || !text(model.label) ||
        typeof model.canDoTasks !== "boolean" || !Number.isSafeInteger(model.sizeBytes) || model.sizeBytes < 0 ||
        !(text(model.ollamaTag) || (model.ollamaTag === "" && model.ramTier === "low" &&
          model.sizeBytes === 0 && model.canDoTasks === false))) fail();
    }
  }
  return value;
}

async function markdownFiles(dir, extension) {
  const result = [];
  for (const entry of (await readdir(dir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, "en"))) {
    const filename = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await markdownFiles(filename, extension));
    else if (entry.isFile() && extension.test(entry.name)) result.push(filename);
  }
  return result;
}

export async function readLatest(root) {
  const latest = [];
  for (const [kind, collection] of [["research", "research"], ["scenario", "scenarios"]]) {
    const chosen = new Map();
    const dir = path.join(root, "src", "content", collection);
    for (const filename of await markdownFiles(dir, kind === "research" ? /\.mdx?$/ : /\.md$/)) {
      const { metadata } = parseArticle(await readFile(filename, "utf8"));
      if (metadata.draft === true || metadata.publishedAt == null) continue;
      const { locale, title, publishedAt } = metadata;
      const stamp = typeof publishedAt === "string" ? publishedAt : publishedAt?.toISOString?.();
      if (!siteLocales.includes(locale) || !text(title) || !date(stamp)) {
        throw new Error(`Invalid published article metadata: ${filename}`);
      }
      // Match reportSlug/scenarioUrl: research uses the filename; scenarios use frontmatter.slug.
      const slug = kind === "research" ? path.basename(filename).replace(/\.mdx?$/, "") : metadata.slug;
      if (!key(slug)) throw new Error(`Invalid published article slug: ${filename}`);
      const route = kind === "scenario" ? scenarioPath(locale, slug) :
        `${segments[locale] ? `/${segments[locale]}` : ""}/research/${slug}/`;
      const item = { kind, locale, title, url: new URL(route, "https://detars.xyz").href, publishedAt: stamp };
      const old = chosen.get(locale);
      const newer = !old || Date.parse(stamp) > Date.parse(old.publishedAt);
      const tie = old && Date.parse(stamp) === Date.parse(old.publishedAt) && item.url < old.url;
      if (newer || tie) chosen.set(locale, item);
    }
    // Deterministic ties and locale order, independent of readdir order, mtime or updatedAt.
    for (const locale of siteLocales) if (chosen.has(locale)) latest.push(chosen.get(locale));
  }
  return latest;
}

export async function readOnboardingSources(root) {
  const editable = JSON.parse(await readFile(path.join(root, "content", "onboarding.json"), "utf8"));
  if (!fields(editable, ["tips", "providers", "localModels"]) ||
    !["tips", "providers", "localModels"].every(field => editable[field] !== undefined)) {
    throw new Error("content/onboarding.json must contain tips, providers and localModels; latest is generated");
  }
  const onboarding = { ...editable, latest: await readLatest(root) };
  validateOnboarding(onboarding);
  return onboarding;
}
