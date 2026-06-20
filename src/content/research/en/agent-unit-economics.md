---
title: "Why caching-aware routing decides consumer-agent unit economics"
description: "Token prices keep falling, yet agent bills keep rising — because agent loops multiply calls. The teams that win consumer AI are the ones that keep the model's cache hot."
locale: en
publishedAt: 2026-06-20
author: DeTars Research
generatedBy: editorial
reviewed:
  humanCheck: "2026-06-20"
tldr: "Per-token prices fall, but an agent makes many model calls per task, so the total bill rises. Prompt caching cuts cached input to about 10% of the base price — but only if your system keeps the cache warm. Caching-aware routing is how a consumer agent stays affordable."
sources:
  - title: "DigitalOcean — Prompt caching for Anthropic and OpenAI models"
    url: "https://www.digitalocean.com/blog/prompt-caching-with-digital-ocean"
  - title: "AI Cost Check — Prompt caching cost savings (OpenAI vs Anthropic)"
    url: "https://aicostcheck.com/blog/ai-prompt-caching-cost-savings"
faq:
  - q: "If token prices keep dropping, why do agent bills go up?"
    a: "Because an agent doesn't make one call — it plans, calls tools, reviews, and retries, often dozens to hundreds of model calls per task. Usage grows faster than per-token price falls, so the total bill rises."
  - q: "How much can prompt caching save?"
    a: "Cached input is billed at roughly 10% of the base input price — about a 90% discount on the repeated portion. Real-world systems commonly cut total token cost by 70–90%, but only on the context that actually hits the cache."
draft: false
---

There's a comforting story in AI: model prices keep falling, so running agents will keep getting cheaper. The comfort is misleading. Per-token prices do fall — but a single agent task isn't one model call. It plans, spins up specialists, calls tools, reviews its own work, and retries on failure: often dozens to hundreds of calls per task. **Usage scales faster than price falls, so the consumer-agent bill goes up, not down.**

This is the real bottleneck for consumer AI — not capability, but unit economics. An assistant you let run for hours has to be cheap enough per task that a normal subscription can cover it.

## Where the savings actually are

The biggest lever is prompt caching. Every model call in an agent loop re-sends a large, mostly-unchanged context: the system prompt, tool definitions, the documents in play. Providers now let you cache that prefix and bill re-reads at roughly **10% of the base input price** — about a 90% discount on the repeated part ([DigitalOcean](https://www.digitalocean.com/blog/prompt-caching-with-digital-ocean)). In practice, systems that lean on it cut total token cost by **70–90%** ([AI Cost Check](https://aicostcheck.com/blog/ai-prompt-caching-cost-savings)).

But there's a catch: the discount only applies to context that **hits** the cache. Caches expire on a short timer, and any reordering or edit upstream of the cached block busts it. Naive agent loops constantly miss — and pay full price.

## Why routing is the moat

Capturing those savings isn't a config flag; it's an architecture. The system has to **route work to keep the cache warm**: hold context stable across calls, schedule so reads land inside the cache window, and pick the provider/model where the cached prefix still lives. That is caching-aware routing — and it's exactly the kind of unbillable, unglamorous engineering that decides whether a consumer agent is profitable.

It's also why large platforms struggle to match it: aggressively optimizing away your own token revenue is awkward when those tokens are your margin.

## Where DeTars stands

DeTars routes with the cache in mind — keeping the model's KV / prompt cache hot so repeated context isn't paid for twice. The effect compounds with the broader trend: as per-token prices fall, the same routing makes each task cheaper still. Cheaper tasks are what make an always-on, runs-all-night agent something a person can actually afford to keep running.
