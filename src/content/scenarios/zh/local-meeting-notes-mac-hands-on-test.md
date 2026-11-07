---
title: "Mac 本地会议记录实测：转写够快，重要内容还得自己核对"
description: "一台 Mac 对三种 Whisper 模型和小型 Qwen 模型的实测，保留全部结果、隐私注意事项，以及不能放心无人审核生成纪要的原因。"
locale: "zh"
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
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
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
audience: "Mac users seeking local meeting transcription, including Chinese-speaking users; a one-machine exploratory test, not validation of general Mandarin or Chinese meeting-note quality."
faq: []
draft: false
---

如果你想做会议记录，又不愿把录音上传云端，这次测试的速度值得关注。但真正卡住实用性的，是准确率。**测试中的方案，没有一个能让你放心地无人审核生成会议纪要。**

转写表现最好的候选是 **whisper.cpp large-v3-turbo Q5_0**，三个片段的错误率都最低。但它仍有 **22.88% 的英语对话 WER、29.13% 的加噪英语 WER，以及 20.37% 的中英混合 MER**。适合先出初稿，再对照录音核对姓名、数字、决定和承诺。不要因为待办清单读起来顺，就把它当成大家已经同意的任务。

小型摘要模型 **Qwen2.5 1.5B Instruct Q4_K_M** 在受控任务恢复检查中只有 **3/5**，不建议用它直接定稿待办清单。还有一个容易误会的地方：音频摘要使用的是 **small Whisper 的转写**，不是 turbo 的转写；turbo 接 Qwen 的完整流程没有测过。

测试于 **2026年11月7日**在**一台 Apple M2 Mac14,2、16 GiB 物理统一内存**的机器上完成，系统为 macOS 26.5.1 (25F80)。这不是厂商跑分，也不是所有 Mac 的排行榜。中文读者同样可以参考操作思路，但这一个短小的混合语言样本，**不能证明一般普通话识别能力或中文会议纪要质量已经过验证**。

## 先看清音频是什么，再理解分数

| 输入 | 时长 | 内容与处理 | 许可 |
| --- | --- | --- | --- |
| 英语对话 | 75.82 秒 | AMI 中四位说话人的头戴麦克风语句，按时间顺序拼接，语句间插入 200 ms 静音 | CC BY 4.0 |
| 加噪英语 | 75.90 秒 | 另外一组四人 AMI 语句，间隔 200 ms；加入固定随机种子的白噪声，整体信噪比 10 dB | CC BY 4.0 |
| 中英混合 | 60.59 秒 | ASCEND 测试集中最先符合条件、时长 ≥2 秒的混合语言语句，间隔 200 ms 拼接 | CC BY-SA 4.0 |

