// Builds public/model-pricing.json, the price table DeTars uses to estimate
// what model calls cost (served at https://detars.xyz/model-pricing.json).
//
// Sources, lowest to highest precedence for the same `provider/model` key:
//   1. OpenClaw's published catalog bundle (upstream vendor prices merged from
//      OpenRouter, LiteLLM, models.dev and others, then route-specific prices).
//   2. First-party prices declared in OpenClaw plugin manifests
//      (extensions/*/openclaw.plugin.json `modelCatalog.providers.*.models[].cost`),
//      which carry models the bundle does not list yet.
//   3. data/model-pricing-overrides.json, maintained by DeTars.
// Prices are USD per 1M tokens. All-zero prices mean "unknown" upstream, so
// they are dropped rather than published as free.
//
// Usage: node scripts/sync-model-pricing.mjs [--catalog <file>] [--manifests <openclaw checkout>]
// Without flags it downloads both sources.

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CATALOG_URL = "https://catalog.openclaw.ai/models/v2/catalog.json";
const UPSTREAM_REPO = "openclaw/openclaw";
const FIELDS = ["input", "output", "cacheRead", "cacheWrite"];

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) args.set(process.argv[i], process.argv[i + 1]);

const fetchJson = async (url) => {
  const headers = { "user-agent": "detars-web-pricing-sync" };
  // The GitHub API allows 60 unauthenticated requests per hour; CI passes its token.
  if (url.startsWith("https://api.github.com/") && process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
};

const finite = (value) => (typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : undefined);

// Normalizes one price record; returns null when it carries no non-zero price.
const normalizePrice = (raw, source) => {
  if (!raw || typeof raw !== "object") return null;
  const price = {};
  for (const field of FIELDS) {
    const value = finite(raw[field]);
    if (value !== undefined) price[field] = value;
  }
  if (!(price.input > 0 || price.output > 0)) return null;
  if (Array.isArray(raw.tieredPricing) && raw.tieredPricing.length > 0) {
    const tiers = raw.tieredPricing
      .map((tier) => {
        const normalized = normalizePrice(tier, source);
        const range = Array.isArray(tier?.range) ? tier.range.filter((n) => finite(n) !== undefined) : [];
        if (!normalized || range.length === 0) return null;
        delete normalized.source;
        return { ...normalized, range };
      })
      .filter(Boolean)
      .sort((a, b) => a.range[0] - b.range[0]);
    if (tiers.length > 0) price.tieredPricing = tiers;
  }
  price.source = source;
  return price;
};

const keyOf = (provider, model) => `${provider}/${model}`.toLowerCase();

const loadCatalog = async () => {
  const file = args.get("--catalog");
  return file ? JSON.parse(await readFile(file, "utf8")) : fetchJson(CATALOG_URL);
};

// Plugin manifests: from a local checkout, or the upstream default branch.
const loadManifests = async () => {
  const local = args.get("--manifests");
  if (local) {
    const dir = path.join(local, "extensions");
    const manifests = [];
    for (const entry of readdirSync(dir)) {
      const file = path.join(dir, entry, "openclaw.plugin.json");
      if (existsSync(file)) manifests.push({ id: entry, manifest: JSON.parse(readFileSync(file, "utf8")) });
    }
    return { ref: `local:${local}`, manifests };
  }
  const head = await fetchJson(`https://api.github.com/repos/${UPSTREAM_REPO}/commits/main`);
  const tree = await fetchJson(`https://api.github.com/repos/${UPSTREAM_REPO}/git/trees/${head.sha}?recursive=1`);
  const paths = tree.tree
    .map((node) => node.path)
    .filter((p) => /^extensions\/[^/]+\/openclaw\.plugin\.json$/.test(p));
  const manifests = [];
  for (const p of paths) {
    const manifest = await fetchJson(`https://raw.githubusercontent.com/${UPSTREAM_REPO}/${head.sha}/${p}`);
    manifests.push({ id: p.split("/")[1], manifest });
  }
  return { ref: head.sha, manifests };
};

const main = async () => {
  const overrides = JSON.parse(await readFile(path.join(root, "data/model-pricing-overrides.json"), "utf8"));
  const catalog = await loadCatalog();
  if (catalog?.schemaVersion !== 2) throw new Error(`unexpected catalog schemaVersion ${catalog?.schemaVersion}`);
  const { ref, manifests } = await loadManifests();

  const prices = new Map();
  const put = (key, price) => {
    if (price) prices.set(key, price);
  };
  for (const [key, raw] of Object.entries(catalog.upstreamPricing ?? {})) put(key.toLowerCase(), normalizePrice(raw, "openclaw-catalog"));
  for (const [key, raw] of Object.entries(catalog.providerPricing ?? {})) put(key.toLowerCase(), normalizePrice(raw, "openclaw-catalog"));
  let manifestPrices = 0;
  for (const { manifest } of manifests) {
    for (const [provider, entry] of Object.entries(manifest?.modelCatalog?.providers ?? {})) {
      for (const model of entry?.models ?? []) {
        const price = normalizePrice(model?.cost, "openclaw-manifest");
        if (price && typeof model.id === "string") {
          put(keyOf(provider, model.id), price);
          manifestPrices += 1;
        }
      }
    }
  }
  for (const [key, raw] of Object.entries(overrides.prices ?? {})) put(key.toLowerCase(), normalizePrice(raw, "detars"));

  const sorted = Object.fromEntries([...prices.entries()].sort(([a], [b]) => a.localeCompare(b)));
  const output = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    unit: "USD per 1M tokens",
    sources: [
      {
        name: "openclaw-catalog",
        url: CATALOG_URL,
        generatedAt: new Date(catalog.generatedAt).toISOString(),
        sourceCommit: catalog.sourceCommit,
      },
      { name: "openclaw-manifests", repo: UPSTREAM_REPO, ref, prices: manifestPrices },
      { name: "detars", file: "data/model-pricing-overrides.json" },
    ],
    providerAliases: Object.fromEntries(
      Object.entries(overrides.providerAliases ?? {}).map(([from, to]) => [from.toLowerCase(), to.toLowerCase()]),
    ),
    prices: sorted,
  };
  await writeFile(path.join(root, "public/model-pricing.json"), `${JSON.stringify(output)}\n`);
  console.log(`model-pricing.json: ${prices.size} prices (manifests ${manifestPrices}, ref ${ref})`);
};

await main();
