---
title: "Local Text-to-Speech: Our Five-Tool Mac Test"
description: "Choose an offline narration starting point from our own hands-on English test, with measured speed, Whisper word errors and publishing-rights cautions."
locale: "en"
slug: "local-text-to-speech-five-tool-test"
translationKey: "local-text-to-speech-five-tool-test"
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
  - title: "publisher model card"
    url: "https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "wrapper licence"
    url: "https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Lessac model card"
    url: "https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/lessac/medium/MODEL_CARD"
    accessDate: "2026-11-06"
  - title: "research-only dataset agreement"
    url: "https://www.cstr.ed.ac.uk/projects/blizzard/2013/lessac_blizzard2013/license.html"
    accessDate: "2026-11-06"
  - title: "voice repository metadata"
    url: "https://huggingface.co/rhasspy/piper-voices/raw/main/README.md"
    accessDate: "2026-11-06"
  - title: "macOS Tahoe licence"
    url: "https://www.apple.com/legal/sla/docs/macOSTahoe.pdf"
    accessDate: "2026-11-06"
  - title: "applicable agreements can differ"
    url: "https://www.apple.com/legal/sla/"
    accessDate: "2026-11-06"
  - title: "distribution terms"
    url: "https://raw.githubusercontent.com/festvox/flite/v2.2/COPYING"
    accessDate: "2026-11-06"
  - title: "bundled SLT voice notice"
    url: "https://raw.githubusercontent.com/festvox/flite/v2.2/lang/cmu_us_slt/cmu_us_slt.c"
    accessDate: "2026-11-06"
  - title: "distribution licence"
    url: "https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.52.0/COPYING"
    accessDate: "2026-11-06"
  - title: "voice catalogue"
    url: "https://huggingface.co/hexgrad/Kokoro-82M/raw/main/VOICES.md"
    accessDate: "2026-11-06"
headlineFigures:
  successful_outputs:
    label: "Successful local synthesis outputs across all tool/script pairs"
    value: 25
    unit: "WAV_outputs"
    display: "25"
  kokoro_normalized_pooled_wer:
    label: "Kokoro pooled normalized WER via local English Whisper; not human naturalness"
    value: 0.83
    unit: "percent_word_error_rate"
    display: "0.83%"
  kokoro_generation_total:
    label: "Kokoro total wall generation time including separate process starts"
    value: 72.47
    unit: "seconds"
    display: "72.47"
  kokoro_audio_total:
    label: "Kokoro generated audio duration across all scripts"
    value: 89
    unit: "seconds"
    display: "89.00"
  kokoro_peak_tree_rss:
    label: "Largest sampled Kokoro process-tree RSS, not whole-machine unified memory"
    value: 1048.5
    unit: "MiB_sampled_process_tree_RSS"
    display: "1048.5"
  kokoro_aggregate_rtf:
    label: "Kokoro total generation time divided by total generated audio"
    value: 0.814
    unit: "real_time_factor"
    display: "0.814"
audience:
  en: "English- and Chinese-speaking local-tool users choosing offline narration on a Mac; the English-only hands-on test does not validate Chinese synthesis."
  zh: "为 Mac 选择离线配音工具的英语和中文读者；本次纯英语实测不验证中文合成质量。"
faq: []
draft: false
---

Want an offline narrator for your videos? I would start with Kokoro ONNX, using Kokoro-82M v1.0 and af_heart. In our own hands-on test on an Apple M2 Mac, it had the lowest pooled normalized word error rate, 0.83%, using local Whisper transcription. It took 72.47 seconds to produce 89.00 seconds of audio. That makes it a useful first choice here, not a universal winner.

No human audition was performed. Naturalness, tone and emotional delivery are unassessed. A recognizer recovering the words is not the same as a person enjoying the voice. Listen to your own samples before choosing.

Publishing rights also change the choice. Piper's tested Lessac voice has unclear model rights. Apple's system-voice terms restrict public sharing, not just paid work. Neither is a cleared public-video narrator on the strength of this test.

