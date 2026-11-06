# Scenario workbook publication gate

## Result

The current manifest contains **90 guides** and **91 provenance run folders**. All semantic records were read. Recursive provenance discovery plus localized Markdown/HTML and semantic-record local links (including bare paths) found **61 XLSX candidates**. All 61 packages were inspected; **38 workbooks across 37 guides were copied**, **23 were excluded**, and there were **zero inspection failures**.

The helper owns only `scripts/scenarios/workbooks.py`, this document, `docs/scenarios-workbook-privacy.json`, and approved XLSX downloads under `public/scenarios/<slug>/`. No source run files, HTML, evidence attachments, or arbitrary attachments were copied or edited. No commit, push, remote operation or main checkout was performed.

## Run and importer interface

```sh
python3 scripts/scenarios/workbooks.py --package /Volumes/T7/eval/内容/scenario-runs-20261104/stage2-pages/i18n --output /Volumes/T7/eval/内容/scenario-runs-20261104/site-worktree
python3 scripts/scenarios/workbooks.py --self-test
```

Only Python's standard library is required. The helper is offline and never invokes Excel, LibreOffice, openpyxl, a recalculation engine, a browser or network access. The report has no runtime timestamp. JSON uses one compact object per guide (99 lines for the present report).

The importer consumes `report.guides[slug].workbooks`. This list contains **only approved rows**. Decisions are `approved` and `approved_sanitized` (both start with `approved`). Each row has `source` relative to its provenance run root (all current approved sources are basenames), `runFolder`, `sourceSha256`, `publicUrl`, `outputSha256`, `decision`, `checks`, `changes`, `flags`, `ownership`, and `inspection`. `publicUrl` is `/scenarios/<slug>/<basename>.xlsx`.

Excluded candidates are separate in `guides[slug].excludedWorkbooks` with null public URL and output hash. Missing provenance/documents or inspection errors return nonzero; expected privacy/ownership exclusions remain recorded and return zero. Reruns delete only stale workbook paths owned by an earlier report with the same policy, not unrelated assets.

## Ownership is a separate gate

Passing a privacy scan does **not** establish ownership. `OWNERSHIP` pins **41 reviewed generated deliverable source hashes** to concrete generator files, generator hashes and generation-code line evidence. Each approved row repeats its verified evidence. A new XLSX, an arbitrary third-party workbook at a run root, an evidence copy, or changed bytes under an existing approved filename cannot silently inherit approval. It needs explicit generator/source-artifact review and an inventory update. A changed artifact still undergoes content screening; inventory membership alone never permits publication.

For 33 deliverables, generator code is in the corresponding provenance run folder. For eight later deliverables, the copied run folder contains only delivered artifacts: the original generators were inspected under `/Volumes/T7/DeTars-Home/`. `generatorRef` values prefixed `original-task/` identify that task-title directory and script. The inventory stores reviewed artifact identity, not a claim that the generator was rerun. Generation code was read; no generation or recalculation was executed.

## Inspection and preservation

Inspected **1,665 ZIP parts**, all XML/rels/VML: **525 worksheet parts, 54 shared-string parts, 157 metadata parts, 382 relationship parts and 83 comment parts**; the remaining 464 are other XML/VML. The audit visited **279,766 text nodes and 1,121,920 attributes**, including hidden-sheet content, comments/authors, rich-text concatenations, XML comments/PIs outside the root, namespace declarations, metadata values, relationship targets, formulas and caches. Every inspected part has a payload SHA-256 and counts; metadata fields and comment authors have hashed inspection evidence; relationships have type/mode counts. Potentially private matches are represented by hashes and locators, not echoed secrets.

Screening covers credential formats and assignments, sensitive URL parameters/userinfo, private-network URLs, decoded private paths (also URL components), emails, phones, identity labels/identifiers and populated person/contact fields. External workbook links, active formulas, macros, connections, embedded/custom/opaque parts and nonpublic external relationships block publication. Public HTTP(S) source hyperlinks remain; no linked files are downloaded or bundled. Unknown binary/image parts are excluded rather than incorrectly declared visually inspected. This is conservative pattern-and-structure screening of reviewed generated examples, not a universal personal-name recognizer.

Financial examples explicitly marked fictional, invented or illustrative are not rejected merely for containing income, loan balances, tax inputs, family contributions or client-like demo transactions. The workbook text supplies hashed illustrative-evidence anchors. This does not waive credentials or contact/identity findings.

