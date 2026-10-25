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

## Official online Skills

- Edit `content/skills/<name>/SKILL.md` and `references/*.md`, then run `npm run sync:knowledge-skills` to update `public/knowledge.json`.
- `npm run check:knowledge` checks the publishing contract and exact source/bundle sync. All parsed Skill descriptions together must fit 4096 UTF-8 bytes.
- `npm test` runs the shared Bundle v1 cases and generator recovery tests; CI runs it before check/build. Keep `scripts/fixtures/online-knowledge-bundle-cases.json` byte-identical to the App decoder's shared fixture.
- Refresh `scripts/factory-skill-names.json` when factory Skill names change. A name collision is an advisory warning, never a publishing restriction; builds do not need access to the private App repository.

## Configuration

- `SITE_URL` sets the canonical origin (defaults to `https://detars.xyz`).
