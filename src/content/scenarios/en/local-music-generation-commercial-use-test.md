---
title: "Local AI Music for Commercial Use: No Model Passed Every Constraint"
description: "A local Mac music test separates licence restrictions, memory stops and completed measurements. Choose the next experiment without inventing a commercial-use winner."
locale: "en"
slug: "local-music-generation-commercial-use-test"
translationKey: "local-music-generation-commercial-use-test"
domain: "ai-tools"
publishedAt: "2026-11-07"
updatedAt: "2026-11-07"
researchDates:
  - "2026-11-07"
locales:
  - "en"
  - "zh"
producerDisplayLabel: "Produced by a general Cowork task on DeTars.xyz"
sources:
  - title: "MusicGen weight licence"
    url: "https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights"
    accessDate: "2026-11-07"
  - title: "AudioLDM small v2 checkpoint card"
    url: "https://huggingface.co/cvssp/audioldm-s-full-v2/blob/main/README.md"
    accessDate: "2026-11-07"
  - title: "CreativeML OpenRAIL-M"
    url: "https://huggingface.co/spaces/CompVis/stable-diffusion-license/raw/main/license.txt"
    accessDate: "2026-11-07"
  - title: "Riffusion model card"
    url: "https://huggingface.co/riffusion/riffusion-model-v1"
    accessDate: "2026-11-07"
  - title: "Stable Audio Open Small public model page"
    url: "https://huggingface.co/stabilityai/stable-audio-open-small"
    accessDate: "2026-11-07"
  - title: "Stability AI Community agreement"
    url: "https://stability.ai/community-license-agreement"
    accessDate: "2026-11-07"
  - title: "Riffusion original README"
    url: "https://github.com/riffusion/riffusion/blob/main/README.md"
    accessDate: "2026-11-07"
headlineFigures:
  completed_clips:
    label: "Completed evaluation clips, not commercial clearance"
    value: 10
    unit: "clips"
    display: "10"
  wav_total_size:
    label: "Total WAV size in decimal megabytes"
    value: 9.58
    unit: "MB"
    display: "9.58 MB"
  musicgen_median_wall:
    label: "MusicGen CPU median generation wall time"
    value: 159.4
    unit: "seconds"
    display: "159.4 s"
  audioldm_median_wall:
    label: "AudioLDM CPU median generation wall time"
    value: 27.9
    unit: "seconds"
    display: "27.9 s"
  riffusion_final_rss_stop:
    label: "Final Riffusion CPU retry sampled RSS at stop; cutoff overshot"
    value: 6.075
    unit: "GB"
    display: "6.075 GB"
  riffusion_mps_footprint:
    label: "Observed Riffusion MPS physical footprint at manual stop"
    value: 6.535
    unit: "GB"
    display: "6.535 GB"
audience:
  en: "Creators evaluating local AI instrumental music, commercial model licensing, anonymous access and Mac memory limits."
  zh: "评估本地 AI 器乐生成、模型商用授权、匿名访问和 Mac 内存限制的创作者。"
faq: []
draft: false
---

You want background music for monetised explainers without a cloud account, subscription or a Mac that runs out of breathing room. **No tested local model met every constraint.** MusicGen and AudioLDM finished the prompts but have noncommercial weight licences. Riffusion has a more commercially usable licence, but its long-clip attempts hit the memory guard. Stable Audio Open Small was gated and skipped. Choose by licence first, then memory, then whether the music leaves space for your narration—not by an attractive speed figure alone.

The test on November 7, 2026, Asia/Singapore, produced **10 completed clips**, totalling **9.58 MB** of WAV audio. The target was anonymous model access, local inference and roughly 20–30s music on a 16 GB Mac, within an approximately 6 GB process-memory budget. No candidate met that full brief alongside commercial-use requirements. It is not a completed four-model listening comparison. All prompts were English and instrumental; **Chinese prompts, Chinese lyrics and Chinese-language output were not tested**. Licence and access information has not been refreshed for this guide.

## Start with the licence, not the install button

| Model | Weights | Code | What it means for monetised videos |
| --- | --- | --- | --- |
| MusicGen small | CC-BY-NC 4.0 | AudioCraft MIT; tested Transformers Apache-2.0 | Not commercially cleared for this use; code permission does not remove weight restrictions. |
| AudioLDM small v2 | CC-BY-NC-SA 4.0 | Original AudioLDM NC-SA; tested Diffusers Apache-2.0 | Not commercially cleared. A missing checkpoint LICENSE is not permission. |
| Riffusion v1 | CreativeML OpenRAIL-M, use-restricted | Riffusion MIT; tested Diffusers Apache-2.0 | Commercial use permitted subject to restrictions; no completed clip within the memory guard. |
| Stable Audio Open Small | Stability AI Community License | stable-audio-tools MIT | Gated: needs login and acceptance; no account was used. Exact gated checkpoint licence not inspected. |

