---
title: "Local OCR: What Our Six-Document Test Actually Helps You Choose"
description: "Choose a local OCR workflow for searchable paperwork, Chinese text or invoices, with every measured result and a clear privacy boundary."
locale: "en"
slug: "offline-ocr-six-document-test"
translationKey: "offline-ocr-six-document-test"
domain: "ai-tools"
publishedAt: "2026-11-06"
updatedAt: "2026-11-06"
researchDates:
  - "2026-11-06"
locales:
  - "en"
  - "zh"
producerDisplayLabel: "Produced by a general Cowork task on DeTars.xyz"
sources:
  - title: "Tesseract official installation guidance"
    url: "https://tesseract-ocr.github.io/tessdoc/Installation.html"
    accessDate: "2026-11-06"
  - title: "tessdata_fast model documentation"
    url: "https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md"
    accessDate: "2026-11-06"
  - title: "Apple Vision text-recognition tutorial"
    url: "https://developer.apple.com/documentation/vision/recognizing-text-in-images"
    accessDate: "2026-11-06"
  - title: "RapidOCR legacy package release 1.4.4"
    url: "https://pypi.org/project/rapidocr-onnxruntime/1.4.4/"
    accessDate: "2026-11-06"
  - title: "RapidOCR tagged local-model configuration"
    url: "https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml"
    accessDate: "2026-11-06"
  - title: "EasyOCR publisher source and usage"
    url: "https://github.com/JaidedAI/EasyOCR"
    accessDate: "2026-11-06"
  - title: "EasyOCR official offline model hub"
    url: "https://www.jaided.ai/easyocr/modelhub/"
    accessDate: "2026-11-06"
  - title: "Tesseract engine licence"
    url: "https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Apple software licence agreements"
    url: "https://www.apple.com/legal/sla/"
    accessDate: "2026-11-06"
  - title: "RapidOCR tagged code licence"
    url: "https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE"
    accessDate: "2026-11-06"
  - title: "Upstream PaddleOCR licence"
    url: "https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "EasyOCR licence"
    url: "https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "Upstream CRAFT licence"
    url: "https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "ReportLab adapter dependency source and licence"
    url: "https://github.com/MrBitBucket/reportlab-mirror"
    accessDate: "2026-11-06"
  - title: "PyMuPDF documentation and licensing"
    url: "https://pymupdf.readthedocs.io/en/latest/about.html"
    accessDate: "2026-11-06"
headlineFigures:
  tesseract_mean_cer:
    label: "Unweighted six-page primary CER for the tested Tesseract configuration; not an overall quality rating"
    value: 3.61
    unit: "percent_mean_character_error_rate"
    display: "3.61%"
  vision_mean_cer:
    label: "Unweighted six-page primary CER for the tested Apple Vision wrapper"
    value: 6.48
    unit: "percent_mean_character_error_rate"
    display: "6.48%"
  rapidocr_invoice_cer:
    label: "Primary CER on the synthetic invoice; omitted quantity and layout limits still apply"
    value: 0.31
    unit: "percent_invoice_character_error_rate"
    display: "0.31%"
  easyocr_batch_seconds:
    label: "Single-run six-page OCR plus adapter PDF time, excluding shared model initialization"
    value: 82.47
    unit: "seconds_excluding_shared_initialization"
    display: "82.47"
audience:
  en: "Small-office users choosing local searchable-PDF OCR, bilingual recognition or invoice extraction, with Mac-specific test limits and no natural-handwriting validation."
  zh: "为小型办公室选择本地可搜索PDF文字识别、双语识别或发票信息提取的用户；测试仅限Mac环境，也没有验证自然手写体。"
faq: []
draft: false
---

**Want private files, dependable amounts and less time lost to setup? For straightforward searchable archives, I would start with Tesseract. On an already prepared Mac, Apple Vision deserves a look for English and Simplified Chinese. For invoice text, the tested RapidOCR configuration kept rows closer to the intended order—but still missed a quantity. Keep the scan and check the details whichever route you choose.**

