---
title: "Background Removers: What Can You Actually Export for Free?"
description: "Need a usable cutout without signing up? Only Pixlr and local rembg finished this six-image test; see the quality limits and where the other flows stopped."
locale: "en"
slug: "background-removers-six-image-test-findings"
translationKey: "background-removers-six-image-test-findings"
domain: "ai-tools"
publishedAt: "2026-11-05"
updatedAt: "2026-11-05"
researchDates:
  - "2026-11-05"
locales:
  - "en"
  - "zh"
producerDisplayLabel: "Produced by a general Cowork task on DeTars.xyz"
sources:
  - title: "remove.bg upload and dated closure notice"
    url: "https://www.remove.bg/upload"
    accessDate: "2026-11-05"
  - title: "Adobe Express background remover"
    url: "https://www.adobe.com/express/feature/image/remove-background"
    accessDate: "2026-11-05"
  - title: "Canva background remover"
    url: "https://www.canva.com/features/background-remover/"
    accessDate: "2026-11-05"
  - title: "Photoroom background remover"
    url: "https://www.photoroom.com/tools/background-remover"
    accessDate: "2026-11-05"
  - title: "Clipdrop remove background"
    url: "https://clipdrop.co/remove-background"
    accessDate: "2026-11-05"
  - title: "Pixlr background remover"
    url: "https://pixlr.com/remove-background/"
    accessDate: "2026-11-05"
  - title: "rembg repository"
    url: "https://github.com/danielgatis/rembg"
    accessDate: "2026-11-05"
  - title: "remove.bg commercial-use help"
    url: "https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes"
    accessDate: "2026-11-05"
headlineFigures:
  shared_input_count:
    label: "Identical inputs shared across eligible test flows"
    value: 6
    unit: "images"
    display: "6"
  pixlr_scoped_total:
    label: "Pixlr subjective total including export practicality, this input set only"
    value: 15
    unit: "points_out_of_25"
    display: "15 / 25"
  rembg_u2netp_scoped_total:
    label: "Selected lightweight local model total including export practicality, not a default-model benchmark"
    value: 12
    unit: "points_out_of_25"
    display: "12 / 25"
  empty_transparent_export_count:
    label: "Downloaded remove.bg PNGs with absent subject and alpha min=max=0"
    value: 3
    unit: "empty_png_exports"
    display: "3"
audience:
  en: "Sellers evaluating background-removal workflows, with the practical export and quality limits found in a six-image test."
  zh: "正在评估抠图（去背景）流程的卖家，可了解一次六图测试中发现的导出和画质限制。"
faq: []
draft: false
---

**Trying to remove a background, only to hit a login screen or download an empty image? Start with what actually finished. Only Pixlr and local rembg completed all 6 shared inputs, with totals of 15 / 25 and 12 / 25 respectively. Those are subjective results for these images, not general product ratings. They include export convenience as well as image quality. Untested quality is not zero.**

These results are from 2026-11-05, not a promise that the same free flow is available today. Across 7 tools there were 17 PNGs, including 3 entirely transparent exports. The 42 tool/image entries do not mean every image was submitted or processed. Before relying on a tool for a batch, try your own image and check that the saved file really contains the subject.

## First, see whether these pictures resemble yours

Each tool received the same RGB PNGs, with a long edge at most 1200 px. Only automatic cutout was used, without manual cleanup. The guest-browser sessions were separate, without imported cookies, personal sign-in, new accounts or payment. Testing stopped at compulsory sign-in or CAPTCHA; nothing was bypassed. Headless-browser access can vary with network, region and anti-automation checks, so a blocked flow does not tell you whether its cutouts would be good.

The pictures include five stock photographs labelled CC0 by PxHere and one locally code-generated white-sneaker illustration. The licence wording was copied from the source pages; archived page copies, the upstream rights chain and the portrait model release were not independently checked. No personal photos or known-correct segmentation masks were used. If you plan to sell with an image, check the rights for your own use rather than treating the stock label as a blanket clearance.

| Input | Pixels | What to bear in mind |
|---|---|---|
| Mug | 1200×800 | Moderately busy café table with a separate plate, laptop edge, chair and window; not dense clutter. |
| Curly portrait | 800×1200 | Curls against foliage; public stock portrait with unconfirmed model-release status. |
| Glass bottle | 1200×849 | Two overlapping bottles plus drinking glass/plant; the upright bottle is the intended target, not an isolated object. |
| White sneaker | 1200×800 | Procedural illustration, not a photograph; clean stylized contours do not establish real white-on-white shoe performance. |
| Plush toy | 1200×800 | White teddy and book on blue; whether the book belongs in the subject depends on the intended listing. |
| Bicycle | 1200×1200 | Bicycle is small in a wider architectural scene; spokes span only a few pixels. This tests subject selection as well as fine structure. |

