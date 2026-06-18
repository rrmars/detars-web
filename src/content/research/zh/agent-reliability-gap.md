---
title: "Agent 可靠性鸿沟:为什么 40% 的 AI agent 项目会被砍"
description: "为什么大多数 AI agent 项目在上生产前就停摆——以及把「demo」和「敢交真活」区分开来的那几条可靠性机制。"
locale: zh
publishedAt: 2026-06-18
author: DeTars Research
generatedBy: pack:research
reviewed:
  receipt: true
  sealedCitations: true
  peerReview: true
  humanCheck: "pending"
tldr: "多数 agent 项目失败,不是模型太弱,而是 agent 靠不住——会忘事、会假装做完、会崩。解法是结构性的:可恢复的运行时、可核验的完成、被封印的证据。"
sources:
  - title: "Gartner — agentic AI 项目存活率"
    url: "https://www.gartner.com/en"
faq:
  - q: "为什么 AI agent 项目会被取消?"
    a: "多数被砍是因为 agent 不敢挂着无人值守地跑——崩了丢状态、没做完却说做完了、拿不出能核验的产出。"
  - q: "怎样的 agent 才够可靠,能交真活?"
    a: "出错能恢复的运行时、机械可核验的完成、被封印到改一字即失效的证据。"
draft: true
---

这是一篇用于验证研究模板的**草稿样例**,生产环境不发布(`draft: true`)。

## 鸿沟在哪

自主 agent 的卡点很少是模型能力本身,而是可靠性:一个崩了就丢上下文、会假装做完、会编造出处的 agent,企业不会把真活交给它。

## 怎么补上

把「demo」和「敢托付」区分开的,是三条结构性能力:

- **可恢复的运行时**——把出错当成可绕过去的事实,而不是一碰就死。
- **可核验的完成**——「做完了」是一张必须有交付物和证据支撑的收据。
- **被封印的证据**——每条引用都按内容哈希封印,没读过或被改过即被拒绝。

这些是机制,不是口头承诺——而这正是关键。
