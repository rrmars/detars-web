---
title: "本地语音转文字：五段 Mac 实测能帮你判断什么"
description: "在 Apple M2 Mac 上比较五种实际跑过的本地转写配置：准确度、耗时、进程内存、安装波折，以及不能据此下结论的地方。"
locale: "zh"
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
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
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
audience: "English- and Chinese-speaking local transcription users comparing small-model workflows on Apple Silicon; these English/Spanish measurements do not validate Chinese recognition."
faq: []
draft: false
---

**想把录音留在自己电脑上转文字？在这台 Apple M2 Mac 上，如果你愿意处理原生编译，whisper.cpp small 值得先试。它与 faster-whisper small 的合并词错误率同为 7.00%，处理五段音频共用了 9.33 秒。这能帮你选一个起点，但不保证换成你的播客、语言或电脑后，表现仍然一样。**

四种引擎都实际在本地运行过，共测试五种配置。2026年11月5日（UTC）完成了 25 次成功计量运行，另有五次不计分预热。没有创建账户，也没有上传音频。材料是英语和西班牙语的短篇朗读，不是中文转写测试；如果你主要处理中文，请先用有代表性的中文录音试一试。

## 先按自己的工作方式选起点

| 你最在意什么 | 我会先试什么 | 要接受的取舍 |
|---|---|---|
| 在 Apple Silicon 上用小模型出初稿 | whisper.cpp small | 本次合并词错误率并列最低；原生编译需要花功夫 |
| 先快速出稿，希望 Whisper 占用小一些 | whisper.cpp base | 本次耗时和进程 RSS 较低，但要多校对 |
| 用 CPU 处理，或接入跨平台 Python 流程 | faster-whisper small | 修复依赖后，本次 CPU 路线跑通；不能和 GPU 耗时直接等同比较 |
| 在 Apple Silicon 上用 Python，不想编译 C++ | MLX Whisper small | 本次 Python 安装路径较方便；限 Apple 平台，转换权重的许可信息也要留意 |
| 希望语言模型下载较小，或做 CPU 流式接入 | Vosk small | 进程 RSS 较低；这段噪声音频的错误明显更多 |
| 访谈中有人抢话 | 尽量分麦克风录制，再人工核对 | 本次没有工具证明自己能可靠分离说话人 |

本次没有支付许可费或按分钟计费的转写服务费，但本地算力、存储、安装和校对时间仍有成本。这里不编星级或综合评测分：直接看实测错误，比一个评分更有用。

## 用什么 Mac，怎样计量？

机器为 Apple M2，16 GiB 共享统一内存，macOS 26.5.1 arm64，Python 3.12.12。只测试 base 和 small 权重。每次只运行一个识别进程、加载一个模型；没有控制这台 Mac 上的其他工作负载。不同引擎是 whisper.cpp、faster-whisper、Vosk 和 MLX Whisper；几种 Whisper 实现有共同的模型来源。

每种配置先用干净片段做一次不计分预热，再为每段计量音频启动新进程。耗时包括沙箱和进程启动、适用时的 Python 导入、模型加载、解码和写出文本；不包括下载、音频准备和评分。缓存可能已经预热。没有重复试验、误差条或显著性检验，不能按这些数字推算处理整期节目的可靠速度比例。

峰值 RSS 是 macOS `/usr/bin/time -l` 记录的进程最大常驻内存，换算成 MiB。**它不是 CPU 加 GPU 的全部统一内存占用，也不是整台 Mac 的内存压力。**其他应用同时开着时，RSS 低不代表一定还有足够余量。

| 配置 | 非重叠片段合并 WER | 全部片段总秒数 | 最大进程 RSS MiB | 后端 |
|---|---:|---:|---:|---|
| whisper.cpp base | 12.50% | 4.93 | 330.2 | Metal GPU + Accelerate；4 个 CPU 线程 |
| whisper.cpp small | 7.00% | 9.33 | 731.9 | Metal GPU + Accelerate；4 个 CPU 线程 |
| faster-whisper small | 7.00% | 32.50 | 929.1 | CPU int8_float32，请求的是 int8；4 个线程，1 个 worker |
| Vosk small EN / ES | 20.00% | 15.79 | 298.6 | CPU；流式 KaldiRecognizer |
| MLX Whisper small | 7.50% | 15.97 | 850.1 | MLX / Apple GPU；贪心解码 |