**Important privacy limit:** this is our own hands-on test, but not a strict no-upload demonstration. During preparation, the assistant viewed a contact sheet of the generated fixtures attached to the conversation. All 24 completed OCR jobs themselves ran locally with network access denied to their process trees. No private paperwork or online OCR endpoint was used. That does not establish that no document imagery left the machine, or that the whole computer, backups and sync services were isolated. For confidential work, skip assistant image review, use a non-synced folder and disconnect networking across the whole workflow.

The receipt is a generated phone-photo simulation, not a real camera capture. The handwriting is a generated pen-stroke note, not natural human writing. All results below apply only to these six synthetic documents, these configurations and this machine; they do not settle how your real paperwork will behave.

## Choose for the job you need done

| Your priority | My starting point | What to check before relying on it |
|---|---|---|
| Letters and simple receipts in a searchable archive | Tesseract, if a command line is manageable | Native searchable-PDF export is useful; the synthetic margin note was missed |
| English and Simplified Chinese on an existing Mac | Apple Vision with a maintained local wrapper | Strong bilingual result here; PDF export came from our adapter, not the recognition API |
| Invoice text and line items | Pilot the pinned RapidOCR baseline, then verify every row | Best invoice sequence here, not an editable table or arithmetic check; do not freeze a new production system on legacy dependencies just for this result |
| Existing Python integration | EasyOCR may fit an existing stack | Most setup effort and CPU time here; not my first choice for this particular archive |
| Natural handwriting | Pilot real samples locally with human review | None earned a recommendation from this artificial note |

**The surprising part:** a clean two-column page produced the largest errors because text from separate columns was woven together. Search can work even when copied paragraphs are unusable. Likewise, an invoice amount can look correct but belong to the wrong row. Test search, copy/paste order and row associations separately.

## What the test did—and did not—measure

The test and source access date was November 6, 2026 in Asia/Singapore; execution timestamps also fall on November 5, 2026 UTC. The machine was an Apple M2 with 16 GiB RAM, macOS 26.5.1 build 25F80, Python 3.12.12 and Swift 6.3.1. These are tested versions, not a claim about the latest releases. No new OCR run or external source refresh was performed for this draft.

Each engine received the same PNGs, not an existing PDF text layer: five pages at 1700 × 2200 px and a receipt at 1100 × 1600 px, with image-only PDF copies at 200 dpi. Ground truth was written when the fictional fixtures were created, not corrected to match OCR. The invoice has a 7-row, 4-column ruled table. The receipt has perspective distortion, 2° rotation, a lighting gradient, seeded noise and 0.65 px blur. The blue note was drawn from pen-stroke paths; even successful recognition says little about real handwriting.

Tesseract, Vision, RapidOCR and EasyOCR ran sequentially in that order, with a single completed pass in fixed document order. There was no best-of selection, per-page tuning, extra deskew or manual text correction. The Python engines used CPU with two compute threads; EasyOCR used batch 1 and workers=0. Vision's internal hardware use was managed by Apple. Provisioning and harness failures were not counted as scored cases.

The OCR process policy was `sandbox-exec` with `(version 1)(allow default)(deny network*)`; models were staged first and EasyOCR downloading was disabled. A separate TCP connection probe returned EPERM. This is process-level evidence, not a whole-machine traffic audit.

### Read the scores without letting an average decide for you

Primary character error rate (CER) is `100 × edit distance / reference characters`, after Unicode NFC normalization and removal of all Unicode whitespace. Case, digits and punctuation remain; a Chinese character counts as a code point, not its UTF-8 byte length. Lower is better. **0% does not promise correct spacing.** WS CER instead collapses whitespace runs to a single space, so merged words and inserted spaces matter.

Returned order is preserved: the reference reads the left column before the right, the invoice row by row, and the stamped page body before stamp before note. A high CER can therefore reflect wrong order rather than unreadable characters. The mean below is an unweighted page mean; it gives short pages as much weight as long ones and is strongly affected by layout.

