---
title: "The agent reliability gap: why Gartner expects 40% of agent projects to be canceled"
description: "Gartner predicts over 40% of agentic AI projects will be canceled by end of 2027 — on cost, unclear value, and weak risk controls. The common thread is reliability."
locale: en
publishedAt: 2026-06-20
author: DeTars Research
generatedBy: editorial
reviewed:
  humanCheck: "2026-06-20"
tldr: "Gartner expects over 40% of agentic AI projects to be canceled by the end of 2027 — driven by escalating costs, unclear business value, and inadequate risk controls. Under all three is the same problem: agents you can't yet trust to run unattended."
sources:
  - title: "Gartner — Over 40% of Agentic AI Projects Will Be Canceled by End of 2027"
    url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027"
  - title: "MarTech — Gartner: 40% of agentic AI projects will fail"
    url: "https://martech.org/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable/"
faq:
  - q: "Why will so many agent projects be canceled?"
    a: "Gartner cites escalating costs, unclear business value, and inadequate risk controls. Many are early proofs-of-concept driven by hype, and Gartner also points to 'agent washing' — rebranding chatbots and RPA as agents — estimating only about 130 of thousands of agentic vendors are real."
  - q: "What separates the projects that survive?"
    a: "Reliability you can verify: a runtime that recovers from failure, completion that is mechanically checked, and evidence that is sealed so outputs can be trusted. Without those, costs and risk stay too high to reach production."
draft: false
---

In June 2025, Gartner predicted that **over 40% of agentic AI projects will be canceled by the end of 2027**, citing escalating costs, unclear business value, and inadequate risk controls ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)). It's a striking number for a category this hyped — and worth reading past the headline.

## It isn't a capability problem

Most agent projects today are early-stage proofs of concept, and much of the market is "agent washing" — rebranding assistants, RPA, and chatbots as agents without real agentic capability. Gartner estimates only about 130 of the thousands of agentic vendors are genuine ([MarTech](https://martech.org/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable/)). The models are strong enough; the products around them aren't dependable enough.

## The common thread is reliability

Look at the three cited reasons together and they collapse into one:

- **Escalating cost** — an agent that loses state on a failure and restarts from scratch burns hours of compute for nothing.
- **Unclear value** — an agent that fakes completion or can't show its evidence produces output nobody can act on.
- **Weak risk controls** — an agent that can take irreversible actions without a gate is a liability, not an asset.

Each is a face of the same gap: these systems aren't yet trustworthy enough to run unattended. That's why they stall before production.

## What closes the gap

The projects that survive will be the ones built on verifiable reliability, not demos:

- A **durable runtime** that treats failure as a fact to route around — back off, checkpoint, resume.
- **Verified completion** — "done" must be backed by deliverables and evidence, not a claim.
- **Sealed evidence** — citations content-hashed so an unread or altered source is rejected.
- **Hard gates** on irreversible actions until a human authorizes.

These are mechanisms, not promises — and mechanisms are what move an agent from a compelling demo to something a business will actually hand work to. The reliability gap is exactly the gap DeTars is built to close; see [why it's reliable](/reliable).