Sanitization is bounded: normalize nonempty creator/lastModifiedBy fields to `DeTars`; remove local-path metadata leaf values; disable safe, run-contained draft-package hyperlink relationships and their sheet hyperlink elements while retaining cell values. Other content is not rewritten. In this input, **17 published workbooks were sanitized**: **22 creator/lastModifiedBy fields normalized** and **51 draft hyperlinks disabled** in the slide-tools workbook. No approved workbook needed local-path metadata removal.

ZIP member order, names and member metadata are retained. Untouched part payloads stay byte-identical. Exact worksheet formula and cached-value XML signatures are compared before and after. Output packages are reopened and payloads compared. Of the 38 downloads, **21 entire workbook files are byte-identical to source**; only metadata and the documented four slide-workbook sheet/relationship parts change in the other 17. **30,998 formulas across 971 approved package parts are preserved**. No formula results were recomputed.

## Exclusions and flags

- **19 verification/mutation/recalculation copies**: not publication deliverables; none has reviewed generated-deliverable identity.
- **1 third-party USDA field-description workbook** under the meal-plan sources folder: not ours; also contains private path metadata. Its XML was inspected, but it was not published.
- **3 owned primary deliverables with private evidence paths inside cell/shared-string content**: `free-ai-tools-student-research-hands-on-review/raw-results.xlsx`, `lisbon-cost-of-living-remote-worker-d8/Lisbon-budget-Apr2027.xlsx`, and `digital-nomad-visas-portugal-spain-thailand-bali-mexico/digital-nomad-visas-2027.xlsx`. These were excluded, not broadly rewritten or reduced to values.

There are **zero unresolved blocking findings in published workbooks**, zero active/macro/embedded payloads in the approved set, and no additional public XLSX files outside the report's approved set. The 23 exclusions carry 55 private-path finding records, 20 unverified-ownership records and 20 nonpublication-copy records; these counts overlap and include joined-text inspection of the same underlying content. Illustrative financial records remain eligible.

## Verification receipts

- `--self-test`: **44 in-memory regressions passed**, including credential/contact/identity detection, URL components, split rich text, metadata and draft-link sanitization, XML prolog/namespace inspection, opaque/macro rejection, formula/cache retention, ZIP determinism, and rejection of both new unowned names and changed bytes at known names. Tests write no fixtures.
- Full CLI audit: exit **0**; current manifest and all 90 semantic-record hashes match the report; all 61 candidates inspected.
- Reran the full CLI and compared report bytes plus the complete 38-file asset hash map: **identical**.
- Independently reopened all 38 source/output ZIPs, checked member lists, exact unchanged payloads, allowed changed parts, source/output SHA-256 values, ownership verification, approved-only URLs and lack of extra public workbooks. Confirmed bare `buy-plan.xlsx` discovery.
- Report SHA-256: `4212c3d43332bd4f87e92b7e264d69dac752eed1fff824731aa35077ffa66ec2`.
- Sorted relative-path/output-hash inventory SHA-256: `89e0d402de51eabbad86ece5719c897f7318f2048d01d88fe5cd995b5e128249` (UTF-8 `json.dumps(map, sort_keys=True)`).
- Helper: **659 lines**; report: **99 lines**. All owned code files remain below 700 lines.

## Approved family ownership evidence

The table below is generated from the verified report. Full source/generator hashes and exact generation-code snippets are retained in each row's `ownership` object and the helper's reviewed inventory.

