---
title: "免费抠图工具：不用注册，到底能导出什么？"
description: "想不注册就拿到能用的抠图？这组六张图片只有 Pixlr 和本地 rembg 全部完成；先看效果限制，再看其他流程卡在哪里。"
locale: "zh"
slug: "background-removers-six-image-test-findings"
translationKey: "background-removers-six-image-test-findings"
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
  - title: "remove.bg upload and dated closure notice"
    url: "https://www.remove.bg/upload"
    accessDate: "2026-11-05"
  - title: "Adobe Express background remover"
    url: "https://www.adobe.com/express/feature/image/remove-background"
    accessDate: "2026-11-05"
  - title: "Canva background remover"
    url: "https://www.canva.com/features/background-remover/"
    accessDate: "2026-11-05"
  - title: "Photoroom background remover"
    url: "https://www.photoroom.com/tools/background-remover"
    accessDate: "2026-11-05"
  - title: "Clipdrop remove background"
    url: "https://clipdrop.co/remove-background"
    accessDate: "2026-11-05"
  - title: "Pixlr background remover"
    url: "https://pixlr.com/remove-background/"
    accessDate: "2026-11-05"
  - title: "rembg repository"
    url: "https://github.com/danielgatis/rembg"
    accessDate: "2026-11-05"
  - title: "remove.bg commercial-use help"
    url: "https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes"
    accessDate: "2026-11-05"
headlineFigures:
  shared_input_count:
    label: "Identical inputs shared across eligible test flows"
    value: 6
    unit: "images"
    display: "6"
  pixlr_scoped_total:
    label: "Pixlr subjective total including export practicality, this input set only"
    value: 15
    unit: "points_out_of_25"
    display: "15 / 25"
  rembg_u2netp_scoped_total:
    label: "Selected lightweight local model total including export practicality, not a default-model benchmark"
    value: 12
    unit: "points_out_of_25"
    display: "12 / 25"
  empty_transparent_export_count:
    label: "Downloaded remove.bg PNGs with absent subject and alpha min=max=0"
    value: 3
    unit: "empty_png_exports"
    display: "3"
audience:
  en: "Sellers evaluating background-removal workflows, with the practical export and quality limits found in a six-image test."
  zh: "正在评估抠图（去背景）流程的卖家，可了解一次六图测试中发现的导出和画质限制。"
faq: []
draft: false
---

**忙着做商品图，却卡在登录页面，或下载下来只剩一张空图？先看哪些真的做完了。这组共同的 6 张图片，只有 Pixlr 和本地 rembg 全部完成，分别得到 15 / 25 和 12 / 25。这是对这些图片的主观判断，不是通用产品评级；总分还算了导出是否方便，不只有图像质量。没测到的质量，不等于零分。**

这些结果来自2026年11月5日，不保证今天还能走同样的免费流程。共尝试 7 款工具，保存 17 个 PNG，其中 3 个完全透明。42 条工具和图片组合，不代表每张都成功提交或处理。准备整批使用前，先拿自己的图片试一下，打开保存的文件，看看主体是不是真的还在。

## 先看看，这些图片像不像你要处理的

各工具用的是同样的 RGB PNG，长边最多 1200 px，只做自动抠图，没有手工修整。游客浏览器分别运行，不导入 Cookie，不登录个人账户，不开户，也不付款。遇到强制登录或 CAPTCHA 就停止，没有绕过。无头浏览器能否访问，会受网络、地区和反自动化检查影响；被挡住，不代表抠图效果差。

图片包括五张由 PxHere 标为 CC0 的图库照片，以及一张本地代码画出的白色运动鞋插画。许可文字抄自来源页，没有保存网页副本，也没独立核对上游权利链和人像模特授权。没有使用私人照片，也没有已知正确的分割蒙版。要用来卖商品，请再查自己的使用权限，别把图库标签当成所有用途都已获许可。

| 输入图片 | 像素 | 看结果时要留意什么 |
|---|---|---|
| 马克杯 | 1200×800 | 咖啡桌有独立碟子、笔记本电脑边缘、椅子和窗户，略显繁杂，但并非密集杂乱场景。 |
| 卷发人像 | 800×1200 | 卷发以枝叶为背景；公开图库人像的模特授权状态未确认。 |
| 玻璃瓶 | 1200×849 | 两个重叠瓶子及饮用玻璃杯／植物；目标为直立瓶，并非独立单物体。 |
| 白色运动鞋 | 1200×800 | 程序生成的插画而非照片；干净的风格化轮廓不能证明真实白底白鞋的效果。 |
| 毛绒玩具 | 1200×800 | 蓝底白色泰迪熊和书；书是否属于需保留主体，取决于商品展示目的。 |
| 自行车 | 1200×1200 | 自行车在较宽建筑场景中占比较小；辐条仅跨少量像素，同时考验主体选择和细结构。 |

