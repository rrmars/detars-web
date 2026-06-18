import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://detars.xyz",
  integrations: [sitemap()],
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
