---
title: "本地文字转语音：我们亲手测了五款 Mac 工具"
description: "用我们亲手完成的英语测试选择离线配音起点，比较耗时、Whisper 词错误率和发布权限，同时看清没有试听的局限。"
locale: "zh"
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
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
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
  en: "Mac users choosing a tool for offline narration, based on a hands-on test of five tools on an Apple M2 Mac."
  zh: "想在 Mac 上选择离线配音工具的人，依据在 Apple M2 Mac 上对五款工具的实际测试。"
faq: []
draft: false
---

想给视频找一个离线配音工具？我会先试 Kokoro ONNX，使用 Kokoro-82M v1.0 和 af_heart。我们在 Apple M2 Mac 上亲手测试后，它通过本地 Whisper 转写得到的汇总规范化词错误率最低，为 0.83%。生成 89.00 秒音频用了 72.47 秒。它是这台机器上值得先试的选择，不是所有场景的冠军。

本次没有人工试听。声音是否自然、音色是否合适、情绪是否到位，都没有评估。识别器能还原文字，不等于人听着舒服。选定之前，请用自己的文本生成样音并试听。

发布权限也会改变选择。Piper 这次使用的 Lessac 音色，模型权利仍不清楚。Apple 系统语音条款限制公开分享，不只是收费使用。不能因为它们参加了测试，就认为可以直接拿去做公开视频配音。

## 先按自己的用途选

- 想先试本次文字还原表现最好的方案，可以选 Kokoro，模型发布方的许可也更明确。但它比其他工具慢，建议先从短段落开始。
- 在意速度和较低内存占用，可以考虑 Piper，但要先核对具体音色的权利。不要把这次的 Lessac 音色当成已经获得商业使用许可。
- 想要体积小、许可宽松的英语备选，可以考虑 Flite；重视生成速度，可以考虑 eSpeak NG。本次无法告诉你它们是否悦耳。
- 除非另行取得相应权利，否则把 macOS say 留作私人比较基线。它是专有工具，不是另一款开源引擎。

我们让五款工具分别生成五段原创英语脚本，涵盖普通说明、数字、缩写、情绪和姓名。2026年11月6日，全部 25 个输出都成功了。这是纯英语测试。即使部分工具列有普通话支持，也不能据此确认中文语音表现。

## 先看汇总结果

RTF 是生成耗时除以音频时长，小于 1 表示生成速度快于播放速度。每项总耗时都包含五次独立启动进程和加载模型，不是常驻服务热启动的结果。

| 工具及音色 | 生成秒数 | 音频秒数 | RTF | 进程树峰值 RSS MiB | WAV MiB | 原始 WER | 规范化 WER |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Kokoro ONNX · af_heart | 72.47 | 89.00 | 0.814 | 1048.5 | 4.07 | 1.22% | 0.83% |
| Piper · Lessac medium | 9.17 | 81.47 | 0.113 | 300.6 | 3.43 | 4.08% | 2.89% |
| eSpeak NG · en-us | 1.04 | 85.18 | 0.012 | 23.6 | 3.58 | 4.08% | 3.72% |
| Flite · slt | 1.99 | 84.46 | 0.024 | 40.7 | 2.58 | 4.08% | 2.89% |
| macOS say · Samantha | 5.24 | 83.51 | 0.063 | 52.9 | 3.51 | 3.67% | 2.89% |

进程树峰值 RSS 是抽样得到的进程内存，不是整台机器的统一内存压力。say 的数字可能漏掉已经运行的系统语音守护进程，因此并不完整。Kokoro 的汇总 RTF 小于实时，但 plain 和 names 两段的生成时间都超过了各自的播放时间。

## 放进公开视频前，先确认音色权利

Kokoro 的[发布方模型说明](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md)将权重标为 Apache-2.0。[封装库许可](https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE)是 MIT；依赖的 eSpeak 音素转换组件有 GPL 条款。这些是不同组件，不代表整套软件都采用 MIT。分发软件或模型文件时，请保留要求的声明。

