---
title: "Local Meeting Notes on a Mac: Fast Transcription, Still Needs Your Review"
description: "A one-machine test of three Whisper sizes and a small Qwen model: all measured results, privacy precautions and why unattended meeting notes are not reliable here."
locale: "en"
slug: "local-meeting-notes-mac-hands-on-test"
translationKey: "local-meeting-notes-mac-hands-on-test"
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
  - title: "AMI Meeting Corpus — dataset and licence"
    url: "https://huggingface.co/datasets/edinburghcstr/ami"
    accessDate: "2026-11-07"
  - title: "ASCEND — mixed-language dataset and licence"
    url: "https://huggingface.co/datasets/CAiRE/ASCEND"
    accessDate: "2026-11-07"
  - title: "whisper.cpp — upstream source-build project"
    url: "https://github.com/ggml-org/whisper.cpp"
    accessDate: "2026-11-07"
  - title: "Whisper large-v3-turbo Q5_0 — matching public weights"
    url: "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin"
    accessDate: "2026-11-07"
  - title: "Official Qwen2.5 1.5B Instruct GGUF"
    url: "https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF"
    accessDate: "2026-11-07"
headlineFigures:
  turbo_conversation_wer:
    label: "Turbo English-conversation word error rate on this short clip"
    value: 22.88
    unit: "percent WER"
    display: "22.88%"
  turbo_noise_wer:
    label: "Turbo noisy-English word error rate; different utterances, not a paired noise test"
    value: 29.13
    unit: "percent WER"
    display: "29.13%"
  turbo_mixed_mer:
    label: "Turbo mixed Han-character and English-word error rate, not Mandarin word WER"
    value: 20.37
    unit: "percent MER"
    display: "20.37%"
  fixture_checks_passed:
    label: "Qwen synthetic-fixture lexical checklist passes, not a quality rating"
    value: 3
    unit: "of 5 checks"
    display: "3/5"
audience:
  en: "Mac users who want private, local meeting transcription; based on a one-machine exploratory test, not a general benchmark."
  zh: "想在 Mac 上本地、私密地转写会议录音的用户；依据的是一台电脑上的探索性测试，不是通用基准。"
faq: []
draft: false
---

If you want private meeting notes without sending recordings to a cloud service, the speed looks promising. The accuracy is the catch. **None of the tested setups was reliable enough for unattended meeting notes.**

The best transcription candidate was **whisper.cpp large-v3-turbo Q5_0**. It had the lowest error on every clip, but still reached **22.88% English-conversation WER, 29.13% noisy-English WER and 20.37% mixed-language MER**. Use it to make a draft, then check names, numbers, decisions and commitments against the recording. Do not let a plausible-looking action list become an agreed task without checking it.

The small **Qwen2.5 1.5B Instruct Q4_K_M** summary model failed the controlled action-recovery checklist, scoring **3/5**. It is not a recommendation for final action lists. Importantly, its audio-derived inputs came from the **small Whisper model**, not turbo: a turbo-to-Qwen workflow was not tested.

These are hands-on results from **one Apple M2 Mac14,2 with 16 GiB physical unified RAM**, running macOS 26.5.1 (25F80), on **November 7, 2026**. They are not vendor benchmarks or a general Mac leaderboard. Chinese-speaking readers can use the workflow too, but this tiny mixed-language sample does **not** validate general Mandarin recognition or Chinese meeting-note quality.

## Know what the clips can—and cannot—tell you

| Input | Length | What it contains | Licence |
| --- | --- | --- | --- |
| English conversation | 75.82 seconds | Four-speaker AMI headset utterances, chronologically joined with 200 ms silence | CC BY 4.0 |
| Noisy English | 75.90 seconds | Different four-speaker AMI utterances, joined with 200 ms silence; seeded white noise at overall 10 dB SNR | CC BY 4.0 |
| English–Mandarin | 60.59 seconds | First mixed ASCEND test utterances lasting ≥2 seconds, joined with 200 ms silence | CC BY-SA 4.0 |

