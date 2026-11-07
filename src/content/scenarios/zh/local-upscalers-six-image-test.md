---
title: "本地照片放大：原件留好，副本慢慢选"
description: "这次在 Mac 上用四款工具处理六个图像案例，帮你选择本地放大流程，也分清更强纹理和真实细节。"
locale: "zh"
slug: "local-upscalers-six-image-test"
translationKey: "local-upscalers-six-image-test"
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
  - title: "scikit-image metric documentation"
    url: "https://scikit-image.org/docs/stable/api/skimage.metrics.html"
    accessDate: "2026-11-06"
  - title: "Library of Congress portrait catalog"
    url: "https://www.loc.gov/item/2013649738/"
    accessDate: "2026-11-06"
  - title: "Commons public-domain and exact-file mapping"
    url: "https://commons.wikimedia.org/w/index.php?curid=67999047"
    accessDate: "2026-11-06"
  - title: "used portrait JPEG"
    url: "https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg"
    accessDate: "2026-11-06"
  - title: "coffee image"
    url: "https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png"
    accessDate: "2026-11-06"
  - title: "coffee attribution and CC0 documentation"
    url: "https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py"
    accessDate: "2026-11-06"
  - title: "NPS forest rights and metadata"
    url: "https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266"
    accessDate: "2026-11-06"
  - title: "forest JPEG"
    url: "https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg"
    accessDate: "2026-11-06"
  - title: "Pillow project"
    url: "https://github.com/python-pillow/Pillow"
    accessDate: "2026-11-06"
  - title: "OpenCV licence"
    url: "https://github.com/opencv/opencv/blob/5.x/LICENSE"
    accessDate: "2026-11-06"
  - title: "FSRCNN repository"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow"
    accessDate: "2026-11-06"
  - title: "trained-model README"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md"
    accessDate: "2026-11-06"
  - title: "FSRCNN licence"
    url: "https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "tested weights"
    url: "https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb"
    accessDate: "2026-11-06"
  - title: "release metadata"
    url: "https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0"
    accessDate: "2026-11-06"
  - title: "used macOS archive"
    url: "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip"
    accessDate: "2026-11-06"
  - title: "wrapper usage"
    url: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan"
    accessDate: "2026-11-06"
  - title: "wrapper licence"
    url: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "upstream licence"
    url: "https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "release"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915"
    accessDate: "2026-11-06"
  - title: "used macOS archive"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip"
    accessDate: "2026-11-06"
  - title: "wrapper licence"
    url: "https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE"
    accessDate: "2026-11-06"
  - title: "upstream licence"
    url: "https://github.com/nagadomi/waifu2x/blob/master/LICENSE"
    accessDate: "2026-11-06"
  - title: "owner's weights-licence statement"
    url: "https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684"
    accessDate: "2026-11-06"
  - title: "Tesseract licence"
    url: "https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE"
    accessDate: "2026-11-06"
  - title: "Haar locator and embedded licence"
    url: "https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml"
    accessDate: "2026-11-06"
  - title: "CC0 terms"
    url: "https://creativecommons.org/publicdomain/zero/1.0/"
    accessDate: "2026-11-06"
headlineFigures:
  lanczos_portrait_psnr:
    label: "Best portrait PSNR within these prepared cases; not identity fidelity"
    value: 26.361
    unit: "dB_rounded"
    display: "26.361 dB"
  waifu2x_portrait_ssim:
    label: "Best portrait SSIM within this test, not a rating"
    value: 0.809023
    unit: "SSIM"
    display: "0.809023"
  successful_reported_jobs:
    label: "Four pipelines times six cases in the second serial pass"
    value: 24
    unit: "reported_jobs"
    display: "24"
  waifu2x_median_processing_seconds:
    label: "Median across six different image sizes, not repeated-trial speed"
    value: 0.392
    unit: "seconds_rounded"
    display: "0.392"
