---
title: "Local Photo Upscaling: Keep the Original, Compare the Copy"
description: "Our four-tool, six-image Mac test helps you choose a local enlargement workflow without mistaking sharper texture for recovered truth."
locale: "en"
slug: "local-upscalers-six-image-test"
translationKey: "local-upscalers-six-image-test"
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
  - title: "scikit-image metric documentation"
    url: "https://scikit-image.org/docs/stable/api/skimage.metrics.html"
    accessDate: "2026-11-06"
  - title: "Library of Congress portrait catalog"
    url: "https://www.loc.gov/item/2013649738/"
    accessDate: "2026-11-06"
  - title: "Commons public-domain and exact-file mapping"
    url: "https://commons.wikimedia.org/w/index.php?curid=67999047"
    accessDate: "2026-11-06"
  - title: "used portrait JPEG"
    url: "https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg"
    accessDate: "2026-11-06"
  - title: "coffee image"
    url: "https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png"
    accessDate: "2026-11-06"
  - title: "coffee attribution and CC0 documentation"
    url: "https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py"
    accessDate: "2026-11-06"
  - title: "NPS forest rights and metadata"
    url: "https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266"
    accessDate: "2026-11-06"
  - title: "forest JPEG"
    url: "https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg"
    accessDate: "2026-11-06"
  - title: "Pillow project"
    url: "https://github.com/python-pillow/Pillow"
    accessDate: "2026-11-06"
  - title: "OpenCV licence"
    url: "https://github.com/opencv/opencv/blob/5.x/LICENSE"
    accessDate: "2026-11-06"
  - title: "FSRCNN repository"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow"
    accessDate: "2026-11-06"
  - title: "trained-model README"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md"
    accessDate: "2026-11-06"
  - title: "FSRCNN licence"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "tested weights"
    url: "https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb"
    accessDate: "2026-11-06"
  - title: "release metadata"
    url: "https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0"
    accessDate: "2026-11-06"
  - title: "used macOS archive"
    url: "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip"
    accessDate: "2026-11-06"
  - title: "wrapper usage"
    url: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan"
    accessDate: "2026-11-06"
  - title: "wrapper licence"
    url: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "upstream licence"
    url: "https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "release"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915"
    accessDate: "2026-11-06"
  - title: "used macOS archive"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip"
    accessDate: "2026-11-06"
  - title: "wrapper licence"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE"
    accessDate: "2026-11-06"
  - title: "upstream licence"
    url: "https://github.com/nagadomi/waifu2x/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "owner's weights-licence statement"
    url: "https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684"
    accessDate: "2026-11-06"
  - title: "Tesseract licence"
    url: "https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Haar locator and embedded licence"
    url: "https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml"
    accessDate: "2026-11-06"
  - title: "CC0 terms"
    url: "https://creativecommons.org/publicdomain/zero/1.0/"
    accessDate: "2026-11-06"
headlineFigures:
  lanczos_portrait_psnr:
    label: "Best portrait PSNR within these prepared cases; not identity fidelity"
    value: 26.361
    unit: "dB_rounded"
    display: "26.361 dB"
  waifu2x_portrait_ssim:
    label: "Best portrait SSIM within this test, not a rating"
    value: 0.809023
    unit: "SSIM"
    display: "0.809023"
  successful_reported_jobs:
    label: "Four pipelines times six cases in the second serial pass"
    value: 24
    unit: "reported_jobs"
    display: "24"
  waifu2x_median_processing_seconds:
    label: "Median across six different image sizes, not repeated-trial speed"
    value: 0.392
    unit: "seconds_rounded"
    display: "0.392"
audience: "English- and Simplified-Chinese-speaking Mac users choosing local photo enlargement for family archives, product still lifes, small text and line art; results concern the same tested configurations, not different regional products."
faq: []
draft: false
---

**If you want a larger copy without uploading your photograph, start with Lanczos, then compare a restrained waifu2x copy. In our hands-on test, Lanczos had the best portrait PSNR at 26.361 dB; waifu2x had the best portrait SSIM at 0.809023. Neither establishes that a face stays faithful. Keep the original scan, and treat the enlargement as a separate display copy.**

