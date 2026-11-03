---
title: "The agent identity friction: why Cloudflare just invented temporary accounts"
description: "AI agents can write code, but they can't sign up. On June 19, 2026 Cloudflare launched temporary accounts so background agents can deploy without a human. The whole auth stack is being retrofitted for non-human callers."
locale: en
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
  - title: "WorkOS — auth.md: an open protocol for agent registration"
    url: "https://workos.com/auth-md"
  - title: "auth-md.com — AI Agent Registration Protocol for Web"
    url: "https://auth-md.com/"
tldr: "Background AI agents can't click through sign-up forms, copy API tokens, or satisfy MFA — and that has become the new bottleneck. On June 19, 2026, Cloudflare shipped Temporary Accounts for Agents (60-minute deploys via `wrangler deploy --temporary`), and the broader fix is an open protocol called auth.md, already published by Cloudflare, WorkOS, Resend, Firecrawl and others. The web's identity layer is being rewritten so machines, not just people, can show up."
faq:
  - q: "Why does an AI agent need a temporary account?"
    a: "Because every existing signup flow assumes a human: a browser OAuth dance, a copy-pasted API token, an MFA prompt. A background agent with no human in the loop hits a hard stop there. Cloudflare's fix is a `--temporary` flag on `wrangler deploy` that provisions an account, gives Wrangler an API token, and returns a claim URL the human can use to convert it to a permanent account within 60 minutes. After that, the temporary account and its resources auto-delete."
  - q: "What is auth.md?"
    a: "auth.md is an open protocol that lets agents register for web services without sign-up forms. An app publishes a `/.well-known/auth.md` file (built on RFC 9728 OAuth Discovery Metadata) describing supported flows. There are two flows: Agent Verified (the agent's identity provider vouches for the user via ID-JAG, no human in the loop) and User Claimed (the agent shows the user a code, the user signs in and confirms — like an OTP). The result is a short-lived, scoped OAuth token. As of June 2026, Cloudflare, WorkOS, Resend, Firecrawl, Ora.ai, here.now, mailbox.bot and agents-txt.com already publish one."
  - q: "Will temporary accounts and auth.md replace human sign-ups?"
    a: "No — and that's the point. Both designs keep a human in the loop, just at a different point. Cloudflare's temporary accounts give a 60-minute window for a human to claim the work; auth.md's User Claimed flow requires a one-tap confirmation. The agent ships and verifies on its own, and the human signs off when the work is already done, instead of holding the agent's hand through every step. It's a delegation boundary, not a removal."
draft: true
---

On June 19, 2026, Cloudflare shipped **Temporary Cloudflare Accounts for AI agents**. The mechanic is small. The framing is large. From the announcement: "Background AI sessions have no human in the loop, and are becoming the norm. Any auth step that needs a browser, a copy-paste, or 'click here in 60 seconds' means an agent gets stuck and may choose to deploy elsewhere" ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)). The web's identity layer — built, end-to-end, for human users — is being retrofitted for a new kind of caller. This report is about why that is now the bottleneck, what the new shape looks like, and where it leaves agents that already have durable identity.

## What changed yesterday

The actual feature is one CLI flag. An agent now runs `wrangler deploy --temporary`, Cloudflare provisions an account, hands Wrangler an API token, deploys the Worker, and gives the agent a claim URL to pass back to a human. The deployment is live for 60 minutes. Within that window a human can click the link, sign in (or sign up) to Cloudflare, and convert the temporary account into a permanent one — Workers, databases, and other bindings included. If nobody claims it, it expires and auto-deletes ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)).

That window is the entire trick. It lets an agent **write, deploy, and curl its own output** without a human doing anything, while keeping a human in the loop for the irreversible part — turning an ephemeral account into a durable one. The Cloudflare team is explicit about the design intent: "Trial-and-error is the agent's superpower. Agents need a tight write → deploy → verify loop. They need cheap, throwaway deployment targets" ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)). The agent doesn't ship because a human gave it credentials; it ships because the platform gave it 60 minutes of provisional identity.

## Why identity is the new bottleneck

A year ago the bottleneck was model capability. Then it was reliability (the gap covered in [agent-reliability-gap](/research/agent-reliability-gap)). Then unit economics ([agent-unit-economics](/research/agent-unit-economics)). Today it is the assumption baked into every auth flow on the web — that the caller has eyes, hands, and a phone. OAuth redirects, copy-pasted API tokens, MFA pushes, "click here in 60 seconds" — every one of those stops a background agent cold.