非重叠片段的合并结果，是把编辑次数与参考词数分别相加后再计算，而不是求百分比平均值：whisper.cpp small 和 faster-whisper 都是 400 个参考词中出现 28 次编辑。MLX 只多两次编辑，不足以说明它们在一般情况下谁更准。五段音频合计 204.03 秒，每次计量运行都比音频实时播放更快。

## 先弄清楚，这些片段代表什么

声音都是真人录制，统一转换成单声道、16 kHz、有符号 16-bit PCM WAV。每段都拼接过。参考文本来自已发表的对齐语料，并按来源 ID 和文本核对；不是识别模型生成的，也不是重新逐字听写出来的标准答案。参考文字或剪切边界仍可能有误差。

| 片段 ID | 秒数 | 参考词数 | 录音与制作方式 |
|---|---:|---:|---|
| 01-studio-en | 36.565 | 62 | Nikolle Doolin 朗读 *Foolish Dictionary*：干净近讲有声书，只是录音棚场景的近似，不是核实过的棚录 |
| 02-overlap-en | 39.285 | 184 | Paul-Gabriel Wiener 与 Nikolle Doolin：不同段落从开头同时混音，不是真实对话 |
| 03-accented-en | 37.120 | 106 | Ulf Bjorklund 朗读 *The Force of Blood*：轻微斯堪的纳维亚口音，不是重口音挑战 |
| 04-noise-en | 38.310 | 119 | Paul-Gabriel Wiener 朗读 *Robin Hood*：另一段语音叠加生成白噪声，不是音乐 |
| 05-spanish | 52.750 | 113 | Judith Vainman 朗读 Miguel de Unamuno 的 *Poesías*：拼接已发表的 MLS 对齐时间窗 |

重叠片段按 `0.45 × A + 0.45 × B` 混合，两段从零时刻同时开始，只有较短一段的尾部补零。参考文本却先放完说话人 A 的词，再放说话人 B 的词。**普通 WER 因而会惩罚本来也说得通的交错顺序：下表的重叠行只是压力诊断，不计入合并准确度，也不是说话人区分评分。**能分轨录就尽量分轨，抢话和说话人标签仍要自己核对。

噪声是固定种子的高斯白噪声，种子为 20261105，整段 RMS 信噪比为 8 dB；共同缩放峰值以避免削波。自然停顿也会影响这个信噪比。干净片段和噪声片段的文字、朗读者不同，不能据此单独算出噪声造成了多少损失。西班牙语取自原录音的 337.25–355.11、381.19–399.81 和 427.24–443.51 秒区间，去掉中间空档后拼接。