**Nothing was uploaded.** No image pixels were sent to a cloud or image-understanding model, no accounts were created, and no personal photographs were used. The timed processing jobs and their descendants ran locally with network access denied. Software, documentation, source images and model weights were downloaded beforehand: local inference does not mean setup was offline. The recorded socket-denial check covers those sandboxed processes, not every background app, backup or sync service on the Mac.

This is our own measured comparison, not vendor scores or a claim of human visual inspection. Artifact comments below come from local crop measurements and local OCR. We did not send crops to an external model or invent a viewing experience. The test and retained source-access date is November 6, 2026 in Asia/Singapore; downloads and execution also fall on November 5, 2026 UTC. This draft does not refresh sources or rerun the test.

## Choose for the copy you actually need

| Your job | Where I would start | The limit that matters |
|---|---|---|
| Family portrait for a larger display copy | Lanczos, then waifu2x beside it | More texture is not proof of the person's real features; neither was identity-validated |
| Small product still life | waifu2x | Best image scores on the coffee cup, not proof of accurate colour, ingredients, dimensions, prices or packaging labels |
| Tiny text or a screenshot | Re-export, rescreenshot or retype from a trusted original | Even the best image scores did not preserve the tested price and identifier in OCR |
| Foliage or a heavily compressed JPEG | Keep expectations modest; compare against the original | The clean forest remained difficult; small leads on the compressed case do not establish a practical winner |
| Thin line art | Compare waifu2x and Real-ESRGAN | Check outlines and whiskers; only waifu2x's photo model was tested, not its anime model |
| Minimum setup | Lanczos | No weights to download; FSRCNN's extra model setup did not deliver a compelling fidelity gain here |

**Counterintuitive finding:** stronger detail can mean a less faithful copy. Real-ESRGAN's portrait crop had a detail-energy ratio of 0.93 versus Lanczos's 0.16, yet both whole-image similarity scores were lower. A stronger texture is a stylistic choice until a trustworthy reference supports it—not evidence that missing facial detail has returned.

## What these six cases represent

There were three source photographs, two locally drawn graphics and a repeated-source JPEG stress case—not six independent photographs. No private family pictures were involved. References are starting digital images, not pristine camera originals or historical truth. Both the historical scan and forest arrived as JPEG reproductions.

| Case | Reference → small input → final output, px | Fixed crop box, x/y | Origin and preparation |
|---|---|---|---|
| Portrait | 476×640 → 119×160 → 476×640 | (120,120,360,360) | Alexander Gardner's Abraham Lincoln portrait, November 8, 1863; public domain. Downloaded 478×640 JPEG; removed the rightmost 2 columns |
| Product | 600×400 → 150×100 → 600×400 | (150,90,390,330) | Rachel Michetti's CC0 coffee-cup photograph, courtesy of Pikolo Espresso Bar; a café still life, not a packaging-label benchmark |
| Text | 800×600 → 200×150 → 800×600 | (180,300,420,540) | Locally drawn archive-window graphic, macOS Arial; known price $19.95 and SKU AB-1048 |
| Foliage | 748×1000 → 187×250 → 748×1000 | (180,300,420,540) | NPS/C. Bubar, Hoh Rain Forest, Olympic National Park; public domain. Downloaded 750×1000 JPEG; removed the rightmost 2 columns |
| JPEG stress | 600×800 → 150×200 → 600×800 | (160,200,400,440) | Same forest, source crop (76,160,676,960); added JPEG quality 18 and 4:2:0 chroma subsampling only after reduction |
| Line art | 800×600 → 200×150 → 800×600 | (260,180,500,420) | Original cat illustration drawn locally with Pillow; whiskers, varied stroke widths and text, no cloud generation |

