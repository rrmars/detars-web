# Scenarios release check — November 6, 2026

## Scope and inventory

Implemented only in the isolated `scenarios-section` worktree, based on fetched `origin/main` at `6752648`. No push, remote changes or main-checkout content edits.

Current package manifest SHA-256: `4be28cd3a46263c2b0f9b68ff6d4b34f51ef40687264f51422053113249b6e60`.
The README's 85-guide count was already stale: actual imported inventory is **90 guides / 166 details**.

| Locale | Detail pages | Index pages | Policy |
|---|---:|---:|---|
| en | 90 | 1 | Canonical English |
| zh | 76 | 1 | Actual Chinese; 14 English-only cards link to English |
| zh-Hant | 0 | 1 | English index content; canonical English |
| ja | 0 | 1 | English index content; canonical English |
| fr | 0 | 1 | English index content; canonical English |
| es | 0 | 1 | English index content; canonical English |

All 90 guides have one of ten domains; all 53 approved original mappings are retained. Other-locale index aliases are excluded from the sitemap and canonical URL inventory. Nav is localized in all six locales. Dates come from original research data, with ten explicitly evidenced original-date fallbacks, not localization timestamps.

## Verification

Final native commands passed:

- `SCENARIOS_PACKAGE='/Volumes/T7/eval/内容/scenario-runs-20261104/stage2-pages/i18n' npm test`: **18 passed, zero skipped**.
- `npm run check`: **0 errors, 0 warnings** (Astro reports deprecation hints).
- `npm run build`: **318 total site pages**, including 172 scenario pages.
- `node scripts/verify-scenarios-build.mjs`: all 166 detail pages checked for parseable JSON-LD, Article metadata/dates/Organization author/citations, actual-only alternates, footer, no robots noindex, no Review/AggregateRating, hosted local links, sitemap, llms.txt and IndexNow inventory. **60 FAQPage documents / 140 actual FAQ pairs**.
- `node scripts/scenarios/verify-import.mjs <package-dir>`: 44 privacy regressions and importer/source-preservation suites passed; **two imports against unchanged input produced identical 388-file inventories**. Exact receipt: `scenarios-import-verification.json`.
- `git diff --check` passed before commit.

`npm run preview -- --host 127.0.0.1 --port 4325` was started and served HTTP 200. Browser checks used actual installed Chrome and the final `dist`:

1. `/scenarios`
2. `/zh/scenarios`
3. `/scenarios/abu-dhabi-weekend-with-kids` — English-only
4. `/zh/scenarios/kiosk-budget-slow-scenario-funding` — hosted XLSX
5. `/scenarios/affordable-7-day-meal-plan-grocery-budget-chicago` — real FAQ

Each was checked at **1440px and 390px**. All cards and ten filters worked, Chinese English-only card links were verified, the workbook returned 200, there was no document-width overflow, and final run recorded **zero console errors and zero page errors**. Top/card/table/footer pixels were visually inspected; wide tables stay inside their scroll region. A transient Chrome offscreen text-layer capture was rechecked and viewport captures were regenerated after reload. Some earlier browser attempts timed out during navigation despite a healthy local HTTP response; the cause was not isolated. The final successful pass used unchanged production font links, without blocking or replacing external resources.

Screenshots, browser script/results, build/test/check logs and structured-data results are saved outside Git at:
`/Volumes/T7/eval/内容/scenario-runs-20261104/site-check/`.

## Attachments and review decisions

**38 generated workbooks across 37 guides** are public: 21 source-identical, 17 with bounded metadata/draft-hyperlink sanitization. All formulas/caches are preserved; no recalculation. Of 61 inspected candidates, 19 verification copies, one third-party USDA workbook and three primary workbooks with private cell/shared-string paths were excluded. Exact ownership/privacy evidence: `scenarios-workbook-privacy.md` and `.json`.

`scenarios-attachments.md` lists every hosted URL and rewritten target for this manifest. There are **74 distinct nonhosted targets in 27 guides**, represented by 186 locale-level link occurrences: 84 redirected to expanded external sources, 102 rewritten as unavailable. All guides have expanded source footers, regardless of original link count. No saved HTML/PDF/evidence package is published.

Independent UI source review was integrated: duplicate source lists were removed (the importer owns the single expanded list). A generic headline-figure strip was deliberately not added: the complete opening answer retains its figures with assumptions and caveats rather than promoting decontextualized metrics. This is a small departure from the in-spirit mockup, not a content omission. Compact unavailable-file labels in tables avoid repeating a long disclaimer in every cell.

## Adjacent issue, not changed

The existing lockfile's `npm audit` reports **21 dependency vulnerabilities: 1 critical, 17 high, 2 moderate, 1 low**, including Astro. Dependency migration was outside this section's scope; `package.json` and lockfile are unchanged. Saved audit: `site-check/npm-audit.json`. No current deployment exploitability assessment is claimed.
