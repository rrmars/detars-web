# Repeatable Scenarios import

## Run

From this worktree, after `npm ci` (Node plus Python 3 standard library required):

```sh
node scripts/import-scenarios.mjs '/path/to/stage2-pages/i18n'
SCENARIOS_PACKAGE='/path/to/stage2-pages/i18n' node --test scripts/import-scenarios.test.mjs
```

The importer reads the **current manifest**, never a frozen 53/85/90 count. It imports only declared real English/Chinese Markdown files. English-only guides stay English-only; the UI owns index fallback policy. A changing manifest or source file fails the run and requires rerunning on a stable snapshot. Input package and source runs are read-only. No external research refresh is performed; import time is never used as a research or source-access date.

`--skip-workbooks` is a development-only shortcut: it requires an existing privacy report with the exact current manifest hash. A normal release import must run the workbook gate.

## Owned outputs

- `src/content/scenarios/{en,zh}/<slug>.md`: required shared frontmatter, full visible original article, first body H1 removed, public-link/status edits, real FAQ metadata, expanded sources.
- `src/data/scenarios/<slug>.json`: original semantic information with private filesystem provenance and historical Review schema removed; outside the content collection.
- `src/data/scenario-domains.json`: exactly ten approved bilingual domains plus persistent slug assignments.
- `public/scenarios/<slug>/*.xlsx`: only generated, privacy-approved publication copies. No HTML/PDF/CSV/evidence/source packages are published.
- `public/llms.txt`: primary site sections and every actual EN/ZH scenario with its frontmatter description. Extra locale index aliases are not listed as canonical pages.
- `docs/scenarios-attachment-audit.json` and one report per guide under `docs/scenarios-attachment-audit/`: source hashes, dates and rationale, each hosted/rewritten local-link occurrence, plus the original source-list locator. Every guide's source-list footer is replaced by expanded real external sources.
- `docs/scenarios-workbook-privacy.json` (complete per-guide records) and `docs/scenarios-workbook-privacy.md`: complete publication gate evidence.

Generated semantic JSON and long audits are compacted where needed to keep files under 700 physical lines. Documentation/audits are repository evidence, not public assets.

## Dates and FAQ

Use `provenance.researchDates` unchanged when present. The ten originally empty arrays are resolved by the reviewed excerpts and source hashes in `docs/scenarios-date-evidence.json`; each explicitly records November 5, 2026 as original research/test/source-read date, not localization date. `publishedAt` is the earliest research date; `updatedAt` is explicit `articleVerificationDate` where present, otherwise the last research date. No generic localization/archive-date fallback exists. Truly unresolved research dates remain null.

FAQ comes only from the dedicated source Q&A headings inventoried in that evidence file. Existing questions and same-paragraph answers are retained, not invented from rhetorical openings. The complete FAQ stays visible in the body; metadata supports JSON-LD, not a second displayed FAQ. Tests compare metadata against the **original source excerpts**, not merely against generated content. A changed known heading/pair count fails closed. For future guides with real dedicated FAQ, add the verified heading/excerpts to the evidence inventory rather than guessing questions.

## Taxonomy stability

`scripts/scenarios/approved-domains.json` freezes the approved 53-guide mapping. `scripts/scenarios/domains.mjs` extends it with ordered keyword rules. Persisted assignments always win on reruns; an attempt to alter an approved mapping fails. New unclassified slugs fail with an actionable error rather than silently defaulting to an arbitrary domain. The UI imports the persisted mapping file directly.

## Publication edits and caveats

Only local attachment directions and obsolete draft/hosting notices are rewritten. Approved workbook links are rebased; unavailable supporting documents are explicitly described as unpublished, not promised as downloads. Bare filesystem paths are removed too. Public external URLs are protected from the bare-path matcher (including legitimate `/home/` paths). Historical hidden comments/renderer marker are omitted. All numerical article literals and source FAQs are checked against current input; tables, assumptions, measured results, uncertainty, desk-research limits, safety, legal, tax and medical caveats remain.

No public price, legal, availability, safety, source reachability, financial-model recalculation or benchmark recheck is implied by import. Privacy publication copies retain formula XML and cached results without recalculation. The original private workbooks are never modified.

## Verification

`node --test scripts/import-scenarios.test.mjs` checks the shared contract, all ten domains/53 frozen assignments, only actual locales, real FAQ pairs, public source expansion, local link targets, removal of private locators/review schema/stale notices, line caps and llms coverage. With `SCENARIOS_PACKAGE`, it additionally verifies current input hashes, literal numeric preservation across every article and exact FAQ excerpts.

The final rerun receipt is `docs/scenarios-import-verification.json`: hash inventory from two complete imports against the same manifest. Workbook gate details and any exclusions are in the privacy report; release integration/build/browser checks remain director-owned.