## 把分数当作这组图片的发现，不当排行榜

每类按主观 0–5 分来判断。边缘取马克杯和运动鞋的均分，毛发取人像和毛绒玩具的均分，透明度看玻璃瓶，细结构看自行车。某类需要的图片得全部完成；质量类别不完整，就不给总分。分数含义是：0 主体不见了，1 严重损坏，2 明显丢失或残留，3 修整后可用，4 轻微瑕疵，5 在输入细节尺度下干净。

导出方便程度另外算：5 是游客按输入尺寸导出 PNG、没有可见水印；4 至少 1 MP；3 至少 0.5 MP；2 至少 0.2 MP；1 分辨率更低或有水印；0 强制账户或付款。不知道就不评分。许可还得另外看：免费导出再方便，也不一定能拿来卖商品。

| 完成的工具及模型 | PNG 数 | 边缘 | 毛发 | 透明度 | 细结构 | 导出方便程度 | 这组图片总分 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Pixlr | 6/6 | 3 | 3 | 2 | 2 | 5 | 15 / 25 |
| rembg · u2netp | 6/6 | 3 | 2 | 2 | 0 | 5 | 12 / 25 |

下面的说明来自把下载 PNG 放在深蓝和粉色背景上查看，属于视觉判断，不是客观准确率。你也可以换成对比明显的底色检查：白底上看不出来的浅色残留，到了深色商品页可能立刻露出来。

| 输入 | Pixlr 分数与发现 | rembg · u2netp 分数与发现 |
|---|---|---|
| 马克杯 | 2/5：杯身和杯柄保留，但独立碟子及边缘杂色需去除。 | 2/5：杯子保留，同时留下碟子、深色边缘和阴影污染。 |
| 卷发人像 | 3/5：发量与卷曲轮廓保留，但有毛糙边缘及部分碎发丢失。 | 1/5：大部分卷发被抹除，主体严重损坏。 |
| 玻璃瓶 | 2/5：瓶子／玻璃杯成组保留，浅色原背景困在内部。 | 2/5：成组玻璃仍带浅色背景，透明抠像不可信。 |
| 白色运动鞋 | 4/5：插画轮廓干净，带少量浅色边；仅适用于该插画。 | 4/5：插画轮廓清楚可辨，带少量浅色边；仅适用于该插画。 |
| 毛绒玩具 | 3/5：泰迪熊和书保留，周边带蓝色／深色污染。 | 3/5：泰迪熊和书保留；蓝色／深色污染及脚部生硬边缘需清理。 |
| 自行车 | 2/5：正确保留自行车，但大部分辐条丢失，仍带红墙杂边。 | 0/5：选中了门口，目标自行车被移除。 |

## 流程没走完，不代表图像质量差

