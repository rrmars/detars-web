---
title: "本地 OCR：这次六份文档实测，能帮你怎么选"
description: "为可搜索归档、中文文字或发票选择本地 OCR 流程，保留全部实测结果，也把隐私边界说清楚。"
locale: "zh"
slug: "offline-ocr-six-document-test"
translationKey: "offline-ocr-six-document-test"
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
  - title: "Tesseract official installation guidance"
    url: "https://tesseract-ocr.github.io/tessdoc/Installation.html"
    accessDate: "2026-11-06"
  - title: "tessdata_fast model documentation"
    url: "https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md"
    accessDate: "2026-11-06"
  - title: "Apple Vision text-recognition tutorial"
    url: "https://developer.apple.com/documentation/vision/recognizing-text-in-images"
    accessDate: "2026-11-06"
  - title: "RapidOCR legacy package release 1.4.4"
    url: "https://pypi.org/project/rapidocr-onnxruntime/1.4.4/"
    accessDate: "2026-11-06"
  - title: "RapidOCR tagged local-model configuration"
    url: "https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml"
    accessDate: "2026-11-06"
  - title: "EasyOCR publisher source and usage"
    url: "https://github.com/JaidedAI/EasyOCR"
    accessDate: "2026-11-06"
  - title: "EasyOCR official offline model hub"
    url: "https://www.jaided.ai/easyocr/modelhub/"
    accessDate: "2026-11-06"
  - title: "Tesseract engine licence"
    url: "https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Apple software licence agreements"
    url: "https://www.apple.com/legal/sla/"
    accessDate: "2026-11-06"
  - title: "RapidOCR tagged code licence"
    url: "https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE"
    accessDate: "2026-11-06"
  - title: "Upstream PaddleOCR licence"
    url: "https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "EasyOCR licence"
    url: "https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "Upstream CRAFT licence"
    url: "https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "ReportLab adapter dependency source and licence"
    url: "https://github.com/MrBitBucket/reportlab-mirror"
    accessDate: "2026-11-06"
  - title: "PyMuPDF documentation and licensing"
    url: "https://pymupdf.readthedocs.io/en/latest/about.html"
    accessDate: "2026-11-06"
headlineFigures:
  tesseract_mean_cer:
    label: "Unweighted six-page primary CER for the tested Tesseract configuration; not an overall quality rating"
    value: 3.61
    unit: "percent_mean_character_error_rate"
    display: "3.61%"
  vision_mean_cer:
    label: "Unweighted six-page primary CER for the tested Apple Vision wrapper"
    value: 6.48
    unit: "percent_mean_character_error_rate"
    display: "6.48%"
  rapidocr_invoice_cer:
    label: "Primary CER on the synthetic invoice; omitted quantity and layout limits still apply"
    value: 0.31
    unit: "percent_invoice_character_error_rate"
    display: "0.31%"
  easyocr_batch_seconds:
    label: "Single-run six-page OCR plus adapter PDF time, excluding shared model initialization"
    value: 82.47
    unit: "seconds_excluding_shared_initialization"
    display: "82.47"
audience:
  en: "Small-office users choosing local searchable-PDF OCR, bilingual recognition or invoice extraction, with Mac-specific test limits and no natural-handwriting validation."
  zh: "为小型办公室选择本地可搜索PDF文字识别、双语识别或发票信息提取的用户；测试仅限Mac环境，也没有验证自然手写体。"
faq: []
draft: false
---

**想让文件留在本地、金额认得准，又不想把时间都花在安装上？简单的可搜索归档，我会先试 Tesseract。已经准备好开发环境的 Mac，可以看看 Apple Vision 的英文和简体中文表现。发票文字方面，这次的 RapidOCR 配置更接近按行读取，但仍漏了数量。无论选谁，都要留着扫描原件核对。**

**先把隐私限制说清楚：**这是我们自己的动手实测，但不是严格的“从未上传”演示。准备期间，助手查看过附在对话里的合成文档缩略图拼图。全部 24 次完成的 OCR 任务本身都在本地执行，并禁止其进程树访问网络。没有使用私人文件，也没有把文档交给在线 OCR 接口。但这不能证明从未有文档图像离开电脑，也不能证明整机、备份和同步服务都已隔离。处理机密材料时，跳过助手看图，把文件放在不参与同步的目录，并让整个流程断网。

