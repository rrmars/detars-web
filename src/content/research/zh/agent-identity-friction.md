---
title: "Agent 的身份摩擦:为什么 Cloudflare 刚刚发明了临时账号"
description: "AI agent 能写代码,但不能注册账号。2026 年 6 月 19 日,Cloudflare 上线临时账号,让后台 agent 不用人也能部署。整个身份认证栈正在被改造成面向非人类调用方。"
locale: zh
publishedAt: 2026-06-21
author: DeTars Research
generatedBy: pack:research
reviewed:
  receipt: false
  sealedCitations: false
  peerReview: false
sources:
  - title: "Cloudflare Blog — Temporary Cloudflare Accounts for AI agents"
    url: "https://blog.cloudflare.com/temporary-accounts/"
  - title: "WorkOS — auth.md:an open protocol for agent registration"
    url: "https://workos.com/auth-md"
  - title: "auth-md.com — AI Agent Registration Protocol for Web"
    url: "https://auth-md.com/"
tldr: "后台 AI agent 不能点注册流程、不能复制 API token、不能过 MFA——这成了新瓶颈。2026 年 6 月 19 日,Cloudflare 上线 Temporary Accounts for Agents(通过 `wrangler deploy --temporary` 进行 60 分钟部署);更广的解法是名为 auth.md 的开放协议,Cloudflare、WorkOS、Resend、Firecrawl 等都已发布。整个 Web 的身份层正在被重写,让机器——而不仅是人——能登台。"
faq:
  - q: "为什么 AI agent 需要一个临时账号?"
    a: "因为所有现有的注册流程都默认调用方是人:浏览器 OAuth 跳转、复制的 API token、MFA 弹窗。后台 agent 没人在线就会卡死。Cloudflare 的解法是在 `wrangler deploy` 上加一个 `--temporary` 标志——它当场给你分配一个账号、发一个 API token 给 Wrangler、返回一个 claim URL,让人在 60 分钟内把它升级成永久账号,过期则连同资源自动删除。"
  - q: "auth.md 是什么?"
    a: "auth.md 是一个开放协议,让 agent 能免注册表单地为 Web 服务注册账号。应用发布一个 `/.well-known/auth.md` 文件(基于 RFC 9728 OAuth Discovery Metadata),说明支持哪些流程。两种流程并存:Agent Verified(agent 的身份提供方用 ID-JAG 替用户背书,无需人在场),User Claimed(agent 给用户看一段验证码,用户登录确认——类似 OTP)。最终签发一个短时、限定范围的 OAuth token。截至 2026 年 6 月,Cloudflare、WorkOS、Resend、Firecrawl、Ora.ai、here.now、mailbox.bot、agents-txt.com 都已发布。"
  - q: "临时账号和 auth.md 会取代人工注册吗?"
    a: "不会——这正是要点。两者都把人留在闭环里,只是把人的到场点挪了位置。Cloudflare 的临时账号留 60 分钟让人认领;auth.md 的 User Claimed 流程只要一次轻确认。Agent 自己写、自己部署、自己验,人只在成果已经出来之后点一次头——而不是每一步都守着。这是授权边界的变化,不是把授权撤掉。"
draft: true
---

