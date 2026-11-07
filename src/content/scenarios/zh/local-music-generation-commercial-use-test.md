---
title: "本地 AI 配乐商用测试：没有模型满足全部条件"
description: "这份 Mac 本地配乐测试分清许可限制、内存停止与已完成测量，帮你选择下一次试验，不虚构商用赢家。"
locale: "zh"
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
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
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

你想给变现的解说视频配乐，不想开云端账号、付订阅费，也不想让 Mac 挤不出内存。**这次没有任何受测本地模型满足全部条件。** MusicGen 和 AudioLDM 完成了提示词任务，但权重许可限于非商业用途。Riffusion 的许可更适合商用，但长片段生成触发了内存守卫。Stable Audio Open Small 需要受限访问，因此跳过。先看许可，再看内存，最后判断是否给旁白留出空间，不要只被漂亮的速度数字吸引。

测试日期为新加坡时间2026年11月7日，共得到 **10 段完整音频**，WAV 合计 **9.58 MB**。条件是 16 GB Mac、匿名获取模型、本地推理，以及约 20–30s 配乐，同时把进程内存目标控制在约 6 GB。这不是完整的四模型试听比赛。提示词全部是英文，要求纯器乐；**没有测试中文提示词、中文歌词或中文输出**。本文没有更新许可和访问条件信息。

## 先看许可，再点安装

| 模型 | 权重许可 | 代码许可 | 对变现视频的影响 |
| --- | --- | --- | --- |
| MusicGen small | CC-BY-NC 4.0 | AudioCraft MIT；实际使用 Transformers Apache-2.0 | 不能据此认定该用途已获商用许可；代码许可不会消除权重限制。 |
| AudioLDM small v2 | CC-BY-NC-SA 4.0 | 原版 AudioLDM NC-SA；实际使用 Diffusers Apache-2.0 | 不能认定已获商用许可。检查点缺少 LICENSE 不代表允许商用。 |
| Riffusion v1 | CreativeML OpenRAIL-M，有用途限制 | Riffusion MIT；实际使用 Diffusers Apache-2.0 | 遵守限制时允许商用；但未在内存守卫范围内完成音频。 |
| Stable Audio Open Small | Stability AI Community License | stable-audio-tools MIT | 访问受限：需要登录并接受条款；本次未使用账号。未读到受限检查点的完整许可。 |

