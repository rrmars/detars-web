import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://detars.xyz",
  // /pay is the Paddle checkout landing page: never in the sitemap (it is also noindex).
  integrations: [sitemap({ filter: (page) => !/\/pay\/?$/.test(new URL(page).pathname) })],
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