收据是生成的手机拍照效果模拟，不是真实拍摄；手写字是程序绘制的笔画便条，不是人的自然书写。下列结果只适用于这六份合成文档、这些配置和这台电脑，不能替你的真实文件下结论。

## 先按要完成的事来选

| 你的重点 | 我会从哪里开始 | 依赖结果前要查什么 |
|---|---|---|
| 信函和简单收据的可搜索归档 | 能接受命令行的话，先试 Tesseract | 原生可搜索 PDF 导出方便，但漏掉了合成的页边便条 |
| 现有 Mac 上的英文和简体中文 | Apple Vision，加上可维护的本地封装 | 这次双语表现强；PDF 来自我们的适配器，不是文字识别 API 自带导出 |
| 发票文字及明细 | 试用锁定版本的 RapidOCR 基线，再逐行核对 | 这次发票顺序最好，但不是可编辑表格，也不验算；别只凭这个结果给新生产系统锁死旧依赖 |
| 已有 Python 集成 | EasyOCR 可能适合现有技术栈 | 这次安装精力和 CPU 时间最多；对这批归档不是我的首选 |
| 自然手写字 | 用真实样本在本地试，并保留人工复核 | 这张人工便条不足以支持推荐任何一款 |

**反直觉的地方是：**最大错误来自干净的双栏页，因为左右栏文字被交织在一起。搜索能用，复制出来的段落却可能读不通。同样，发票金额看着正确，也可能配错行。搜索、复制顺序和行金额对应关系，要分开检查。

## 这次测了什么，又没测什么

测试及来源访问日期是新加坡时区的2026年11月6日；执行时间戳也落在 UTC 的2026年11月5日。电脑为 Apple M2，16 GiB RAM，macOS 26.5.1 build 25F80，Python 3.12.12 和 Swift 6.3.1。这些是实际测试版本，不代表最新版。本次草稿没有重跑 OCR，也没有重新访问外部来源。

各引擎拿到相同 PNG，不是带现成文字层的 PDF：五页为 1700 × 2200 px，收据为 1100 × 1600 px，并有 200 dpi 的纯图像 PDF 副本。标准文字在虚构样本创建时就写好，没有迁就 OCR 改答案。发票是带网格的 7 行、4 列表格。收据加入透视变形、2° 旋转、光照渐变、固定种子的噪声和 0.65 px 模糊。蓝色便条用笔画路径绘制，即使识别成功，也不能说明真实手写字的表现。

Tesseract、Vision、RapidOCR、EasyOCR 按此顺序依次运行，固定文档顺序，各完成一轮。没有多次挑最好、逐页调参、额外纠偏或人工修字。Python 引擎使用 CPU 和两个计算线程；EasyOCR 用 batch 1、workers=0。Vision 内部硬件调度由 Apple 管理。准备环境和测试程序失败不算入评分案例。

OCR 进程使用 `sandbox-exec`，策略为 `(version 1)(allow default)(deny network*)`；模型预先备妥，EasyOCR 下载也已禁用。单独的 TCP 连接探测返回 EPERM。这只是进程层面的证据，不是整机流量审计。

### 看懂分数，别让一个平均值替你决定

主要字符错误率 CER 为 `100 × 编辑距离 / 标准文字字符数`：先做 Unicode NFC 规范化，再删除全部 Unicode 空白。大小写、数字、标点仍计分；一个汉字按码点算，不按 UTF-8 字节长度算。越低越好，**0% 不代表空格正确。**WS CER 则把连续空白压成单个空格，因此合并单词、插入空格也会影响结果。

保留引擎返回的顺序：标准文字先读完左栏再读右栏，发票逐行读，盖章页先正文、再印章、最后便条。因此，高 CER 可能意味着顺序错，而不是字认不出来。下表是各页不加权平均值，短页和长页权重相同，版面顺序的影响也很大。

| 流程 | 平均 CER | 六页加 PDF，秒 | 额外共用模型初始化，秒 | 可搜索 PDF |
|---|---:|---:|---:|---:|
| Tesseract | 3.61% | 2.70 | 0.00 | 6 / 6 |
| Apple Vision | 6.48% | 4.52 | 0.00 | 6 / 6 |
| RapidOCR，旧版 | 12.74% | 7.35 | 0.38 | 6 / 6 |
| EasyOCR | 14.95% | 82.47 | 5.09 | 6 / 6 |