选择工作流前，先读 [MusicGen 权重许可](https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights)、[AudioLDM 检查点说明](https://huggingface.co/cvssp/audioldm-s-full-v2/blob/main/README.md)、[Riffusion 许可](https://huggingface.co/spaces/CompVis/stable-diffusion-license/raw/main/license.txt)和 [Riffusion 模型卡](https://huggingface.co/riffusion/riffusion-model-v1)。代码免费，不代表权重不受限制。NC 和带用途限制的 OpenRAIL 权重，都不是不限制用途的 OSI 式开源资产。

MusicGen 和 AudioLDM 的限制针对获许可模型的商业使用；这**不等于**每段生成音频自动继承 CC 许可。Riffusion 许可第 §6 条表示许可方不主张输出权利，但第 §9 条不提供不侵权保证。模型卡又将直接用途描述为研究。允许商用，不等于保证原创、拥有著作权或通过 Content ID。请把实际许可和模型版本一起留在项目中。

[Stable Audio Open Small](https://huggingface.co/stabilityai/stable-audio-open-small) 的匿名请求返回 401，访问标记为 gated:auto。原生最长为 11s，本来也不能直接生成单段 20–30s 音频。保留的[社区协议](https://stability.ai/community-license-agreement)更新于2024年7月5日，要求商用注册；你或关联方的合计年收入无论来自何处，一旦超过 **US$1,000,000**，普通许可即终止。匿名访问未能取得受限检查点的完整条款，不能把公开协议当作已完成检查点商用核准。若愿意放宽无账号条件，先核对真正需要接受的条款，再下载或制作商业内容。

## 这台 Mac 实际完成了什么

| 模型 | 完成 | 耗时中位数 | RTF 中位数 | 采样 RSS 峰值 | 设备 |
| --- | --- | --- | --- | --- | --- |
| musicgen-small | 5/5 | 159.4 s | 7.99× | 4.76 GB | cpu |
| audioldm-small | 5/5 | 27.9 s | 1.39× | 4.31 GB | cpu |
| riffusion | 0/5 | — | — | — | — |
| stable-audio-open-small | 0/5 | — | — | — | — |

Riffusion 的横线表示没有完成音频，不表示耗时或内存为零。Stable Audio Open Small 没有运行。RTF 是生成耗时除以输出时长，越低越快。**8× 表示每秒音频需要八秒计算**，不是快八倍。这里 GB 按 1,000,000,000 字节计算，不含下载和安装时间。

设备为 Mac14,2、arm64、macOS 26.5.1，统一内存 16 GiB（十进制 17.18 GB）。生成使用四个 CPU 线程，每次只加载一个推理模型，批量大小为 1，每个提示词固定种子 20261107。成功运行均为 CPU float32。Python 为 3.11.4，torch 和 torchaudio 为 2.8.0，Diffusers 为 0.35.2，Transformers 为 4.57.1。AudioLDM 流水线提示在 0.33.1 之后弃用，但所装版本仍执行成功。复现时应保留固定依赖，不要假定升级后结果相同。

### 同样的提示词，不靠反复抽卡挑结果

请求时长约为 20 秒。MusicGen 使用 1000 tokens，生成 19.94s；AudioLDM 接收 audio_length_in_s=20，生成 20.00s。其余采样设置采用库默认值；AudioLDM 开启 attention slicing。以下英文提示词原样复用：

- **01-lofi** — Calm lo-fi instrumental background music under spoken narration, soft electric piano, gentle drums, no vocals.
- **02-corporate** — Upbeat corporate instrumental background music, bright piano, light percussion, optimistic and steady, no vocals.
- **03-tech** — Ambient technology instrumental background music, warm synthesizer pads, subtle electronic pulse, spacious and restrained, no vocals.
- **04-acoustic** — Warm acoustic instrumental background music, fingerpicked acoustic guitar, gentle relaxed rhythm, intimate and friendly, no vocals.
- **05-cinematic** — Cinematic instrumental background music building gradually, soft strings and piano, hopeful rising energy, no vocals.

### 每段已完成音频的测量

这些是未经额外响度母带处理的 PCM16 单声道 WAV。宽表可横向滚动。缺失结果不是质量分数。

| 模型 | 提示词 | 耗时 s | RTF | RSS GB | 守卫值 GB | 时长 s | Hz | 字节 | LUFS-I | 真峰值 dBFS | 接近满幅采样 | 静音窗口 | CLAP 余弦值 |
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

耗时包含条件处理、生成和波形重建，不含加载及写入 WAV。记录的加载时间为 MusicGen 7.0039s、AudioLDM 5.8062s。AudioLDM 单独记录的加载峰值为 RSS 0.458473472 GB、守卫值 0.458866688 GB；首次 MusicGen CPU 运行没有独立加载峰值。尽管采用 CPU 推理，每个完成行都记录了 393,216 字节 Metal 驱动分配。详细 CSV 保留未四舍五入数值及文件哈希。

LUFS-I 和过采样真峰值来自 FFmpeg ebur128。“接近满幅”统计绝对幅度 ≥32767/32768 的采样，是削波风险代理指标，不是失真证明。静音指所有声道 RMS 低于 −60 dBFS 的 50 ms 窗口占比。安静片段可能需要调整增益，但这些数字不能证明音乐实用性。

CLAP 余弦值是自动文本与音频匹配代理指标，**不是质量评分**。LAION HTSAT unfused 在本地以 CPU float32 运行，只处理前 10s，混为单声道并重采样至 48kHz。它不能判断完整 20s 的推进或与旁白的适配。独立进程重复评分的最大差为 0.0，在 1e-6 容差内通过；这证明可重复，不证明好听。没有真人试听小组，也不声称个人试听感受；音频未发往远程评分模型。

## 其他候选为什么没有通过

| 模型 | 提示词 | 结果 |
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

Riffusion 实际尝试了首个提示词；触发内存停止后，其余四个没有继续尝试。Stable Audio Open Small 在推理前就被排除。这些是失败和排除记录，不是虚构的音频测量。

- **MusicGen MPS 恢复：** float16 尝试在保守的 RSS 加 Metal 守卫值 6.095 GB 时停止。相加可能重复计算统一内存，不能当作实际物理内存。之后 CPU float32 完成整组。
- **Riffusion MPS 超限：** 独立运行观察发现 **6.535 GB 物理占用**，随后手动停止进程。原来的 RSS 加 Metal 守卫漏掉了这次超限，不能说它成功控制在 sub-6GB。
- **Riffusion CPU 恢复：** float32 先触发 5.8 GB 安全余量；最后按要求用 6.0 GB 截止值重试，在 **6.075 GB 采样 RSS** 时停止。最终 CSV 记录 RSS 为 6,075,269,120 字节，守卫值为 6,075,662,336 字节，物理占用为 2,973,424,000 字节，加载为 5.0880s。不同内存指标不能互换。探索性的 CPU float16 尝试因不支持设备的警告而中止，没有完成音频。
- **Riffusion 不是原封不动的默认设置：** 使用 512×2048 频谱图请求约 20.47s，而非常见的 512×512、约 5.11s 短片段。开启 attention slicing 和 VAE tiling。直接使用 Diffusers，不同于已经停止维护的原应用。逆梅尔解码为了兼容 torchaudio 2.8，把旧 SGD 参数改为最小二乘 gelsd；上游默认 Griffin–Lim、归一化和滤波保留。流水线未加载图像安全模块；没有图像输入或上传，也没有把短片段拼接冒充连贯长片段。
- **其他名字不是额外测试出的赢家：** MusicGen stereo-small 在配置阶段遇到 tokenizer 不完整和 safetensors 损坏错误，没有生成音频。Melody 未加载；更大的权重以及同样的 NC 限制并不能解决这里的决策。Stable Audio 3 Small-Music、AudioLDM2 和 TangoFlux 仅做资料筛选。前者访问受限，后两者有非商业或研究用途限制。

内存每 100 ms 对运行中的进程采样。RSS 包含驻留权重，不包含其他应用或全系统。最初守卫是 RSS 加 Metal 分配，恢复时另加入 macOS 物理占用采样。采样可能短暂越过阈值，也可能漏掉瞬时峰值。**已完成的 MusicGen 和 AudioLDM 音频没有事后补测物理占用**，RSS 不能证明总内存一定低于硬上限。也不要据此认为 16 GB Mac 剩余内存都能给其他工作。

## 下一步怎么走，不硬选一个赢家

如果变现用途和上述规则都不能改变，**这些证据不足以让任何候选进入生产使用**。先保留现有已获许可的配乐方式，再决定愿意放宽哪项条件。对于合规的非商业技术评估，AudioLDM 的耗时中位数为 27.9 s，比 MusicGen 的 159.4 s 更快；但它因此不会变成商用许可推荐，也不是试听质量冠军。

如果决定再做本地试验，请保存具体权重版本和许可，一次只运行一个模型，设置明确的停止守卫，并测试真正需要的时长，而非方便的短片段。随后配上自己的旁白，听是否遮挡人声、出现不想要的声音、循环接缝或突兀结尾。这些是下一步检查，不是本次已证实的结论。发布前还要单独核对原创性和平台限制。

本次测试仅以匿名 HTTP GET 下载公开代码和权重，下载与推理分开。推理采用离线和 local-files-only 加载，并禁用 Python 网络套接字。未使用账号、缓存的 Hugging Face token、个人浏览器会话或外部音频理解服务。下载中断通过临时文件及可获得的公开 LFS 哈希核对处理。推理离线，不代表最初下载模型不需要网络。

### 结果是怎么核对的

本次测试的音频片段、完整结果 CSV、提示词和生成记录不随本文公开。NC 模型片段用于评估，不是已获许可的生产配乐。

独立检查对全部 10 段通过：采用独立的标准库 wave/array 解码，以及新运行的 FFmpeg ebur128 和 ffprobe，复核时长、采样率、大小、PCM 幅度、静音、响度、峰值和 RTF。它可用日志耗时与独立时长重算 RTF，但**不能**重新测量历史生成耗时或内存。本文没有重跑基准或浏览器检查。

[原 Riffusion 应用](https://github.com/riffusion/riffusion/blob/main/README.md)已停止维护，本次测试需要做一处兼容性改动才能运行。不要把安装成功说成内存守卫测试成功。

## 让 DeTars 帮你设计真正用得上的本地配乐测试

把下面的请求发给 DeTars，并用你的情况填好 [方括号]。

> 为 [电脑和可用内存]、[片段时长]、[商业或非商业用途] 以及 [账号和网络规则] 比较本地纯器乐选项。分开核对代码与权重许可，记录具体版本，规划内存停止检查，并区分已完成结果和排除项。根据 [旁白与风格需要] 制定试听清单。下载模型、接受条款、上传音频或花钱前先征求我的同意。

把它当作实用起点，不是无版权风险证明。本文提供一般技术信息，不是法律意见；商用前请确认实际许可和发布要求。

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [MusicGen weight licence](https://github.com/facebookresearch/audiocraft/blob/main/LICENSE_weights) — 查阅日期: 2026-11-07
- [AudioLDM small v2 checkpoint card](https://huggingface.co/cvssp/audioldm-s-full-v2/blob/main/README.md) — 查阅日期: 2026-11-07
- [CreativeML OpenRAIL-M](https://huggingface.co/spaces/CompVis/stable-diffusion-license/raw/main/license.txt) — 查阅日期: 2026-11-07
- [Riffusion model card](https://huggingface.co/riffusion/riffusion-model-v1) — 查阅日期: 2026-11-07
- [Stable Audio Open Small public model page](https://huggingface.co/stabilityai/stable-audio-open-small) — 查阅日期: 2026-11-07
- [Stability AI Community agreement](https://stability.ai/community-license-agreement) — 查阅日期: 2026-11-07
- [Riffusion original README](https://github.com/riffusion/riffusion/blob/main/README.md) — 查阅日期: 2026-11-07
