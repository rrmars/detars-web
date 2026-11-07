---
title: "Local Speech-to-Text: What a Five-Clip Mac Test Can Tell You"
description: "Compare five tested local transcription configurations on an Apple M2 Mac: accuracy, time, process memory, setup friction and honest limits."
locale: "en"
slug: "local-speech-to-text-five-clip-test"
translationKey: "local-speech-to-text-five-clip-test"
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
  - title: "LibriSpeech"
    url: "https://www.openslr.org/12/"
    accessDate: "2026-11-05"
  - title: "CC BY 4.0"
    url: "https://creativecommons.org/licenses/by/4.0/"
    accessDate: "2026-11-05"
  - title: "MLS"
    url: "https://www.openslr.org/94/"
    accessDate: "2026-11-05"
  - title: "LibriVox recording"
    url: "https://librivox.org/poesias-by-miguel-de-unamuno/"
    accessDate: "2026-11-05"
  - title: "in the USA"
    url: "https://librivox.org/pages/public-domain/"
    accessDate: "2026-11-05"
  - title: "CC0 1.0"
    url: "https://creativecommons.org/publicdomain/zero/1.0/"
    accessDate: "2026-11-05"
  - title: "whisper.cpp"
    url: "https://github.com/ggml-org/whisper.cpp/tree/v1.9.5"
    accessDate: "2026-11-05"
  - title: "ggml-base.bin and ggml-small.bin"
    url: "https://huggingface.co/ggerganov/whisper.cpp"
    accessDate: "2026-11-05"
  - title: "faster-whisper"
    url: "https://github.com/SYSTRAN/faster-whisper/tree/v1.2.1"
    accessDate: "2026-11-05"
  - title: "Systran/faster-whisper-small"
    url: "https://huggingface.co/Systran/faster-whisper-small"
    accessDate: "2026-11-05"
  - title: "Vosk"
    url: "https://github.com/alphacep/vosk-api"
    accessDate: "2026-11-05"
  - title: "small-en-us-0.15 and small-es-0.42"
    url: "https://alphacephei.com/vosk/models"
    accessDate: "2026-11-05"
  - title: "MLX Whisper"
    url: "https://github.com/ml-explore/mlx-examples/tree/main/whisper"
    accessDate: "2026-11-05"
  - title: "mlx-community/whisper-small-mlx"
    url: "https://huggingface.co/mlx-community/whisper-small-mlx"
    accessDate: "2026-11-05"
  - title: "Original Whisper"
    url: "https://raw.githubusercontent.com/openai/whisper/main/README.md"
    accessDate: "2026-11-05"
headlineFigures:
  successful_measured_runs:
    label: "Successful measured runs across the complete matrix"
    value: 25
    unit: "runs"
    display: "25"
  small_whisper_pooled_wer:
    label: "Tied whisper.cpp small and faster-whisper pooled WER, excluding overlap"
    value: 7
    unit: "percent_word_error_rate"
    display: "7.00%"
  cpp_small_total_processing:
    label: "whisper.cpp small end-to-end time across all clips after warmup"
    value: 9.33
    unit: "seconds"
    display: "9.33"
  total_audio_duration:
    label: "Combined duration of the five prepared clips"
    value: 204.03
    unit: "seconds"
    display: "204.03"
  vosk_maximum_process_rss:
    label: "Largest Vosk process RSS across these clips, not total unified memory"
    value: 298.6
    unit: "MiB_peak_process_RSS"
    display: "298.6"
audience:
  en: "Mac users choosing a local transcription workflow on Apple Silicon, comparing small-model setups across five short clips on an Apple M2 Mac."
  zh: "想在 Apple Silicon 的 Mac 上选择本地转写方案的人，本指南在一台 Apple M2 Mac 上用五段短音频比较小模型方案。"
faq: []
draft: false
---

**Want a transcript without uploading your recording? On this Apple M2 Mac, whisper.cpp small is a sensible starting point if you can manage a native build. It tied faster-whisper small at 7.00% pooled word error rate and took 9.33 seconds across the five clips. That is a useful starting choice, not a promise for your podcast, language or computer.**

All four engines actually ran locally, in five configurations. There were 25 successful measured runs and five unscored warmups on November 5, 2026 (UTC). No account was created and no audio was uploaded. These are short English and Spanish read-speech clips, not a Chinese transcription test; Chinese-speaking readers should try representative Chinese audio before choosing.