| Workflow | Mean CER | Six pages plus PDF, seconds | Extra shared model initialization, seconds | Searchable PDFs |
|---|---:|---:|---:|---:|
| Tesseract | 3.61% | 2.70 | 0.00 | 6 / 6 |
| Apple Vision | 6.48% | 4.52 | 0.00 | 6 / 6 |
| RapidOCR, legacy | 12.74% | 7.35 | 0.38 | 6 / 6 |
| EasyOCR | 14.95% | 82.47 | 5.09 | 6 / 6 |

Add the shared Python initialization once per batch, not once per page. Near-zero separate initialization for Tesseract and Vision does not mean free startup: their process startup is already in the page times. OCR time includes loading and inference; Tesseract also includes its native text, box and PDF exports. Other PDF adapters are timed separately. Installation, model downloads, Swift compilation and common Python/PDF-library setup are excluded. First-page cold-cache effects and shared-machine activity can affect the single-run times; peak RAM was not measured. Model file size below is not RAM use.

## Every document and every tool

Seconds and percentages below are rounded to two decimals from the recorded CSV. PDF “included” means native export is already in OCR time; “adapter” means our local ReportLab invisible-text overlay. “Yes” means an extracted text layer and at least one declared search hit, not every word correct. All 24 outputs passed that limited searchability test; the retained validation also reports source-image pixel agreement at 200 dpi. None reconstructs an editable table or guarantees highlight geometry or compatibility with every reader/indexer.

| Document / tool | CER | WS CER | OCR seconds | PDF seconds | Searchable / route | What mattered |
|---|---:|---:|---:|---:|---|---|
| Letter · Tesseract | 0.00% | 0.00% | 0.50 | included | Yes / native | Reference characters correct after whitespace removal; paragraphs retained |
| Letter · Apple Vision | 0.00% | 0.00% | 1.53 | 0.09 | Yes / adapter | Reference characters and line order correct |
| Letter · RapidOCR | 0.00% | 0.18% | 1.25 | 0.06 | Yes / adapter | Some spaces merged despite correct reference characters |
| Letter · EasyOCR | 1.32% | 1.29% | 17.05 | 0.06 | Yes / adapter | Chinese full stops, capitalization changes and a fragmented line; bilingual model used |
| Simulated receipt · Tesseract | 0.00% | 0.00% | 0.26 | included | Yes / native | Totals and identifier retained despite mild simulated skew |
| Simulated receipt · Apple Vision | 1.44% | 1.19% | 0.33 | 0.68 | Yes / adapter | Amounts preserved; ASCII x becomes × |
| Simulated receipt · RapidOCR | 0.00% | 0.00% | 0.57 | 0.69 | Yes / adapter | Reference characters correct after whitespace removal; amounts searchable |
| Simulated receipt · EasyOCR | 5.26% | 5.56% | 7.01 | 0.75 | Yes / adapter | x becomes X; thank-you text fragmented/reordered; total searchable |
| Columns · Tesseract | 0.00% | 0.00% | 0.42 | included | Yes / native | Complete left column, then right column |
| Columns · Apple Vision | 0.00% | 0.00% | 0.41 | 0.07 | Yes / adapter | Complete left column, then right column |
| Columns · RapidOCR | 69.88% | 66.62% | 1.38 | 0.06 | Yes / adapter | Columns interleaved; primarily an order problem |
| Columns · EasyOCR | 70.77% | 67.22% | 14.45 | 0.08 | Yes / adapter | Columns interleaved, plus punctuation/case errors; no column reconstruction |
| Invoice · Tesseract | 17.79% | 16.67% | 0.34 | included | Yes / native | Rows correct, but payment reference moved ahead of subtotal/tax/total |
| Invoice · Apple Vision | 37.42% | 36.41% | 0.38 | 0.09 | Yes / adapter | Cells grouped by column rather than row; not an editable table |
| Invoice · RapidOCR | 0.31% | 1.28% | 1.13 | 0.06 | Yes / adapter | Near row order, but Delivery quantity 1 omitted and English spaces merged |
| Invoice · EasyOCR | 2.45% | 3.08% | 14.02 | 0.08 | Yes / adapter | Qty header moved; Desk labels quantity 4 and Delivery quantity 1 omitted |
| Stamp/note · Tesseract | 2.88% | 3.24% | 0.26 | included | Yes / native | Stamp read; entire Call me note omitted; exact phrase search failed |
| Stamp/note · Apple Vision | 0.00% | 0.00% | 0.36 | 0.05 | Yes / adapter | Stamp and synthetic note read in reference order |
| Stamp/note · RapidOCR | 5.77% | 6.88% | 0.78 | 0.05 | Yes / adapter | Call me read but inserted among body lines |
| Stamp/note · EasyOCR | 2.40% | 2.02% | 13.11 | 0.06 | Yes / adapter | RECORD became REGORD, DO became 00; Call / Me split; exact phrase search failed |
| Bilingual · Tesseract | 1.00% | 17.20% | 0.93 | included | Yes / native | Full-width colons became ASCII; added spaces between Chinese characters |
| Bilingual · Apple Vision | 0.00% | 0.65% | 0.46 | 0.07 | Yes / adapter | Reference characters correct without whitespace; both languages searchable |
| Bilingual · RapidOCR | 0.50% | 5.16% | 1.25 | 0.06 | Yes / adapter | Room became Ro0m; slash changed width; English spaces merged |
| Bilingual · EasyOCR | 7.50% | 8.39% | 15.72 | 0.08 | Yes / adapter | Mixed-line fragments/punctuation lost; filing. moved; 已 became 己 |