audience:
  en: "Mac users choosing local photo enlargement for family archives, product still lifes, small text and line art."
  zh: "想在 Mac 上本地放大照片的人，涉及家庭影像存档、产品静物、小字和线稿。"
faq: []
draft: false
---

**想把照片放大，又不想上传？我会先用 Lanczos，再放一张处理较克制的 waifu2x 副本作比较。这次动手实测中，人像的 PSNR 最高是 Lanczos 的 26.361 dB，SSIM 最高是 waifu2x 的 0.809023。两者都不能证明面部特征完全忠实。请留好扫描原件，把放大图当作另存的展示副本。**

**没有上传任何图像。** 没有把图像像素交给云端或图像理解模型，没有注册账户，也没有使用私人照片。计时处理任务及其子进程都在本地运行，并被禁止联网。软件、文档、来源图像和模型权重事先下载：推理在本地，不等于安装准备也全程离线。已有的套接字拒绝测试只覆盖这些沙箱进程，不覆盖 Mac 上所有后台应用、备份和同步服务。

这是我们自己的实测比较，不是厂商分数，也没有声称经过人工看图评审。下面对图像变化的解释来自本地裁剪区域测量及本地 OCR，没有把裁剪图交给外部模型，也没有编造看图体验。测试和保留的来源访问日期是新加坡时区的2026年11月6日；下载及执行时间也落在 UTC 的2026年11月5日。本次草稿没有更新来源，也没有重跑测试。

## 先看你要拿副本做什么

| 你的用途 | 我会从哪里开始 | 最要紧的限制 |
|---|---|---|
| 家庭人像，做更大的展示副本 | Lanczos，再并排比较 waifu2x | 纹理更多不代表面部特征更真实；两者都没做身份保真验证 |
| 小型商品静物照 | waifu2x | 咖啡杯图的相似度最好，不代表颜色、成分、尺寸、价格或包装标签准确 |
| 小字或截图 | 从可信原件重新导出、截图或录入文字 | 即使图像分数最好，OCR 也没保住测试中的价格和编号 |
| 树叶或严重压缩的 JPEG | 预期放低，和原件比较 | 干净森林图仍难处理；压缩图上的微小领先不足以选出实用赢家 |
| 细线插画 | 比较 waifu2x 和 Real-ESRGAN | 核对轮廓和胡须；只测了 waifu2x 照片模型，没测动漫模型 |
| 尽量少折腾安装 | Lanczos | 不用下载权重；这里 FSRCNN 多装模型，也没换来明显的保真优势 |

**反直觉的发现：**细节能量更强，副本反而可能更不忠实。Real-ESRGAN 人像裁剪区域的细节能量比为 0.93，Lanczos 为 0.16，但前者两项整图相似度都更低。在可信参照支持之前，更强纹理应视为风格选择，不是丢失面部细节已经回来的证据。

## 这六个案例，分别代表什么

素材包括三张来源照片、两张本地绘制图形，以及一张重复来源的 JPEG 压力案例，不是六张独立照片。没有私人家庭照片。参照图只是起始数字图像，不是未经压缩的相机原片，也不是历史真相。历史人像扫描图和森林图，下载时本来就是 JPEG 数字复制品。

