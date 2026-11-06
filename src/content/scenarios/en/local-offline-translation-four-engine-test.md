---
title: "Offline Translation: Our Four-Engine Mac Test"
description: "Choose a local translator for short shop messages using our hands-on Mac measurements, with reference-score limits, licence cautions and an honest setup exception."
locale: "en"
slug: "local-offline-translation-four-engine-test"
translationKey: "local-offline-translation-four-engine-test"
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
  - title: "NLLB exact model card and non-commercial scope"
    url: "https://huggingface.co/facebook/nllb-200-distilled-600M/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "Meta FLORES corpus attribution and licence"
    url: "https://raw.githubusercontent.com/facebookresearch/flores/main/README.md"
    accessDate: "2026-11-06"
  - title: "FLORES ShareAlike licence"
    url: "https://creativecommons.org/licenses/by-sa/4.0/"
    accessDate: "2026-11-06"
  - title: "sacrebleu metric documentation"
    url: "https://github.com/mjpost/sacrebleu"
    accessDate: "2026-11-06"
  - title: "Official Qwen GGUF licence"
    url: "https://huggingface.co/Qwen/Qwen3-4B-GGUF/raw/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Ollama code licence"
    url: "https://github.com/ollama/ollama/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "OPUS-MT English to Spanish card"
    url: "https://huggingface.co/Helsinki-NLP/opus-mt-en-es/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "OPUS-MT English to Chinese card"
    url: "https://huggingface.co/Helsinki-NLP/opus-mt-en-zh/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "OPUS-MT English to German card"
    url: "https://huggingface.co/Helsinki-NLP/opus-mt-en-de/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "OPUS-MT Chinese to English card"
    url: "https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "Argos publisher model-binary licensing statement, qualified by exact package notices"
    url: "https://github.com/argosopentech/argos-translate/issues/533#issuecomment-5160080718"
    accessDate: "2026-11-06"
  - title: "NLLB non-commercial licence terms"
    url: "https://creativecommons.org/licenses/by-nc/4.0/"
    accessDate: "2026-11-06"
  - title: "Exact official Qwen Q4_K_M model artifact"
    url: "https://huggingface.co/Qwen/Qwen3-4B-GGUF/resolve/bc640142c66e1fdd12af0bd68f40445458f3869b/Qwen3-4B-Q4_K_M.gguf"
    accessDate: "2026-11-06"
  - title: "Apple direct-session initializer"
    url: "https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:).md"
    accessDate: "2026-11-06"
  - title: "Apple direct-session download restriction"
    url: "https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads.md"
    accessDate: "2026-11-06"
  - title: "Apple Translation overview and telemetry scope"
    url: "https://developer.apple.com/documentation/translation/translationsession.md"
    accessDate: "2026-11-06"
headlineFigures:
  benchmark_translations:
    label: "Successful translations across four engines; not human-rated outputs"
    value: 480
    unit: "translation_outputs"
    display: "480"
  qwen_macro_chrf:
    label: "Qwen arithmetic mean of direction-level reference chrF, not human quality"
    value: 51.75
    unit: "macro_chrf"
    display: "51.75"
  qwen_total_wall_seconds:
    label: "Qwen wall time including fresh direction startup, excluding setup"
    value: 260.16
    unit: "seconds"
    display: "260.16"
  qwen_peak_sampled_memory:
    label: "Qwen larger sampled process-tree RSS or physical footprint, decimal GB"
    value: 3.11
    unit: "decimal_GB_sampled_peak"
    display: "3.11"
  marian_total_wall_seconds:
    label: "Marian wall time for all input units including startup, excluding setup"
    value: 60.88
    unit: "seconds"
    display: "60.88"
  marian_peak_sampled_memory:
    label: "Marian larger sampled process-tree RSS or physical footprint, decimal GB"
    value: 0.77
    unit: "decimal_GB_sampled_peak"
    display: "0.77"
audience:
  en: "English- and Chinese-speaking local-translation users comparing short shop-message workflows; Simplified Chinese directions were tested, without human quality validation."
  zh: "为短店铺消息选择本地翻译流程的英语和中文读者；测试包含简体中文方向，但没有人工质量验证。"