Python 共用初始化每批只加一次，不要每页都加。Tesseract 和 Vision 的单独初始化接近零，不等于启动不花时间：进程启动已包含在逐页用时里。OCR 时间含载图和推理；Tesseract 还含原生文字、文本框和 PDF 导出。其他流程的 PDF 适配器另计时。安装、模型下载、Swift 编译、共用 Python 及 PDF 库准备不计入。首页冷缓存和同机其他活动都会影响单次用时；没有测峰值 RAM。后面的模型文件大小也不等于内存占用。

## 每份文档、每个工具的完整结果

下列秒数和百分比由记录的 CSV 四舍五入至两位小数。PDF“已含”指原生导出已计入 OCR；“适配器”指我们的本地 ReportLab 隐形文字叠加。“是”只表示能提取文字层，且至少一个预设查询命中，不表示每个字都对。全部 24 份输出通过了这个有限的可搜索测试；保留的验证记录也报告了 200 dpi 下原图像素一致。没有任何一种能重建可编辑表格，也不保证高亮位置或所有阅读器、索引器的兼容性。

| 文档及工具 | CER | WS CER | OCR 秒 | PDF 秒 | 可搜索及方式 | 关键表现 |
|---|---:|---:|---:|---:|---|---|
| 信函 · Tesseract | 0.00% | 0.00% | 0.50 | 已含 | 是／原生 | 去空白后标准字符全对；段落保留 |
| 信函 · Apple Vision | 0.00% | 0.00% | 1.53 | 0.09 | 是／适配器 | 标准字符和行序正确 |
| 信函 · RapidOCR | 0.00% | 0.18% | 1.25 | 0.06 | 是／适配器 | 字符正确，但部分空格合并 |
| 信函 · EasyOCR | 1.32% | 1.29% | 17.05 | 0.06 | 是／适配器 | 出现中文句号、大小写变化及碎行；使用双语模型 |
| 模拟收据 · Tesseract | 0.00% | 0.00% | 0.26 | 已含 | 是／原生 | 轻微模拟倾斜下仍保留合计及编号 |
| 模拟收据 · Apple Vision | 1.44% | 1.19% | 0.33 | 0.68 | 是／适配器 | 金额保留；ASCII x 变成 × |
| 模拟收据 · RapidOCR | 0.00% | 0.00% | 0.57 | 0.69 | 是／适配器 | 去空白后标准字符全对，金额可搜索 |
| 模拟收据 · EasyOCR | 5.26% | 5.56% | 7.01 | 0.75 | 是／适配器 | x 变成 X；感谢语碎裂、重排；合计可搜索 |
| 双栏 · Tesseract | 0.00% | 0.00% | 0.42 | 已含 | 是／原生 | 读完整个左栏，再读右栏 |
| 双栏 · Apple Vision | 0.00% | 0.00% | 0.41 | 0.07 | 是／适配器 | 读完整个左栏，再读右栏 |
| 双栏 · RapidOCR | 69.88% | 66.62% | 1.38 | 0.06 | 是／适配器 | 左右栏交织，主要是顺序问题 |
| 双栏 · EasyOCR | 70.77% | 67.22% | 14.45 | 0.08 | 是／适配器 | 栏交织，另有标点及大小写错误；没有分栏重建 |
| 发票 · Tesseract | 17.79% | 16.67% | 0.34 | 已含 | 是／原生 | 明细行正确，但付款备注跑到小计、税及总额之前 |
| 发票 · Apple Vision | 37.42% | 36.41% | 0.38 | 0.09 | 是／适配器 | 按列而非按行返回单元格；不是可编辑表格 |
| 发票 · RapidOCR | 0.31% | 1.28% | 1.13 | 0.06 | 是／适配器 | 接近逐行顺序，但漏掉 Delivery 数量 1，英文空格合并 |
| 发票 · EasyOCR | 2.45% | 3.08% | 14.02 | 0.08 | 是／适配器 | Qty 表头移位；漏掉 Desk labels 数量 4 和 Delivery 数量 1 |
| 印章便条 · Tesseract | 2.88% | 3.24% | 0.26 | 已含 | 是／原生 | 印章识别，整条 Call me 便条遗漏；精确短语搜索失败 |
| 印章便条 · Apple Vision | 0.00% | 0.00% | 0.36 | 0.05 | 是／适配器 | 印章和合成便条按标准顺序识别 |
| 印章便条 · RapidOCR | 5.77% | 6.88% | 0.78 | 0.05 | 是／适配器 | 读出 Call me，但插进正文行之间 |
| 印章便条 · EasyOCR | 2.40% | 2.02% | 13.11 | 0.06 | 是／适配器 | RECORD 变成 REGORD，DO 变成 00；Call / Me 分开；精确短语搜索失败 |
| 双语 · Tesseract | 1.00% | 17.20% | 0.93 | 已含 | 是／原生 | 全角冒号变成 ASCII，汉字间多出空格 |
| 双语 · Apple Vision | 0.00% | 0.65% | 0.46 | 0.07 | 是／适配器 | 去空白后标准字符全对，两种语言都可搜索 |
| 双语 · RapidOCR | 0.50% | 5.16% | 1.25 | 0.06 | 是／适配器 | Room 变成 Ro0m，斜杠全半角变化，英文空格合并 |
| 双语 · EasyOCR | 7.50% | 8.39% | 15.72 | 0.08 | 是／适配器 | 混合行碎片及标点丢失，filing. 移位，已变成己 |