## Start with the workflow you need

| Your priority | Where I would start | Trade-off to expect |
|---|---|---|
| Small-model draft on Apple Silicon | whisper.cpp small | Best tied pooled WER here; native build takes effort |
| Quick first pass with a smaller Whisper footprint | whisper.cpp base | Less measured time and process RSS, but more correction |
| CPU processing or Python integration across platforms | faster-whisper small | Tested CPU path worked after a dependency repair; GPU timings are not directly comparable |
| Apple Silicon Python without a native C++ build | MLX Whisper small | Convenient Python path here; Apple-specific and converted-weight licence metadata needs care |
| Small language downloads or streaming-style CPU integration | Vosk small | Low process RSS; noticeably more errors on this noise clip |
| Interview crosstalk | Separate microphone tracks, then manual checks | No tool here demonstrated reliable speaker separation |

No licence fee or per-minute service charge was used. Local compute, storage, setup and correction time still cost something. There are no invented stars or overall review scores: the measured error counts are more useful than a rating.

## What was measured, on which Mac?

The machine had Apple M2, 16 GiB shared unified RAM, macOS 26.5.1 arm64 and Python 3.12.12. Only base and small weights were tested. One recognizer process and model ran at a time; other work on the Mac was not controlled. The distinct engines are whisper.cpp, faster-whisper, Vosk and MLX Whisper; the Whisper implementations share model ancestry.

Each configuration first had an unscored clean-clip warmup. Each measured clip then ran in a fresh process. Time includes sandbox/process startup, Python imports where applicable, model loading, decoding and output writing; downloads, audio preparation and scoring are excluded. Caches could already be warm. There was no repetition, error bar or significance test, so do not extrapolate these times into reliable full-episode throughput ratios.

Peak RSS is the process maximum resident set measured by macOS `/usr/bin/time -l`, converted to MiB. **It is not total CPU-plus-GPU unified memory or the memory pressure of the whole Mac.** A low RSS number does not guarantee headroom while your other applications are open.

| Configuration | Pooled WER, non-overlap clips | Total seconds, all clips | Maximum process RSS MiB | Backend |
|---|---:|---:|---:|---|
| whisper.cpp base | 12.50% | 4.93 | 330.2 | Metal GPU + Accelerate; 4 CPU threads |
| whisper.cpp small | 7.00% | 9.33 | 731.9 | Metal GPU + Accelerate; 4 CPU threads |
| faster-whisper small | 7.00% | 32.50 | 929.1 | CPU int8_float32, requested int8; 4 threads, 1 worker |
| Vosk small EN / ES | 20.00% | 15.79 | 298.6 | CPU; streaming KaldiRecognizer |
| MLX Whisper small | 7.50% | 15.97 | 850.1 | MLX / Apple GPU; greedy decoding |

The non-overlap aggregate pools edits and reference words, rather than averaging percentages: whisper.cpp small and faster-whisper each made 28 edits across 400 reference words. MLX was only two edits behind, not evidence of a general accuracy hierarchy. The five clips total 204.03 seconds; every measured run was faster than real time.

## Know what the clips do—and do not—represent

All clips use genuine human-recorded voices, converted to the same mono 16 kHz signed 16-bit PCM WAV format. Every clip concatenates segments. References are published aligned source text, checked by source ID and text, not generated by ASR and not independently re-transcribed by listening. Residual reference or boundary errors remain possible.

| Clip ID | Seconds | Reference words | Recording and construction |
|---|---:|---:|---|
| 01-studio-en | 36.565 | 62 | Nikolle Doolin, *Foolish Dictionary*: clean close-mic audiobook proxy, not a verified studio session |
| 02-overlap-en | 39.285 | 184 | Paul-Gabriel Wiener plus Nikolle Doolin: different passages mixed simultaneously from the start, not a conversation |
| 03-accented-en | 37.120 | 106 | Ulf Bjorklund, *The Force of Blood*: mild Scandinavian undertone, not a strong-accent challenge |
| 04-noise-en | 38.310 | 119 | Paul-Gabriel Wiener, *Robin Hood*: different speech plus generated white noise, not music |
| 05-spanish | 52.750 | 113 | Judith Vainman reads Miguel de Unamuno's *Poesías*: published MLS-aligned windows concatenated |