## Which tool fits your next step?

- Start with Kokoro for the strongest measured word recovery here and a clearer publisher model licence. It was slower than the others; short paragraphs are a sensible place to begin.
- Consider Piper if speed and lower memory matter, but choose a voice only after checking its specific rights. Do not assume the tested Lessac voice is commercially cleared.
- Consider Flite as a small, permissively licensed English fallback, or eSpeak NG for very fast generation. This test does not tell you whether either sounds pleasant.
- Keep macOS say as a private comparison baseline unless you establish additional rights. It is proprietary, not another open-source engine.

We generated five original English scripts with each of five tools: plain explanation, numbers, abbreviations, emotion and names. All 25 outputs succeeded on November 6, 2026. This is English-only testing. It does not validate Chinese speech, even though some tools list Mandarin support.

## The results at a glance

RTF means generation time divided by output audio duration. Below 1 means faster than real time. Each total includes five separate process and model starts, not a warm server.

| Tool / voice | Generation s | Audio s | RTF | Peak tree RSS MiB | WAV MiB | Raw WER | Normalized WER |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Kokoro ONNX · af_heart | 72.47 | 89.00 | 0.814 | 1048.5 | 4.07 | 1.22% | 0.83% |
| Piper · Lessac medium | 9.17 | 81.47 | 0.113 | 300.6 | 3.43 | 4.08% | 2.89% |
| eSpeak NG · en-us | 1.04 | 85.18 | 0.012 | 23.6 | 3.58 | 4.08% | 3.72% |
| Flite · slt | 1.99 | 84.46 | 0.024 | 40.7 | 2.58 | 4.08% | 2.89% |
| macOS say · Samantha | 5.24 | 83.51 | 0.063 | 52.9 | 3.51 | 3.67% | 2.89% |

Peak tree RSS is sampled process memory, not total unified-memory pressure. The say figure can omit an existing OS speech daemon, so it is incomplete. Kokoro's aggregate RTF is below real time, but its plain and names clips each took longer to generate than to play.

## Check rights before putting a voice in a public video

Kokoro's [publisher model card](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md) declares Apache-2.0 weights. The [wrapper licence](https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE) is MIT; its eSpeak phonemizer dependency has GPL terms. These are different components, not a blanket promise that everything is MIT. Keep the required notices when distributing software or model assets.

