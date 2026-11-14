import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import remarkCjkFriendly from "remark-cjk-friendly";

// Scenario indexes are real pages only for English, Chinese and locales that have at least one translated
// guide. Every other locale index is a localized shell over the English guides (canonical -> English), so it
// stays out of the sitemap. URL segments are the lower-cased locale ids (see src/lib/site.ts).
const scenarioRoot = new URL("./src/content/scenarios/", import.meta.url);
const translated = fs.existsSync(scenarioRoot)
  ? fs.readdirSync(scenarioRoot).filter((dir) => fs.readdirSync(new URL(`./${dir}/`, scenarioRoot)).some((name) => name.endsWith(".md")))
  : [];
const shellLocales = ["zh-hant", "ja", "fr", "es", "id", "pt-br", "vi", "th", "ko", "de"]
  .filter((segment) => !translated.some((dir) => dir.toLowerCase() === segment));
const shellScenarioIndex = new RegExp(`^/(?:${shellLocales.join("|")})/scenarios/?$`);

export default defineConfig({
  site: process.env.SITE_URL || "https://detars.xyz",
  // /pay is the Paddle checkout landing page: never in the sitemap (it is also noindex).
  // The legal pages exist in en and zh; the other locales serve the English text
  // with canonical -> English (src/lib/legal.ts), so those copies stay out too.
  // Scenario indexes use the same canonical fallback until a locale has a translated guide.
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (/\/pay\/?$/.test(path)) return false;
        if (/^\/(zh-hant|ja|fr|es)\/(pricing|terms|privacy|refund)\/?$/.test(path)) return false;
        if (/^\/(ko|pt-br|de)\/(pricing|terms|refund)\/?$/.test(path)) return false;
        if (shellScenarioIndex.test(path)) return false;
        return true;
      }
    })
  ],
  // /proof was retired; old links land on the scenario library instead.
  redirects: Object.fromEntries(
    ["", "zh", "zh-hant", "ja", "fr", "es", "ko", "pt-br", "de"].map((seg) => [
      seg ? `/${seg}/proof` : "/proof",
      seg ? `/${seg}/scenarios` : "/scenarios"
    ])
  ),
  // CommonMark drops **bold** whose closing ** sits after CJK punctuation and before a CJK letter
  // (e.g. "…$1,788。**但…"); this plugin applies the CJK-friendly flanking rules.
  markdown: { remarkPlugins: [remarkCjkFriendly] },
  output: "static",
  trailingSlash: "ignore",
  vite: {
    define: {
      __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    }
  },
  env: {
    schema: {
      SITE_URL: envField.string({
        context: "server",
        access: "public",
        optional: true
      })
    }
  }
});
