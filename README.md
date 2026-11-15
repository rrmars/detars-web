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

## Onboarding content (C1)

- Edit `content/onboarding.json` for `tips`, regional `providers` ordering and `localModels`. It is also the copyable shape for App defaults (no `latest` default). The first set has 10 concepts, each with an English and Chinese row sharing `id` and `feature`. Tips are condensed from the actual `use-detars` guide in `public/knowledge.json`: goals, notes, memory corrections, Skills, previous decisions, recurring reviews, IM, voice, Packs and Auto privacy.
- The existing `npm run sync:knowledge-skills` generator now also produces `public/knowledge.json.onboarding`; `pnpm build` syncs before validation and publishes the same bytes to `dist/knowledge.json`. `npm run check:knowledge` remains read-only and detects source drift. No network or private App checkout is needed to build.
- `latest` is generated, not editable: one newest non-draft, dated article per kind and locale from `src/content/research/**/*.{md,mdx}` and `src/content/scenarios/**/*.md`. It uses `publishedAt`, not `updatedAt` or file time; equal dates choose the lexically first URL. Research uses its filename slug, scenarios use frontmatter `slug`, and locale URL segments match the website. Missing translations are omitted rather than linked to nonexistent pages; App can fall back to English.
- Local model tiers follow the onboarding construction contract: `xl` = 32 GB+ / Qwen3 30B MoE / simple tasks; `mid` = 16–24 GB / Qwen3 4B / offline chat (`canDoTasks:false`); `low` = 8 GB / not recommended. The low row has `ollamaTag:""`, `sizeBytes:0`, `canDoTasks:false`: it is an explicit no-download recommendation, not an installable model. Labels are English fallback copy; the consumer localizes its tier explanation. These are initial recommendations, not performance guarantees.
- Model sizes were checked on 2026-11-15 against `https://registry.ollama.com/v2/library/qwen3/manifests/30b` and `/4b`: `sizeBytes` sums config and layer sizes (fresh download, excluding transport overhead). Tags can change; update these editable values when recommendations change.
- `node --test scripts/knowledge-onboarding.test.mjs scripts/build-knowledge-skills.test.mjs scripts/validate-knowledge.test.mjs` covers C1 shape, bilingual seed data, locale/latest selection, deterministic ties, source edits, no-op/check mode and failure preservation.

## Configuration

- `SITE_URL` sets the canonical origin (defaults to `https://detars.xyz`).