The English clips use the [AMI Meeting Corpus](https://huggingface.co/datasets/edinburghcstr/ami), attributed to the University of Edinburgh / AMI consortium. The mixed clip uses [ASCEND](https://huggingface.co/datasets/CAiRE/ASCEND), attributed to Holy Lovenia, Samuel Cahyawijaya, Genta Indra Winata and colleagues at CAiRE. References were the corresponding human corpus annotations—not model-generated transcripts. AMI derivatives retain CC BY 4.0; ASCEND derivative audio and references retain CC BY-SA 4.0.

**These are edited montages, not continuous meetings.** Original overlaps and gaps were removed. The noisy and conversation clips use different utterances, so their scores cannot isolate the effect of noise. White noise does not reproduce room echo, café babble or natural overlapping speech. No confidential user recordings were used, and no human listening or manual transcript correction was performed.

## Every measured run

Lower error is better. **WER** counts English word edits against reference words. **MER** counts Han-character and English-word edits against mixed reference tokens; it is not Mandarin whitespace-word WER, and it is not directly comparable with English WER. Normalization lowercases text, removes bracketed annotations and punctuation, and normalizes apostrophes.

Wall time includes launch, model loading, decoding or generation, and monitoring overhead. Summary timing excludes the separately started server's startup and the preceding model-inspection request. Each combination ran once, sequentially; the first base and turbo loads were colder. RSS was sampled about every 0.5 seconds and can miss spikes or double-count shared pages. It is **not total GPU or unified-memory usage**.

| Local model | Input | Wall seconds | Sampled peak tree RSS MiB | Swap growth MiB | Result |
| --- | --- | --- | --- | --- | --- |
| whisper.cpp base Q5_1 | English conversation | 9.47 | 273 | 0 | 39.83% WER |
| whisper.cpp base Q5_1 | Noisy English | 3.17 | 276 | 0 | 36.89% WER |
| whisper.cpp base Q5_1 | English–Mandarin | 3.15 | 254 | 0 | 50.00% MER |
| whisper.cpp small Q5_1 | English conversation | 5.19 | 468 | 0 | 53.39% WER |
| whisper.cpp small Q5_1 | Noisy English | 6.42 | 500 | 0 | 29.61% WER |
| whisper.cpp small Q5_1 | English–Mandarin | 7.91 | 492 | 0 | 42.59% MER |
| whisper.cpp large-v3-turbo Q5_0 | English conversation | 21.82 | 825 | 0 | 22.88% WER |
| whisper.cpp large-v3-turbo Q5_0 | Noisy English | 8.88 | 849 | 0 | 29.13% WER |
| whisper.cpp large-v3-turbo Q5_0 | English–Mandarin | 9.85 | 832 | 0 | 20.37% MER |
| Qwen2.5 1.5B Instruct Q4_K_M | English conversation | 23.68 | 1295 | 0 | 3/4 lexical checks |
| Qwen2.5 1.5B Instruct Q4_K_M | Noisy English | 8.53 | 1301 | 0 | 1/4 lexical checks |
| Qwen2.5 1.5B Instruct Q4_K_M | English–Mandarin | 3.75 | 1304 | 0 | 3/4 lexical checks |
| Qwen2.5 1.5B Instruct Q4_K_M | Synthetic fixture | 6.36 | 1343 | 0 | 3/5 lexical checks |

The edit-count denominators make the error rates easier to interpret:

| Whisper model | English conversation: edits / words | Noisy English: edits / words | English–Mandarin: edits / mixed tokens |
| --- | --- | --- | --- |
| base Q5_1 | 47/118 | 76/206 | 108/216 |
| small Q5_1 | 63/118 | 61/206 | 92/216 |
| large-v3-turbo Q5_0 | 27/118 | 60/206 | 44/216 |

ASR tree RSS includes the CLI. Qwen tree RSS includes the isolated Ollama server, runner and request client; a client-only high-water RSS reading is not the model's memory footprint. All runs exited successfully without a recorded stop reason.

**Speed was not the bottleneck in these samples.** Turbo handled roughly 61–76 seconds of audio in 8.88–21.82 seconds, at about 825–849 MiB sampled tree RSS. Qwen used about 1.26–1.31 GiB and took 3.75–23.68 seconds. Neither range is a promise for a full meeting.

## Why the action lists still need checking

The predeclared checklist required valid JSON, at least two exact-source facts, support for every fact, and source support for each action's task, owner and deadline. Unknown owners or deadlines had to remain “not stated.” The synthetic fixture additionally required both assigned tasks and the launch decision, without turning a suggestion into a commitment.

| Qwen input | Facts passing exact support | Actions passing lexical support | What failed |
| --- | --- | --- | --- |
| English conversation | 2/3 | 0/0 | One fact lacked exact support; no actions returned |
| Noisy English | 1/3 | 0/3 | Too few supported facts and no supported actions |
| English–Mandarin | 3/3 | 0/1 | Returned action failed the evidence rule |
| Synthetic fixture | 3/3 | 0/3 | Returned three actions instead of two; exact owner, deadline and decision recovery failed |

All four responses passed the JSON check. The conversation's 0/0 actions is not proof that all important actions were recovered. Exact-word checks intentionally penalize paraphrasing, so failure does not mean every sentence was false. Passing would still not establish usefulness, completeness or correct interpretation. **No human semantic summary review was performed.** Audio, transcripts and summaries were not submitted to a cloud reviewer.

Qwen ran through Ollama 0.40.13 with a 2048-token context, temperature 0, seed 20261107, a 384-token output cap and keep_alive=0. These settings describe the experiment, not a validated long-meeting configuration.

## Start with a reviewed transcript, not automatic minutes

1. **Try turbo on a short, non-confidential sample first.** Use the multilingual [whisper.cpp project](https://github.com/ggml-org/whisper.cpp) and the [matching Q5_0 turbo weights](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin). Runtime and Whisper models are MIT-licensed. The expected turbo SHA-1 is `e050f7970618a659205450ad97eb95a18d69c9ee`.
2. **For a new Mac, follow the upstream source-build route.** It requires Xcode command-line tools and CMake. The suggested sequence is clone the project, configure with `cmake -B build`, then build with `cmake --build build -j 4 --config Release`. This is a suggested installation path, **not a clean-Mac installation tested here**. Existing native Whisper and Ollama binaries were reused. Whisper's release version could not be verified; the tested binary was pinned by SHA-256 instead.
3. **Prepare your recording locally as mono 16 kHz PCM WAV.** Use automatic language detection for mixed speech and four threads as in the test. Do not use `-tr` if you want a bilingual transcript: that requests English translation. Language detection does not identify speakers, and it did not eliminate code-switching errors here.
4. **Check the transcript before asking for actions.** Correct names, amounts and dates while listening. For every action, confirm the task, owner, due date and whether it was actually agreed. Leave missing details unstated; ask a participant rather than guessing.
5. **Do not extrapolate to a full meeting yet.** No 30–60 minute meeting, chunk stitching, long-context summary, speaker attribution or multi-hour thermal test was run. A chunk-and-merge approach for longer meetings remains untested.

The [official Qwen GGUF](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF) is Apache 2.0-licensed. It is linked for model identity, not as a recommendation to automate your minutes. Its file was 1,117,320,736 bytes and matched the publisher's SHA-256. The normal Ollama pull failed a redirected-host safety check; the anonymous GGUF download needed resumed transfers and local import. Full-precision base downloads also timed out before smaller quantized weights were used. Setup was not one-click.

## Privacy and memory: useful precautions, not blanket guarantees

The test used anonymous public downloads, no sign-in or cached account token, and local inference. Whisper inference was network-denied. Ollama used a separate HOME and model store, cloud disabled, and an outbound-network restriction allowing loopback only. An external connection probe was blocked while local access succeeded. **Those checks describe this test, not your installation.** Verify confinement before using confidential audio, and keep recordings, transcripts and logs out of cloud-synced or shared folders unless you intend to share them. Local files still need access controls, retention rules and recording consent.

Existing machine load and swap were not cleared. Stage baselines already contained about 2.6–2.9 GiB of swap; no measured run increased swap. Safeguards were set to stop above +256 MiB swap growth or at critical memory-pressure level 4, with 240-second ASR and 180-second summary timeouts. They were **not deliberately stress-triggered**, so this is not proof of safe abort or sustained-load behavior. No unrelated applications were stopped; only the test-owned server was stopped afterwards.

A separate local implementation performed **180 numerical checks**, matching edit counts, rates, RSS samples and checklist flags. It found **two bookkeeping discrepancies**: epoch spans differed from monotonic timers by 0.0966 seconds and 0.0729 seconds, approximately 97 ms and 73 ms. The affected runs were small English–Mandarin and turbo English conversation. Reported wall times use monotonic timers; reading logs explains the later epoch endpoint. This was recomputation of existing observations, **not another inference run**.

Before confidential use, check that a failed run cannot reuse old output, the local server is the one you intended, long inputs fit its context, and cancellation actually stops the work. These safeguards were not independently validated end to end here. Network probes and numerical checks do not replace those checks or human quality review. Keep this as a small exploratory test, not a production-readiness pass.

## Ask DeTars to help you plan a private, reviewable transcription workflow

Send this request to DeTars and fill in the [brackets].

> Help me plan local transcription on [Mac model, memory and macOS] for [languages, recording length and audio conditions]. Start with a short non-confidential sample, separate transcription accuracy from summary quality, and show how I can check names, numbers, decisions and task owners. Explain local storage and network precautions. Ask before installing software, downloading models or sharing any recording.

Use these results as a practical starting point, not a guarantee of accuracy, privacy compliance or reliable automated minutes. Check recording consent and review important commitments with the people involved.

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [AMI Meeting Corpus — dataset and licence](https://huggingface.co/datasets/edinburghcstr/ami) — Access date: 2026-11-07
- [ASCEND — mixed-language dataset and licence](https://huggingface.co/datasets/CAiRE/ASCEND) — Access date: 2026-11-07
- [whisper.cpp — upstream source-build project](https://github.com/ggml-org/whisper.cpp) — Access date: 2026-11-07
- [Whisper large-v3-turbo Q5_0 — matching public weights](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin) — Access date: 2026-11-07
- [Official Qwen2.5 1.5B Instruct GGUF](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF) — Access date: 2026-11-07