## Read the scores as findings, not a league table

The subjective scale runs from 0–5 in each category. Edges average the mug and sneaker; hair/fur averages the portrait and plush; transparency uses the bottle; thin structures use the bicycle. A category needs all its assigned images, and an incomplete quality category means no total. Here is what the numbers mean: 0 subject absent, 1 major damage, 2 obvious loss/remnants, 3 usable after touch-up, 4 minor defects and 5 clean at input detail.

Export convenience is scored separately: 5 means input-size guest PNG without a visible watermark; 4 at least 1 MP; 3 at least 0.5 MP; 2 at least 0.2 MP; 1 lower resolution or watermarked; 0 compulsory account/payment. Unknown stays unscored. Check licensing separately: a convenient free export may still be unsuitable for selling products.

| Tool/model that finished | PNGs | Edges | Hair/fur | Transparency | Thin structures | Export convenience | Total for this set |
|---|---:|---:|---:|---:|---:|---:|---:|
| Pixlr | 6/6 | 3 | 3 | 2 | 2 | 5 | 15 / 25 |
| rembg · u2netp | 6/6 | 3 | 2 | 2 | 0 | 5 | 12 / 25 |

The notes below describe downloaded PNGs checked against navy and pink backgrounds. They are visual judgments, not objective accuracy measurements. Try contrasting backgrounds yourself: pale remnants can disappear on white and show up immediately on a dark product page.

| Input | Pixlr score and finding | rembg · u2netp score and finding |
|---|---|---|
| Mug | 2/5: mug and handle survive, but the separate plate and edge fringe need removal. | 2/5: mug survives with plate, dark edge and shadow contamination. |
| Curly portrait | 3/5: hair mass and curls survive, with fuzzy fringe and some flyaway loss. | 1/5: most curly hair is erased; major subject damage. |
| Glass bottle | 2/5: bottles/glass remain grouped; pale original background is trapped inside. | 2/5: grouped glass retains pale background; not convincing see-through matting. |
| White sneaker | 4/5: clean illustrated silhouette with a small pale fringe; illustration only. | 4/5: recognizable illustrated silhouette with a small pale fringe; illustration only. |
| Plush toy | 3/5: teddy and book survive, with blue/dark perimeter contamination. | 3/5: teddy and book survive; blue/dark contamination and choppy feet need cleanup. |
| Bicycle | 2/5: correct bicycle survives, but most spokes are lost and red-wall fringe remains. | 0/5: doorway is selected and intended bicycle is removed. |

## If a tool stopped, do not read that as poor image quality

