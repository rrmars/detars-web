import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://detars.xyz",
  // /pay is the Paddle checkout landing page: never in the sitemap (it is also noindex).
  // The legal pages exist in en and zh; the other locales serve the English text
  // with canonical -> English (src/lib/legal.ts), so those copies stay out too.
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (/\/pay\/?$/.test(path)) return false;
        if (/^\/(zh-hant|ja|fr|es)\/(pricing|terms|privacy|refund)\/?$/.test(path)) return false;
        return true;
      }
    })
  ],
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