2026 年 6 月 19 日,Cloudflare 上线了 **Temporary Cloudflare Accounts for AI agents**。机制很小,立意很大。公告里写得很直白:"Background AI sessions have no human in the loop, and are becoming the norm. Any auth step that needs a browser, a copy-paste, or 'click here in 60 seconds' means an agent gets stuck and may choose to deploy elsewhere"([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。这个为人类用户从里到外造出来的 Web 身份层,正在被改造,以容纳一种新的调用方。这篇报告谈的是:为什么这件事现在成了瓶颈,新的形态长什么样,以及它把那些本来就带着持久身份的 agent 留在了哪里。

## 昨天发生了什么

实际功能只有一个 CLI 标志。Agent 现在跑 `wrangler deploy --temporary`,Cloudflare 就分配一个账号、发一个 API token 给 Wrangler、把 Worker 部署出去、再回一个 claim URL 给 agent 转交给人。部署保持在线 60 分钟;在这段时间里,人点链接登(注)Cloudflare,就能把临时账号升级成永久的——Worker、数据库、其它绑定一起带走。没人认领,到期自动连资源一起删除([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。

那个时间窗口就是全部巧妙之处。它让 agent **写、部署、curl 自己产出的 URL 来验证**——全程不需要人做任何事——同时把"不可逆"那一步留给人:把临时账号升成永久账号。Cloudflare 团队把设计意图讲得很清楚:"Trial-and-error is the agent's superpower. Agents need a tight write → deploy → verify loop. They need cheap, throwaway deployment targets"([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。Agent 能交付,不是因为人给了它凭据;而是因为平台给了它 60 分钟的临时身份。

## 为什么"身份"变成了新瓶颈

一年前瓶颈是模型能力。然后是可靠性(就是 [agent-reliability-gap](/zh/research/agent-reliability-gap) 那篇)。再然后是单位经济([agent-unit-economics](/zh/research/agent-unit-economics))。今天是嵌在每个 auth 流程里的那个前提——调用方有眼、有手、有手机。OAuth 跳转、复制的 API token、MFA 推送、"60 秒内点这里"——每一样都能把后台 agent 死死卡住。

这件事之所以重要,是因为后台 agent 已经不再是例外。Cloudflare 在公告里的措辞是 "are becoming the norm"([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。用户把 agent 丢进一个 worktree 跑两小时,它得部署十几个预览环境、调用若干个 API、顺便注册若干个服务。如果每一步都要人从中间插手,agent 走不到第二步。

代价还不只是速度,更是选择。Cloudflare 自己点破:碰上 auth 摩擦的 agent "may choose to deploy elsewhere"([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。哪个平台先把摩擦去掉,哪个平台就成默认。支付、邮件、抓取、存储——任何 agent 经常需要的服务都一样:谁先接住 agent,谁就赢下那一通调用。

## 更大的形状:auth.md

Cloudflare 并不是只发了临时账号。同篇公告指向一个更广的开放工作:**auth.md**,一个和 WorkOS 共同设计的协议,让任何 Web 服务都能免注册表单地为 agent 注册账号。规范挂在 `auth-md.com` 上,代码仓在 `github.com/workos/auth.md`,MIT 协议([WorkOS](https://workos.com/auth-md)、[auth-md.com](https://auth-md.com/))。

形状很简洁,值得仔细读一遍:

- 应用发布一个 `/.well-known/auth.md` 文件——一段不大的 Markdown,告诉 agent 它支持哪些注册流程、有哪些 scope。它复用了现有 OAuth 标准(RFC 9728 OAuth Discovery Metadata、ID-JAG 身份断言),并不新造一套鉴权系统。
- Agent 拉到这个文件,挑一个流程,领一个限定范围的 access token。没有复制粘贴,没有 MFA,没有人守着。
- 两种流程并存。**Agent Verified**——agent 的身份提供方(例如用户的企业 SSO,或 WorkOS AuthKit)替用户背书;不需要人在场。**User Claimed**——agent 给用户看一段验证码,用户登录确认,类似 OTP。

截至 2026 年 6 月,已发布的包括 Cloudflare、WorkOS、Resend、Firecrawl、Ora.ai、here.now、mailbox.bot、agents-txt.com([auth-md.com](https://auth-md.com/))。这份名单就是"agent-ready 的 Web"的早期地图。

把 Cloudflare 这两件事放一起读,图景就更清楚了。临时账号是 **一次性** 的原语——给 agent 自己创建、未必保留的部署目标用。auth.md 是 **持久** 的原语——给 agent 反复使用的服务用,一次 claim 把临时注册升成长寿命 token。两者合起来覆盖了完整的两端:临时部署、长期服务访问;在每一端都留了人作为闸门,只是把人放到最该出现的位置。

## 对"本来就带着身份"的 agent 意味着什么

还有一类 agent 既不需要临时账号、也不太需要 auth.md——它们本来就在替用户拿着一份持久身份。如果你的 agent 运行时用的是用户自己拥有的密钥签请求,而那份密钥就放在用户硬盘上(不是某个厂商服务器里的账号),那 agent 就已经有了临时账号和 auth.md 想给它准备的东西。它不需要 60 分钟的认领窗口;它可以直接以用户身份去注册那个服务,而用户能保有所有东西——因为密钥本来就是他的。

这跟 [own-your-ai](/zh/research/own-your-ai) 那篇谈的是同一个结构性属性,只是往上推了一层。"Local-first 的身份"不只是说"厂商倒了你的记忆还在";它还说"你不需要厂商先给你发一个临时的你"。

## 诚实边界

有些事这份报告钉不死,你应该知道:

- **临时账号的能力可能会变**。Cloudflare 自己写了 "temporary accounts have some limitations, and their capabilities may change over time"([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))。60 分钟窗口、claim 流程、哪些资源会被自动删除(以及是否有可恢复形式),都是平台还在调整中的决定。
- **auth.md 的采用还在早期**。八家发布方是真的,但远不算普及。Agent 伸手能用的多数服务,仍然默认人在键盘前。
- **更广的 Stripe / Cloudflare 资源开通协议**——Cloudflare 在公告里提到("creating an account, starting a subscription, registering a domain, and getting an API token to deploy code, with no copy-pasting tokens or entering credit card details",[Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/))——在本次公告里没有完全展开,也没有另一个我能引用的一手来源。

能钉死的是方向。一年里,瓶颈在挪——能力,然后可靠性,然后经济。现在又挪到了身份。看到这一点的平台,已经在出货了。