英语素材来自 [AMI Meeting Corpus](https://huggingface.co/datasets/edinburghcstr/ami)，署名为爱丁堡大学及 AMI 联盟。混合语言素材来自 [ASCEND](https://huggingface.co/datasets/CAiRE/ASCEND)，署名为 CAiRE 的 Holy Lovenia、Samuel Cahyawijaya、Genta Indra Winata 等作者。参考文本采用相应语料的人工标注，不是模型生成的答案。AMI 衍生素材保留 CC BY 4.0；ASCEND 衍生音频及参考文本保留 CC BY-SA 4.0。

**这些都是剪辑拼接的片段，不是连续会议。** 原有重叠发言和停顿没有保留。加噪片段与对话片段用的是不同语句，因此不能把分数差异单独归因于噪声。白噪声也不等于房间回声、咖啡馆人声或自然抢话。测试没有使用用户的机密录音，也没有人工听音复核或手工修正转写。

## 全部实测结果

错误率越低越好。**WER** 按英语单词统计编辑错误，再除以参考词数。**MER** 把每个汉字和每个英语单词分别作为一个单位，统计混合文本的编辑错误；不是按空格切中文词的 WER，也不能与英语 WER 直接横比。计分前统一小写，去除括号标注和标点，并统一撇号形式。

总耗时包括进程启动、模型加载、解码或生成及监测开销。摘要耗时不含另行启动服务器及此前查询模型信息的时间。每种组合只跑一次，全部串行运行；base 和 turbo 的首次加载更偏冷启动。RSS 约每 0.5 秒采样一次，可能漏掉瞬时峰值，也可能重复计算共享内存页，**不是 GPU 或统一内存的总占用**。

| 本地模型 | 输入 | 总耗时（秒） | 采样进程树峰值 RSS MiB | Swap 增量 MiB | 结果 |
| --- | --- | --- | --- | --- | --- |
| whisper.cpp base Q5_1 | 英语对话 | 9.47 | 273 | 0 | 39.83% WER |
| whisper.cpp base Q5_1 | 加噪英语 | 3.17 | 276 | 0 | 36.89% WER |
| whisper.cpp base Q5_1 | 中英混合 | 3.15 | 254 | 0 | 50.00% MER |
| whisper.cpp small Q5_1 | 英语对话 | 5.19 | 468 | 0 | 53.39% WER |
| whisper.cpp small Q5_1 | 加噪英语 | 6.42 | 500 | 0 | 29.61% WER |
| whisper.cpp small Q5_1 | 中英混合 | 7.91 | 492 | 0 | 42.59% MER |
| whisper.cpp large-v3-turbo Q5_0 | 英语对话 | 21.82 | 825 | 0 | 22.88% WER |
| whisper.cpp large-v3-turbo Q5_0 | 加噪英语 | 8.88 | 849 | 0 | 29.13% WER |
| whisper.cpp large-v3-turbo Q5_0 | 中英混合 | 9.85 | 832 | 0 | 20.37% MER |
| Qwen2.5 1.5B Instruct Q4_K_M | 英语对话 | 23.68 | 1295 | 0 | 3/4 字面检查 |
| Qwen2.5 1.5B Instruct Q4_K_M | 加噪英语 | 8.53 | 1301 | 0 | 1/4 字面检查 |
| Qwen2.5 1.5B Instruct Q4_K_M | 中英混合 | 3.75 | 1304 | 0 | 3/4 字面检查 |
| Qwen2.5 1.5B Instruct Q4_K_M | 人工构造测试文本 | 6.36 | 1343 | 0 | 3/5 字面检查 |

加上分母，更容易理解这些错误率的含义：

| Whisper 模型 | 英语对话：编辑错误数 / 词数 | 加噪英语：编辑错误数 / 词数 | 中英混合：编辑错误数 / 混合单位数 |
| --- | --- | --- | --- |
| base Q5_1 | 47/118 | 76/206 | 108/216 |
| small Q5_1 | 63/118 | 61/206 | 92/216 |
| large-v3-turbo Q5_0 | 27/118 | 60/206 | 44/216 |

语音识别进程树 RSS 包含命令行程序。Qwen 的进程树 RSS 包含隔离的 Ollama 服务器、模型运行进程和请求客户端；只测客户端的高水位 RSS 不能代表模型内存。所有运行都成功退出，没有记录到停止原因。

**就这几个样本而言，速度不是主要问题。** turbo 用 8.88–21.82 秒处理约 61–76 秒音频，采样进程树 RSS 约为 825–849 MiB。Qwen 约占 1.26–1.31 GiB，耗时为 3.75–23.68 秒。两组范围都不是完整会议的性能承诺。

## 为什么待办清单仍然要核对

事先确定的检查要求包括：JSON 格式有效、至少两条能逐字对应输入的事实、每条事实都有支持，以及每项任务、负责人和截止时间都有原句支持。未说明的负责人或日期必须保持为“not stated”。人工构造文本还要求恢复两项明确分配的任务及上线决定，不能把建议改写为承诺。

| Qwen 输入 | 通过逐字支持检查的事实 | 通过字面支持检查的行动 | 未通过的地方 |
| --- | --- | --- | --- |
| 英语对话 | 2/3 | 0/0 | 一条事实缺少逐字支持；未返回行动 |
| 加噪英语 | 1/3 | 0/3 | 有支持的事实不足，行动均未通过 |
| 中英混合 | 3/3 | 0/1 | 返回的行动未通过证据规则 |
| 人工构造测试文本 | 3/3 | 0/3 | 应有两项行动，却返回三项；负责人、日期及决定的精确恢复失败 |

四份响应都通过了 JSON 检查。英语对话的 0/0 行动，不代表所有重要行动都找全了。逐字检查有意采用保守标准，会惩罚改写，因此未通过不等于每句话都是假的；即便通过，也不能证明摘要有用、完整或理解正确。**没有进行人工语义摘要评审。** 音频、转写和摘要没有交给云端评审者。

Qwen 经 Ollama 0.40.13 运行，上下文为 2048 token，温度为 0，随机种子为 20261107，输出上限为 384 token，keep_alive=0。这些是实验设置，不是经过验证的长会议配置。

## 先得到可核对的转写，再考虑纪要

1. **先用不涉密的短片段试 turbo。** 可从多语言 [whisper.cpp 项目](https://github.com/ggml-org/whisper.cpp)和[对应的 Q5_0 turbo 权重](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin)开始。运行时和 Whisper 模型采用 MIT 许可。turbo 的预期 SHA-1 为 `e050f7970618a659205450ad97eb95a18d69c9ee`。
2. **新 Mac 可参考上游源码构建路线。** 需要 Xcode 命令行工具和 CMake。建议顺序是克隆项目，用 `cmake -B build` 配置，再用 `cmake --build build -j 4 --config Release` 构建。这只是建议的安装路径，**不是本次验证过的全新 Mac 安装流程**。测试复用了已有的原生 Whisper 和 Ollama 程序。Whisper 发布版本未能核实，测试程序改用 SHA-256 固定身份。
3. **在本机把录音转换为单声道 16 kHz PCM WAV。** 混合语言可用自动语言检测，线程数参考测试的四线程。想保留双语转写就不要用 `-tr`，它请求的是翻译成英语。自动检测语言不等于区分说话人，本次也没有消除中英切换错误。
4. **先听录音修正转写，再提取任务。** 核对姓名、金额和日期。每项行动都确认任务内容、负责人、截止时间，以及是否真的达成共识。缺失信息就保留未说明，问参会者，不要猜。
5. **暂时别把结果外推到整场会议。** 没有测试完整 30–60 分钟会议、分段拼接、长上下文摘要、说话人归属或多小时温度负载。长会议可能需要分段再合并，但这条路线尚未测试。

[官方 Qwen GGUF](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF)采用 Apache 2.0 许可。这里链接它是为了说明模型身份，不是推荐自动生成纪要。文件大小为 1,117,320,736 字节，SHA-256 与发布方一致。常规 Ollama 拉取因重定向主机的安全检查而失败，匿名 GGUF 下载经过断点续传后才完成本地导入。全精度 base 下载也曾超时，之后改用较小的量化权重。安装并非一键完成。

## 隐私和内存：有用的防护，不是全面保证

测试匿名下载公开文件，没有登录或使用缓存账号令牌，推理在本地完成。Whisper 推理禁止联网。Ollama 使用独立的 HOME 和模型目录，关闭云功能，并限制对外连接，只允许本机回环。外部连接探测被阻止，本地访问成功。**这些检查说明的是这次测试，不是你电脑上的安装状态。** 用机密录音前先验证网络限制；除非确实想分享，否则不要让录音、转写和日志进入云同步或共享目录。本地文件仍需要访问控制、保留期限和录音同意。

测试没有清空机器原有负载或 swap。各阶段开始时已有约 2.6–2.9 GiB swap；实测运行期间没有增长。停止规则设置为 swap 增长超过 +256 MiB，或达到严重内存压力等级 4；语音识别超时为 240 秒，摘要超时为 180 秒。**没有刻意施压触发这些规则**，不能据此证明中止处理或持续负载下的安全性。没有停止无关应用，结束后只停止了测试自己启动的服务器。

另一套本地实现完成了 **180 项数值检查**，编辑错误数、错误率、RSS 采样及检查标记相符，留下**两处计时记账差异**：epoch 时间跨度与单调时钟分别相差 0.0966 秒和 0.0729 秒，约为 97 ms 和 73 ms。涉及 small 中英混合与 turbo 英语对话两次运行。报告耗时采用单调时钟；epoch 结束点较晚与读取日志有关。这是对已有测量的复算，**不是重新运行推理**。

用机密录音前，先确认失败运行不会复用旧输出、本地服务器确实是你要使用的那个、长输入没有超出上下文，以及取消后工作真的会停止。这里没有对这些防护完成独立的端到端验证。网络探测和数值检查不能代替这些确认，也不能代替人工质量评审。把它当作小规模探索测试，不要当成可直接投入生产的通过证明。

## 让 DeTars 帮你规划可核对的本地转写流程

把下面的请求发给 DeTars，并填好 [方括号]。

> 请帮我在 [Mac 型号、内存和 macOS] 上规划 [语言、录音时长和音频条件] 的本地转写。先用不涉密的短样本，分开评估转写准确率和摘要质量，说明如何核对姓名、数字、决定和任务负责人。请解释本地存储和联网防护。安装软件、下载模型或分享任何录音前，先征求我的同意。

把这些结果当作实用起点，不要当成准确率、隐私合规或自动纪要可靠性的保证。先确认录音同意，重要承诺再与相关人员核对。

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [AMI Meeting Corpus — dataset and licence](https://huggingface.co/datasets/edinburghcstr/ami) — 查阅日期: 2026-11-07
- [ASCEND — mixed-language dataset and licence](https://huggingface.co/datasets/CAiRE/ASCEND) — 查阅日期: 2026-11-07
- [whisper.cpp — upstream source-build project](https://github.com/ggml-org/whisper.cpp) — 查阅日期: 2026-11-07
- [Whisper large-v3-turbo Q5_0 — matching public weights](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo-q5_0.bin) — 查阅日期: 2026-11-07
- [Official Qwen2.5 1.5B Instruct GGUF](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF) — 查阅日期: 2026-11-07
