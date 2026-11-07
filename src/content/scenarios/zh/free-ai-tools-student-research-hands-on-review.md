---
title: "学生研究免费 AI 工具：选个好起点，交作业前再核对"
description: "七款研究工具、三份访客 AI 回答和五维评分，帮你选起点，也提醒你交作业前把引用改对。"
locale: "zh"
slug: "free-ai-tools-student-research-hands-on-review"
translationKey: "free-ai-tools-student-research-hands-on-review"
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
  - title: "OpenAI’s own help page"
    url: "https://help.openai.com/en/articles/9125172-the-chatgpt-home-page"
    accessDate: "unknown"
  - title: "ACM’s DOI deposit"
    url: "https://api.crossref.org/works/10.1145/3613905.3651018"
    accessDate: "unknown"
  - title: "publisher-deposited record"
    url: "https://api.crossref.org/works/10.1080/0144929X.2022.2151512"
    accessDate: "unknown"
  - title: "publisher PDF"
    url: "https://ijsr.internationaljournallabs.com/index.php/ijsr/article/download/2859/1636"
    accessDate: "unknown"
  - title: "the original results"
    url: "https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full"
    accessDate: "unknown"
  - title: "Xie"
    url: "https://doi.org/10.3389/fpsyg.2023.1298361"
    accessDate: "unknown"
  - title: "Nugrahanto"
    url: "https://journal.untar.ac.id/index.php/ijassh/article/download/29006/17293"
    accessDate: "unknown"
  - title: "real r/PhD question"
    url: "https://www.reddit.com/r/PhD/comments/1qdpgwf/what_is_the_best_ai_tool_for_research/"
    accessDate: "unknown"
  - title: "master’s-thesis discussion"
    url: "https://www.reddit.com/r/PhdProductivity/comments/1xexlty/anyone_else_frustrated_with_the_current_ai_tools/"
    accessDate: "unknown"
headlineFigures:
  chatgpt_guest_observed_answer_wall_time:
    label: "Chatgpt guest observed answer wall time"
    value: 171.859
    unit: "seconds"
    display: "171.859"
  semantic_scholar_observed_search_to_expanded_results:
    label: "Semantic scholar observed search to expanded results"
    value: 40.56
    unit: "seconds"
    display: "40.560"
  google_scholar_http_retrieval_time:
    label: "Google scholar http retrieval time"
    value: 1.702
    unit: "seconds"
    display: "1.702"
audience:
  en: "Students comparing guest-access research tools for a university literature assignment."
  zh: "为大学文献作业比较可免登录试用的研究工具的学生。"
faq:
  - q: "再订阅一款工具前，先试什么？"
    a: "一则 r/PhD 讨论也在问这个。先用访客工具试范围明确的作业，再决定花钱。这些回答没有替你的论文或其他领域选出最佳订阅。讨论提到 Research Rabbit 和 Scite，但这里没有测试。"
  - q: "能不能只用一款，少来回切换？"
    a: "一则硕士论文讨论说出了这种烦恼。这里没有全能首选：好初稿、分歧整理和找论文分别强在不同工具。先用一款搜索工具配论文原文，不急着买一大套。两则讨论都在11月5日阅读，只是读者问题，不是性能测试或推荐背书。"
draft: false
---

**担心 AI 写得很像样，交作业时才发现引用或结论不对？这次作业可以用 Perplexity 起草、Consensus 找分歧、Semantic Scholar 找论文，然后自己读原文。** ChatGPT 访客模式给的框架有用，但漏了重要结果。Google Scholar 适合找线索，不会替你写好综述。Elicit 的未登录页面没有可用输入框，Microsoft Copilot 则没加载出来。先把后两项当作访问问题，别据此判断回答好坏。

**先看重点：** 七款工具的访问情况、三份真实访客 AI 回答和五维评分，帮你看清哪里省事、哪里要慢下来，以及哪些引用需要修正。

**你可能也在比较：** 学生研究免费 AI 工具；AI 研究工具实测；Perplexity 与 Consensus 研究对比；ChatGPT 研究引用准确性；无需账号的免费研究工具。