| 工具及来源 | 保存 PNG 数 | 遇到什么，哪些还要再确认 |
|---|---:|---|
| [remove.bg](https://www.remove.bg/upload) | 4/6 | 一张看得见主体的人像抠图，另有三个空白透明文件。毛绒玩具处理超时，随后 CAPTCHA 挡住后续操作；没能确认是否强制登录。 |
| [Adobe Express](https://www.adobe.com/express/feature/image/remove-background) | 0/6 | 上传前就是空白应用或 403 Access Denied。既没测到抠图质量，也没确认是否需要登录。 |
| [Canva](https://www.canva.com/features/background-remover/) | 1/6 | 保存了一张 1200×800 马克杯 PNG，第二次导出就要求登录。按遇登录即停止的做法，保留的杯子和碟子不评分。 |
| [Photoroom](https://www.photoroom.com/tools/background-remover) | 0/6 | 界面或处理停住，自动化操作也有失败和中断。没有完成导出，也没证实有登录关卡；部分图片是否提交成功还不能确认。 |
| [Clipdrop](https://clipdrop.co/remove-background) | 0/6 | 请求处理时要求登录，质量和导出分辨率都没测到。能排队多少文件，不等于像素上限。 |

remove.bg 的马克杯、玻璃和运动鞋文件确实是空的：alpha 最小值 = 最大值 = 0，不是没下载到。因为主体缺失，各得 0/5；408×612 人像得 4/5。已经完成的杯子和运动鞋边缘类别为 0，透明度为 0，导出方便程度为 2。毛发和细结构没做全，所以没有总分。毛绒玩具等了 91.017s，下载仍被禁用，没拿到 PNG；自行车上传被 CAPTCHA 拦住，不算图像处理结果。下载完成后，还是要打开文件看一眼。

Canva 和 Clipdrop 因为要求账户，导出方便程度记 0，不是图像质量 0。Adobe 和 Photoroom 的方便程度仍不知道。没走通的流程，都还不能确定全服务的导出上限。Canva 常见问题说可以有限次免费高分辨率下载，却没写数字上限。只成功一次，不足以放心安排整批免账户商品图。

## 按自己的图片和用途来选

[Pixlr](https://pixlr.com/remove-background/)把全部输入都按原尺寸导出，没有看到水印或强制登录。偶尔处理毛发或毛绒图，可以先试它，再自己检查。但这不保证每天不限量，也没确定服务的全局上限。上架前，先看自己保存的那张结果。

想让图片留在自己电脑上？[本地 rembg](https://github.com/danielgatis/rembg)使用轻量 u2netp 模型、单 CPU 线程，不上传图片。这不是默认模型的测试，也不保证高清质量。全部按输入原尺寸导出，这组最高为 1200×1200，没有服务免费层配额。可以从简单不透明主体开始，再仔细检查：人像头发和自行车就说明了为什么不能省这一步。软件和模型的许可信息，也不能保证训练数据或输出权利全部没有问题。

做商品图前，请先看 [remove.bg 商用帮助](https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes)。这份有日期的说明把 Free / No account 计划限制为非商用，并明确把网站售卖商品算作商用。页面还显示独立站将于2026年12月1日 09:00 CET 关闭的通知。依赖服务前，请重查这两点；这里没有更新过。免费预览约 0.25 MP，Max 锁定。下载菜单显示了这个限制，后来直接读取官方预览指引却失败了，并没有取得更新。

文件是透明 PNG，不代表玻璃本身就抠对了。两个完整流程，都不足以让人放心把这张玻璃场景或自行车直接自动处理后上架。可以重拍，靠近主体、简化背景，或留时间手工抠像。Canva 第一张杯子导出只是部分结果，不是整批商品都能用它的理由。访问被挡住的工具，先保留未知，别直接认定模型差。

## 别只凭这些秒数选最快的

Pixlr 从提交到下载用了 2.055–2.981s，里面含保存前约 2 秒的脚本等待。本地 rembg 推理用了 0.593–0.672s，不含安装和 PNG I/O；第一张还包括首次推理预热。两边的计时涵盖不同事情，不能据此判断你用起来哪套完整流程更快。

本地处理还要留安装时间：软件包用了 381.641s，含两次超时；冷导入约 120.998s，模型下载 4.762s，会话创建 0.036s。Canva 首次导出和 remove.bg 人像包含操作人员延迟，完成时间不能直接比。网页操作的恢复和中断，也会影响实际体验。只有本地推理是每张单次运行、不重试。

## 放进商品页之前，自己再看一遍

保存真正的输出文件，再检查主体、边缘、分辨率和许可。把毛发、玻璃和细结构放到顾客实际会看到的底色上看看。留下错的物体，或下载出空文件，就停下来换张简单照片，或手工清理。保存了 PNG，不等于商品图已经做好。

这些细节仍截至2026年11月5日。轻量 u2netp 的结果只是一个起点。图片少、主观评分、访问失败、素材许可限制，以及更大范围的配额还不清楚，都会影响怎么选。准备整批处理前，拿自己的图片再试当期流程，并确认权限。

## 让 DeTars 帮你选适合自己图片的抠图流程

把下面这段发给 DeTars，将[方括号]换成你的图片、用途和导出需要。

> 请按[图片主体]、[个人或商用用途]、[需要的输出尺寸]、[是否接受账户和上传]、[导出频率]比较抠图选择。分清已完成、受阻和没测到的结果，核对使用权限，告诉我哪里还要手工修整。只做计划，不开户、不付款、不发布。

*把它当作自己检查图片的起点，不是效果或使用许可保证；实际用途还请核对相应条款。*

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [remove.bg upload and dated closure notice](https://www.remove.bg/upload) — 查阅日期: 2026-11-05
- [Adobe Express background remover](https://www.adobe.com/express/feature/image/remove-background) — 查阅日期: 2026-11-05
- [Canva background remover](https://www.canva.com/features/background-remover/) — 查阅日期: 2026-11-05
- [Photoroom background remover](https://www.photoroom.com/tools/background-remover) — 查阅日期: 2026-11-05
- [Clipdrop remove background](https://clipdrop.co/remove-background) — 查阅日期: 2026-11-05
- [Pixlr background remover](https://pixlr.com/remove-background/) — 查阅日期: 2026-11-05
- [rembg repository](https://github.com/danielgatis/rembg) — 查阅日期: 2026-11-05
- [remove.bg commercial-use help](https://www.remove.bg/no/help/a/can-i-use-remove-bg-for-commercial-purposes) — 查阅日期: 2026-11-05