Read the [MusicGen weight licence](https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights), [AudioLDM checkpoint card](https://huggingface.co/cvssp/audioldm-s-full-v2/blob/main/README.md), [Riffusion licence](https://huggingface.co/spaces/CompVis/stable-diffusion-license/raw/main/license.txt) and [Riffusion model card](https://huggingface.co/riffusion/riffusion-model-v1) before choosing a workflow. Free code does not make the weights unrestricted. NC and use-restricted OpenRAIL weights are not unrestricted, OSI-style open-source assets.

MusicGen and AudioLDM's restrictions concern commercial use of the licensed model; this does **not** establish that every generated waveform automatically inherits a CC licence. Riffusion's licence §6 says the licensor claims no output rights, but §9 supplies no non-infringement warranty. The model card also calls its direct use research-intended. Commercial permission is not a promise of originality, copyright ownership or Content ID clearance. Keep the actual licence and model revision with your project.

[Stable Audio Open Small](https://huggingface.co/stabilityai/stable-audio-open-small) returned anonymous 401 with gated:auto access. Its native limit is up to 11s, so it would not natively supply a single 20–30s clip anyway. The retained [Community agreement](https://stability.ai/community-license-agreement), updated July 5, 2024, requires commercial registration; the ordinary licence terminates if you or affiliates exceed **US$1,000,000** aggregate annual revenue regardless of its source. The full gated checkpoint terms were unavailable anonymously. Do not treat the public agreement as completed checkpoint clearance. If you relax the no-account rule, check the exact accepted terms before downloading or producing commercial work.

## What actually completed on the Mac

| Model | Completed | Median wall time | Median RTF | Peak sampled RSS | Device |
| --- | --- | --- | --- | --- | --- |
| musicgen-small | 5/5 | 159.4 s | 7.99× | 4.76 GB | cpu |
| audioldm-small | 5/5 | 27.9 s | 1.39× | 4.31 GB | cpu |
| riffusion | 0/5 | — | — | — | — |
| stable-audio-open-small | 0/5 | — | — | — | — |

Riffusion's dashes mean no completed clip, not zero time or memory. Stable Audio Open Small was not run. RTF is generation wall time divided by output duration: lower is faster. **8× means eight seconds of compute per second of audio**, not eight times faster. GB here means 1,000,000,000 bytes. Download and install time are excluded.

The machine was Mac14,2, arm64, macOS 26.5.1, with 16 GiB unified memory (17.18 decimal GB). Generation used four CPU threads, one inference model at a time, batch size 1 and seed 20261107 for each prompt. The successful runs used CPU float32. Python was 3.11.4, torch and torchaudio 2.8.0, Diffusers 0.35.2 and Transformers 4.57.1. AudioLDM's pipeline emitted a deprecation warning after 0.33.1, though the installed version executed it. Reuse pinned dependencies rather than assuming an upgrade reproduces these results.

### The same prompts, without cherry-picked rerolls

The request was about 20 seconds. MusicGen used 1000 tokens and produced 19.94s; AudioLDM received audio_length_in_s=20 and produced 20.00s. Other sampling settings remained library defaults; AudioLDM used attention slicing. These exact English prompts were reused:

- **01-lofi** — Calm lo-fi instrumental background music under spoken narration, soft electric piano, gentle drums, no vocals.
- **02-corporate** — Upbeat corporate instrumental background music, bright piano, light percussion, optimistic and steady, no vocals.
- **03-tech** — Ambient technology instrumental background music, warm synthesizer pads, subtle electronic pulse, spacious and restrained, no vocals.
- **04-acoustic** — Warm acoustic instrumental background music, fingerpicked acoustic guitar, gentle relaxed rhythm, intimate and friendly, no vocals.
- **05-cinematic** — Cinematic instrumental background music building gradually, soft strings and piano, hopeful rising energy, no vocals.

### Every completed measurement

These are raw PCM16 mono WAVs, without additional loudness mastering. The wide table can be scrolled sideways. Missing results are not quality scores.

| Model | Prompt | Wall s | RTF | RSS GB | Guard GB | Length s | Hz | Bytes | LUFS-I | True peak dBFS | Near-full-scale samples | Silent windows | CLAP cosine |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| musicgen-small | 01-lofi | 208.04 | 10.43 | 4.498 | 4.499 | 19.940 | 32,000 | 1,276,204 | -16.7 | -0.8 | 0.0000% | 0.00% | 0.480 |
| musicgen-small | 02-corporate | 164.96 | 8.27 | 4.513 | 4.513 | 19.940 | 32,000 | 1,276,204 | -18.4 | -1.3 | 0.0000% | 0.00% | 0.514 |
| musicgen-small | 03-tech | 159.41 | 7.99 | 4.544 | 4.545 | 19.940 | 32,000 | 1,276,204 | -35.1 | -15.0 | 0.0000% | 0.00% | 0.485 |
| musicgen-small | 04-acoustic | 150.16 | 7.53 | 4.594 | 4.594 | 19.940 | 32,000 | 1,276,204 | -23.2 | -6.4 | 0.0000% | 0.00% | 0.611 |
| musicgen-small | 05-cinematic | 151.96 | 7.62 | 4.759 | 4.759 | 19.940 | 32,000 | 1,276,204 | -23.0 | -8.6 | 0.0000% | 0.00% | 0.312 |
| audioldm-small | 01-lofi | 40.23 | 2.01 | 4.056 | 4.056 | 20.000 | 16,000 | 640,044 | -29.2 | -4.0 | 0.0000% | 1.50% | 0.478 |
| audioldm-small | 02-corporate | 27.84 | 1.39 | 4.308 | 4.308 | 20.000 | 16,000 | 640,044 | -25.3 | -0.4 | 0.0000% | 1.00% | 0.368 |
| audioldm-small | 03-tech | 27.28 | 1.36 | 4.315 | 4.315 | 20.000 | 16,000 | 640,044 | -29.6 | -7.4 | 0.0000% | 1.50% | 0.672 |
| audioldm-small | 04-acoustic | 29.16 | 1.46 | 4.256 | 4.257 | 20.000 | 16,000 | 640,044 | -20.3 | -4.5 | 0.0000% | 1.50% | 0.645 |
| audioldm-small | 05-cinematic | 27.87 | 1.39 | 4.298 | 4.298 | 20.000 | 16,000 | 640,044 | -32.9 | -10.8 | 0.0000% | 0.75% | 0.430 |

Wall time includes conditioning, generation and waveform reconstruction, excluding loading and WAV writing. Recorded load times were 7.0039s for MusicGen and 5.8062s for AudioLDM. AudioLDM's separate load peak was 0.458473472 GB RSS and 0.458866688 GB guard; the initial MusicGen CPU run has no separate load peak. Every completed row had 393,216 bytes of recorded Metal driver allocation despite CPU inference. The detailed CSV preserves unrounded values and file hashes.

LUFS-I and oversampled true peak came from FFmpeg ebur128. “Near-full-scale” counts samples with absolute level ≥32767/32768; it is a clipping-risk proxy, not proof of distortion. Silence is the share of 50 ms all-channel RMS windows below −60 dBFS. A quiet clip may need gain adjustment; these numbers do not establish musical usefulness.

CLAP cosine is an automated text–audio alignment proxy, **not a quality rating**. LAION HTSAT unfused ran locally in CPU float32 on only the first 10s, downmixed to mono and resampled to 48kHz. It cannot judge the full 20s build or narration fit. A separate-process repeat had maximum difference 0.0 and passed within 1e-6; that confirms repeatability, not taste. No human listening panel or personal listening impressions are claimed, and no audio was sent to a remote scoring model.

## Why the other candidates did not pass

| Model | Prompt | Result |
| --- | --- | --- |
| riffusion | 01-lofi | stopped_memory_guard |
| riffusion | 02-corporate | not_run_after_memory_stop |
| riffusion | 03-tech | not_run_after_memory_stop |
| riffusion | 04-acoustic | not_run_after_memory_stop |
| riffusion | 05-cinematic | not_run_after_memory_stop |
| stable-audio-open-small | 01-lofi | skipped_gated_no_account |
| stable-audio-open-small | 02-corporate | skipped_gated_no_account |
| stable-audio-open-small | 03-tech | skipped_gated_no_account |
| stable-audio-open-small | 04-acoustic | skipped_gated_no_account |
| stable-audio-open-small | 05-cinematic | skipped_gated_no_account |

Riffusion exercised the first prompt; the remaining four were not attempted after the memory stop. Stable Audio Open Small was excluded before inference. These are failures and exclusions, not fabricated audio measurements.

- **MusicGen MPS recovery:** the float16 attempt stopped at a conservative RSS plus Metal guard of 6.095 GB. That sum can double-count unified memory; it is not a physical-RAM measurement. CPU float32 then completed the set.
- **Riffusion MPS overshoot:** independent runtime observation showed **6.535 GB physical footprint**, and the process was manually stopped. The original RSS-plus-Metal guard missed that overshoot. This was not a successful sub-6GB run.
- **Riffusion CPU recovery:** float32 first hit a 5.8 GB safety margin, then a final retry at the requested 6.0 GB cutoff stopped at **6.075 GB sampled RSS**. The final CSV records 6,075,269,120 RSS bytes, 6,075,662,336 guard bytes, 2,973,424,000 physical-footprint bytes and 5.0880s load time. Different memory metrics are not interchangeable. An exploratory CPU float16 attempt was aborted after unsupported-device warnings, with no finished clip.
- **Riffusion settings were not untouched defaults:** a 512×2048 spectrogram requested about 20.47s instead of the common 512×512, about 5.11s chunk. Attention slicing and VAE tiling were enabled. Direct Diffusers inference differed from the unmaintained original application. Inverse-mel decoding replaced old SGD arguments with least-squares gelsd for torchaudio 2.8 compatibility; upstream default Griffin–Lim, normalisation and filtering were retained. The pipeline image-safety module was omitted; no image input or upload was used. No stitched short chunks were substituted for a coherent long clip.
- **Other names are not extra tested winners:** MusicGen stereo-small failed setup with incomplete-tokenizer and corrupt-safetensors errors and produced no clip. Melody was not loaded; larger weights and the same NC restriction would not solve this decision. Stable Audio 3 Small-Music, AudioLDM2 and TangoFlux were screened only. The former was gated; the latter two had noncommercial or research restrictions.

Memory was sampled every 100 ms across the live process. RSS includes resident weights, not other apps or the whole system. The initial guard was RSS plus Metal allocation; recovery also sampled macOS physical footprint. Sampling can briefly overshoot and can miss transients. **Physical footprint was not measured retrospectively for the completed MusicGen and AudioLDM clips**, so their RSS figures are not proof of a hard total-memory ceiling. Do not infer that a 16 GB Mac has the remaining memory free for your other work.

## A practical next step without pretending there is a winner

For monetised work under all the stated rules, **do not promote any candidate into production on this evidence**. Keep your existing cleared-music workflow while deciding which constraint you are willing to change. For a compliant noncommercial technical evaluation, AudioLDM's median of 27.9 s was quicker than MusicGen's 159.4 s here; that does not make it a commercially licensed recommendation or a listening-quality winner.

If you choose another local trial, save the exact weight revision and licence, use one model at a time, enable an explicit stop guard, and test the required duration rather than a convenient short chunk. Then listen with your actual narration for masking, unwanted voices, loop joins and abrupt endings. These are checks to do next, not findings this test established. Check originality and platform restrictions separately before publishing.

The retained test used anonymous HTTP GET for public code and weights; downloads were separate from inference. Inference used offline/local-files-only loading and disabled Python network sockets. No accounts, cached Hugging Face tokens, personal browser sessions or external audio-understanding service were used. Download interruptions were handled with temporary files and public LFS-hash checks where available. An offline inference result does not mean the initial model download needed no network.

### How the results were checked

The audio clips, full results CSV, prompts and generation records from this test are not published with this guide. NC-model clips are evaluation material, not cleared production music.

The independent check passed for all 10 clips using separate stdlib wave/array decoding, fresh FFmpeg ebur128 and ffprobe checks. It rechecked duration, sample rate, size, PCM levels, silence, loudness, peaks and RTF. It could recalculate RTF from logged time and independent duration, but could **not** remeasure historical generation time or memory. This guide does not rerun that benchmark or its browser checks.

The [original Riffusion application](https://github.com/riffusion/riffusion/blob/main/README.md) is unmaintained; the test needed a small compatibility change to run it. Do not replace the failed guard result with an installation-success claim.

## Ask DeTars to plan a local music test you can actually use

Send DeTars this request, filling in the [brackets] with your details.

> Compare local instrumental music options for [computer and available memory], [clip duration], [commercial or noncommercial use] and [account and network rules]. Separate code and weight licences, document exact revisions, plan memory-stop checks and distinguish completed results from exclusions. Use [narration and style needs] to design a listening checklist. Ask before downloading models, accepting terms, uploading audio or spending money.

Use this as a helpful starting point, not a royalty-safe certificate. It is general technical information, not legal advice; confirm the actual licence and publishing requirements before using music commercially.

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [MusicGen weight licence](https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights) — Access date: 2026-11-07
- [AudioLDM small v2 checkpoint card](https://huggingface.co/cvssp/audioldm-s-full-v2/blob/main/README.md) — Access date: 2026-11-07
- [CreativeML OpenRAIL-M](https://huggingface.co/spaces/CompVis/stable-diffusion-license/raw/main/license.txt) — Access date: 2026-11-07
- [Riffusion model card](https://huggingface.co/riffusion/riffusion-model-v1) — Access date: 2026-11-07
- [Stable Audio Open Small public model page](https://huggingface.co/stabilityai/stable-audio-open-small) — Access date: 2026-11-07
- [Stability AI Community agreement](https://stability.ai/community-license-agreement) — Access date: 2026-11-07
- [Riffusion original README](https://github.com/riffusion/riffusion/blob/main/README.md) — Access date: 2026-11-07