每份文档用 PyMuPDF 尝试三个预设搜索词。Tesseract 和 EasyOCR 的盖章页 PDF 找不到精确短语 `Call me`，其他预设词均找到。四款工具的双语 PDF 都找到中文词 `隐私`。这适合用来检查归档，不足以证明完整索引。

## 安装时需要准备什么

这里的“免费”是没有单独 OCR 服务费，不是 Mac 硬件免费、提供一键安装器，或每项依赖都能任意再分发。安装难度来自这次操作体验，不是通用安装时长。

| 流程及测试版本 | 模型和设置 | 安装及许可限制 |
|---|---|---|
| Tesseract 5.5.3 | tessdata_fast eng 4.11 MB + chi_sim 2.47 MB；OEM 1、PSM 3；除双语页用 eng+chi_sim，其余用英文 | 中等：引擎原已安装，另加语言包；独立 tessdata 需 pdf.ttf 和明确导出参数。引擎及模型为 Apache-2.0。测试直接 CLI，不是 OCRmyPDF |
| Apple Vision，macOS 26.5.1 build 25F80 | VNRecognizeTextRequest revision 3、accurate 模式、请求语言纠正；en-US，或 zh-Hans 排在 en-US 前 | 已准备的 Mac 难度低；新 Mac 需编译器、SDK 和 Swift 6.3.1 封装，难度中等。系统自带专有框架，非开源。无单独模型下载，内部模型大小未知。未测 Live Text 图形界面 |
| rapidocr-onnxruntime 1.4.4 | PP-OCRv4 检测及识别器 + mobile v2 方向分类器；共 15.60 MB；0/180 分类、文本阈值 0.5、检测边长限制 736、页面最长边 2000 | Python、ONNX、OpenCV 环境难度中等；锁定 wheel 内含模型，需 PDF 适配器。代码及上游、转换模型为 Apache-2.0。旧版基线不能与较新的 rapidocr 包互换 |
| EasyOCR 1.7.2 | CRAFT 83.15 MB + zh_sim_g2 21.95 MB = 105.10 MB；CPU、所有页用双语模型、paragraph=False | 这次难度高：Python、PyTorch、模型下载中断和 TLS 恢复；需 PDF 适配器。EasyOCR 为 Apache-2.0，上游 CRAFT 为 MIT；未独立确定各检查点专属许可。未测纯英文配置 |

这些 MB 是十进制模型文件大小，不是驻留内存。CSV 的文本框数也不能公平地比较行数：Tesseract 统计词框，其他工具大多统计行框。

