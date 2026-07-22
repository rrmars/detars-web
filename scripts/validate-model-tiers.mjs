import { readFile } from "node:fs/promises";

const TIERS = ["flagship", "strong", "standard", "fast"];
const TIER_INDEX = new Map(TIERS.map((tier, index) => [tier, index]));
const ALLOWED_GLOB = /^[a-z0-9._:/?*+-]+$/i;

const fail = (message) => {
  throw new Error(`model-tiers.json: ${message}`);
};

const assertRecord = (value, path) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(`${path} must be an object`);
  }
  return value;
};

const assertString = (value, path) => {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${path} must be a non-empty string`);
  }
  return value;
};

const escapeRegex = (value) => value.replace(/[|\\{}()[\]^$+.-]/g, "\\$&");

const compileGlob = (glob) => {
  if (!ALLOWED_GLOB.test(glob)) fail(`unsupported glob syntax: ${glob}`);
  const source = [...glob.toLowerCase()]
    .map((char) => (char === "*" ? ".*" : char === "?" ? "." : escapeRegex(char)))
    .join("");
  return new RegExp(`^${source}$`, "i");
};

const literalLength = (glob) => glob.replace(/[?*]/g, "").length;

const capTier = (tier, ceiling) => {
  const tierIndex = TIER_INDEX.get(tier);
  const ceilingIndex = TIER_INDEX.get(ceiling);
  if (tierIndex === undefined || ceilingIndex === undefined) fail("unknown tier in ceiling evaluation");
  return tierIndex < ceilingIndex ? ceiling : tier;
};

const validateCatalog = (raw) => {
  const value = assertRecord(raw, "root");
  if (value.schemaVersion !== 2) fail("schemaVersion must be 2");
  if (!Number.isSafeInteger(value.generation) || value.generation < 1) {
    fail("generation must be a positive safe integer");
  }
  if (Number.isNaN(Date.parse(assertString(value.publishedAt, "publishedAt")))) {
    fail("publishedAt must be an ISO date");
  }
  if (!TIER_INDEX.has(value.defaultTier)) fail("defaultTier is invalid");

  const policy = assertRecord(value.policy, "policy");
  if (!TIER_INDEX.has(policy.openWeightsTierCeiling)) {
    fail("policy.openWeightsTierCeiling is invalid");
  }
  if (typeof policy.deprecatedEligible !== "boolean") {
    fail("policy.deprecatedEligible must be boolean");
  }
  if (!Array.isArray(value.rules) || value.rules.length === 0) fail("rules must be non-empty");
  if (!Array.isArray(value.goldenCases) || value.goldenCases.length === 0) {
    fail("goldenCases must be non-empty");
  }

  const ids = new Set();
  const signatures = new Map();
  const rules = value.rules.map((item, index) => {
    const rule = assertRecord(item, `rules[${index}]`);
    const id = assertString(rule.id, `rules[${index}].id`);
    if (ids.has(id)) fail(`duplicate rule id: ${id}`);
    ids.add(id);
    if (!TIER_INDEX.has(rule.tier)) fail(`rule ${id} has invalid tier`);
    const match = assertRecord(rule.match, `rules[${index}].match`);
    const glob = assertString(match.canonicalModelGlob, `rules[${index}].match.canonicalModelGlob`).toLowerCase();
    const signature = `${literalLength(glob)}:${glob}`;
    const previous = signatures.get(signature);
    if (previous && previous.tier !== rule.tier) {
      fail(`conflicting equal-specificity rules: ${previous.id} and ${id}`);
    }
    signatures.set(signature, { id, tier: rule.tier });
    return { id, tier: rule.tier, glob, specificity: literalLength(glob), regex: compileGlob(glob) };
  });

  return { ...value, policy, rules };
};

const resolveTier = (catalog, testCase) => {
  if (testCase.status === "deprecated" && !catalog.policy.deprecatedEligible) return null;
  const identity = assertString(testCase.modelId, "goldenCases.modelId").toLowerCase();
  const matches = catalog.rules
    .filter((rule) => rule.regex.test(identity))
    .sort((a, b) => b.specificity - a.specificity || a.id.localeCompare(b.id));
  if (matches.length > 1 && matches[0].specificity === matches[1].specificity && matches[0].tier !== matches[1].tier) {
    fail(`ambiguous runtime match for ${identity}: ${matches[0].id}, ${matches[1].id}`);
  }
  let tier = matches[0]?.tier ?? catalog.defaultTier;
  if (testCase.openWeights === true) tier = capTier(tier, catalog.policy.openWeightsTierCeiling);
  return tier;
};

const fileUrl = new URL("../public/model-tiers.json", import.meta.url);
const raw = JSON.parse(await readFile(fileUrl, "utf8"));
const catalog = validateCatalog(raw);

for (const [index, testCaseRaw] of catalog.goldenCases.entries()) {
  const testCase = assertRecord(testCaseRaw, `goldenCases[${index}]`);
  assertString(testCase.providerId, `goldenCases[${index}].providerId`);
  if (testCase.expectedTier !== null && !TIER_INDEX.has(testCase.expectedTier)) {
    fail(`goldenCases[${index}].expectedTier is invalid`);
  }
  const actual = resolveTier(catalog, testCase);
  if (actual !== testCase.expectedTier) {
    fail(`golden case ${testCase.providerId}/${testCase.modelId}: expected ${String(testCase.expectedTier)}, got ${String(actual)}`);
  }
}

process.stdout.write(`model-tiers.json valid: generation=${catalog.generation}, rules=${catalog.rules.length}, goldenCases=${catalog.goldenCases.length}\n`);