faq: []
draft: false
---

Want to translate product descriptions and customer emails without sending them to a hosted translator? I would start with Qwen3-4B Q4_K_M through an isolated local Ollama server for a mixed-language inbox. For English-to-Spanish or English-to-German batches with less memory, I would start with Marian instead. These are starting points from our own hands-on Mac test, not a human-quality ranking.

Qwen recorded 51.75 macro chrF and a 3.11 GB sampled peak, taking 260.16 seconds for 120 input units. Marian needed 0.77 GB and 60.88 seconds. Marian scored higher than Qwen in both tested European-language directions; Qwen scored higher in both Chinese directions. Have someone who understands the target language check prices, sizes, negation and refund conditions before sending anything to customers.

NLLB is not the shop choice: its tested weights are non-commercial. Apple Translation was not benchmarked. And “offline” needs one important qualification here: initial model downloads used a pre-existing cached Hugging Face credential. No account was created and no test text was uploaded, but the strict no-account setup requirement was not fully met. Later download code disabled implicit authentication; inference, scoring and machine review stayed local.

## Which starting point fits your work?

- Choose Qwen for short mixed-language messages when you can spare the measured memory and waiting time. One model accepts English, Spanish, German and Simplified Chinese language names; only the directions below were tested.
- Choose Marian for leaner English-to-European-language batches. It needs a separate checkpoint per directed pair; the installed set is not an all-pairs translator.
- Consider Argos when a smaller download matters, but allow for setup work. These results used a local presegmented-input adapter after the bundled Stanza sentence splitter failed. They are not stock, unmodified Argos results.
- Keep NLLB for an appropriately licensed non-commercial research comparison, not this shop workflow. Its score does not remove the restriction in its [model card](https://huggingface.co/facebook/nllb-200-distilled-600M/raw/main/README.md).

## The measured results

The test ran on November 6, 2026, on an Apple M2 with 16 GiB RAM, macOS 26.5.1 build 25F80 and Python 3.11.4. Each engine produced 120 translations: 80 reference-backed units and 40 authored shop units. Across the engines, that is 480 translations. EN, ES, DE and ZH below mean English, Spanish, German and Simplified Chinese.

chrF and BLEU measure overlap with a reference, not human understanding, fluency or customer readiness. Higher is better on these particular metrics. Overall values are arithmetic means of four direction-level corpus scores, not a mixed-language corpus score. Only reference-backed units enter the scores; all input units enter timing.

| Engine / model | Macro chrF | Macro BLEU | Total wall s | Units/s | Peak GB | Model download GB |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Argos 1.11.0 + segment adapter | 50.74 | 27.12 | 38.40 | 3.13 | 0.55 | 0.32 |
| Marian / OPUS-MT | 50.36 | 28.07 | 60.88 | 1.97 | 0.77 | 1.25 |
| NLLB-200 distilled 600M · non-commercial | 47.80 | 23.30 | 296.12 | 0.41 | 3.17 | 2.48 |
| Qwen3-4B Q4_K_M / Ollama | 51.75 | 28.13 | 260.16 | 0.46 | 3.11 | 2.50 |

Wall time includes process, import and model initialization, but excludes installation and downloads. Units/s divides input records by that wall time; an email record can contain several grammatical sentences. Peak memory is the larger of sampled process-tree RSS and physical footprint, in decimal GB—not total machine memory pressure. Shared or mapped memory may be counted conservatively. Download figures cover retained required model, tokenizer or compressed package files, not dependencies, retries, installed size or the duplicate Ollama import.

### Every tested direction

Each direction had 20 reference-backed units and 10 authored shop units. All final rows completed.

| Engine | Direction | chrF | BLEU | Wall s | Units/s | Peak GB | Download MB |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Argos + adapter | EN→ES | 55.78 | 27.87 | 13.73 | 2.18 | 0.53 | 87.50 |
| Argos + adapter | EN→DE | 58.82 | 26.08 | 9.21 | 3.26 | 0.53 | 87.11 |
| Argos + adapter | EN→ZH | 33.20 | 35.99 | 9.35 | 3.21 | 0.55 | 70.74 |
| Argos + adapter | ZH→EN | 55.15 | 18.52 | 6.10 | 4.92 | 0.55 | 74.48 |
| Marian | EN→ES | 57.75 | 30.69 | 24.37 | 1.23 | 0.77 | 315.31 |
| Marian | EN→DE | 61.57 | 31.67 | 13.50 | 2.22 | 0.70 | 300.77 |
| Marian | EN→ZH | 29.03 | 31.90 | 11.95 | 2.51 | 0.71 | 315.32 |
| Marian | ZH→EN | 53.10 | 18.02 | 11.06 | 2.71 | 0.70 | 315.32 |
| NLLB · non-commercial | EN→ES | 58.57 | 29.14 | 90.79 | 0.33 | 2.88 | 2482.65 |
| NLLB · non-commercial | EN→DE | 59.45 | 28.41 | 62.87 | 0.48 | 3.16 | 2482.65 |
| NLLB · non-commercial | EN→ZH | 24.99 | 23.86 | 54.88 | 0.55 | 3.15 | 2482.65 |
| NLLB · non-commercial | ZH→EN | 48.19 | 11.80 | 87.58 | 0.34 | 3.17 | 2482.65 |
| Qwen | EN→ES | 55.95 | 26.54 | 65.89 | 0.46 | 3.11 | 2497.28 |
| Qwen | EN→DE | 57.26 | 24.70 | 70.84 | 0.42 | 3.11 | 2497.28 |
| Qwen | EN→ZH | 36.72 | 39.36 | 56.27 | 0.53 | 3.08 | 2497.28 |
| Qwen | ZH→EN | 57.07 | 21.92 | 67.15 | 0.45 | 3.07 | 2497.28 |

NLLB and Qwen repeat the same shared download in each direction; do not add those entries. Overall download totals count each shared model once. Spanish-to-English, German-to-English and other cross-language directions were not measured. Broader multilingual capability is not a tested quality promise.

The retained results CSV (original supporting file is not published; use the information in this guide) includes raw precision and separate loading and translation-phase timings. The [saved independent calculation](#sources-and-access-dates) matched 40 metric values within 1e-8. That checks scoring arithmetic, not translation meaning; no new benchmark was run for this guide.

## How much confidence should you put in the scores?

The public reference text was the first 20 aligned FLORES-200 devtest lines, not a quality-selected sample. The same English items were reused across the three target directions. Each direction also had five authored product units and five authored email units, with Chinese source counterparts for ZH→EN. No real customer messages were used.

[FLORES-200 is credited to Meta and its contributors](https://raw.githubusercontent.com/facebookresearch/flores/main/README.md), under [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/). Corpus-derived test material retains that licence; authored shop material is CC0. FLORES and Argos archives came from public mirrors after download problems. Their hashes matched the mirrors, but identity with authoritative upstream downloads and publisher authorization of those mirrors remain unverified.

Scoring used [sacrebleu](https://github.com/mjpost/sacrebleu) 2.6.0: case-sensitive chrF, character order 6, word order 0, beta 2; BLEU used exponential smoothing, one reference and tokenizer `zh` for EN→ZH, `13a` elsewhere. Different valid wording can lower overlap. These figures are not percentages of correct meaning.

There was one pass per final configuration, a fresh process per direction and one engine at a time. File caches were not flushed; other Mac work continued. There are no repeat-variance or statistical-significance estimates. Marian and NLLB ran CPU float32 with four threads, greedy decoding, a 512-token input cap and 256 new tokens. Marian EN→ZH used `>>cmn_Hans<<`. Argos used CPU, four intra-op threads and beam 1, with bounded inputs passed unchanged to the translation model by the adapter.

Qwen used Metal through Ollama 0.40.13, an explicit non-thinking ChatML template, temperature 0, seed 42, context 2,048 and 256 output tokens; it unloaded after each direction. Unequal model sizes and CPU-versus-Metal execution limit speed comparisons.

Memory sampling targeted 50 ms but could be slower. The stop threshold was 6,000,000,000 bytes; peaks could occur between samples. Qwen's benchmark stop condition watched physical footprint, though its RSS also stayed below 6 GB. Later supervision watched the larger measure. This was sampled enforcement, not an instantaneous OS memory guarantee.

## The shop-text checks were machine-only

The authored material has no reference translation and no chrF or BLEU score. Deterministic checks looked for changed numbers, missing identifiers, empty text and copied input. A separate local Qwen pass flagged possible obvious meaning problems, including negation, omissions and conditions.

| Engine | Deterministic flags / 40 units | Local-model flags / 40 units |
| --- | ---: | ---: |
| Argos + adapter | 0 | 23 |
| Marian | 1 | 15 |
| NLLB · non-commercial | 4 | 11 |
| Qwen | 0 | 19 |

These are review flags, not confirmed error counts or human ratings. Numbers written as words can trigger a deterministic flag. The local model can miss or invent errors and is not independent of the Qwen candidate. No human semantic assessment or hosted-model translation review was performed. Zero deterministic flags does not mean a translation is safe to send.

## Check the exact model's terms, not just the engine's licence

- Qwen's [official GGUF licence](https://huggingface.co/Qwen/Qwen3-4B-GGUF/raw/main/LICENSE) is Apache-2.0; [Ollama code](https://github.com/ollama/ollama/blob/main/LICENSE) is MIT, with bundled-component notices. Retain applicable licences and notices when redistributing.
- The exact Marian cards differ: [EN→ES](https://huggingface.co/Helsinki-NLP/opus-mt-en-es/raw/main/README.md) and [EN→ZH](https://huggingface.co/Helsinki-NLP/opus-mt-en-zh/raw/main/README.md) say Apache-2.0; [EN→DE](https://huggingface.co/Helsinki-NLP/opus-mt-en-de/raw/main/README.md) and [ZH→EN](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/raw/main/README.md) say CC-BY-4.0. Preserve attribution. This is not clearance of all training-data rights.
- Argos code is MIT OR CC0, and a [publisher statement](https://github.com/argosopentech/argos-translate/issues/533#issuecomment-5160080718) describes model binaries that way. However, the tested Chinese packages retain CC-BY-4.0 OPUS notices. Preserve those and third-party notices. The mirrored EN→ES and EN→DE packages are version 1.0; the Chinese packages are version 1.9. Complete package-specific rights clearance is unresolved; do not relabel everything MIT/CC0.
- NLLB weights are CC-BY-NC-4.0. The [licence terms](https://creativecommons.org/licenses/by-nc/4.0/) are non-commercial; the model card also describes research rather than production use and excludes intended medical/legal-domain and document-translation use. Do not choose it for the shop on the strength of a score.

## Set up locally without promising a completely disconnected computer

Qwen setup here involved an existing Ollama installation, a local GGUF import, an explicit template and an isolated sandboxed server. Marian needed Transformers, PyTorch, SentencePiece and directed checkpoints. Argos needed its Python stack, language packages, a mirror download and the adapter. NLLB used the Python stack and a shared multilingual checkpoint, with its non-commercial limitation unchanged.

The exact Qwen [Q4_K_M artifact](https://huggingface.co/Qwen/Qwen3-4B-GGUF/resolve/bc640142c66e1fdd12af0bd68f40445458f3869b/Qwen3-4B-Q4_K_M.gguf) was imported as a local model, not a cloud tag. Packages and models need an online setup phase. Initial Hugging Face downloads inherited a cached credential; later public access was checked without authentication. Test text never went with those downloads.

During inference, macOS sandbox rules blocked Python external networking; Qwen's client and isolated server allowed loopback only. A direct external-IP probe failed while the local endpoint returned HTTP 200. Offline flags and a socket guard added protection. This covers the tested processes, not every OS daemon or every app that embeds these engines.

The saved local helper (original supporting file is not published; use the information in this guide) reads UTF-8 text from stdin, uses only `127.0.0.1:11439`, has no remote fallback and unloads after a request. Its output cap is 512 tokens, unlike the benchmark configuration. It requires restarting the isolated server; moved folders need script-path changes. Split long messages and inspect truncation warnings rather than trusting a context window to preserve every condition. The retained report (original supporting file is not published; use the information in this guide) records the tested setup sequence; this guide has not repeated a fresh installation.

### What about the built-in Apple option?

An availability-only Swift probe compiled and ran, finding all required pairs supported but uninstalled. Apple produced no benchmark translations here. On macOS 26.0+, the [direct-session initializer](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:).md) supports no-UI use with installed languages, but [cannot request downloads](https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads.md). The direct-session runtime branch was not exercised because the languages were absent. Apple's [framework overview](https://developer.apple.com/documentation/translation/translationsession.md) describes on-device content processing but possible API/performance telemetry, not zero network activity or freely redistributable model weights.

## FAQ

### Which engine translated best for people?

This test cannot establish that. Qwen led the macro reference-overlap result, but no human language-quality assessment was performed. Choose a candidate, then have your own representative messages checked.

### Can I use NLLB for customer emails because it is free to download?

Not under the tested non-commercial weight licence for this shop workflow. Free access and commercial permission are different questions.

### Were customer messages sent online?

No real customer messages were used, and no test text, references, translations or review reasons were uploaded. Initial model downloads did use a cached credential, so do not describe setup as wholly account-free or air-gapped.

### Does the Chinese version mean every language direction was tested?

No. Only the listed directions were measured. Chinese is useful here because readers are choosing local translation tools and Chinese directions were actually included; it does not validate other directions or human quality.

## Ask DeTars to plan your local translation workflow

Send DeTars the request below, filling in the [brackets] with your details.

> Help me choose a local translator for [computer, operating system and memory], [source and target languages], [message length and volume] and [private or commercial use]. Use these measurements only where relevant. Plan exact-model licence checks, an offline setup test and a fluent-reader check of numbers, negation and conditions. Ask before installing packages, downloading models, using stored credentials or uploading any text.

Use this as a helpful starting point, not a guarantee of translation quality, privacy or compatibility; it is not legal advice.

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [NLLB exact model card and non-commercial scope](https://huggingface.co/facebook/nllb-200-distilled-600M/raw/main/README.md) — Access date: 2026-11-06
- [Meta FLORES corpus attribution and licence](https://raw.githubusercontent.com/facebookresearch/flores/main/README.md) — Access date: 2026-11-06
- [FLORES ShareAlike licence](https://creativecommons.org/licenses/by-sa/4.0/) — Access date: 2026-11-06
- [sacrebleu metric documentation](https://github.com/mjpost/sacrebleu) — Access date: 2026-11-06
- [Official Qwen GGUF licence](https://huggingface.co/Qwen/Qwen3-4B-GGUF/raw/main/LICENSE) — Access date: 2026-11-06
- [Ollama code licence](https://github.com/ollama/ollama/blob/main/LICENSE) — Access date: 2026-11-06
- [OPUS-MT English to Spanish card](https://huggingface.co/Helsinki-NLP/opus-mt-en-es/raw/main/README.md) — Access date: 2026-11-06
- [OPUS-MT English to Chinese card](https://huggingface.co/Helsinki-NLP/opus-mt-en-zh/raw/main/README.md) — Access date: 2026-11-06
- [OPUS-MT English to German card](https://huggingface.co/Helsinki-NLP/opus-mt-en-de/raw/main/README.md) — Access date: 2026-11-06
- [OPUS-MT Chinese to English card](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/raw/main/README.md) — Access date: 2026-11-06
- [Argos publisher model-binary licensing statement, qualified by exact package notices](https://github.com/argosopentech/argos-translate/issues/533#issuecomment-5160080718) — Access date: 2026-11-06
- [NLLB non-commercial licence terms](https://creativecommons.org/licenses/by-nc/4.0/) — Access date: 2026-11-06
- [Exact official Qwen Q4_K_M model artifact](https://huggingface.co/Qwen/Qwen3-4B-GGUF/resolve/bc640142c66e1fdd12af0bd68f40445458f3869b/Qwen3-4B-Q4_K_M.gguf) — Access date: 2026-11-06
- [Apple direct-session initializer](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:).md) — Access date: 2026-11-06
- [Apple direct-session download restriction](https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads.md) — Access date: 2026-11-06
- [Apple Translation overview and telemetry scope](https://developer.apple.com/documentation/translation/translationsession.md) — Access date: 2026-11-06