英语录音和参考文字来自 [LibriSpeech](https://www.openslr.org/12/)，采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，署名 Vassil Panayotov、Guoguo Chen、Daniel Povey、Sanjeev Khudanpur 及表中的志愿朗读者。西班牙语参考对齐来自 [MLS](https://www.openslr.org/94/)，署名 Vineel Pratap、Qiantong Xu、Anuroop Sriram、Gabriel Synnaeve 和 Ronan Collobert。[LibriVox 录音](https://librivox.org/poesias-by-miguel-de-unamuno/)在[美国属于公有领域](https://librivox.org/pages/public-domain/)，不代表全球都一样。生成噪声按 [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)开放；底层语音仍保留自己的许可。

## 完整结果：每种配置、每段音频

WER 的算法是 `100 ×（替换 + 删除 + 插入）/ 参考词数`，越低越好。Jiwer 4.0.0 计算词级最小 Levenshtein 编辑距离。两边都做 Unicode NFKC、小写、弯引号转直撇号、标点换空格、合并多余空白；保留变音符号和撇号。数字写法、拼写和缩约形式不视为等价。因此，来源中的 `ELEVEN` 与 `11`、旧式西班牙语 `á` 与 `a` 都可能算错，但其意义损失不一定等同于漏掉一句话。

下表 S / D / I 是替换、删除、插入次数。RTF 为耗时除以音频时长，小于 1 就是比实时更快。WER 保留 CSV 的三位小数，避免早先叙述中取整不一致的问题。各行都运行成功；已有独立验证逐行核对了词编辑计算、转写文本和进程日志。

| 配置 | 片段 ID | WER | S / D / I | 秒数 | RTF | RSS MiB |
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

† 仅作压力诊断。每行的参考词数分母见前面的片段表。

即使声音干净，生僻词仍要校对。西班牙语初稿中，whisper.cpp small 把“no hagas caso”写成“No es caso”，把“hojas”写成“Ojas”，把“mecen”写成“mesen”。合并错误率低，不代表可以不检查意思、人名和漏词就直接发布。

## 安装时值得保留的细节：不必样样追新

下面列的是实际测试版本，不只是注册表里查到的版本。来源和文档的查阅日期为2026年11月5日（UTC）；本页没有刷新版本，也不保证这些文件以后仍能下载。

| 工具及实测版本 | 选用权重 | 本次安装经历 | 代码及权重许可 |
|---|---|---|---|
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp/tree/v1.9.5)，源码 v1.9.5；二进制 1.9.5-dev | [ggml-base.bin 和 ggml-small.bin](https://huggingface.co/ggerganov/whisper.cpp)，多语言 FP16 | 较费功夫：CMake 原生编译；Git TLS 失败后改下源码归档 | MIT / MIT |
| [faster-whisper](https://github.com/SYSTRAN/faster-whisper/tree/v1.2.1) 1.2.1；CTranslate2 4.8.5；PyAV 16.1.0 | [Systran/faster-whisper-small](https://huggingface.co/Systran/faster-whisper-small)，加载时量化 | 较费功夫：默认 PyAV 19.0.2 解码失败，固定依赖版本后修复 | MIT / MIT |
| [Vosk](https://github.com/alphacep/vosk-api) 0.3.44，Mac wheel | [small-en-us-0.15 和 small-es-0.42](https://alphacephei.com/vosk/models)，按语言选择 | 中等：Python 包加独立模型压缩包；每种语言约 40 MB | Apache-2.0 / 这两个模型均为 Apache-2.0 |
| [MLX Whisper](https://github.com/ml-explore/mlx-examples/tree/main/whisper) 0.4.3；MLX 0.32.4 | [mlx-community/whisper-small-mlx](https://huggingface.co/mlx-community/whisper-small-mlx)，FP16 | 中等：原生 Apple Silicon Python、FFmpeg 和权重 | MIT / 原始 Whisper MIT 来源；转换模型卡未明确列出许可字段 |

**一个反直觉的安装发现：更新的依赖反而把可用路径弄坏了。**PyAV 19.0.2 不接受 faster-whisper 的 `metadata_errors` 参数，固定为 PyAV 16.1.0 后，预热和完整计量矩阵才成功。建议从测试过的依赖组合开始，而不是默认最新软件包一定能互相配合。Vosk 用 0.3.44，是因为它有 Mac wheel；0.3.45 没有。这里的难度描述针对本次命令行安装，不是全新电脑上的图形界面易用性测试；编译器和 FFmpeg 工具已经具备。

whisper.cpp 采用 Release 编译，设置 `GGML_METAL=ON`、`WHISPER_BUILD_TESTS=OFF`，构建参数为 `-j2`。准备音频和 MLX 解码使用 FFmpeg 9.0.2。Git TLS 和大文件中断属于安装问题，不是识别失败；通过源码归档、可续传 HTTP 分段和最终 SHA-256 检查恢复了文件。失败的初步输出没有混进完整矩阵。

本次明确指定来源语言，做转写而非翻译。Whisper 按温度 0 做贪心解码：C++ 的 beam 和 best-of 为 1，faster-whisper 的 beam 为 1；MLX 不传 beam 参数，因为不支持束搜索。没有前文条件、提示词、额外降噪或 VAD。Vosk 使用对应语言模型，读完每个 4,000 帧块及最终输出。分段、词元抑制和 FP16 与 int8 的差别意味着：这里比较的是能用的配置，不是隔离变量后的内核性能。

准备离线使用时，先下载完整的本地模型和分词器文件，再断网测试。本次每个计量识别器及其子进程都在 `sandbox-exec` 的 `(deny network*)` 限制下运行，同时设置 HF 离线标志；TCP 连接探针被拒绝并返回 EPERM。文档、软件包、源码和权重下载是分开的联网准备步骤。这说明的是本次运行确实留在本地，不是对所有使用这些库的应用作隐私保证。

转换后的 MLX 模型卡没有声明自己的许可。[原始 Whisper](https://raw.githubusercontent.com/openai/whisper/main/README.md)明确将代码和权重按 MIT 开放；根据转换来源推断许可承继有依据，但不能说转换模型卡自己已经明确声明。这也不是穷尽所有依赖的许可核查；分发工具或权重时，请保留相关许可和声明。

## 真正选定前，再用自己的录音试试

拿有代表性的音频试用，记下校对耗时，而不只是处理耗时。包括人名、轻声和难听清的片段。中文转写、中外语混说、音乐、说话人归属、字幕时间点和长录音稳定性，都没有在这里验证。文学用词、重复朗读者和公开测试语料可能已被模型接触，也限制了推广范围；这不是控制过训练数据污染的盲测。

在这台 Mac 上，我会先用 whisper.cpp small 出可编辑初稿；更在意占用时选 base，需要本次测试的 CPU 接入路径时看 faster-whisper，想用 Apple 原生 Python 时看 MLX，轻量流式方式更重要时再看 Vosk。分享前都留一步人工核对。先选一个合适的起点，不需要先宣布谁是通用冠军。

## 让 DeTars 帮你规划本地转写流程

把下面这段发给 DeTars，将 [方括号] 换成你的情况。

> 请帮我为[电脑、操作系统和内存]、[音频语言及混说情况]、[录音长度和说话人录制方式]、[隐私要求]选择本地转写流程。比较[我能安装的工具]、安装成本和校对工作量。只在适用处参考这次小测试，指出哪些还需征得我同意后另测。未经询问，不上传音频、不安装软件包、不运行模型。

*这份比较供你选起点，不保证转写准确度、兼容性或隐私；正式依赖前，请核对自己的实际设置。*

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [LibriSpeech](https://www.openslr.org/12/) — 查阅日期: 2026-11-05
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — 查阅日期: 2026-11-05
- [MLS](https://www.openslr.org/94/) — 查阅日期: 2026-11-05
- [LibriVox recording](https://librivox.org/poesias-by-miguel-de-unamuno/) — 查阅日期: 2026-11-05
- [in the USA](https://librivox.org/pages/public-domain/) — 查阅日期: 2026-11-05
- [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — 查阅日期: 2026-11-05
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp/tree/v1.9.5) — 查阅日期: 2026-11-05
- [ggml-base.bin and ggml-small.bin](https://huggingface.co/ggerganov/whisper.cpp) — 查阅日期: 2026-11-05
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper/tree/v1.2.1) — 查阅日期: 2026-11-05
- [Systran/faster-whisper-small](https://huggingface.co/Systran/faster-whisper-small) — 查阅日期: 2026-11-05
- [Vosk](https://github.com/alphacep/vosk-api) — 查阅日期: 2026-11-05
- [small-en-us-0.15 and small-es-0.42](https://alphacephei.com/vosk/models) — 查阅日期: 2026-11-05
- [MLX Whisper](https://github.com/ml-explore/mlx-examples/tree/main/whisper) — 查阅日期: 2026-11-05
- [mlx-community/whisper-small-mlx](https://huggingface.co/mlx-community/whisper-small-mlx) — 查阅日期: 2026-11-05
- [Original Whisper](https://raw.githubusercontent.com/openai/whisper/main/README.md) — 查阅日期: 2026-11-05