The overlap mix is `0.45 × A + 0.45 × B`; both passages begin at time zero and only the shorter tail is padded. Its reference puts all speaker A words before all speaker B words. **Ordinary WER therefore penalizes plausible interleavings: the overlap rows below are stress diagnostics, excluded from pooled accuracy, not diarization scores.** Record separate tracks if you can, then check crosstalk and speaker labels yourself.

The noise is seeded Gaussian white noise, seed 20261105, at 8 dB whole-clip RMS SNR; common peak scaling prevents clipping. Natural pauses affect that SNR. Because the clean and noise clips use different passages and readers, comparing them does not isolate a noise penalty. The Spanish excerpts use source intervals 337.25–355.11, 381.19–399.81 and 427.24–443.51 seconds, with gaps removed.

English recordings and reference text come from [LibriSpeech](https://www.openslr.org/12/), under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), credited to Vassil Panayotov, Guoguo Chen, Daniel Povey, Sanjeev Khudanpur and the named volunteer readers. Spanish reference alignments come from [MLS](https://www.openslr.org/94/), credited to Vineel Pratap, Qiantong Xu, Anuroop Sriram, Gabriel Synnaeve and Ronan Collobert. The [LibriVox recording](https://librivox.org/poesias-by-miguel-de-unamuno/) is public domain [in the USA](https://librivox.org/pages/public-domain/), not automatically everywhere. Generated noise was dedicated under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/); the underlying speech retains its licence.

## Full results: every configuration and clip

WER means `100 × (substitutions + deletions + insertions) / reference words`; lower is better. Jiwer 4.0.0 used word-level minimum Levenshtein edits. Both sides receive Unicode NFKC, lowercase, straightened apostrophes, punctuation-to-spaces and collapsed whitespace. Diacritics and apostrophes remain. Numbers, spellings and contractions are not made equivalent. Thus source `ELEVEN` versus `11`, or archaic Spanish `á` versus `a`, can count as errors without the same loss of meaning as a missed phrase.

S / D / I below means substitutions / deletions / insertions. RTF is elapsed time divided by audio duration; below 1 means faster than real time. WER retains the CSV's three decimal places to avoid inconsistent rounding in the earlier narrative. All rows completed successfully; independent saved validation reconciles all rows with word-edit calculations, transcripts and process logs.

| Configuration | Clip ID | WER | S / D / I | Seconds | RTF | RSS MiB |
|---|---|---:|---:|---:|---:|---:|
| whisper.cpp base | 01-studio-en | 12.903% | 6 / 2 / 0 | 0.808 | 0.0221 | 326.73 |
| whisper.cpp base | 02-overlap-en † | 79.891% | 59 / 84 / 4 | 1.076 | 0.0274 | 326.45 |
| whisper.cpp base | 03-accented-en | 10.377% | 9 / 0 / 2 | 1.116 | 0.0301 | 325.64 |
| whisper.cpp base | 04-noise-en | 14.286% | 13 / 2 / 2 | 0.915 | 0.0239 | 329.23 |
| whisper.cpp base | 05-spanish | 12.389% | 13 / 0 / 1 | 1.017 | 0.0193 | 330.16 |
| whisper.cpp small | 01-studio-en | 9.677% | 5 / 1 / 0 | 1.706 | 0.0466 | 729.94 |
| whisper.cpp small | 02-overlap-en † | 63.587% | 3 / 114 / 0 | 1.614 | 0.0411 | 730.38 |
| whisper.cpp small | 03-accented-en | 5.660% | 6 / 0 / 0 | 1.926 | 0.0519 | 729.55 |
| whisper.cpp small | 04-noise-en | 10.084% | 10 / 1 / 1 | 2.013 | 0.0525 | 730.72 |
| whisper.cpp small | 05-spanish | 3.540% | 4 / 0 / 0 | 2.073 | 0.0393 | 731.94 |
| faster-whisper small | 01-studio-en | 6.452% | 4 / 0 / 0 | 5.785 | 0.1582 | 919.97 |
| faster-whisper small | 02-overlap-en † | 63.587% | 4 / 113 / 0 | 6.107 | 0.1555 | 922.58 |
| faster-whisper small | 03-accented-en | 5.660% | 6 / 0 / 0 | 5.269 | 0.1420 | 922.34 |
| faster-whisper small | 04-noise-en | 10.924% | 10 / 0 / 3 | 6.093 | 0.1590 | 929.14 |
| faster-whisper small | 05-spanish | 4.425% | 4 / 1 / 0 | 9.250 | 0.1754 | 915.11 |
| Vosk small EN / ES | 01-studio-en | 17.742% | 6 / 2 / 3 | 2.167 | 0.0593 | 221.80 |
| Vosk small EN / ES | 02-overlap-en † | 82.609% | 68 / 67 / 17 | 4.319 | 0.1099 | 298.64 |
| Vosk small EN / ES | 03-accented-en | 14.151% | 11 / 0 / 4 | 3.056 | 0.0823 | 250.41 |
| Vosk small EN / ES | 04-noise-en | 34.454% | 30 / 5 / 6 | 3.870 | 0.1010 | 277.12 |
| Vosk small EN / ES | 05-spanish | 11.504% | 9 / 4 / 0 | 2.380 | 0.0451 | 199.75 |
| MLX Whisper small | 01-studio-en | 9.677% | 5 / 1 / 0 | 2.711 | 0.0741 | 843.44 |
| MLX Whisper small | 02-overlap-en † | 57.065% | 13 / 81 / 11 | 3.127 | 0.0796 | 848.09 |
| MLX Whisper small | 03-accented-en | 5.660% | 6 / 0 / 0 | 2.919 | 0.0786 | 842.27 |
| MLX Whisper small | 04-noise-en | 11.765% | 11 / 0 / 3 | 3.432 | 0.0896 | 850.09 |
| MLX Whisper small | 05-spanish | 3.540% | 4 / 0 / 0 | 3.782 | 0.0717 | 843.03 |

† Stress diagnostic only. The clip table supplies the reference-word denominator for each row.

Clean sound still needs proofreading of unusual vocabulary. In the Spanish draft, whisper.cpp small wrote “No es caso” for “no hagas caso”, “Ojas” for “hojas” and “mesen” for “mecen”. A low aggregate error rate is not permission to publish without checking meaning, names and omissions.

## Setup details worth keeping, rather than choosing everything newest

The versions below were actually tested, not simply found in a registry. The source and documentation access date is November 5, 2026 (UTC); this page does not refresh those versions or claim that downloads remain available.

| Tool and tested version | Selected weights | Setup experience here | Code / weight licence |
|---|---|---|---|
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp/tree/v1.9.5), source v1.9.5; binary 1.9.5-dev | [ggml-base.bin and ggml-small.bin](https://huggingface.co/ggerganov/whisper.cpp), multilingual FP16 | Higher effort: CMake native build; Git TLS failure required source-archive download | MIT / MIT |
| [faster-whisper](https://github.com/SYSTRAN/faster-whisper/tree/v1.2.1) 1.2.1; CTranslate2 4.8.5; PyAV 16.1.0 | [Systran/faster-whisper-small](https://huggingface.co/Systran/faster-whisper-small), quantized on load | Higher effort: default PyAV 19.0.2 failed decoding; dependency pin repaired it | MIT / MIT |
| [Vosk](https://github.com/alphacep/vosk-api) 0.3.44, Mac wheel | [small-en-us-0.15 and small-es-0.42](https://alphacephei.com/vosk/models), selected by language | Moderate: Python package plus separate model archives; roughly 40 MB per language | Apache-2.0 / Apache-2.0 for these models |
| [MLX Whisper](https://github.com/ml-explore/mlx-examples/tree/main/whisper) 0.4.3; MLX 0.32.4 | [mlx-community/whisper-small-mlx](https://huggingface.co/mlx-community/whisper-small-mlx), FP16 | Moderate: native Apple Silicon Python, FFmpeg and weights | MIT / original Whisper MIT provenance; converted card has no explicit licence field |

**Counterintuitive setup finding: a newer dependency broke the working path.** PyAV 19.0.2 rejected faster-whisper's `metadata_errors` argument. Pinning PyAV 16.1.0 made the warmup and complete measured matrix succeed. Keep the tested dependency freeze as your starting point, rather than assuming every newest package works together. Vosk 0.3.44 was used because it had the Mac wheel; 0.3.45 did not. Setup difficulty describes this command-line installation, not a clean-machine GUI test; compiler and FFmpeg tooling already existed.

whisper.cpp used a Release build with `GGML_METAL=ON`, `WHISPER_BUILD_TESTS=OFF` and build `-j2`. FFmpeg 9.0.2 was used for preparation and MLX decoding. Git TLS and interrupted large transfers were setup problems, not recognition failures; source-archive download, resumable HTTP ranges and final SHA-256 checks recovered the payloads. Failed preliminary output was excluded from the completed matrix.

Explicit source language and transcription, not translation, were used. Whisper settings targeted greedy decoding at temperature 0: C++ beam and best-of 1, faster-whisper beam 1, MLX without a beam argument because beam search is unsupported. There was no prior-text conditioning, prompt, added denoising or VAD. Vosk consumed every 4,000-frame chunk and final output using the matching language model. Different segmentation, suppression and FP16 versus int8 mean this compares usable configurations, not isolated kernels.

For an offline setup, download complete local model and tokenizer assets first, then test with networking disabled. Here every measured recognizer and its children ran under `sandbox-exec` with `(deny network*)`, alongside HF offline flags; a TCP-connect probe was denied with EPERM. Documentation, package, source and weight downloads were separate online setup steps. This establishes the recorded run's local behavior, not a privacy guarantee for every application using these libraries.

The converted MLX card does not declare its own licence. [Original Whisper](https://raw.githubusercontent.com/openai/whisper/main/README.md) explicitly licenses code and weights under MIT; inherited conversion provenance is a reasoned inference, not an explicit converted-card declaration. This is not an exhaustive dependency-licence audit. Keep relevant licences and notices if redistributing tools or weights.

## Before you settle on a tool

Try your own representative audio and note correction time, not just elapsed processing time. Include names, quiet speech and difficult passages. For Chinese transcription, mixed-language speech, music, speaker attribution, subtitle timing or long recordings, this test supplies no validation. Literary diction, repeated readers and public benchmark exposure also limit generalization; this was not a contamination-controlled blind test.

On this Mac, I would start with whisper.cpp small for an editable draft; choose base if the smaller footprint matters more, faster-whisper for the tested CPU integration path, MLX for Apple-native Python, or Vosk when its lighter streaming-style setup suits you. Keep a manual check before anything is shared. There is no need to declare a universal winner to make a sensible first choice.

## Ask DeTars to plan your local transcription workflow

Send DeTars the request below, replacing the [brackets] with your details.

> Help me choose a local transcription workflow for [computer, operating system and memory], [audio language and code-switching], [recording length and speaker setup] and [privacy requirements]. Compare [tools I can install], setup effort and proofreading needs. Use this small test only where relevant; identify what needs a separate test with my permission. Do not upload audio, install packages or run models without asking.

*Use this as a starting point, not a guarantee of transcript accuracy, compatibility or privacy; check your own setup before relying on it.*

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [LibriSpeech](https://www.openslr.org/12/) — Access date: 2026-11-05
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — Access date: 2026-11-05
- [MLS](https://www.openslr.org/94/) — Access date: 2026-11-05
- [LibriVox recording](https://librivox.org/poesias-by-miguel-de-unamuno/) — Access date: 2026-11-05
- [in the USA](https://librivox.org/pages/public-domain/) — Access date: 2026-11-05
- [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — Access date: 2026-11-05
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp/tree/v1.9.5) — Access date: 2026-11-05
- [ggml-base.bin and ggml-small.bin](https://huggingface.co/ggerganov/whisper.cpp) — Access date: 2026-11-05
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper/tree/v1.2.1) — Access date: 2026-11-05
- [Systran/faster-whisper-small](https://huggingface.co/Systran/faster-whisper-small) — Access date: 2026-11-05
- [Vosk](https://github.com/alphacep/vosk-api) — Access date: 2026-11-05
- [small-en-us-0.15 and small-es-0.42](https://alphacephei.com/vosk/models) — Access date: 2026-11-05
- [MLX Whisper](https://github.com/ml-explore/mlx-examples/tree/main/whisper) — Access date: 2026-11-05
- [mlx-community/whisper-small-mlx](https://huggingface.co/mlx-community/whisper-small-mlx) — Access date: 2026-11-05
- [Original Whisper](https://raw.githubusercontent.com/openai/whisper/main/README.md) — Access date: 2026-11-05
