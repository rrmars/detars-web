---
title: "为什么缓存感知路由决定消费级 agent 的单位经济学"
description: "单价一直在降,agent 的账单却一直在涨——因为 agent 循环把调用次数翻了上去。赢得消费级 AI 的,是那些让模型缓存保持高命中的团队。"
locale: zh
publishedAt: 2026-06-20
author: DeTars Research
generatedBy: editorial
reviewed:
  humanCheck: "2026-06-20"
tldr: "单价在降,但一个任务里 agent 要调模型很多次,所以总账单反而涨。提示缓存能把命中的输入压到约基础价的 10%——前提是你的系统让缓存保持高命中。缓存感知路由,正是消费级 agent 能负担得起的关键。"
sources:
  - title: "DigitalOcean — Anthropic / OpenAI 模型的提示缓存"
    url: "https://www.digitalocean.com/blog/prompt-caching-with-digital-ocean"
  - title: "AI Cost Check — 提示缓存的成本节省(OpenAI vs Anthropic)"
    url: "https://aicostcheck.com/blog/ai-prompt-caching-cost-savings"
faq:
  - q: "单价一直降,为什么 agent 账单反而涨?"
    a: "因为一个任务 agent 不是只调一次——它要规划、调工具、复审、重试,常常每个任务几十到上百次模型调用。用量涨得比单价降得快,总账单就上去了。"
  - q: "提示缓存能省多少?"
    a: "命中的输入按约基础输入价的 10% 计费——重复部分省约 90%。真实系统普遍把总 token 成本压低 70–90%,但只对真正命中缓存的上下文有效。"
draft: false
---

AI 圈有个让人安心的说法:模型越来越便宜,所以跑 agent 也会越来越便宜。这个安心是误导。单价确实在降——但一个 agent 任务不是一次模型调用。它要规划、召集专员、调工具、复审自己的产出、失败重试:常常每个任务几十到上百次调用。**用量涨得比单价降得快,消费级 agent 的账单是涨,不是跌。**

这才是消费级 AI 真正的卡点——不是能力,而是单位经济学。一个你敢让它跑几小时的助手,每个任务必须便宜到一个普通订阅能覆盖。

## 省的钱到底在哪

最大的杠杆是提示缓存。agent 循环里每次调用都要重发一大段几乎不变的上下文:系统提示、工具定义、正在处理的文档。如今服务商允许你把这段前缀缓存起来,重复读取按约**基础输入价的 10%**计费——重复部分省约 90%([DigitalOcean](https://www.digitalocean.com/blog/prompt-caching-with-digital-ocean))。实践中,用好它的系统能把总 token 成本压低 **70–90%**([AI Cost Check](https://aicostcheck.com/blog/ai-prompt-caching-cost-savings))。

但有个前提:折扣只对**命中**缓存的上下文生效。缓存有很短的过期时间,缓存块上游任何重排或改动都会让它失效。粗糙的 agent 循环不断 miss——然后付全价。

## 为什么"路由"才是护城河

拿到这些省钱,不是开个开关,而是一套架构。系统必须**调度让缓存保持温热**:跨调用保持上下文稳定、把读取安排进缓存窗口内、选那个缓存前缀还在的服务商/模型。这就是缓存感知路由——也正是这种不计费、不起眼、却决定一个消费级 agent 能不能赚钱的工程。

这也是大平台难以跟进的原因:当那些 token 就是你的毛利时,主动把自己的 token 收入优化掉,是件别扭的事。

## DeTars 在这条线的位置

DeTars 带着缓存做路由——让模型的 KV / 提示缓存保持高命中,重复上下文不重复计费。这个效果还会和大趋势叠加:单价越降,同一套路由让每个任务更便宜。更便宜的任务,才让一个"永远在线、能跑一整夜"的 agent 成为普通人真正负担得起、愿意一直开着的东西。