| 案例 | 参照图 → 小输入 → 最终输出，px | 固定裁剪框，x/y | 来源和准备方式 |
|---|---|---|---|
| 人像 | 476×640 → 119×160 → 476×640 | (120,120,360,360) | Alexander Gardner 于1863年11月8日拍摄的 Abraham Lincoln 人像；公有领域。下载的 JPEG 为 478×640，去掉最右 2 列 |
| 商品 | 600×400 → 150×100 → 600×400 | (150,90,390,330) | Rachel Michetti 的 CC0 咖啡杯照片，由 Pikolo Espresso Bar 协助；是咖啡馆静物，不是包装标签基准 |
| 文字 | 800×600 → 200×150 → 800×600 | (180,300,420,540) | 本地绘制的归档窗口，使用 macOS Arial；已知价格 $19.95，SKU AB-1048 |
| 树叶 | 748×1000 → 187×250 → 748×1000 | (180,300,420,540) | NPS/C. Bubar，Olympic National Park 的 Hoh Rain Forest；公有领域。下载的 JPEG 为 750×1000，去掉最右 2 列 |
| JPEG 压力图 | 600×800 → 150×200 → 600×800 | (160,200,400,440) | 同一森林图，来源裁剪框 (76,160,676,960)；仅在缩小后加入 JPEG quality 18 和 4:2:0 色度抽样 |
| 线条插画 | 800×600 → 200×150 → 800×600 | (260,180,500,420) | 用 Pillow 在本地绘制的原创猫咪；含胡须、不同粗细笔画和文字，没有云端生成 |

宽和高分别用 Pillow Lanczos 缩小 4 倍，只剩 1/16 的像素，再放大回参照图尺寸。照片准备时最多去掉右边 2 列，方便整除。没有隐藏锐化、人脸修复、逐图选模型或调参。固定比较区域为 240×240 px。原比较页用最近邻放大小输入，只为展示输入像素，不是另一款受测工具；其中的 2× 视图也不是再次增强。

## 先看懂测量，再选工具

电脑是 Apple M2，8 核集成 GPU，16 GiB 统一内存，arm64，macOS 26.5.1 build 25F80。Lanczos 和 FSRCNN 使用 CPU；Real-ESRGAN 和 waifu2x 使用 GPU 0，日志标明为 Apple M2。工具按表中顺序串行运行，神经网络分块为 64，只有一个处理工作线程。没有测试 TTA、人脸增强、大模型变体、Upscayl 图形界面或 EDSR。未测峰值 RAM，也没有控制这台共享电脑上的其他活动。

