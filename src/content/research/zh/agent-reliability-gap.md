---
title: "Agent 可靠性鸿沟:为什么 Gartner 预计 40% 的 agent 项目会被砍"
description: "Gartner 预测到 2027 年底 40%+ 的 agentic AI 项目会被取消——成本失控、价值不清、风控不足。三条原因底下是同一个问题:可靠性。"
locale: zh
publishedAt: 2026-06-20
author: DeTars Research
generatedBy: editorial
reviewed:
  humanCheck: "2026-06-20"
tldr: "Gartner 预计到 2027 年底 40%+ 的 agentic AI 项目会被取消——成本失控、商业价值不清、风险管控不足。三条原因底下是同一个问题:你还不敢让这些 agent 无人值守地跑。"
sources:
  - title: "Gartner — 到 2027 年底 40%+ agentic AI 项目将被取消"
    url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
  - title: "MarTech — Gartner:40% 的 agentic AI 项目会失败"
    url: "https://martech.org/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable/"
faq:
  - q: "为什么这么多 agent 项目会被取消?"
    a: "Gartner 给的原因是成本失控、商业价值不清、风险管控不足。很多只是被炒作驱动的早期 PoC;Gartner 还点名'agent washing'——把聊天机器人、RPA 重新包装成 agent——并估计数千家号称 agentic 的厂商里只有约 130 家是真的。"
  - q: "能活下来的项目靠什么?"
    a: "靠可验证的可靠性:出错能恢复的运行时、机械可核验的完成、被封印到可信的证据。没有这些,成本和风险都太高,进不了生产。"
draft: false
---

2025 年 6 月,Gartner 预测**到 2027 年底,40%+ 的 agentic AI 项目会被取消**,原因是成本失控、商业价值不清、风险管控不足([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027))。对一个被如此热炒的品类来说,这是个惊人的数字——值得读到标题背后。

## 这不是能力问题

今天多数 agent 项目还是早期 PoC,市场上很大一部分是"agent washing"——把助手、RPA、聊天机器人重新包装成 agent,却没有真正的 agent 能力。Gartner 估计数千家号称 agentic 的厂商里只有约 130 家是真的([MarTech](https://martech.org/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable/))。模型已经够强;围着它的产品还不够靠谱。

## 三条原因底下是同一个:可靠性

把那三条原因放一起看,它们其实是一回事:

- **成本失控**——崩了就丢状态、从头重来的 agent,白烧几小时算力。
- **价值不清**——假装做完、拿不出证据的 agent,产出没人敢用。
- **风控薄弱**——能不经闸门就做不可逆动作的 agent,是负债,不是资产。

每一条都是同一道鸿沟的一面:这些系统还不够可信,不敢让它无人值守地跑。所以它们卡在上生产之前。

## 怎么补上这道鸿沟

能活下来的,会是建立在可验证可靠性、而非 demo 之上的:

- **可恢复的运行时**——把出错当成可绕过去的事实:退避、落盘、续跑。
- **可核验的完成**——"做完了"必须有交付物和证据撑着,不是一句声明。
- **被封印的证据**——引用按内容哈希封印,没读过或被改过即被拒。
- 对不可逆动作设**硬闸门**,要人授权才放行。

这些是机制,不是承诺——而机制,才是把一个动人的 demo 变成企业真敢交活的东西。这道可靠性鸿沟,正是 DeTars 为之而生要补上的;见[它凭什么靠得住](/zh/reliable)。