**使用日期：2026年11月5日。** 文件夹写着11月4日，实际会话在**11月5日**完成。11月5日稍后只核对了来源，**没有**重试产品。这里的“免费”是指这项任务不用付款或创建账号，不是无限使用，也没有涵盖所有登录后的免费套餐。请看清自己会话显示的服务和版本，这里没有固定或确认这些信息。测试仅涵盖访客访问，不涵盖登录后的免费套餐或付费订阅。

## 先把作业要求说清楚

> 查找 5 篇发表于 2023 或之后、研究短视频使用对大学生注意力持续时间影响的同行评审论文，为每篇写一段摘要，提供正确引用，并说明相互矛盾的研究结果。

想比较回答，问题就要保持一致。Perplexity、Consensus 和 ChatGPT 都在全新、空白的访客会话中收到一次相同提示词，没有使用已有登录会话。最先出现的五篇主要论文都保留，包括匹配不够好的结果，不换成更漂亮的答案。

搜索工具要换一种用法：

- **Semantic Scholar：** 搜索词为 `short-form video attention university students`（短视频、注意力、大学生），按相关性排序，不设日期筛选。展开的摘要是来源原文，不是生成的作业段落。
- **Google Scholar：** 搜索词为 `"short-form video" attention "university students"`（短视频、注意力、大学生，保留原引号），筛选自 2023 起的结果。由于现有浏览器已登录，结果集通过不携带 Cookie 的 HTTP 请求取得。保留记录是转录摘录，不是原始 HTML。后来另一次下载尝试返回 HTTP 403。