PSNR 为 `10 log10(255² / RGB 均方误差)`。SSIM 使用完整画面 RGB uint8，`data_range=255`、`channel_axis=2`、高斯权重、sigma 1.5、`use_sample_covariance=False` 和默认 K1/K2，实际相当于 11×11 高斯窗口。不裁掉边缘、不搜索对齐、不只算亮度，也不另改输出尺寸。分数越高，表示越接近这张参照图，不表示字正确、树叶恢复或人脸已验证。我们不把这些差异很大的案例合成平均 PSNR。[scikit-image 指标文档](https://scikit-image.org/docs/stable/api/skimage.metrics.html)是保留的方法来源。

共完成两轮串行处理。第一轮检查功能；下面只列第二轮，每个工具和图像组合只计时一次，可能已经有热缓存。处理秒数包括读图、载入模型、命令行启动、推理或缩放，以及写出 PNG。端到端秒数还包括 Python 测试程序和通用库导入。两者均不含安装、下载、指标计算、OCR 和裁剪图生成。这是实际经过的时间，不是纯 GPU 内核运行时间，也不是重复试验后的速度排名。

### 全部实测输出：每款工具、每张图

报告中的 24 次任务均成功。已有验证记录对全部结果确认了尺寸相符、重新计算的指标相符，以及输出裁剪区域相符；本页转述这份已有验证，不是重新运行。

ROI 指上面的固定裁剪区域。MAE 是以 255 级为尺度的 RGB 平均绝对误差。细节比是裁剪区亮度的拉普拉斯标准差除以参照值：低于 1 表示高频变化减弱，**不是恢复真实细节的百分比**。范围偏离指像素超过参照图局部 3×3 范围上下界达 8 个亮度级以上的比例；它标记差异，不证明出现幻觉。下表对保留的 CSV 作四舍五入，没有挑选最好的一次。

| 工具及案例 | PSNR dB | SSIM | 处理秒 | 端到端秒 | ROI MAE /255 | 细节比 | 范围偏离 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Lanczos · 人像 | 26.361 | 0.797134 | 0.026 | 0.869 | 6.14 | 0.16 | 0.1% |
| Lanczos · 商品 | 26.087 | 0.742628 | 0.023 | 0.856 | 6.02 | 0.15 | 1.9% |
| Lanczos · 文字 | 21.787 | 0.846991 | 0.017 | 0.829 | 8.92 | 0.08 | 5.6% |
| Lanczos · 树叶 | 22.584 | 0.528078 | 0.055 | 0.866 | 19.92 | 0.08 | 0.6% |
| Lanczos · JPEG | 19.570 | 0.299772 | 0.041 | 0.888 | 25.61 | 0.06 | 6.2% |
| Lanczos · 线条插画 | 22.155 | 0.909778 | 0.017 | 0.828 | 6.67 | 0.10 | 9.8% |
| FSRCNN · 人像 | 26.238 | 0.795107 | 0.024 | 0.835 | 6.57 | 0.31 | 0.2% |
| FSRCNN · 商品 | 25.882 | 0.722329 | 0.018 | 0.957 | 6.14 | 0.31 | 1.6% |
| FSRCNN · 文字 | 21.662 | 0.840148 | 0.025 | 0.846 | 9.66 | 0.14 | 5.9% |
| FSRCNN · 树叶 | 22.181 | 0.481830 | 0.044 | 0.831 | 20.82 | 0.12 | 1.3% |
| FSRCNN · JPEG | 19.628 | 0.292984 | 0.040 | 0.860 | 25.46 | 0.10 | 6.0% |
| FSRCNN · 线条插画 | 22.147 | 0.907874 | 0.026 | 0.892 | 6.40 | 0.17 | 6.7% |
| Real-ESRGAN · 人像 | 24.924 | 0.752231 | 1.722 | 2.502 | 10.84 | 0.93 | 11.8% |
| Real-ESRGAN · 商品 | 25.565 | 0.697079 | 1.440 | 2.283 | 7.12 | 0.50 | 3.8% |
| Real-ESRGAN · 文字 | 20.940 | 0.906004 | 2.584 | 3.401 | 7.59 | 0.67 | 2.4% |
| Real-ESRGAN · 树叶 | 20.404 | 0.407827 | 3.175 | 3.944 | 22.55 | 0.22 | 3.0% |
| Real-ESRGAN · JPEG | 18.483 | 0.249372 | 2.505 | 3.322 | 28.19 | 0.29 | 12.2% |
| Real-ESRGAN · 线条插画 | 25.088 | 0.967993 | 2.498 | 3.313 | 4.36 | 0.46 | 2.0% |
| waifu2x · 人像 | 25.743 | 0.809023 | 0.422 | 1.231 | 5.98 | 0.29 | 0.1% |
| waifu2x · 商品 | 27.195 | 0.784016 | 0.352 | 1.169 | 4.66 | 0.51 | 0.6% |
| waifu2x · 文字 | 23.861 | 0.931278 | 0.391 | 1.192 | 6.58 | 0.35 | 1.4% |
| waifu2x · 树叶 | 22.904 | 0.564592 | 0.457 | 1.257 | 19.28 | 0.16 | 0.6% |
| waifu2x · JPEG | 19.475 | 0.300591 | 0.392 | 1.751 | 25.79 | 0.09 | 6.6% |
| waifu2x · 线条插画 | 25.465 | 0.969670 | 0.380 | 1.176 | 3.74 | 0.55 | 4.2% |

| 工具 | 处理秒数中位数 | 端到端秒数中位数 |
|---|---:|---:|
| Lanczos | 0.025 | 0.861 |
| FSRCNN | 0.025 | 0.853 |
| Real-ESRGAN | 2.501 | 3.317 |
| waifu2x | 0.392 | 1.212 |

这些中位数混合了不同尺寸图像，不是重复试验。这里通用 Python 库导入约增加 0.8 秒，不要直接推算到 6000 像素的扫描图。

### 这些数字能说明什么，不能说明什么

- **人像：**Lanczos 的 PSNR 领先，waifu2x 的 SSIM 领先。FSRCNN 增加了高频能量，却没有在任何一项分数上超过 Lanczos。Real-ESRGAN 裁剪区误差和范围偏离更大，不适合默认用作忠实归档副本。waifu2x 仍有平滑，没有做身份验证。本地 Haar 检测器只用于定位面部区域：scale factor 1.1、minNeighbors 3，框为 (94,114,261,261)，与预先选好的裁剪区重叠，并不验证面部保真。
- **咖啡杯：**waifu2x 两项整图分数都领先，但细节比仍说明纹理有损失。Lanczos 是简单基线；FSRCNN 两项都没改善。Real-ESRGAN 裁剪区误差和范围偏离都比 waifu2x 大，应核对杯沿和奶泡。没有谁能把它变成新的高分辨率原片。
- **文字：**参照图及所有输出都用本地 Tesseract 5.5.3，英文，`--psm 6`。Lanczos 把 `$19.95` 识别为 `510.9%`，还丢了 SKU 连字符；FSRCNN 没有得到可用的价格和 SKU 行。Real-ESRGAN 把 `Family collection` 识别成 `Famby collocuon`，价格和 SKU 也错了。waifu2x 两项图像分数都领先，OCR 却把 `$19.95 / AB-1048` 识别成 `$19.06 / AB-1040`。这是 OCR 失败，不证明人也会读成同样错误；就连参照图 OCR 也误读了最小的诊断文字行。请找可信的源文字，不要靠放大截图猜金额。
- **树叶：**waifu2x 两项分数都领先，但细微变化仍大幅减弱。FSRCNN 的 SSIM 低于 Lanczos；Real-ESRGAN 细节能量更强，两项整图分数却最低。这是在提醒锐度与保真的取舍，不是已经证明它编造树叶。
- **JPEG 压力图：**全部 SSIM 不超过 0.301。FSRCNN 的 PSNR 只比 Lanczos 高 0.058 dB，SSIM 却更低。waifu2x 的 SSIM 只比 Lanczos 高 0.000819。Real-ESRGAN 分数最低，裁剪区偏离也明显。quality-18 严重压缩主导结果，没有哪款足以支持强修复承诺。
- **线条插画：**waifu2x 即使用照片模型，两项分数仍领先。Real-ESRGAN 的 SSIM 接近，而且局部范围偏离少于 waifu2x。Lanczos 和 FSRCNN 整图分数相近，细节比也低。请在本地比较细笔画和轮廓；这些测量不能证明每根胡须都正确。

## 安装、费用和许可：本地不等于不费工夫

截至2026年11月6日，这些流程可免费下载、代码开源，本次没有单独按图收取的服务费。这不是已报价的安装服务，不代表硬件免费，也不承诺每种权重和输出用途都已获法律许可。测试构建锁定了版本，不是最新版推荐。Python 为 3.12.12，numpy 2.5.4，scipy 1.18.1，scikit-image 0.26.0。

| 测试流程 | 模型和设置 | 安装及许可边界 |
|---|---|---|
| Pillow 13.0.0 Lanczos | Radius 3，scale 4，无权重，无锐化 | Python/Pillow 基线；来源表称 HPND-style，存档的 Pillow 声明标为 MIT-CMU |
| OpenCV FSRCNN | opencv-contrib-python-headless 5.0.0.93，runtime 5.0.0；FSRCNN_x4.pb；CPU/OpenCV backend，2 threads | OpenCV 和 Saafke 模型仓库为 Apache-2.0；README 明确包含已训练模型。没有找到独立的仅权重许可 |
| Real-ESRGAN ncnn-vulkan 20220424 macOS，release v0.2.5.0 | 标准 realesrgan-x4plus；33,424,520 字节 bin；scale 4，tile 64，workers 1:1:1，GPU 0 | 通用 arm64/x86_64 二进制，在 arm64 运行；封装 MIT，上游 BSD-3-Clause。未找到随包权重的独立许可；封装 MIT 不能单独证明权重已获许可 |
| waifu2x ncnn-vulkan 20250915 macOS | models-upconv_7_photo，noise 0；1,106,248 字节权重；scale 4，经 2 个 2× 阶段；tile 64，workers 1:1:1，GPU 0 | 封装和上游 MIT。上游所有者于2026年7月17日确认权重同为 MIT；未独立追溯此 ncnn 包的精确转换沿革 |

模型字节数不是峰值 RAM。再分发二进制或权重时，保留所需声明；仓库许可不能单独解决训练图像的权利问题。两张本地绘制图形及准备、基准测试、报告脚本，在适用权利范围内按 CC0-1.0 提供。这不会重新许可第三方照片、软件、模型或 Arial；没有再分发字体文件。

这台 Mac 需要给下载的工具加可执行权限。换一台 Mac，可能还需按正常流程逐个批准应用。没有修改全局 Gatekeeper 设置，也不要为了运行工具而全局关闭它。先准备软件和模型，再把私人输入放进不参与同步的目录。测试程序使用 `sandbox-exec`，策略为 `(version 1)(allow default)(deny network*)`；回环套接字反向检查返回 `PermissionError: [Errno 1] Operation not permitted`。本地 OCR 也放在沙箱里。普通命令行调用不会自动带上这个网络策略。原比较页使用本地素材、系统字体和内联代码，不点击外部引用就不会请求它们。这些都不是整机物理隔离认证。

## 这些选择依据哪些来源

以下保留原来源表链接，没有重新访问来源或审计许可。访问日期仍为2026年11月6日；发表日期和发布版本日期是另一回事。

- 图像：[Library of Congress 人像目录](https://www.loc.gov/item/2013649738/)、[Commons 公有领域及精确文件对应关系](https://commons.wikimedia.org/w/index.php?curid=67999047)、[实际使用的人像 JPEG](https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg)、[咖啡图](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png)、[咖啡署名和 CC0 说明](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py)、[NPS 森林权利及元数据](https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266)，以及[森林 JPEG](https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg)。目录页返回验证页面，并未读到正文；主来源索引元数据提供 Gardner 和日期，Commons 提供精确 JPEG 对应关系。曾尝试的另一份人像文件返回不存在，没有使用。
- 基线：[Pillow 项目](https://github.com/python-pillow/Pillow)、[OpenCV 许可](https://github.com/opencv/opencv/blob/5.x/LICENSE)、[FSRCNN 仓库](https://github.com/Saafke/FSRCNN_Tensorflow)、[已训练模型 README](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md)、[FSRCNN 许可](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE)和[测试权重](https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb)。
- Real-ESRGAN：[发布元数据](https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0)、[使用的 macOS 压缩包](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip)、[封装用法](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan)、[封装许可](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE)和[上游许可](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE)。
- waifu2x：[发布页](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915)、[使用的 macOS 压缩包](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip)、[封装许可](https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE)、[上游许可](https://github.com/nagadomi/waifu2x/blob/master/LICENSE)和[所有者的权重许可说明](https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684)。
- 辅助检查和再利用：[Tesseract 许可](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE)、[Haar 定位器及内嵌许可](https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml)和 [CC0 条款](https://creativecommons.org/publicdomain/zero/1.0/)。

自己试用时，保留未改动的扫描图，选一块有代表性且非机密的区域，在原生比例下比较一张放大副本。人脸、边缘、文字和金额要分开核对。合成缩小实验不能解决真实划痕修复、上色或身份保真问题。实测输出和复现材料为保留佐证，不公开下载，也不是现成安装器。

## 让 DeTars 帮你规划本地照片放大小试验

把下面这段发给 DeTars，将 [方括号] 换成自己的情况。

> 请为[电脑及操作系统]、[照片类型和尺寸]、[展示或打印目标]及[隐私边界]规划本地照片放大流程。比较保守基线和小型本地模型，区分安装下载与离线处理，并保留原件。指出人脸、文字、纹理和许可风险。只做计划；未经我同意，不上传图像、不安装工具、不重跑处理。

*把它当作友好的试用起点，不是修复或隐私保证。请留好原件，并核对那些必须保持真实的内容。*

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [scikit-image metric documentation](https://scikit-image.org/docs/stable/api/skimage.metrics.html) — 查阅日期: 2026-11-06
- [Library of Congress portrait catalog](https://www.loc.gov/item/2013649738/) — 查阅日期: 2026-11-06
- [Commons public-domain and exact-file mapping](https://commons.wikimedia.org/w/index.php?curid=67999047) — 查阅日期: 2026-11-06
- [used portrait JPEG](https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a16000/3a16500/3a16523r.jpg) — 查阅日期: 2026-11-06
- [coffee image](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/coffee.png) — 查阅日期: 2026-11-06
- [coffee attribution and CC0 documentation](https://raw.githubusercontent.com/scikit-image/scikit-image/v0.19.3/skimage/data/_fetchers.py) — 查阅日期: 2026-11-06
- [NPS forest rights and metadata](https://www.nps.gov/npgallery/AssetDetail/42a056f8-1dd8-b71b-0bd9-1ec7eb496266) — 查阅日期: 2026-11-06
- [forest JPEG](https://www.nps.gov/npgallery/GetAsset/42A056F8-1DD8-B71B-0BD91EC7EB496266/proxyhires.jpg) — 查阅日期: 2026-11-06
- [Pillow project](https://github.com/python-pillow/Pillow) — 查阅日期: 2026-11-06
- [OpenCV licence](https://github.com/opencv/opencv/blob/5.x/LICENSE) — 查阅日期: 2026-11-06
- [FSRCNN repository](https://github.com/Saafke/FSRCNN_Tensorflow) — 查阅日期: 2026-11-06
- [trained-model README](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/README.md) — 查阅日期: 2026-11-06
- [FSRCNN licence](https://github.com/Saafke/FSRCNN_Tensorflow/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [tested weights](https://raw.githubusercontent.com/Saafke/FSRCNN_Tensorflow/master/models/FSRCNN_x4.pb) — 查阅日期: 2026-11-06
- [release metadata](https://api.github.com/repos/xinntao/Real-ESRGAN/releases/tags/v0.2.5.0) — 查阅日期: 2026-11-06
- [used macOS archive](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesrgan-ncnn-vulkan-20220424-macos.zip) — 查阅日期: 2026-11-06
- [wrapper usage](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) — 查阅日期: 2026-11-06
- [wrapper licence](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [upstream licence](https://github.com/xinntao/Real-ESRGAN/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [release](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/tag/20250915) — 查阅日期: 2026-11-06
- [used macOS archive](https://github.com/nihui/waifu2x-ncnn-vulkan/releases/download/20250915/waifu2x-ncnn-vulkan-20250915-macos.zip) — 查阅日期: 2026-11-06
- [wrapper licence](https://github.com/nihui/waifu2x-ncnn-vulkan/blob/20250915/LICENSE) — 查阅日期: 2026-11-06
- [upstream licence](https://github.com/nagadomi/waifu2x/blob/master/LICENSE) — 查阅日期: 2026-11-06
- [owner's weights-licence statement](https://github.com/nagadomi/waifu2x/issues/478#issuecomment-5003816684) — 查阅日期: 2026-11-06
- [Tesseract licence](https://github.com/tesseract-ocr/tesseract/blob/main/LICENSE) — 查阅日期: 2026-11-06
- [Haar locator and embedded licence](https://raw.githubusercontent.com/opencv/opencv/4.x/data/haarcascades/haarcascade_frontalface_default.xml) — 查阅日期: 2026-11-06
- [CC0 terms](https://creativecommons.org/publicdomain/zero/1.0/) — 查阅日期: 2026-11-06