Piper 的 [Lessac 模型卡](https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/lessac/medium/MODEL_CARD)链接到[仅供研究的数据集协议](https://www.cstr.ed.ac.uk/projects/blizzard/2013/lessac_blizzard2013/license.html)，但[音色仓库元数据](https://huggingface.co/rhasspy/piper-voices/raw/main/README.md)又整体标为 MIT。这个具体权重的授权仍不明确。冲突不等于证明所有模型输出都被禁止使用，但在发布前，值得先取得澄清，或换一个权利清楚的音色。

Apple 的 [macOS Tahoe 许可](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf)英文第 3 页、2F 节，允许为个人非商业用途创作系统语音内容，并排除公开分享、发布和商业场景。非营利发布也不能绕过这一限制。请核对自己安装版本随附的条款；Apple 也说明[适用协议可能不同](https://www.apple.com/legal/sla/)。

Flite 的[分发条款](https://raw.githubusercontent.com/festvox/flite/v2.2/COPYING)和[内置 SLT 音色声明](https://raw.githubusercontent.com/festvox/flite/v2.2/lang/cmu_us_slt/cmu_us_slt.c)支持将这个内置音色视为许可宽松，但不能推及所有外部音色文件。eSpeak NG 的[分发许可](https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.52.0/COPYING)适用于本次使用的原生分发内容；没有使用另行授权的 MBROLA 音色。

## 数字能告诉你什么，又不能告诉你什么

测试机器配备 Apple M2、16 GiB 内存，运行 macOS 26.5.1 build 25F80 和 Python 3.11.4。Kokoro 和 Piper 使用 CPU ONNX 推理。Mac 上其他工作没有暂停。每个工具与脚本组合只运行一次，没有重复测量、清空缓存、温控或独占机器。耗时包含启动、模型加载和输出写入；say 还包含 AIFF 转 WAV。保留原生语速和采样率，输出为单声道 16-bit PCM WAV。

监测程序每隔 20 ms 汇总启动进程及其子进程内存，可能漏掉短暂峰值。设置了 5.5 GiB 子进程树内存上限和 10 分钟进程超时，均未触发。另存的 `/usr/bin/time -l` 最大 RSS 不是同一时刻的进程树总和。语音识别在合成结束后运行，不与合成同时进行。

每个 WAV 都在本地重采样为 16 kHz 单声道，再用 whisper.cpp small.en 转写：仅 CPU、2 线程、英语、默认 beam 5、temperature 0、不回退、不提供参考文本提示。该二进制程序不支持版本参数，因此无法确认其确切上游修订，保存的是可执行文件哈希。模型 SHA1 与上游值一致。没有使用云端识别器。

WER 是替换、删除和插入次数之和除以参考词数。汇总 WER 累加编辑次数和参考词数，不是各段百分比的平均值。原始计分把英语字母数字词转为小写，保留词内撇号；标点作为边界，小数点也会拆词。规范化计分对两侧文本使用 whisper-normalizer 1.0.0 EnglishTextNormalizer(tts_mode=False)，统一数字、货币、称谓、缩写形式和拼写，并删除标点和填充词。计分使用 Jiwer 4.0.0。规范化和低 WER 都不能保证意思正确。

[保存的独立计算记录](#来源与查阅日期)重新读取脚本和转写文本，用另一套编辑距离代码核对，全部 50 个脚本级 WER 值都一致。这确认的是算术，不是听感。姓名即使发音可懂，也可能被拼成别的词；Whisper 也可能自动纠正错误发音。情绪脚本零错误，并不能证明语气有表现力。

## 每款工具、每段脚本的结果

plain、numbers、abbreviations、emotion 和 names 是脚本标识。进程树 RSS 和 time RSS 是不同的内存指标，单位都为 MiB。字节数是输出 WAV 大小，Hz 是输出采样率。原始和规范化 WER 均为百分比。所有行都成功完成。

| 工具及音色 | 脚本 | 耗时秒数 | 音频秒数 | RTF | 进程树 RSS MiB | time RSS MiB | 字节数 | Hz | 原始 WER | 规范化 WER |
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

你可以对照测试脚本（原始辅助文件未公开；请依据本文内容操作）、完整结果 CSV（原始辅助文件未公开；请依据本文内容操作）和带音频播放器的报告（原始辅助文件未公开；请依据本文内容操作）。报告中的 Apple 和 Piper 样音用于私人比较；提供样音并不代表授予发布权。

## 安装时，别把音色目录当成实测表现

下表是实际运行的版本，不保证现在的依赖仍能直接兼容。下载数字只涵盖主要代码文件和模型，不含所有依赖、重试或网络流量。

| 工具 | 测试版本及音色 | 本次安装难度 | 主要下载内容 | 代码及音色权利 |
| --- | --- | --- | --- | --- |
| Kokoro | kokoro-onnx 0.6.1; onnxruntime 1.31.1; af_heart | 4 步：环境、软件包、两个资源、运行；无需编译 | 26 KB 封装库 + 337.36 MiB 模型及音色；另需依赖 | MIT 封装库；Apache-2.0 权重；GPL eSpeak 依赖 |
| Piper | piper-tts 1.8.0; Lessac medium | 4 步：环境、软件包、ONNX + JSON、运行；原生 wheel | 32.54 MiB wheel + 60.28 MiB 模型及配置；另需依赖 | GPL-3.0-or-later 代码；具体 Lessac 模型权利不明 |
| eSpeak NG | 1.52.0; en-us | brew install espeak-ng，然后合成 | 12.35 MiB bottle + 0.04 MiB pcaudiolib；含原生音色 | GPL-3.0-or-later；没有 MBROLA |
| Flite | Homebrew 2.2; binary flite-2.2-current Sep 2018; slt | brew install flite，然后合成 | 46.87 MiB bottle；含内置音色 | 本分发内容和内置 SLT 适用 CMU 宽松条款 |
| macOS say | macOS 26.5.1; Samantha | 已经安装；生成 AIFF 后转 WAV | 本次新增 0 字节；其他音色可能需要下载 | 专有；系统语音有个人非商业用途及公开分享限制 |

Kokoro 的[音色目录](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/VOICES.md)列有 54 个音色、8 种语言，美式和英式英语按同一语言的口音计算。本次封装库只测了美式英语。目录里有普通话，不等于这套配置的中文质量或支持已经验证。Flite 已安装的英语选项为 kal、awb_time、kal16、awb、rms 和 slt，其中报时音色有专门用途。

Kokoro 的安装步骤（原始辅助文件未公开；请依据本文内容操作）固定了软件版本，并检查模型哈希，使用这台机器已有的 Python 3.11 和 uv。请用实际测试的 model-files-v1.0 导出文件，不要因为较新导出的模型版本文件名相同，就直接替换。配音辅助程序（原始辅助文件未公开；请依据本文内容操作）用已有软件和模型通过了单独的禁止联网试运行。安装器只检查了语法，没有在第二个全新环境中从头到尾再跑一遍。

安装时需要联网下载公开软件和权重。准备完成后，本次合成和转写使用明确的本地路径、离线标志，以及 sandbox-exec `(deny network*)`。套接字绑定探测被拒绝。没有创建账号，也没有上传脚本、转写文本或音频。这不是针对已有系统守护进程的整机防火墙，也不能保证所有使用这些引擎的应用都同样保护隐私。

分享配音前，建议按短段落处理，把重要金额、日期、缩写和姓名写成你希望读出的形式，再听完整音频。这些是实用建议，不是额外测出的结果。

## 常见问题

### 哪个音色最自然？

目前不能判断。没有人工试听，也没有云端听音评估。Kokoro 领先的是本次文字还原比较，不是自然度排名。

### 免费公开视频能用 Mac 内置语音吗？

不要直接当成已经获准。查看的 Tahoe 条款也限制公开分享和非营利场景。发布前，请先确认适用于自己安装版本的权利。

### 能据此选中文工具吗？

不能。所有脚本和 Whisper 转写对照都仅使用英语。请另用有代表性的中文文本，核对具体音色、音素转换路径和许可。

### 最快的工具就是最合适的吗？

不一定。eSpeak NG 的总生成耗时最短，但速度不衡量悦耳程度或发布权利。先按工作流程选，再试听自己的文本。

## 让 DeTars 帮你规划离线配音

把下面的请求发给 DeTars，并将 [方括号] 填成你的具体情况。

> 请帮我为 [电脑、操作系统和内存]、[语言和示例文本]、[视频长度] 以及 [私人使用或公开发布] 选择离线配音方案。比较安装难度、具体音色权利和需要试听的重点。只在相关时参考这份英语测试。安装软件、下载模型、运行语音工具或上传任何文本和音频前，请先问我。

把它当作起点就好，不保证音质、兼容性、隐私或发布权利；这不是法律意见。

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [publisher model card](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/README.md) — 查阅日期: 2026-11-06
- [wrapper licence](https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE) — 查阅日期: 2026-11-06
- [Lessac model card](https://huggingface.co/rhasspy/piper-voices/raw/main/en/en_US/lessac/medium/MODEL_CARD) — 查阅日期: 2026-11-06
- [research-only dataset agreement](https://www.cstr.ed.ac.uk/projects/blizzard/2013/lessac_blizzard2013/license.html) — 查阅日期: 2026-11-06
- [voice repository metadata](https://huggingface.co/rhasspy/piper-voices/raw/main/README.md) — 查阅日期: 2026-11-06
- [macOS Tahoe licence](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf) — 查阅日期: 2026-11-06
- [applicable agreements can differ](https://www.apple.com/legal/sla/) — 查阅日期: 2026-11-06
- [distribution terms](https://raw.githubusercontent.com/festvox/flite/v2.2/COPYING) — 查阅日期: 2026-11-06
- [bundled SLT voice notice](https://raw.githubusercontent.com/festvox/flite/v2.2/lang/cmu_us_slt/cmu_us_slt.c) — 查阅日期: 2026-11-06
- [distribution licence](https://raw.githubusercontent.com/espeak-ng/espeak-ng/1.52.0/COPYING) — 查阅日期: 2026-11-06
- [voice catalogue](https://huggingface.co/hexgrad/Kokoro-82M/raw/main/VOICES.md) — 查阅日期: 2026-11-06