Elicit 和 Copilot 都没收到提示词，所以没有回答可评价。你可以用这份比较为这个主题选起点，但别把它当作系统综述、重复性测试或严格的速度比赛。想看细节，可以读方法与结果（原始辅助文件未公开；请依据本文内容操作）和[测试说明](#来源与查阅日期)。

## 按任务看分数，不必找综合冠军

**评分采用 0–5 分，越高越好。这是实用性判断，不是准确率百分比，也没有综合分或平均分。** “不适用”表示没有回答可评，不是回答质量为零。

| 工具／测试模式 | 准确性 | 引用质量 | 摘要实用性 | 速度 | 可访问性 |
|---|---:|---:|---:|---:|---:|
| Perplexity——访客 AI 回答 | 4 | 3 | 4 | 5 | 4 |
| Consensus——访客 AI 回答；界面标为 Pro | 4 | 4 | 4 | 5 | 5 |
| ChatGPT 访客——隔离上下文中的 AI 回答 | 3 | 5 | 3 | 3 | 5 |
| Semantic Scholar——搜索与来源摘要 | 4 | 3 | 2 | 5 | 5 |
| Google Scholar——不携带 Cookie 的搜索抓取 | 4 | 3 | 1 | 5 | 4 |
| Elicit——仅测试访问 | 不适用 | 不适用 | 不适用 | 不适用 | 0 |
| Microsoft Copilot——网络失败 | 不适用 | 不适用 | 不适用 | 不适用 | 0 |
| 人工基线——仅作参照，不是产品评测 | 参照 | 参照 | 参照 | 1 | 4 |

准确性看具体说法是否核对过，引用质量看论文身份和书目信息；是否符合筛选要求，还要另查。摘要实用性看方法、发现、局限和分歧是否有用：来源摘要得 2，短片段得 1，不把它们当成生成的完整摘要。可访问性 5 表示首次匿名使用得到可用内容，0 表示这里没能走通。人工基线只是参照，不是盲评金标准，也不是给自己满分。

速度大致分档：≤60 秒得 5，≤120 秒得 4，≤300 秒得 3，≤900 秒得 2，超过 900 秒得 1。用来估计等待就好，**不要直接当作响应速度排名**：

| 工具 | 等待时间，以及里面算了什么 |
|---|---|
| Perplexity | 从提交到抓取得到 ≤36.944 秒；界面显示 7 秒。与 Consensus 交替观察。 |
| Consensus | 从提交到抓取得到 ≤50.286 秒；交替观察。 |
| ChatGPT 访客 | 171.859 秒，包括自动化／观察延迟，以及一次中间等待超时；随后抓取到了完整回答。 |
| Semantic Scholar | 从搜索事件到观察到前五篇展开摘要为 40.560 秒；从最初检查起为 95.5 秒。 |
| Google Scholar | 1.702 秒，仅为 HTTP 抓取，不含生成或核验。 |
| Elicit | 没有回答；计入 Elicit／Semantic 合并证据整理的 15 分 36.5 秒。 |
| Copilot | 62.58 秒是最初 ChatGPT／Copilot 合并访问尝试的时间，不是 Copilot 生成时间。 |
| 人工基线 | 约 20 分钟的并行研究，不是独立计时。 |

核对引用还要另留时间，这里没有逐款单独计时。Perplexity 和 Consensus 合并核对及整理用了 19 分 24 秒，但与其他工作重叠。不要把重叠时段相加，当成总共“省下的时间”。

## 你可以从哪款工具开始？

### Perplexity：初稿有用；准确性 4/5 不是综合评分

如果你需要一份能接着改的初稿，Perplexity 是这里最顺手的起点。访客回答有五段摘要和一篇补充元分析，也提醒了因果关系和研究人群的限制。引用前，先修正 Lin 的发表载体及页码，再查 Chen 的首次在线日期。回答后的注册提示可以关闭；若要连续做很多查询，先确认额度，这里没有试重复访客使用。

主要五篇是 Xie、Chen、Alfatih、Lin 和 Reshma。加上补充论文，正文引用的六篇都找到了对应论文。侧栏显示 25 个来源，**不等于**正文引用 25 篇，也不等于 25 个都完整核对过。打开[保存的回答](#来源与查阅日期)，再查你准备采用的论文。

### Consensus：本次分歧部分最强；准确性 4/5 不是综合评分

如果作业要求比较相互矛盾的发现，Consensus 很适合帮你起步。访客回答有五段摘要，另引四篇讨论分歧，其中无显著结果和混合结果部分尤其有用。主要五篇并非都符合所需人群和指标，采用前逐篇核对。一条引用漏了作者，Dhillon 的摘要也没解释原文样本量不一致。别把 Pro 标签当成已付费订阅，也别默认能一直匿名查询。

界面显示 **Pro／4 步／1 次查询**，但没有确定底层服务版本。主要五篇是 Nguyen、Mahmoudi、Dhillon、Arshad 和 Xie；分歧部分引 Rahayu、Lin、Mohammed 和 Li。正文九篇都核对过身份。另有九张未引用且不重叠的卡片单独检查，不计入回答分数。见[保存的回答](#来源与查阅日期)。

### ChatGPT 访客：提醒合理，综合不完整；准确性 3/5 不是综合评分

ChatGPT 访客适合帮你理解注意事项，但别停在它的摘要。排除先前登录会话后，新会话给出五段内容，研究设计和“注意力”到底指什么讲得不错。它却漏了 Yan 的行为测量无显著结果，以及 Haliti-Sylaj 改编的 SART 任务。没有选 Deep Research 或付费功能。耗时包含自动化等待，不只是生成回答。

五篇是 Xie、Alfatih、Yan、Haliti-Sylaj 和 Al-Leimon。引用质量 5/5 不代表每段摘要都完整、每项研究都扎实。可以读[保存的回答](#来源与查阅日期)。11月5日查阅的 [OpenAI 帮助页](https://help.openai.com/en/articles/9125172-the-chatgpt-home-page)介绍了支持国家的免账号使用，也提醒位置和网络会影响访问。请以你自己的访客会话为准，不要默认人人额度相同。

### Semantic Scholar：用于发现论文，不是成稿综述；准确性 4/5 不是综合评分

如果你想找论文来读，而不是找一段可以提交的文字，就用 Semantic Scholar。它返回搜索卡片和展开的来源摘要，前五篇中确实有注意力无显著结果。书目信息仍要对照论文本身。这里没试文献库保存，后来点引用时还丢了标签页；打算依赖引用导出的话，先自己确认能用。

前五篇是 Khalid、Shuja、Al-Leimon、Akhtar 和 Alfatih。Khalid 的索引和 DOI 记录，与出版方 PDF 的标题及作者不一致。先到来源处解决这个差异，不要直接说引用是编的。这里有[搜索文本](#来源与查阅日期)。

### Google Scholar：提供广泛线索，不是五段摘要；准确性 4/5 不是综合评分

Google Scholar 适合先收线索，再打开论文。免 Cookie 查询返回五条线索和短片段，没有生成摘要。它找到 Nugrahanto，但片段没显示重要的无显著结果。后来 HTTP 403 表示可能要换合法访问途径，不是所有人都被挡住。Mahmoudi 的样本量先标未核实，可读的一手摘要没有说清。

前五篇是 Al-Leimon、Nugrahanto、Mahmoudi、Chen 和 Rizka。“自 2023 起”筛选不会替你确认 Chen 的首次发表日期，纳入前再查。见[搜索结果](#来源与查阅日期)。

### Elicit：本次可访问性 0/5；未评回答质量

想不注册就用 Elicit，先看看输入页面能不能用。首页、认证页 auth、搜索路径 /search 和欢迎路径 /welcome 都没出现可用的未登录输入框。没有提交提示词，也没有回答可评分。可访问性 0/5 只说这次尝试；准确性、引用质量、摘要实用性和速度仍不适用。这里没试登录后的免费套餐。

[访问说明](#来源与查阅日期)列出了卡在哪里。不要因此认定 Elicit 帮不了研究。

### Microsoft Copilot：本次可访问性 0/5；未评回答质量

Copilot 这次还没走到回答。首次访问和一次重试都报 ERR_CONNECTION_CLOSED，没有提交提示词，也就没有回答可查。可访问性 0/5 指这次网络失败，不是要求登录、收费或回答差。准确性、引用质量、摘要实用性和速度仍不适用。安排任务前，先试自己的连接。

见[访问说明](#来源与查阅日期)。里面较早的 ChatGPT 账号问题，后来已经用独立访客会话成功解决，不是持续无法使用。

## 文字再顺，也要先把引用改对

**核对过的主要回答引用，都能找到真实论文。** 你仍要查论文说了什么、是否符合要求。论文真实不等于“零幻觉”，也不等于作业完成。以下例子在 **2026年11月5日**再次核对：

- **Perplexity 对 Lin 的引用：** 回答给出 CHI 主会议论文集、第 1–17 页。[ACM 的 DOI 登记](https://api.crossref.org/works/10.1145/3613905.3651018)标明是《CHI 人机系统计算因素会议扩展摘要集》（Extended Abstracts of the CHI Conference on Human Factors in Computing Systems），第 **1–8** 页。评价工具时保留原错误；实际引用论文前再修正。
- **Chen 的日期：** [出版方登记记录](https://api.crossref.org/works/10.1080/0144929X.2022.2151512)给出的首次在线日期为 **2022年12月6日**，纸刊日期为 **2023年12月10日**。它确实属于 2023 的期刊卷期，但不符合严格的“首次发表于 2023 起”规则。后来抓取出版方页面只取得部分作者信息，没有完整方法。
- **反直觉发现：错误可能来自原论文本身。** Consensus 为 Dhillon 给出的 **134** 不是捏造样本量。[出版方 PDF](https://ijsr.internationaljournallabs.com/index.php/ijsr/article/download/2859/1636)第 4 页写 134，第 1 页摘要却写 **200**。工具的问题是没有提示这个矛盾，而不是选择了明显虚构的数字。
- **ChatGPT 对 Yan 的遗漏：** [原始结果](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full)第 3.2.2–3.3.2 节报告行为注意网络相关性均不显著，全部 **p > .05**，同时报告一项特定额叶 theta 关联（**r = −.395，p = .007**）。平衡的综合不能用 EEG 关联替代行为测量的无显著结果。

保存的回答还有两处值得留意：Consensus 在 Nguyen 引用中漏了 Shay Monreal Ijurco，ChatGPT 漏了 Haliti-Sylaj 改编的 SART。这不是新一轮产品重试。后一篇论文把反应时写成分钟，观看分组区间也前后不一。保留原单位，标出疑点，不要默默改掉或把它当成干净可靠的比较基准。

## 真实答案，往往没有“找五篇论文”那么整齐

人工阅读清单保留了 Xie（2023）、Nugrahanto（2023）、Al-Leimon（2025）、Zhao（2026）和 Haliti-Sylaj（2024）。把它当作**接近要求的文献目录**就好，不是五项已证实普通观看会缩短大学生注意力的因果研究。四篇用自报控制力或注意力不集中代理指标，任务测量那篇则有报告问题。对2026年11月的任务来说，2026 的论文并不是未来发表。

把 [Xie](https://doi.org/10.3389/fpsyg.2023.1298361) 的 **r = −.23，p < .001** 与 [Nugrahanto](https://journal.untar.ac.id/index.php/ijassh/article/download/29006/17293) 的 **r = −.124，p = .220** 放在一起读。两篇都用简化自报注意控制量表。一篇显著、另一篇不显著，不等于后者效应为零，也不等于两项研究之间差异显著。[完整五篇阅读清单与说明](#来源与查阅日期)可以帮你比较。

你可以按这个顺序做：找论文，核 DOI、标题、作者和日期，再看人群、测量工具及设计。包括无显著结果在内的结果读完，才写摘要。需要全文却读不到的说法，继续标未核实。把四件事分开：论文是否真实，引用是否正确，是否符合筛选要求，以及是否支持因果说法。

## 付费之前，你可能还想问

**再订阅一款工具前，先试什么？** 一则 [r/PhD 讨论](https://www.reddit.com/r/PhD/comments/1qdpgwf/what_is_the_best_ai_tool_for_research/)也在问这个。先用访客工具试范围明确的作业，再决定花钱。这些回答没有替你的论文或其他领域选出最佳订阅。讨论提到 Research Rabbit 和 Scite，但**这里没有测试**。

**能不能只用一款，少来回切换？** 一则[硕士论文讨论](https://www.reddit.com/r/PhdProductivity/comments/1xexlty/anyone_else_frustrated_with_the_current_ai_tools/)说出了这种烦恼。这里没有全能首选：好初稿、分歧整理和找论文分别强在不同工具。先用一款搜索工具配论文原文，不急着买一大套。两则讨论都在11月5日阅读，只是读者问题，不是性能测试或推荐背书。

这里保留11月5日的回答、分数和访问失败情况。[来源与说明](#来源与查阅日期)有更多细节。有回答可评的工具按准确性评分，两次受阻尝试只按可访问性评分，不是综合质量分。

## 让 DeTars 帮你核对自己的研究

把下面这段发给 DeTars，将[方括号]换成你的作业要求。

> 请按[学校 AI 政策]，帮我为[课程或领域]研究[问题]，仅用[公开免账号来源或授权图书馆]，找最多[数量]篇在[日期范围]首次发表、涉及[人群]且直接测量[结果指标]的同行评审研究。保留首批结果，交代搜索词、筛选、访问方式、日期和可见服务版本；列 DOI、作者、载体、上线和卷期日期、样本、设计、工具、无显著及冲突结果、局限，附一手链接，标明全文或仅摘要。标出接近但不完全匹配的论文和数字矛盾，宁少勿编；分开找论文、综合、等待和核查时间。帮我验证，不代替阅读，不注册、付款、联系或代交作业。

*把它当作起点就好，课程规则和你自己的阅读仍然重要。*

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [OpenAI’s own help page](https://help.openai.com/en/articles/9125172-the-chatgpt-home-page) — 查阅日期: unknown
- [ACM’s DOI deposit](https://api.crossref.org/works/10.1145/3613905.3651018) — 查阅日期: unknown
- [publisher-deposited record](https://api.crossref.org/works/10.1080/0144929X.2022.2151512) — 查阅日期: unknown
- [publisher PDF](https://ijsr.internationaljournallabs.com/index.php/ijsr/article/download/2859/1636) — 查阅日期: unknown
- [the original results](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2024.1383913/full) — 查阅日期: unknown
- [Xie](https://doi.org/10.3389/fpsyg.2023.1298361) — 查阅日期: unknown
- [Nugrahanto](https://journal.untar.ac.id/index.php/ijassh/article/download/29006/17293) — 查阅日期: unknown
- [real r/PhD question](https://www.reddit.com/r/PhD/comments/1qdpgwf/what_is_the_best_ai_tool_for_research/) — 查阅日期: unknown
- [master’s-thesis discussion](https://www.reddit.com/r/PhdProductivity/comments/1xexlty/anyone_else_frustrated_with_the_current_ai_tools/) — 查阅日期: unknown