This matters because background agents are no longer the exception. Cloudflare's framing in the post is that they "are becoming the norm" ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)). When a user runs an agent in a worktree for two hours, the agent needs to deploy a dozen preview environments, scrape a handful of APIs, register for services along the way. If every one of those wants a human in the middle, the agent never gets past the second step.

The cost of this isn't only velocity. It is selection. Cloudflare names it directly: an agent that hits auth friction "may choose to deploy elsewhere" ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)). Whichever platform removes the friction first becomes the default. The same is true for any service agents routinely need — payment, email, scraping, storage. Whoever accepts the agent first wins the call.

## The wider shape: auth.md

Cloudflare didn't ship temporary accounts in isolation. The same post points at a broader, open effort: **auth.md**, a protocol co-designed with WorkOS that lets any web service register agents without a sign-up form. The spec is hosted on `auth-md.com` and lives at `github.com/workos/auth.md` under an MIT license ([WorkOS](https://workos.com/auth-md), [auth-md.com](https://auth-md.com/)).

The shape is simple and worth reading carefully:

- An app publishes a `/.well-known/auth.md` file — a small Markdown document that tells agents which registration flows it supports and which scopes exist. It composes existing OAuth standards (RFC 9728 OAuth Discovery Metadata, ID-JAG identity assertions) rather than inventing a new auth system.
- An agent fetches the file, picks a flow, and gets a scoped access token. No copy-paste, no MFA prompt, no human standing by.
- Two flows coexist. **Agent Verified** — the agent's identity provider (e.g., the user's enterprise SSO or a WorkOS AuthKit tenant) vouches for the user; no human in the loop. **User Claimed** — the agent shows the user a code; the user signs in and confirms, like an OTP.

As of June 2026, the publishers already live include Cloudflare, WorkOS, Resend, Firecrawl, Ora.ai, here.now, mailbox.bot, and agents-txt.com ([auth-md.com](https://auth-md.com/)). That list is the early map of the agent-ready web.

Read the two Cloudflare pieces side-by-side and the pattern sharpens. Temporary accounts are the **throwaway** primitive — for deploy targets an agent creates and might not keep. auth.md is the **durable** primitive — for services an agent uses repeatedly, where a one-time claim converts an ephemeral registration into a long-lived token. Together they cover both ends: ephemeral deployments and persistent service access, with a human gate on each one, just at the right moment.

## What this implies for agents that already have identity

There is a second category of agent that doesn't need either of these primitives — agents that already carry a durable identity on behalf of a user. If your agent runtime signs its requests with keys the user owns, and those keys are files on the user's disk (not an account on a vendor's server), then the agent already has what temporary accounts and auth.md are trying to provision. It doesn't need a 60-minute claim window; it can register for the service under the user's identity directly, and the user gets to keep everything because the keys were theirs all along.

This is the same structural property the [own-your-ai](/research/own-your-ai) report was about, applied one layer up. Local-first identity isn't only about keeping your memory when a vendor shuts down. It is also about not needing a vendor to mint you a temporary one in the first place.

## Honest boundaries

A few things this report can't pin down, and you should know:

- **The temporary-accounts capability may evolve.** Cloudflare explicitly notes "temporary accounts have some limitations, and their capabilities may change over time" ([Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)). The 60-minute window, the claim flow, and what gets auto-deleted (vs. preserved in some recoverable form) are all platform decisions still in motion.
- **auth.md adoption is early.** Eight publishers is real, but it isn't universal. Most services an agent reaches for still expect a human at the keyboard.
- **The bigger Stripe / Cloudflare provisioning protocol** that Cloudflare alludes to ("creating an account, starting a subscription, registering a domain, and getting an API token to deploy code, with no copy-pasting tokens or entering credit card details" — [Cloudflare Blog](https://blog.cloudflare.com/temporary-accounts/)) wasn't fully spelled out in this announcement and isn't a separate primary source I can cite here.

What *is* solid is the direction. For a year the bottleneck moved — capability, then reliability, then economics. Now it has moved again, to identity. And the platforms that see it first are already shipping the fix.