Each width and height was reduced by 4 using Pillow Lanczos, leaving 1/16 of the pixels, then enlarged back to the reference dimensions. Photo preparation trimmed at most 2 right-edge columns for divisibility. No hidden sharpening, face repair, per-image model selection or tuning was applied. Fixed comparison crops are 240×240 px. Nearest-neighbour enlargement of the tiny input in the original comparison is only a display aid, not another tested tool; its 2× view is not another enhancement.

## Read the measurements before choosing a winner

The machine was Apple M2, 8-core integrated GPU, 16 GiB unified RAM, arm64, macOS 26.5.1 build 25F80. Lanczos and FSRCNN used CPU; Real-ESRGAN and waifu2x used GPU 0, identified in logs as Apple M2. The tools ran serially in the table's tool order, with neural tiles 64 and one processing worker. No TTA, face enhancer, large model variant, Upscayl GUI or EDSR was tested. Peak RAM was not measured, and other activity on this shared machine was uncontrolled.

PSNR is `10 log10(255² / mean RGB squared error)`. SSIM used full-frame RGB uint8, `data_range=255`, `channel_axis=2`, Gaussian weights, sigma 1.5, `use_sample_covariance=False` and default K1/K2, effectively an 11×11 Gaussian window. No border shave, alignment search, luminance-only scoring or output resizing was used. Higher means closer to that reference—not accurate words, recovered leaves or a verified face. We do not average PSNR across these very different cases. The [scikit-image metric documentation](https://scikit-image.org/docs/stable/api/skimage.metrics.html) is the retained methodological source.

Two serial passes were completed. The first checked functionality; only the second is reported below, with one timing per tool/image. Warm caches are possible. Processing seconds include image read, model load, CLI startup, inference or resize, and PNG save. End-to-end seconds also include the Python harness and common imports. Both exclude installation, downloads, metric calculation, OCR and crop generation. These are wall-clock measurements, not pure GPU-kernel timings or repeated-trial speed rankings.

### All measured outputs: every tool × every image

All 24 reported jobs succeeded. The original validation records matching dimensions, recomputed metrics and matching output crops for all of them; this draft reports that existing validation, not a new run.

ROI means the fixed crop above. MAE is mean absolute RGB error on a 255-level scale. Detail ratio is crop-luma Laplacian standard deviation divided by the reference value: below 1 means attenuated high-frequency variation, **not a percentage of true detail recovered**. Range deviation is the percentage of pixels more than 8 luma levels outside the reference's local 3×3 range; it flags differences, not proven hallucination. Values below round the retained CSV, without selecting a best trial.

| Tool / case | PSNR dB | SSIM | Processing s | End-to-end s | ROI MAE /255 | Detail ratio | Range deviation |
|---|---:|---:|---:|---:|---:|---:|---:|
| Lanczos · portrait | 26.361 | 0.797134 | 0.026 | 0.869 | 6.14 | 0.16 | 0.1% |
| Lanczos · product | 26.087 | 0.742628 | 0.023 | 0.856 | 6.02 | 0.15 | 1.9% |
| Lanczos · text | 21.787 | 0.846991 | 0.017 | 0.829 | 8.92 | 0.08 | 5.6% |
| Lanczos · foliage | 22.584 | 0.528078 | 0.055 | 0.866 | 19.92 | 0.08 | 0.6% |
| Lanczos · JPEG | 19.570 | 0.299772 | 0.041 | 0.888 | 25.61 | 0.06 | 6.2% |
| Lanczos · line art | 22.155 | 0.909778 | 0.017 | 0.828 | 6.67 | 0.10 | 9.8% |
| FSRCNN · portrait | 26.238 | 0.795107 | 0.024 | 0.835 | 6.57 | 0.31 | 0.2% |
| FSRCNN · product | 25.882 | 0.722329 | 0.018 | 0.957 | 6.14 | 0.31 | 1.6% |
| FSRCNN · text | 21.662 | 0.840148 | 0.025 | 0.846 | 9.66 | 0.14 | 5.9% |
| FSRCNN · foliage | 22.181 | 0.481830 | 0.044 | 0.831 | 20.82 | 0.12 | 1.3% |
| FSRCNN · JPEG | 19.628 | 0.292984 | 0.040 | 0.860 | 25.46 | 0.10 | 6.0% |
| FSRCNN · line art | 22.147 | 0.907874 | 0.026 | 0.892 | 6.40 | 0.17 | 6.7% |
| Real-ESRGAN · portrait | 24.924 | 0.752231 | 1.722 | 2.502 | 10.84 | 0.93 | 11.8% |
| Real-ESRGAN · product | 25.565 | 0.697079 | 1.440 | 2.283 | 7.12 | 0.50 | 3.8% |
| Real-ESRGAN · text | 20.940 | 0.906004 | 2.584 | 3.401 | 7.59 | 0.67 | 2.4% |
| Real-ESRGAN · foliage | 20.404 | 0.407827 | 3.175 | 3.944 | 22.55 | 0.22 | 3.0% |
| Real-ESRGAN · JPEG | 18.483 | 0.249372 | 2.505 | 3.322 | 28.19 | 0.29 | 12.2% |
| Real-ESRGAN · line art | 25.088 | 0.967993 | 2.498 | 3.313 | 4.36 | 0.46 | 2.0% |
| waifu2x · portrait | 25.743 | 0.809023 | 0.422 | 1.231 | 5.98 | 0.29 | 0.1% |
| waifu2x · product | 27.195 | 0.784016 | 0.352 | 1.169 | 4.66 | 0.51 | 0.6% |
| waifu2x · text | 23.861 | 0.931278 | 0.391 | 1.192 | 6.58 | 0.35 | 1.4% |
| waifu2x · foliage | 22.904 | 0.564592 | 0.457 | 1.257 | 19.28 | 0.16 | 0.6% |
| waifu2x · JPEG | 19.475 | 0.300591 | 0.392 | 1.751 | 25.79 | 0.09 | 6.6% |
| waifu2x · line art | 25.465 | 0.969670 | 0.380 | 1.176 | 3.74 | 0.55 | 4.2% |

| Tool | Median processing s | Median end-to-end s |
|---|---:|---:|
| Lanczos | 0.025 | 0.861 |
| FSRCNN | 0.025 | 0.853 |
| Real-ESRGAN | 2.501 | 3.317 |
| waifu2x | 0.392 | 1.212 |

These medians combine different image sizes, not repeated trials. Common Python imports add about 0.8 seconds here. Do not extrapolate to a 6000-pixel scan.

### What the numbers let you say—and what they do not

- **Portrait:** Lanczos led PSNR, waifu2x SSIM. FSRCNN added high-frequency energy without beating Lanczos on either score. Real-ESRGAN's greater crop error and range deviation make it a poor default for a faithful archive copy. waifu2x remained smoothed; no identity test was done. The local Haar detector merely located a face region: scale factor 1.1, minNeighbors 3, box (94,114,261,261), overlapping the preselected crop. It did not verify facial fidelity.
- **Coffee cup:** waifu2x led both global scores, but its detail ratio still indicates texture loss. Lanczos is the simple baseline; FSRCNN improved neither score. Real-ESRGAN had greater crop error than waifu2x and more range deviations, so rims and foam warrant checking. None creates a new high-resolution original.
- **Text:** local Tesseract 5.5.3, English, `--psm 6`, was used on the reference and every output. Lanczos returned `510.9%` for `$19.95` and lost the SKU hyphen; FSRCNN produced no usable price/SKU line. Real-ESRGAN changed `Family collection` to `Famby collocuon` and also got price and SKU wrong. waifu2x led both image scores, yet OCR returned `$19.06 / AB-1040` instead of `$19.95 / AB-1048`. This is an OCR failure, not proof that a human would read the same mistake. Even reference OCR misread the smallest diagnostic line. Get trusted source text rather than guessing an amount from an enlarged screenshot.
- **Foliage:** waifu2x led both scores, but fine variation remained strongly attenuated. FSRCNN's SSIM was below Lanczos; Real-ESRGAN's two global scores were the lowest despite stronger detail energy. That is a sharpness-versus-fidelity warning, not proof of invented leaves.
- **JPEG stress:** all SSIM values were at or below 0.301. FSRCNN's PSNR lead over Lanczos was only 0.058 dB, while its SSIM was lower. waifu2x's SSIM lead over Lanczos was just 0.000819. Real-ESRGAN had the lowest scores and substantial crop deviation. Severe quality-18 compression dominates; none earns a strong restoration claim.
- **Line art:** waifu2x led both scores even with its photo model. Real-ESRGAN was close on SSIM and had less local-range deviation than waifu2x. Lanczos and FSRCNN had similar global scores and low detail ratios. Compare thin strokes and outlines locally; these measurements do not establish every whisker is correct.

## Setup, cost and licences: local is not the same as effortless

As of November 6, 2026, these were free-download/open-source pipelines with no separate per-image service fee in this test. That is not a priced installer, free hardware or a promise that every weight and output use has legal clearance. The tested builds are pinned versions, not a latest-release recommendation. Python was 3.12.12, numpy 2.5.4, scipy 1.18.1 and scikit-image 0.26.0.

| Tested workflow | Model and settings | Setup and licence boundary |
|---|---|---|
| Pillow 13.0.0 Lanczos | Radius 3, scale 4, no weights or sharpening | Python/Pillow baseline; source list calls it HPND-style; archived Pillow notice labels it MIT-CMU |
| OpenCV FSRCNN | opencv-contrib-python-headless 5.0.0.93, runtime 5.0.0; FSRCNN_x4.pb; CPU/OpenCV backend, 2 threads | OpenCV and Saafke model repository Apache-2.0; README explicitly includes trained models. No separate weights-only licence located |
| Real-ESRGAN ncnn-vulkan 20220424 macOS, release v0.2.5.0 | Standard realesrgan-x4plus; 33,424,520-byte bin; scale 4, tile 64, workers 1:1:1, GPU 0 | Universal arm64/x86_64 binary, run on arm64; wrapper MIT, upstream BSD-3-Clause. No separate bundled-weights-only licence found; wrapper MIT is not an independent weights clearance |
| waifu2x ncnn-vulkan 20250915 macOS | models-upconv_7_photo, noise 0; 1,106,248-byte weights; scale 4 through 2 stages of 2×; tile 64, workers 1:1:1, GPU 0 | Wrapper and upstream MIT. Upstream owner confirmed weights share MIT on July 17, 2026; exact conversion lineage of this ncnn bundle was not independently traced |

Model bytes are not peak RAM. Keep required notices when redistributing binaries or weights; repository licences do not independently clear training-image rights. The two locally drawn graphics and preparation/benchmark/report scripts were offered under CC0-1.0 to the extent rights apply. That does not relicense third-party photographs, software, models or Arial; no font file was redistributed.

The Mac needed executable permissions for downloaded tools. A different Mac may need normal per-app security approval. No global Gatekeeper setting was changed; do not disable it globally to make a tool run. Provision software and models first, then place private inputs in a non-synced folder. The tested harness used `sandbox-exec` with `(version 1)(allow default)(deny network*)`; a negative loopback socket probe returned `PermissionError: [Errno 1] Operation not permitted`. Local OCR was sandboxed too. A plain CLI command does not automatically add that network policy. The original comparison page used local assets, system fonts and inline code; external citations were not fetched unless clicked. None of this certifies a whole-machine air gap.

## Sources behind the choice

These are links retained from the original source list, not a new source refresh or licence audit. Access dates remain November 6, 2026; publication or release dates are separate.

- Images: [Library of Congress portrait catalog](https://www.loc.gov/item/2013649738/), [Commons public-domain and exact-file mapping](https://commons.wikimedia.org/w/index.php?curid=67999047), [used portrait JPEG](https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg), [coffee image](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png), [coffee attribution and CC0 documentation](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py), [NPS forest rights and metadata](https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266), and [forest JPEG](https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg). The catalog page returned verification rather than readable content; indexed primary metadata supplied Gardner/date and Commons supplied the exact JPEG mapping. An attempted alternate portrait file returned not found and was not used.
- Baselines: [Pillow project](https://github.com/python-pillow/Pillow), [OpenCV licence](https://github.com/opencv/opencv/blob/5.x/LICENSE), [FSRCNN repository](https://github.com/Saafke/FSRCNN_Tensorflow), [trained-model README](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md), [FSRCNN licence](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE) and [tested weights](https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb).
- Real-ESRGAN: [release metadata](https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0), [used macOS archive](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip), [wrapper usage](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan), [wrapper licence](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE) and [upstream licence](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE).
- waifu2x: [release](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915), [used macOS archive](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip), [wrapper licence](https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE), [upstream licence](https://github.com/nagadomi/waifu2x/blob/master/LICENSE) and [owner's weights-licence statement](https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684).
- Supporting checks and reuse: [Tesseract licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE), [Haar locator and embedded licence](https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml) and [CC0 terms](https://creativecommons.org/publicdomain/zero/1.0/).

For your own pilot, keep the untouched scan, choose a non-confidential representative crop and compare one enlarged copy at native scale. Check faces, edges, text and amounts separately. Synthetic downsampling cannot settle real scratch removal, colourisation or identity preservation. The measured outputs and replay materials remain private evidence, not public downloads or a ready-made installer.

## Ask DeTars to plan a local photo-upscaling pilot

Send the request below, filling in the [brackets] with your own details.

> Help me plan local photo enlargement for [computer and operating system], [photo types and sizes], [display or print goal] and [privacy boundary]. Compare a conservative baseline with a small local model, separate setup downloads from offline processing, and keep originals. Flag face, text, texture and licence risks. Plan only; do not upload images, install tools or rerun processing without my approval.

*Use this as a friendly starting point, not a restoration or privacy guarantee. Keep the original and check anything you need to remain true.*

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [scikit-image metric documentation](https://scikit-image.org/docs/stable/api/skimage.metrics.html) — Access date: 2026-11-06
- [Library of Congress portrait catalog](https://www.loc.gov/item/2013649738/) — Access date: 2026-11-06
- [Commons public-domain and exact-file mapping](https://commons.wikimedia.org/w/index.php?curid=67999047) — Access date: 2026-11-06
- [used portrait JPEG](https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg) — Access date: 2026-11-06
- [coffee image](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png) — Access date: 2026-11-06
- [coffee attribution and CC0 documentation](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py) — Access date: 2026-11-06
- [NPS forest rights and metadata](https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266) — Access date: 2026-11-06
- [forest JPEG](https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg) — Access date: 2026-11-06
- [Pillow project](https://github.com/python-pillow/Pillow) — Access date: 2026-11-06
- [OpenCV licence](https://github.com/opencv/opencv/blob/5.x/LICENSE) — Access date: 2026-11-06
- [FSRCNN repository](https://github.com/Saafke/FSRCNN_Tensorflow) — Access date: 2026-11-06
- [trained-model README](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md) — Access date: 2026-11-06
- [FSRCNN licence](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE) — Access date: 2026-11-06
- [tested weights](https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb) — Access date: 2026-11-06
- [release metadata](https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0) — Access date: 2026-11-06
- [used macOS archive](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip) — Access date: 2026-11-06
- [wrapper usage](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) — Access date: 2026-11-06
- [wrapper licence](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE) — Access date: 2026-11-06
- [upstream licence](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE) — Access date: 2026-11-06
- [release](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915) — Access date: 2026-11-06
- [used macOS archive](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip) — Access date: 2026-11-06
- [wrapper licence](https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE) — Access date: 2026-11-06
- [upstream licence](https://github.com/nagadomi/waifu2x/blob/master/LICENSE) — Access date: 2026-11-06
- [owner's weights-licence statement](https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684) — Access date: 2026-11-06
- [Tesseract licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE) — Access date: 2026-11-06
- [Haar locator and embedded licence](https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml) — Access date: 2026-11-06
- [CC0 terms](https://creativecommons.org/publicdomain/zero/1.0/) — Access date: 2026-11-06