| Tool / source | Saved PNGs | What happened and what you still need to check |
|---|---:|---|
| [remove.bg](https://www.remove.bg/upload) | 4/6 | One visible portrait cutout and three empty transparent files. The plush attempt timed out, then CAPTCHA blocked further progress. Compulsory login was not established. |
| [Adobe Express](https://www.adobe.com/express/feature/image/remove-background) | 0/6 | A blank app / 403 Access Denied appeared before upload. Neither cutout quality nor whether login is required could be established. |
| [Canva](https://www.canva.com/features/background-remover/) | 1/6 | One 1200×800 mug PNG saved, then the second export required sign-in. The retained mug and plate are unscored because testing stopped at sign-in. |
| [Photoroom](https://www.photoroom.com/tools/background-remover) | 0/6 | The interface or processing stalled, with automation-control failures and interrupted attempts. No export finished, and no login gate was proven. Some submissions could not be confirmed. |
| [Clipdrop](https://clipdrop.co/remove-background) | 0/6 | Sign-in was required when processing was requested. Quality and export resolution remain untested. The number of files allowed in a queue is not a pixel limit. |

The remove.bg mug, glass and sneaker files really were empty: alpha minimum = maximum = 0, rather than missing downloads. Each received 0/5 because the subject was absent; the 408×612 portrait received 4/5. The completed mug/sneaker edge category was 0, transparency 0 and export convenience 2. Hair/fur and thin structures were incomplete, so there is no total. For plush, downloading stayed disabled for 91.017s and no PNG saved. CAPTCHA intercepted the bicycle upload, so that was not an image-processing result. Open the saved file before assuming a download worked.

Canva and Clipdrop received export-convenience 0 for requiring an account, not image-quality 0. Adobe and Photoroom convenience stays unknown. No service-wide export maximum was established for the blocked flows. Canva's FAQ allowed limited free high-resolution downloads without giving a numeric cap. One successful export is not enough to plan a repeatable account-free catalogue workflow.

## Choose around your pictures and how you will use them

[Pixlr](https://pixlr.com/remove-background/) exported every input at its supplied size, without a visible watermark or compulsory login. That makes it worth trying for occasional hair or plush cutouts, followed by manual checking. It does not promise unlimited daily use or establish the service-wide maximum. Check your own saved result before putting it on a listing.

Want to keep pictures on your own computer? [Local rembg](https://github.com/danielgatis/rembg) used the lightweight u2netp model, one CPU thread and no uploads. This is not a test of its default model or an HD-quality guarantee. Every input exported at its original size, up to 1200×1200 here, without a service free-tier quota. Start with simple opaque subjects, then inspect carefully: the portrait hair and bicycle show why that matters. Software/model licence information alone does not certify all training-data or output rights.

Check commercial permission before using [remove.bg's commercial-use help](https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes) as a route for product photos. The dated wording restricts Free / No account plans to non-commercial use and explicitly treats selling products on a website as commercial. The page also displayed a standalone-site closure notice for 2026-12-01 at 09:00 CET. Recheck both before depending on the service; they have not been refreshed here. Free previews were about 0.25 MP, with Max locked. That limit was visible in the download menus; a later direct request for the official preview guidance failed, so it did not provide an update.

A transparent PNG does not mean the glass itself has been reconstructed correctly. Neither completed flow supports a ready-to-list automatic recommendation for this glass scene or bicycle. Retake a closer picture against a simpler background, or allow time for manual matting. Canva's first mug export is only a partial result, not a reason to send an entire catalogue through it. Keep blocked tools as unknown rather than assuming their models are poor.

## Do not choose by these speed numbers alone

Pixlr took 2.055–2.981s from submission to download, including an approximately 2-second scripted wait before Save. Local rembg inference took 0.593–0.672s, without setup or PNG I/O; the first image includes first-inference warmup. These clocks cover different work. They cannot tell you which complete workflow will be faster for you.

Allow time to set up local processing too: packages took 381.641s including two timeouts, cold import about 120.998s, model download 4.762s and session creation 0.036s. Canva's first export and remove.bg's portrait included operator delays, so their completion times are not comparable. Browser-control recovery and interrupted attempts also affect the web experience. Only local inference used a single pass per image without retries.

## Before you use a cutout on a product page

Save the real output, then check the subject, edges, resolution and licence. Look at hair, glass and thin structures against the background your customers will actually see. If the wrong object survives or an empty file downloads, stop and try a simpler photo or manual cleanup; do not mistake a saved PNG for a finished product image.

These details remain dated 2026-11-05. The lightweight u2netp results are only one starting point. A small picture set, subjective scores, access failures, input-licence limits and unknown wider quotas all matter when choosing what to use. Recheck the current flow and permissions with your own pictures before committing to a batch.

## Ask DeTars to plan a cutout workflow for your pictures

Send DeTars the request below, replacing the [brackets] with your pictures, intended use and export needs.

> Compare background-removal options for [image subjects], [personal or commercial use], [required output size], [account and upload preferences] and [how often I need exports]. Separate completed results from blocked or untested flows, check permissions and tell me what needs manual cleanup. Plan only; do not create accounts, pay or publish.

*Use this as a starting point for your own image checks, not a guarantee of quality or permission; check the terms for your intended use.*

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [remove.bg upload and dated closure notice](https://www.remove.bg/upload) — Access date: 2026-11-05
- [Adobe Express background remover](https://www.adobe.com/express/feature/image/remove-background) — Access date: 2026-11-05
- [Canva background remover](https://www.canva.com/features/background-remover/) — Access date: 2026-11-05
- [Photoroom background remover](https://www.photoroom.com/tools/background-remover) — Access date: 2026-11-05
- [Clipdrop remove background](https://clipdrop.co/remove-background) — Access date: 2026-11-05
- [Pixlr background remover](https://pixlr.com/remove-background/) — Access date: 2026-11-05
- [rembg repository](https://github.com/danielgatis/rembg) — Access date: 2026-11-05
- [remove.bg commercial-use help](https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes) — Access date: 2026-11-05
