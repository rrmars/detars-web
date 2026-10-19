---
name: provider-accounts
description: Check the user's hosted AI provider account — remaining balance, credits, free quota or resource packs, plan quota, token/request usage, billing, top-up and sign-in — for Volcengine Ark/BytePlus, MiniMax, Alibaba Bailian/DashScope, fal, Runway, OpenAI, Google, DeepSeek, Moonshot/Kimi, OpenRouter, ElevenLabs, Z.ai and models they host. Use when the user asks 额度、余额、还剩多少、还剩多少 token、用了多少、花了多少钱、账单、套餐、充值、开通、登录账号. Not for a DeTars Pack's own generation allowance (use that Pack's budget operation).
---

# Provider accounts

Answer an account question with the provider's own numbers. Work through the
four steps below, reading only the reference for the provider you need.

## 1. Which account

Take the provider id, base URL host and region from the current DeTars setup
(runtime facts, or the route a tool actually used), not from the model brand.

- A `byteplus` route whose host is `ark.cn-beijing.volces.com` is a Volcengine
  China account.
- minimaxi.com and minimax.io, moonshot.cn and kimi.ai, and Bailian Beijing and
  international are separate accounts with separate keys.
- A model served through fal, together or vydra is billed by that host, not by
  the model's brand.

## 2. Which number

These are separate pools. Report each one under its own name; never add them up.

| Pool | Example |
|---|---|
| DeTars Pack allowance | aivideo `budget` "remaining 1": DeTars's own count, not money |
| Plan quota | Ark Agent/Coding Plan, MiniMax Token Plan, Bailian Token Plan |
| Pay-as-you-go balance / credits | Ark account balance, DeepSeek balance, fal credits |
| Free quota / resource packs | Ark free quota per model |
| Usage (tokens / requests) | delayed aggregates (Ark: 5–30 min) |
| Billing (money owed) | usually settled the next day |

The `usage` returned by one generation is what that call consumed, not what is
left.

## 3. Which identity

| Kind | Providers | How |
|---|---|---|
| Same inference key | MiniMax, Runway, DeepSeek, Moonshot, ElevenLabs, OpenRouter `/key`, Z.ai | Reuse the key DeTars already holds, without reading it: `detars infer provider exec --provider <id> --env <VAR> -- <command>`. The child reads the key from that environment variable. |
| Separate sign-in | Ark (`arkcli auth login`), Bailian (`bl auth login --console`) | Run the vendor CLI login yourself; it opens a browser or prints a link |
| Admin / management key | OpenAI admin key, fal admin key, OpenRouter `/credits` | Tell the user which console page creates it and where to put it; never ask them to paste a key into chat |
| Console only | Google, Replicate, Kling direct | Open the console with the browser tool (try `import_signins` first) |

When a reference says a query needs a separate identity, don't retry with the
inference key. An auth error there is expected, not a sign of a broken key.

Some vendor CLIs ship official agent Skills: arkcli, mmx and bl, plus Runway's
skills. Installing the CLI also installs those Skills; afterwards, read the
relevant one by its absolute path for detail. Installing can also write into the
user's other agents' skill folders (arkcli writes `~/.agents/skills` and
`~/.claude/skills`). Mention that in your reply.

## 4. Reply for a non-technical user

- Lead with the numbers: pool name, amount, unit, as-of time and any delay.
- When a sign-in is needed, start it yourself and ask for exactly one action,
  for example: "我已打开火山登录页，请在弹出的窗口扫码 / 点确认，好了回我一句".
  Give a raw command only if the user asked for one, or every automatic path
  failed.
- Say what you could not see and why, for example "账单要明天才出".

## References

Each file starts with the date it was last checked against official sources.

- [Volcengine Ark](references/ark.md), including `byteplus` routes on China hosts
- [BytePlus ModelArk international](references/byteplus.md)
- [MiniMax](references/minimax.md)
- [Alibaba Bailian / DashScope](references/bailian.md)
- [fal](references/fal.md)
- [Runway](references/runway.md)
- [OpenAI](references/openai.md)
- [Google Gemini / Veo](references/google.md)
- [DeepSeek](references/deepseek.md)
- [Moonshot / Kimi](references/moonshot.md)
- [OpenRouter](references/openrouter.md)
- [ElevenLabs](references/elevenlabs.md)
- [Z.ai](references/zai.md)
- [Hosted models: Kling, Replicate, Luma and others](references/hosted-models.md)