要了解这些选择所依据的当时上游说明，可看 [Tesseract 安装](https://tesseract-ocr.github.io/tessdoc/Installation.html)、[快速模型说明](https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md)、[Apple 文字识别教程](https://developer.apple.com/documentation/vision/recognizing-text-in-images)、[RapidOCR 对应版本](https://pypi.org/project/rapidocr-onnxruntime/1.4.4/)及[带版本标签的模型配置](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml)，以及 [EasyOCR 用法](https://github.com/JaidedAI/EasyOCR)和[离线模型中心](https://www.jaided.ai/easyocr/modelhub/)。决定再利用前，请看 [Tesseract 许可](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE)、[Apple 软件协议](https://www.apple.com/legal/sla/)、[RapidOCR 对应版本许可](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE)、[PaddleOCR 许可](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE)、[EasyOCR 许可](https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE)和 [CRAFT 许可](https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE)。适配器使用 [ReportLab](https://github.com/MrBitBucket/reportlab-mirror)，PDF 检查使用 [PyMuPDF](https://pymupdf.readthedocs.io/en/latest/about.html)；再分发流程时也要考虑其许可。这些是保留的来源链接，不是新做的兼容性或许可审计。

## 先用一小批非机密文件试起来

私人文件进入电脑前，先安装软件并缓存所需语言。输入、输出放在不参与同步的本地目录，保留扫描原件；隐私要求若覆盖整机，就全程断网。先处理少量有代表性的样本，再决定是否投入整批归档。

每份结果核对姓名、金额和短语。把双栏页的一段文字、发票的一整行复制到文本编辑器，检查日期、编号、合计、数量，以及行与金额的对应关系，不要只看能不能搜到词。重要材料保留人工复核。新电脑仍需准备环境；这不是可携带的应用安装包，Vision 封装和沙箱策略也仅适用于 Mac。

## 让 DeTars 帮你规划本地 OCR 小试验

把下面这段发给 DeTars，将 [方括号] 换成自己的情况。

> 请为[电脑及操作系统]、[语言]、[文档类型和数量]及[隐私边界]选择本地 OCR 小试验方案。比较安装、可搜索 PDF 导出、阅读顺序和表格风险。使用非机密样本，要求核对姓名、金额和漏掉的便条。只做计划；未经我同意，不上传文档、不安装软件、不重跑 OCR。

*把它当作一个友好的试用起点，不是隐私认证或记录准确承诺；请保留扫描件，并核对会影响决定的内容。*

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [Tesseract official installation guidance](https://tesseract-ocr.github.io/tessdoc/Installation.html) — 查阅日期: 2026-11-06
- [tessdata_fast model documentation](https://github.com/tesseract-ocr/tessdata_fast/blob/main/README.md) — 查阅日期: 2026-11-06
- [Apple Vision text-recognition tutorial](https://developer.apple.com/documentation/vision/recognizing-text-in-images) — 查阅日期: 2026-11-06
- [RapidOCR legacy package release 1.4.4](https://pypi.org/project/rapidocr-onnxruntime/1.4.4/) — 查阅日期: 2026-11-06
- [RapidOCR tagged local-model configuration](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/python/rapidocr_onnxruntime/config.yaml) — 查阅日期: 2026-11-06
- [EasyOCR publisher source and usage](https://github.com/JaidedAI/EasyOCR) — 查阅日期: 2026-11-06
- [EasyOCR official offline model hub](https://www.jaided.ai/easyocr/modelhub/) — 查阅日期: 2026-11-06
- [Tesseract engine licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE) — 查阅日期: 2026-11-06
- [Apple software licence agreements](https://www.apple.com/legal/sla/) — 查阅日期: 2026-11-06
- [RapidOCR tagged code licence](https://github.com/RapidAI/RapidOCR/blob/v1.4.4/LICENSE) — 查阅日期: 2026-11-06
- [Upstream PaddleOCR licence](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE) — 查阅日期: 2026-11-06
- [EasyOCR licence](https://github.com/JaidedAI/EasyOCR/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [Upstream CRAFT licence](https://github.com/clovaai/CRAFT-pytorch/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [ReportLab adapter dependency source and licence](https://github.com/MrBitBucket/reportlab-mirror) — 查阅日期: 2026-11-06
- [PyMuPDF documentation and licensing](https://pymupdf.readthedocs.io/en/latest/about.html) — 查阅日期: 2026-11-06
