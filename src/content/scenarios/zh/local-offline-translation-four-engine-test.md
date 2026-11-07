---
title: "离线翻译：我们在 Mac 上的四引擎实测"
description: "用我们亲手运行的 Mac 测量结果，为短商品介绍和客服邮件选择本地翻译工具；看清参考分数的局限、授权条件与安装阶段的例外。"
locale: "zh"
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
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
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
  en: "Shop owners who want to handle short customer and product messages locally on a Mac, based on a hands-on test of four engines without human quality validation."
  zh: "想在 Mac 上本地处理简短客户和商品消息的店主；依据是对四个引擎的实测，没有人工质量验证。"
faq: []
draft: false
---

想翻译商品介绍和客户邮件，又不想把内容交给在线翻译服务？如果你的收件箱里混着多种语言，我会先试隔离本地 Ollama 服务中的 Qwen3-4B Q4_K_M。如果主要批量处理英语译西班牙语或德语，又希望少占内存，我会先试 Marian。这是我们亲手在 Mac 上跑过之后给出的起点，不是人工翻译质量排名。

Qwen 的宏平均 chrF 为 51.75，采样内存峰值为 3.11 GB，处理 120 条输入用了 260.16 秒。Marian 则为 0.77 GB 和 60.88 秒。在测过的两个欧洲语言方向中，Marian 的分数高于 Qwen；两个中文方向则是 Qwen 更高。发给客户前，请让懂目标语言的人检查价格、尺寸、否定表达和退款条件。

NLLB 不适合作为这里的店铺选择：测过的权重限非商业用途。Apple Translation 没有参加翻译性能测试。“离线”也有一处必须说清：最初下载模型时，程序使用了此前缓存的 Hugging Face 凭据。没有新建账号，也没有上传测试文本，但严格的“全程不用账号”安装要求并未完全满足。之后的下载代码关闭了隐式认证；推理、计分和机器检查始终在本地完成。

## 哪个起点更适合你的工作？