Three declared searches per document were attempted with PyMuPDF. The exact phrase `Call me` failed in Tesseract and EasyOCR stamped-page PDFs; other declared terms were found. The Chinese term `隐私` was found in all four bilingual PDFs. That is a useful archive check, not proof of complete indexing.

## What you would need to set up

“Free” means no separate OCR service fee here. It does not mean free Mac hardware, a one-click installer or unrestricted redistribution of every dependency. Setup difficulty is our judgment from this session, not a universal installation time.

| Workflow and tested version | Models and settings | Setup and licence limits |
|---|---|---|
| Tesseract 5.5.3 | tessdata_fast eng 4.11 MB + chi_sim 2.47 MB; OEM 1, PSM 3; English except eng+chi_sim on bilingual page | Moderate: engine already installed, language packs added; isolated tessdata needed pdf.ttf and explicit export flags. Engine/models Apache-2.0. Direct CLI tested, not OCRmyPDF |
| Apple Vision, macOS 26.5.1 build 25F80 | VNRecognizeTextRequest revision 3, accurate path, language correction requested; en-US, or zh-Hans before en-US | Low on the prepared Mac, moderate on a fresh Mac needing compiler/SDK and Swift 6.3.1 wrapper. Proprietary bundled framework, not open source. No separate model download; internal model size unknown. Live Text GUI not tested |
| rapidocr-onnxruntime 1.4.4 | PP-OCRv4 detector/recognizer + mobile v2 angle classifier; total 15.60 MB; 0/180 classification, text score 0.5, detector limit 736, page max side 2000 | Moderate Python/ONNX/OpenCV setup; models bundled in pinned wheel; PDF adapter needed. Apache-2.0 code and upstream/converted model artifacts. This legacy baseline is not interchangeable with the newer rapidocr package |
| EasyOCR 1.7.2 | CRAFT 83.15 MB + zh_sim_g2 21.95 MB = 105.10 MB; CPU, bilingual model on all pages, paragraph=False | High effort here: Python/PyTorch, interrupted model download and TLS recovery; PDF adapter needed. EasyOCR Apache-2.0, upstream CRAFT MIT; separate checkpoint-specific licence not independently established. English-only configuration not tested |

Those MB values are decimal model-file sizes, not resident memory. The CSV's box count is not a fair line-count comparison: Tesseract counts word boxes while the others mostly count line boxes.