For Piper, the [Lessac model card](https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/lessac/medium/MODEL_CARD) links a [research-only dataset agreement](https://www.cstr.ed.ac.uk/projects/blizzard/2013/lessac_blizzard2013/license.html), while the [voice repository metadata](https://huggingface.co/rhasspy/piper-voices/raw/main/README.md) says MIT globally. The specific weight grant is unresolved. That conflict does not prove every trained-model output is prohibited, but it is a good reason to seek clarification or pick a clearly licensed voice before publishing.

Apple's [macOS Tahoe licence](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf), English page 3, section 2F, permits original system-voice content for personal noncommercial use and excludes public sharing, publishing and commercial contexts. Nonprofit publication is not a workaround. Check the terms accompanying your own installation; Apple notes that [applicable agreements can differ](https://www.apple.com/legal/sla/).

Flite's [distribution terms](https://raw.githubusercontent.com/festvox/flite/v2.2/COPYING) and [bundled SLT voice notice](https://raw.githubusercontent.com/festvox/flite/v2.2/lang/cmu_us_slt/cmu_us_slt.c) support the permissive treatment of this built-in voice, not every external voice file. eSpeak NG's [distribution licence](https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.52.0/COPYING) covers the native distribution tested here; no separately licensed MBROLA voice was used.

## What the numbers can—and cannot—tell you

The machine had Apple M2, 16 GiB RAM, macOS 26.5.1 build 25F80 and Python 3.11.4. Kokoro and Piper used CPU ONNX inference. Other work on the Mac continued. Each tool/script pair ran once, with no repetitions, cache flush, thermal control or isolated machine. Startup, model loading and output writing are included; say also includes AIFF-to-WAV conversion. Native pacing and sample rates were retained. Outputs are mono 16-bit PCM WAV.

The monitor summed the launched process and its descendants every 20 ms. It can miss brief peaks. A 5.5 GiB child-tree memory cap and 10-minute process timeout were set; neither was reached. The separate `/usr/bin/time -l` maximum RSS is not a simultaneous tree sum. Speech recognition ran after synthesis, not alongside it.

Each WAV was resampled locally to 16 kHz mono and transcribed by whisper.cpp small.en: CPU-only, 2 threads, English, beam default 5, temperature 0, no fallback and no reference-text prompt. The binary's exact upstream revision is unknown because its version flag was unsupported; its executable hash was saved. The model's SHA1 matched the upstream value. No cloud recognizer was used.

WER is substitutions plus deletions plus insertions, divided by reference words. Pooled WER adds edits and reference words; it does not average script percentages. Raw scoring lowercases English alphanumeric words and retains internal apostrophes; punctuation forms boundaries, including within decimals. Normalized scoring uses whisper-normalizer 1.0.0 EnglishTextNormalizer(tts_mode=False) on both texts. It standardizes numbers, currency, titles, contractions and spelling, and removes punctuation and fillers. Jiwer 4.0.0 supplied the scoring. Neither normalization nor a low WER guarantees correct meaning.

The [saved independent calculation](#sources-and-access-dates) matched all 50 script-level WER values from fresh script and transcript reads using separate edit-distance code. That checks arithmetic, not how the voices sound. Proper names can be spelled differently despite understandable pronunciation; Whisper can also correct a bad pronunciation. Zero errors on the emotion script do not prove expressive delivery.

## Every tool and script result

Plain, numbers, abbreviations, emotion and names are the script IDs. Tree RSS and time RSS are different measurements; both are in MiB. Bytes are output WAV sizes, and Hz is the output sample rate. Raw and normalized WER are percentages. All rows succeeded.

| Tool / voice | Script | Wall s | Audio s | RTF | Tree RSS MiB | time RSS MiB | Bytes | Hz | Raw WER | Normalized WER |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Kokoro ONNX · af_heart | plain | 19.015 | 16.320 | 1.165 | 985.1 | 984.6 | 783,404 | 24000 | 0.00% | 0.00% |
| Kokoro ONNX · af_heart | numbers | 7.995 | 20.949 | 0.382 | 1018.4 | 1019.6 | 1,005,612 | 24000 | 2.04% | 0.00% |
| Kokoro ONNX · af_heart | abbreviations | 15.437 | 18.197 | 0.848 | 1048.5 | 1048.8 | 873,516 | 24000 | 0.00% | 0.00% |
| Kokoro ONNX · af_heart | emotion | 10.163 | 15.659 | 0.649 | 963.1 | 963.1 | 751,660 | 24000 | 0.00% | 0.00% |
| Kokoro ONNX · af_heart | names | 19.864 | 17.877 | 1.111 | 951.9 | 951.4 | 858,156 | 24000 | 4.08% | 4.08% |
| Piper · Lessac medium | plain | 2.689 | 14.803 | 0.182 | 246.3 | 245.2 | 652,844 | 22050 | 2.04% | 2.04% |
| Piper · Lessac medium | numbers | 1.614 | 19.667 | 0.082 | 300.6 | 299.9 | 867,372 | 22050 | 8.16% | 4.35% |
| Piper · Lessac medium | abbreviations | 1.549 | 16.742 | 0.093 | 260.4 | 260.5 | 738,348 | 22050 | 8.33% | 6.25% |
| Piper · Lessac medium | emotion | 1.540 | 14.872 | 0.104 | 217.5 | 216.5 | 655,916 | 22050 | 0.00% | 0.00% |
| Piper · Lessac medium | names | 1.780 | 15.383 | 0.116 | 288.9 | 287.8 | 678,444 | 22050 | 2.04% | 2.04% |
| eSpeak NG · en-us | plain | 0.746 | 14.742 | 0.051 | 23.6 | 15.9 | 650,166 | 22050 | 2.04% | 2.04% |
| eSpeak NG · en-us | numbers | 0.064 | 20.996 | 0.003 | 16.2 | 15.3 | 925,954 | 22050 | 6.12% | 4.35% |
| eSpeak NG · en-us | abbreviations | 0.069 | 17.082 | 0.004 | 23.3 | 15.7 | 753,348 | 22050 | 4.17% | 4.17% |
| eSpeak NG · en-us | emotion | 0.067 | 16.118 | 0.004 | 23.4 | 15.7 | 710,846 | 22050 | 0.00% | 0.00% |
| eSpeak NG · en-us | names | 0.094 | 16.247 | 0.006 | 23.6 | 15.5 | 716,530 | 22050 | 8.16% | 8.16% |
| Flite · slt | plain | 1.104 | 14.620 | 0.076 | 35.3 | 18.9 | 467,884 | 16000 | 0.00% | 0.00% |
| Flite · slt | numbers | 0.267 | 20.390 | 0.013 | 40.7 | 24.4 | 652,524 | 16000 | 6.12% | 4.35% |
| Flite · slt | abbreviations | 0.199 | 16.610 | 0.012 | 37.2 | 20.8 | 531,564 | 16000 | 2.08% | 0.00% |
| Flite · slt | emotion | 0.216 | 15.520 | 0.014 | 36.1 | 19.9 | 496,684 | 16000 | 0.00% | 0.00% |
| Flite · slt | names | 0.201 | 17.320 | 0.012 | 37.9 | 21.5 | 554,284 | 16000 | 12.24% | 10.20% |
| macOS say · Samantha | plain | 1.171 | 14.381 | 0.081 | 52.0 | 35.5 | 634,298 | 22050 | 0.00% | 0.00% |
| macOS say · Samantha | numbers | 1.175 | 20.730 | 0.057 | 52.5 | 35.7 | 914,272 | 22050 | 8.16% | 4.35% |
| macOS say · Samantha | abbreviations | 0.993 | 17.190 | 0.058 | 52.9 | 35.7 | 758,158 | 22050 | 8.33% | 8.33% |
| macOS say · Samantha | emotion | 0.965 | 15.710 | 0.061 | 52.3 | 35.7 | 692,910 | 22050 | 0.00% | 0.00% |
| macOS say · Samantha | names | 0.939 | 15.499 | 0.061 | 52.0 | 35.5 | 683,594 | 22050 | 2.04% | 2.04% |

You can compare the test scripts (original supporting file is not published; use the information in this guide), full results CSV (original supporting file is not published; use the information in this guide) and report with audio players (original supporting file is not published; use the information in this guide). The latter includes the Apple and Piper samples for private comparison; their presence does not grant publishing rights.

## Setup without confusing catalogue claims with tested speech

Versions below are what ran, not a promise of today's package compatibility. Download figures cover primary code artifacts and model payloads, not all dependencies, retries or network traffic.

| Tool | Tested version / voice | Effort here | Primary download payload | Code / voice rights |
| --- | --- | --- | --- | --- |
| Kokoro | kokoro-onnx 0.6.1; onnxruntime 1.31.1; af_heart | 4 steps: environment, package, two assets, run; no build | 26 KB wrapper + 337.36 MiB model/voices; dependencies extra | MIT wrapper; Apache-2.0 weights; GPL eSpeak dependency |
| Piper | piper-tts 1.8.0; Lessac medium | 4 steps: environment, package, ONNX + JSON, run; native wheel | 32.54 MiB wheel + 60.28 MiB model/config; dependencies extra | GPL-3.0-or-later code; specific Lessac model rights unclear |
| eSpeak NG | 1.52.0; en-us | brew install espeak-ng, then synthesize | 12.35 MiB bottle + 0.04 MiB pcaudiolib; native voices included | GPL-3.0-or-later; no MBROLA |
| Flite | Homebrew 2.2; binary flite-2.2-current Sep 2018; slt | brew install flite, then synthesize | 46.87 MiB bottle; built-in voices included | CMU permissive terms for this distribution and built-in SLT |
| macOS say | macOS 26.5.1; Samantha | Already installed; generate AIFF, convert to WAV | 0 new bytes here; additional voices may need downloads | Proprietary; system-voice personal noncommercial and public-sharing restrictions |

Kokoro's [voice catalogue](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/VOICES.md) lists 54 voices across 8 languages, counting US and UK English as accents of the same language. This wrapper was tested only in US English. A Mandarin entry in the catalogue does not establish Chinese quality or support in this exact setup. Flite's installed English choices were kal, awb_time, kal16, awb, rms and slt; the clock voice is specialized.

For Kokoro, the installation recipe (original supporting file is not published; use the information in this guide) pins packages and checks model hashes. It uses Python 3.11 and uv, which were already available. Use the tested model-files-v1.0 export, not a newer export merely because it has the same model-version filename. The narration helper (original supporting file is not published; use the information in this guide) passed a separate network-denied smoke test with existing packages and assets. The installer was syntax-checked, not rerun end-to-end in a second fresh environment.

Setup needs internet for public packages and weights. After setup, synthesis and transcription in this test ran with explicit local paths, offline flags and sandbox-exec `(deny network*)`. A socket-bind probe was denied. No account was created and no scripts, transcripts or audio were uploaded. This is not a machine-wide firewall for existing OS daemons or a privacy guarantee for every application using these engines.

Before sharing narration, work in short paragraphs. Spell important amounts, dates, abbreviations and names as you want them spoken. Then listen to the final audio. These are practical next steps, not additional measured results.

## FAQ

### Which voice sounded most natural?

We cannot say. No human audition or cloud listening assessment was performed. Kokoro leads the measured word-recovery comparison, not a naturalness ranking.

### Can I use the built-in Mac voice in a free public video?

Do not treat it as cleared. The inspected Tahoe terms restrict public sharing and nonprofit contexts too. Establish the rights that apply to your installation before publishing.

### Does this tell me which tool to use for Chinese?

No. Every test script and the Whisper control were English-only. Try representative Chinese text and check the exact voice, phonemizer path and licence separately.

### Is the fastest tool the best choice?

Not necessarily. eSpeak NG had the shortest total generation time, but speed does not measure pleasantness or publishing rights. Choose for your workflow, then audition your own text.

## Ask DeTars to plan your offline narration setup

Send DeTars the request below, filling in the [brackets] with your details.

> Help me choose an offline narrator for [computer, operating system and memory], [language and sample text], [video length] and [private use or public publishing]. Compare setup effort, voice-specific rights and what I should listen for. Use this English test only where relevant. Ask before installing packages, downloading models, running speech tools or uploading any text or audio.

Use this as a starting point, not a guarantee of voice quality, compatibility, privacy or publishing rights; this is not legal advice.

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [publisher model card](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md) — Access date: 2026-11-06
- [wrapper licence](https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE) — Access date: 2026-11-06
- [Lessac model card](https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/lessac/medium/MODEL_CARD) — Access date: 2026-11-06
- [research-only dataset agreement](https://www.cstr.ed.ac.uk/projects/blizzard/2013/lessac_blizzard2013/license.html) — Access date: 2026-11-06
- [voice repository metadata](https://huggingface.co/rhasspy/piper-voices/raw/main/README.md) — Access date: 2026-11-06
- [macOS Tahoe licence](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf) — Access date: 2026-11-06
- [applicable agreements can differ](https://www.apple.com/legal/sla/) — Access date: 2026-11-06
- [distribution terms](https://raw.githubusercontent.com/festvox/flite/v2.2/COPYING) — Access date: 2026-11-06
- [bundled SLT voice notice](https://raw.githubusercontent.com/festvox/flite/v2.2/lang/cmu_us_slt/cmu_us_slt.c) — Access date: 2026-11-06
- [distribution licence](https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.52.0/COPYING) — Access date: 2026-11-06
- [voice catalogue](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/VOICES.md) — Access date: 2026-11-06
