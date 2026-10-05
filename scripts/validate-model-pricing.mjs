// Validates public/model-pricing.json before it ships (build + sync workflow).
import { readFile } from "node:fs/promises";

const fail = (message) => {
  throw new Error(`model-pricing.json: ${message}`);
};
const FIELDS = ["input", "output", "cacheRead", "cacheWrite"];
const MIN_PRICES = 1000;

const table = JSON.parse(await readFile(new URL("../public/model-pricing.json", import.meta.url), "utf8"));
const overrides = JSON.parse(
  await readFile(new URL("../data/model-pricing-overrides.json", import.meta.url), "utf8"),
);

if (table.schemaVersion !== 1) fail(`schemaVersion must be 1, got ${table.schemaVersion}`);
if (Number.isNaN(Date.parse(table.generatedAt))) fail("generatedAt must be an ISO date");
if (!table.prices || typeof table.prices !== "object") fail("prices must be an object");

const entries = Object.entries(table.prices);
if (entries.length < MIN_PRICES) fail(`only ${entries.length} prices (< ${MIN_PRICES}); upstream format may have changed`);

const checkPrice = (key, price) => {
  for (const field of FIELDS) {
    const value = price[field];
    if (value !== undefined && !(typeof value === "number" && Number.isFinite(value) && value >= 0)) {
      fail(`${key}.${field} must be a non-negative number`);
    }
  }
  if (!(price.input > 0 || price.output > 0)) fail(`${key} has no non-zero price`);
};

for (const [key, price] of entries) {
  if (key !== key.toLowerCase() || !key.includes("/")) fail(`key ${key} must be lowercase provider/model`);
  checkPrice(key, price);
  for (const [index, tier] of (price.tieredPricing ?? []).entries()) {
    if (!Array.isArray(tier.range) || tier.range.length === 0) fail(`${key}.tieredPricing[${index}].range missing`);
  }
}
for (const key of overrides.requiredKeys ?? []) {
  if (!table.prices[key]) fail(`required price ${key} is missing`);
}
for (const [from, to] of Object.entries(table.providerAliases ?? {})) {
  if (typeof to !== "string" || !to) fail(`providerAliases.${from} must be a provider id`);
}
console.log(`model-pricing.json ok: ${entries.length} prices`);
