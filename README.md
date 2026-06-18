# DeTars — website

Marketing site for **DeTars**: a private AI team you own — it reasons, runs in the background, recovers from failure, can't fake completion, and lives on your own machine.

Static, bilingual (English + `/zh`), built with [Astro](https://astro.build).

## Stack

- Astro (static output) + `@astrojs/sitemap`
- Bilingual routing: `en` at the root, `zh` under `/zh`, connected via `hreflang` (`x-default` → English root)
- Design tokens + components in `src/`; page copy lives in code (`src/lib/home-copy.ts`, `src/lib/pages.en.ts`, `src/lib/pages.zh.ts`)

## Develop

```bash
npm install
npm run dev        # local dev server
npm run check      # type / content check
npm run build      # static build → dist/
npm run preview -- --host 127.0.0.1 --port 4321
```

## Configuration

- `SITE_URL` sets the canonical origin (defaults to `https://detars.xyz`).