| Run-relative deliverable | Reviewed generator and line |
|---|---|
| `bali-rent-sol/bali-comparison.xlsx` | `bali-rent-sol/build_comparison.py:21` |
| `tokyo-rent-sol/tokyo-rent-comparison.xlsx` | `tokyo-rent-sol/build.py:15` |
| `tokyo-rent-terra/tokyo_rent_costs.xlsx` | `tokyo-rent-terra/build.py:11` |
| `w2-laptop-student/laptop-comparison.xlsx` | `w2-laptop-student/build_comparison.py:83` |
| `w2-tokyo-itinerary/Tokyo-5-days-plan-and-budget.xlsx` | `w2-tokyo-itinerary/build_itinerary.py:169` |
| `w3-bali-entry-au/bali-entry-checklist.xlsx` | `w3-bali-entry-au/build_checklist.py:62` |
| `w3-cashflow-13week/coffee-shop-13-week.xlsx` | `w3-cashflow-13week/build_forecast.py:6` |
| `w3-danang-5days/Da-Nang-plan-and-budget.xlsx` | `w3-danang-5days/build_plan.py:85` |
| `w3-dubai-budget/dubai-budget.xlsx` | `w3-dubai-budget/build_budget.py:7` |
| `w3-household-budget/Household_Budget.xlsx` | `w3-household-budget/build_budget.py:244` |
| `w3-japan-10days/japan-10-days.xlsx` | `w3-japan-10days/build_pack.py:53` |
| `w3-laptop-india/laptop-comparison.xlsx` | `w3-laptop-india/build_deliverables.py:89` |
| `w3-laptop-uk/laptop-comparison.xlsx` | `w3-laptop-uk/build.py:25` |
| `w3-manali-itinerary/manali-plan-budget.xlsx` | `w3-manali-itinerary/build_itinerary.py:156` |
| `w3-meal-plan/Chicago_7_day_meal_plan.xlsx` | `w3-meal-plan/build_deliverables.py:24` |
| `w3-melbourne-living/Melbourne-budget-March-2027.xlsx` | `w3-melbourne-living/build_budget.py:23` |
| `w3-miami-3days/miami-plan-budget.xlsx` | `w3-miami-3days/build_guide.py:161` |
| `w3-nyc-rent/nyc-rental-costs.xlsx` | `w3-nyc-rent/build_deliverables.py:18` |
| `w3-singapore-3days/singapore-family-plan-budget.xlsx` | `w3-singapore-3days/build_deliverables.py:166` |
| `w3-uk-offer/UK_offer_comparison.xlsx` | `w3-uk-offer/build_workbook.py:8` |
| `w4-ai-slide-tools/raw-results.xlsx` | `w4-ai-slide-tools/build-comparison.py:84` |
| `w4-anc-headphones/anc-comparison.xlsx` | `w4-anc-headphones/build_comparison.py:54` |
| `w4-bali-buy/bali_buy_2027.xlsx` | `w4-bali-buy/build_pack.py:7` |
| `w4-dubai-buy/Dubai-investment-model.xlsx` | `w4-dubai-buy/build_deliverables.py:8` |
| `w4-london-living/London-graduate-budget.xlsx` | `w4-london-living/build_budget.py:234` |
| `w4-phone-under-500/phone-comparison.xlsx` | `w4-phone-under-500/build_comparison.py:86` |
| `w4-robot-vacuum/robot-vacuum-comparison.xlsx` | `w4-robot-vacuum/build_report.py:53` |
| `w4-study-abroad-india/Study_abroad_2027_costs_and_plan.xlsx` | `w4-study-abroad-india/build_workbook.py:8` |
| `w4-toronto-living/Toronto_couple_budget.xlsx` | `w4-toronto-living/build_budget.py:9` |
| `w4-wedding-budget/wedding-budget.xlsx` | `w4-wedding-budget/build_budget.py:7` |
| `w5-baby-budget/baby-budget.xlsx` | `original-task/w5 · first-year baby budget (US)/build_budget.py:239` |
| `w5-etsy-pricing/pricing.xlsx` | `original-task/w5 · Etsy handmade shop pricing and fee calculator (US)/build.py:167` |
| `w5-freelancer-tax/freelancer-tracker.xlsx` | `original-task/w5 · freelancer income and quarterly tax set-aside tracker (US)/build_tracker.py:301` |
| `w5-kiosk-budget/kiosk-budget.xlsx` | `original-task/w5 · small coffee kiosk 12-month budget (xlsx)/build_budget.py:239` |
| `w5-manchester-buy/buy-plan.xlsx` | `original-task/w5 · first-time buyer in Manchester- deposit, costs and timeline/build_plan.py:119` |
| `w5-offer-austin-sf/offer-compare.xlsx` | `original-task/w5 · job offer comparison Austin vs San Francisco/build_compare.py:137` |
| `w5-sg-sydney-move/move-plan.xlsx` | `original-task/w5 · relocating a family of three from Singapore to Sydney- cost/build_move.py:52` |
| `w6-uk-jewellery-selling/compare.xlsx` | `original-task/w6 · where to sell handmade jewellery online in the UK- Etsy vs/build_deliverables.py:245` |