- 短消息需要切换多种语言，而且能接受这里测到的内存占用和等待时间，可以先试 Qwen。同一个模型可接收英语、西班牙语、德语和简体中文的语言名称；实际只测了下表方向。
- 想更轻巧地批量把英语译成欧洲语言，可以先试 Marian。每个翻译方向需要单独的检查点；已安装组合不能覆盖所有语言互译。
- 看重较小下载量，可以考虑 Argos，但要给安装调试留些时间。内置 Stanza 分句器失败后，这次使用了本地预分段输入适配器，结果不代表未经修改的原版 Argos。
- NLLB 只留给符合授权条件的非商业研究比较，不用于这里的店铺工作。分数不能取消其[模型卡](https://huggingface.co/facebook/nllb-200-distilled-600M/raw/main/README.md)中的限制。

## 实际测到了什么

测试于2026年11月6日进行，机器为 Apple M2，内存 16 GiB，系统 macOS 26.5.1 build 25F80，Python 3.11.4。每个引擎生成 120 条译文，其中 80 条有参考译文，40 条为自编店铺文本。所有引擎共生成 480 条译文。下文 EN、ES、DE、ZH 分别表示英语、西班牙语、德语和简体中文。

chrF 和 BLEU 衡量与参考译文的重合程度，不代表人能否理解、表达是否流畅或能否直接用于客服。这些特定指标越高越好。总分是四个方向各自语料级分数的算术平均，不是把多种语言混起来算出的语料总分。计分只用有参考译文的条目；计时包括全部输入条目。

| 引擎与模型 | 宏平均 chrF | 宏平均 BLEU | 总耗时（秒） | 条/秒 | 峰值 GB | 模型下载 GB |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Argos 1.11.0 + 分段适配器 | 50.74 | 27.12 | 38.40 | 3.13 | 0.55 | 0.32 |
| Marian / OPUS-MT | 50.36 | 28.07 | 60.88 | 1.97 | 0.77 | 1.25 |
| NLLB-200 distilled 600M · 非商业 | 47.80 | 23.30 | 296.12 | 0.41 | 3.17 | 2.48 |
| Qwen3-4B Q4_K_M / Ollama | 51.75 | 28.13 | 260.16 | 0.46 | 3.11 | 2.50 |

总耗时包括进程启动、导入和模型初始化，不包括安装与下载。“条/秒”用输入记录数除以这段耗时；一条邮件记录可能包含多个语法句子。内存峰值取采样进程树 RSS 与 physical footprint 中较大者，单位为十进制 GB，不是整台机器的内存压力。共享或映射内存可能被保守地计入。下载量指保留的必要模型、分词器或压缩语言包，不含依赖、重试、安装后体积及 Ollama 导入形成的重复副本。

### 每个测试方向的结果

每个方向有 20 条参考文本和 10 条自编店铺文本。最终各行均完成。

| 引擎 | 方向 | chrF | BLEU | 耗时（秒） | 条/秒 | 峰值 GB | 下载 MB |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Argos + 适配器 | EN→ES | 55.78 | 27.87 | 13.73 | 2.18 | 0.53 | 87.50 |
| Argos + 适配器 | EN→DE | 58.82 | 26.08 | 9.21 | 3.26 | 0.53 | 87.11 |
| Argos + 适配器 | EN→ZH | 33.20 | 35.99 | 9.35 | 3.21 | 0.55 | 70.74 |
| Argos + 适配器 | ZH→EN | 55.15 | 18.52 | 6.10 | 4.92 | 0.55 | 74.48 |
| Marian | EN→ES | 57.75 | 30.69 | 24.37 | 1.23 | 0.77 | 315.31 |
| Marian | EN→DE | 61.57 | 31.67 | 13.50 | 2.22 | 0.70 | 300.77 |
| Marian | EN→ZH | 29.03 | 31.90 | 11.95 | 2.51 | 0.71 | 315.32 |
| Marian | ZH→EN | 53.10 | 18.02 | 11.06 | 2.71 | 0.70 | 315.32 |
| NLLB · 非商业 | EN→ES | 58.57 | 29.14 | 90.79 | 0.33 | 2.88 | 2482.65 |
| NLLB · 非商业 | EN→DE | 59.45 | 28.41 | 62.87 | 0.48 | 3.16 | 2482.65 |
| NLLB · 非商业 | EN→ZH | 24.99 | 23.86 | 54.88 | 0.55 | 3.15 | 2482.65 |
| NLLB · 非商业 | ZH→EN | 48.19 | 11.80 | 87.58 | 0.34 | 3.17 | 2482.65 |
| Qwen | EN→ES | 55.95 | 26.54 | 65.89 | 0.46 | 3.11 | 2497.28 |
| Qwen | EN→DE | 57.26 | 24.70 | 70.84 | 0.42 | 3.11 | 2497.28 |
| Qwen | EN→ZH | 36.72 | 39.36 | 56.27 | 0.53 | 3.08 | 2497.28 |
| Qwen | ZH→EN | 57.07 | 21.92 | 67.15 | 0.45 | 3.07 | 2497.28 |

NLLB 和 Qwen 在各方向重复列出了同一个共享模型的下载量，不要相加。总下载量只把共享模型计入一次。西班牙语译英语、德语译英语及其他跨语言方向均未测量；支持更多语言不等于这些方向的质量已经得到验证。

保留的结果 CSV（原始辅助文件未公开；请依据本文内容操作）包含原始精度，以及加载和翻译阶段的分别计时。[保存的独立计算](#来源与查阅日期)中，40 个指标值在 1e-8 容差内吻合。这核对的是计分算术，不是译文含义；本指南没有重新运行测试。

## 这些分数值得信到什么程度？

公开参考文本取 FLORES-200 devtest 对齐后的前 20 行，不是挑选表现好的样本。同一组英语条目用于三个目标语言方向。每个方向另加五条自编商品介绍和五条邮件，ZH→EN 使用对应中文原文。没有使用真实客户消息。

[FLORES-200 归功于 Meta 和贡献者](https://raw.githubusercontent.com/facebookresearch/flores/main/README.md)，采用 [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)。由该语料衍生的测试材料保留此授权，自编店铺文本为 CC0。下载遇到问题后，FLORES 和 Argos 文件取自公开镜像。哈希与镜像一致，但是否与权威上游下载逐字节相同，以及镜像是否获发布方授权，仍未证实。

计分使用 [sacrebleu](https://github.com/mjpost/sacrebleu) 2.6.0：chrF 区分大小写，字符阶数 6，词阶数 0，beta 2；BLEU 使用指数平滑、单份参考译文，EN→ZH 的分词器为 `zh`，其他为 `13a`。合理的不同措辞也可能降低重合度。这些数值不是“含义正确百分比”。

每个最终配置只跑一轮，各方向启动新进程，引擎依次运行。没有清空文件缓存，Mac 上其他日常任务仍在继续。没有重复运行的波动估计或统计显著性结论。Marian 和 NLLB 使用 CPU float32、四线程、贪心解码，输入上限 512 token，新增输出上限 256 token。Marian EN→ZH 使用 `>>cmn_Hans<<`。Argos 使用 CPU、四个内部线程和 beam 1，适配器把有界输入原样交给翻译模型。

Qwen 通过 Ollama 0.40.13 使用 Metal，明确设置非思考 ChatML 模板，temperature 0、seed 42、上下文 2,048、输出上限 256 token；每个方向完成后卸载。模型大小不同，CPU 与 Metal 执行方式也不同，因此速度不能直接当作公平的架构比较。

内存目标采样间隔为 50 ms，实际可能更慢。停止阈值为 6,000,000,000 字节，采样间隙仍可能出现峰值。Qwen 测试的停止条件监视 physical footprint，但其 RSS 也低于 6 GB。后续监控改为观察两者中较大者。这是采样式限制，不是操作系统级的瞬时内存保证。

## 店铺文本只做了机器检查

自编文本没有参考译文，也没有 chrF 或 BLEU 分数。确定性检查寻找数字变化、标识符缺失、空输出和照抄输入。另一次本地 Qwen 检查标记可能的明显含义问题，包括否定、遗漏和条件变化。

| 引擎 | 确定性标记 / 40 条 | 本地模型标记 / 40 条 |
| --- | ---: | ---: |
| Argos + 适配器 | 0 | 23 |
| Marian | 1 | 15 |
| NLLB · 非商业 | 4 | 11 |
| Qwen | 0 | 19 |

这些是待检查标记，不是确认的错误数，更不是人工评分。数字写成文字就可能触发确定性标记。本地模型会漏判或误判，而且与候选 Qwen 并不独立。没有进行人工语义评估，也没有让在线模型检查译文。确定性标记为零，不表示可以放心发送。

## 看清具体模型条款，不要只看引擎许可证

- Qwen 的[官方 GGUF 许可证](https://huggingface.co/Qwen/Qwen3-4B-GGUF/raw/main/LICENSE)为 Apache-2.0；[Ollama 代码](https://github.com/ollama/ollama/blob/main/LICENSE)为 MIT，并附有组件声明。重新分发时保留适用的许可证和声明。
- Marian 的具体模型卡并不相同：[EN→ES](https://huggingface.co/Helsinki-NLP/opus-mt-en-es/raw/main/README.md) 和 [EN→ZH](https://huggingface.co/Helsinki-NLP/opus-mt-en-zh/raw/main/README.md)为 Apache-2.0；[EN→DE](https://huggingface.co/Helsinki-NLP/opus-mt-en-de/raw/main/README.md) 和 [ZH→EN](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/raw/main/README.md)为 CC-BY-4.0。请保留署名。这不表示所有训练数据权利均已获确认。
- Argos 代码为 MIT OR CC0，[发布方声明](https://github.com/argosopentech/argos-translate/issues/533#issuecomment-5160080718)也这样描述模型二进制文件。但测过的中文语言包保留 CC-BY-4.0 的 OPUS 声明；请一并保留这些及第三方声明。镜像中的 EN→ES、EN→DE 包为 1.0 版，中文包为 1.9 版。各包完整的权利情况仍未确认，不能把所有内容都改称 MIT/CC0。
- NLLB 权重为 CC-BY-NC-4.0，[授权条款](https://creativecommons.org/licenses/by-nc/4.0/)限非商业用途。模型卡还说明面向研究而非生产部署，医疗、法律领域和文档翻译也不属于预期用途。不要因为分数就把它选进店铺工作。

## 本地安装，不等于承诺整台电脑完全断网

Qwen 这里使用了已有的 Ollama、本地 GGUF 导入、明确模板和隔离沙箱服务。Marian 需要 Transformers、PyTorch、SentencePiece 和各方向检查点。Argos 需要 Python 依赖、语言包、镜像下载和适配器。NLLB 使用 Python 依赖和共享多语言检查点，非商业限制不变。

具体的 Qwen [Q4_K_M 文件](https://huggingface.co/Qwen/Qwen3-4B-GGUF/resolve/bc640142c66e1fdd12af0bd68f40445458f3869b/Qwen3-4B-Q4_K_M.gguf)被导入为本地模型，不是云端标签。安装软件包和模型需要联网阶段。最初的 Hugging Face 下载继承了缓存凭据，之后核对过无需认证的公开访问。测试文本从未随这些下载请求上传。

推理时，macOS 沙箱禁止 Python 对外联网；Qwen 客户端和隔离服务只允许本机回环连接。直接连接外部 IP 的探测失败，本地端点则返回 HTTP 200。离线标志和 socket 防护提供额外保护。这只覆盖测过的进程，不包括所有系统后台服务，也不代表任何使用这些引擎的应用都同样受保护。

保存的本地辅助脚本（原始辅助文件未公开；请依据本文内容操作）从 stdin 读取 UTF-8 文本，只连接 `127.0.0.1:11439`，没有远程回退，每次请求后卸载模型。它的输出上限为 512 token，与测试配置不同。使用前需要重新启动隔离服务；移动文件夹后要修改脚本路径。长消息请拆分，并检查截断警告，不要指望上下文窗口自动保全每个条件。保留的报告（原始辅助文件未公开；请依据本文内容操作）记录了测过的安装步骤；本指南没有重新进行全新安装。

### Mac 自带的 Apple 选项呢？

只查询可用性的 Swift 探测程序已编译运行，所需语言对均支持，但未安装。Apple 在这里没有生成测试译文。macOS 26.0+ 的[直接会话初始化接口](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:).md)可在语言已安装时无界面使用，但[不能请求下载](https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads.md)。由于语言缺失，直接会话的运行时分支没有执行。Apple 的[框架说明](https://developer.apple.com/documentation/translation/translationsession.md)描述设备端内容处理，同时可能收集 API 和性能遥测；这不是零网络活动保证，也不是可自由重新分发模型权重的授权。

## 常见问题

### 哪个引擎对人来说翻译最好？

这次测试不能回答。Qwen 的宏平均参考重合分数领先，但没有人工语言质量评估。先选候选工具，再请人检查你有代表性的消息。

### NLLB 可以免费下载，就能拿来翻译客户邮件吗？

这里测过的非商业权重授权不适合这类店铺工作。免费获取与获准商用是两回事。

### 客户消息发到网上了吗？

没有使用真实客户消息，测试文本、参考译文、输出译文和检查理由也都没有上传。不过，最初下载模型确实用了缓存凭据，所以不能把安装描述为完全无账号或全程隔绝网络。

### 测试包含中文，是不是表示所有语言方向都测过？

不是，只测了列出的方向。测试确实包含中文方向，但这不能证明其他方向或人工质量。

## 让 DeTars 帮你规划本地翻译流程

把下面的请求发给 DeTars，并按自己的情况填好 [方括号]。

> 帮我为 [电脑、操作系统和内存]、[源语言和目标语言]、[消息长度与处理量]、[个人或商业用途] 选择本地翻译工具。只在适用时参考这些测量结果，规划具体模型授权核对、离线安装测试，以及由懂目标语言的人检查数字、否定和条件的步骤。安装软件包、下载模型、使用已保存凭据或上传任何文本前，先问我。

把这份指南当作实用起点就好，不是翻译质量、隐私或兼容性保证，也不是法律意见。

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [NLLB exact model card and non-commercial scope](https://huggingface.co/facebook/nllb-200-distilled-600M/raw/main/README.md) — 查阅日期: 2026-11-06
- [Meta FLORES corpus attribution and licence](https://raw.githubusercontent.com/facebookresearch/flores/main/README.md) — 查阅日期: 2026-11-06
- [FLORES ShareAlike licence](https://creativecommons.org/licenses/by-sa/4.0/) — 查阅日期: 2026-11-06
- [sacrebleu metric documentation](https://github.com/mjpost/sacrebleu) — 查阅日期: 2026-11-06
- [Official Qwen GGUF licence](https://huggingface.co/Qwen/Qwen3-4B-GGUF/raw/main/LICENSE) — 查阅日期: 2026-11-06
- [Ollama code licence](https://github.com/ollama/ollama/blob/main/LICENSE) — 查阅日期: 2026-11-06
- [OPUS-MT English to Spanish card](https://huggingface.co/Helsinki-NLP/opus-mt-en-es/raw/main/README.md) — 查阅日期: 2026-11-06
- [OPUS-MT English to Chinese card](https://huggingface.co/Helsinki-NLP/opus-mt-en-zh/raw/main/README.md) — 查阅日期: 2026-11-06
- [OPUS-MT English to German card](https://huggingface.co/Helsinki-NLP/opus-mt-en-de/raw/main/README.md) — 查阅日期: 2026-11-06
- [OPUS-MT Chinese to English card](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en/raw/main/README.md) — 查阅日期: 2026-11-06
- [Argos publisher model-binary licensing statement, qualified by exact package notices](https://github.com/argosopentech/argos-translate/issues/533#issuecomment-5160080718) — 查阅日期: 2026-11-06
- [NLLB non-commercial licence terms](https://creativecommons.org/licenses/by-nc/4.0/) — 查阅日期: 2026-11-06
- [Exact official Qwen Q4_K_M model artifact](https://huggingface.co/Qwen/Qwen3-4B-GGUF/resolve/bc640142c66e1fdd12af0bd68f40445458f3869b/Qwen3-4B-Q4_K_M.gguf) — 查阅日期: 2026-11-06
- [Apple direct-session initializer](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:).md) — 查阅日期: 2026-11-06
- [Apple direct-session download restriction](https://developer.apple.com/documentation/translation/translationsession/canrequestdownloads.md) — 查阅日期: 2026-11-06
- [Apple Translation overview and telemetry scope](https://developer.apple.com/documentation/translation/translationsession.md) — 查阅日期: 2026-11-06