For the dated upstream guidance behind these choices, see [Tesseract installation](https://tesseract-ocr.github.io/tessdoc/Installation.html), [fast-model documentation](https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md), [Apple's text-recognition tutorial](https://developer.apple.com/documentation/vision/recognizing-text-in-images), [RapidOCR's exact package release](https://pypi.org/project/rapidocr-onnxruntime/1.4.4/) and [tagged model configuration](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml), plus [EasyOCR usage](https://github.com/JaidedAI/EasyOCR) and its [offline model hub](https://www.jaided.ai/easyocr/modelhub/). For reuse decisions, check [Tesseract's licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE), [Apple's software agreements](https://www.apple.com/legal/sla/), [RapidOCR's tagged licence](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE), [PaddleOCR's licence](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE), [EasyOCR's licence](https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE) and [CRAFT's licence](https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE). Our adapter used [ReportLab](https://github.com/MrBitBucket/reportlab-mirror); PDF checks used [PyMuPDF](https://pymupdf.readthedocs.io/en/latest/about.html), whose licensing also matters if you redistribute a workflow. These are the retained source links, not a fresh compatibility or licence audit.

## Start with a small, non-confidential batch

Install and cache the required languages before private documents are present. Keep inputs and outputs in a non-synced local folder, keep the original scans, and disconnect networking if your privacy requirement covers the entire computer. Process a small representative batch before committing an archive.

For each output, confirm a name, amount and phrase. Copy a paragraph from a column page and a complete invoice row into a text editor. Check dates, identifiers, totals, quantities and the links between rows and amounts—not just whether search finds a word. Keep human review for important paperwork. A fresh machine needs provisioning; this test is not a portable application installer, and the Vision wrapper and sandbox policy are Mac-specific.

## Ask DeTars to plan a local OCR pilot

Send the request below, filling in the [brackets] with your own details.

> Help me choose a local OCR pilot for [computer and operating system], [languages], [document types and volume] and [privacy boundary]. Compare setup, searchable-PDF export, reading order and table risks. Use non-confidential samples and require checks for names, amounts and missed notes. Plan only; do not upload documents, install software or rerun OCR without my approval.

*Use this as a friendly starting point for your own pilot, not a privacy certification or a promise of accurate records; keep the scans and check anything consequential.*

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [Tesseract official installation guidance](https://tesseract-ocr.github.io/tessdoc/Installation.html) — Access date: 2026-11-06
- [tessdata_fast model documentation](https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md) — Access date: 2026-11-06
- [Apple Vision text-recognition tutorial](https://developer.apple.com/documentation/vision/recognizing-text-in-images) — Access date: 2026-11-06
- [RapidOCR legacy package release 1.4.4](https://pypi.org/project/rapidocr-onnxruntime/1.4.4/) — Access date: 2026-11-06
- [RapidOCR tagged local-model configuration](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml) — Access date: 2026-11-06
- [EasyOCR publisher source and usage](https://github.com/JaidedAI/EasyOCR) — Access date: 2026-11-06
- [EasyOCR official offline model hub](https://www.jaided.ai/easyocr/modelhub/) — Access date: 2026-11-06
- [Tesseract engine licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE) — Access date: 2026-11-06
- [Apple software licence agreements](https://www.apple.com/legal/sla/) — Access date: 2026-11-06
- [RapidOCR tagged code licence](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE) — Access date: 2026-11-06
- [Upstream PaddleOCR licence](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE) — Access date: 2026-11-06
- [EasyOCR licence](https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE) — Access date: 2026-11-06
- [Upstream CRAFT licence](https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE) — Access date: 2026-11-06
- [ReportLab adapter dependency source and licence](https://github.com/MrBitBucket/reportlab-mirror) — Access date: 2026-11-06
- [PyMuPDF documentation and licensing](https://pymupdf.readthedocs.io/en/latest/about.html) — Access date: 2026-11-06
