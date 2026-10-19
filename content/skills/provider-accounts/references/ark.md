# Volcengine Ark (火山方舟)

Checked 2026-10-20 against arkcli 1.0.40 (`arkcli usage balance --help`) and its
official skills `arkcli-usage`, `arkcli-billing` and `arkcli-auth`.

Applies to DeTars provider `volcengine`, and to a `byteplus` route whose host is
`ark.cn-beijing.volces.com` (a China account despite the id).

## Identity: control plane, not ARK_API_KEY

Balance, usage and billing go through the control plane. They need a
Volcengine sign-in (SSO, giving STS credentials). `ARK_API_KEY` and arkcli's
`--api-key` only cover inference. The AK/SK login channel is closed in arkcli
1.0.40.

- Install: `npm i -g @volcengine/ark-cli` (or run once through
  `npx --yes @volcengine/ark-cli <args>`). Its postinstall runs
  `arkcli +connect --refresh`, which installs about 26 official `arkcli-*`
  Skills into `~/.agents/skills` and `~/.claude/skills`. Tell the user.
- Check: `arkcli auth status`. "not configured" means no sign-in yet.
- Sign in from an agent (non-TTY), two steps:
  1. `arkcli auth login --no-browser` prints JSON with `authorize_url`. Open that
     URL for the user, in the browser tool or by handing it over. They sign in on
     any device and copy the base64 code the page shows.
  2. `arkcli auth login --no-browser --code <code>` finishes the login.
  Both flags belong to `auth login` itself, not to `volc-sso`. If `ve` (volcengine
  CLI ≥ 1.0.45) is already logged in, an interactive `arkcli auth login` can
  reuse that session.

## Queries

| Question | Command | Notes |
|---|---|---|
| Free quota / resource packs left | `arkcli usage balance --type free-quota [--modality LLM\|ComputerVision\|Audio\|Embedding\|Router] [--model <name>] --format json` | Video models are `ComputerVision`; `--modality` takes no aliases |
| Agent / Coding Plan quota | `arkcli usage balance --type plan [--product agent-plan\|coding-plan\|agent-plan-team\|coding-plan-team]` | Same data as `arkcli usage plan` |
| Media asset library capacity | `arkcli usage balance --type media-asset` | |
| Tokens / requests used | `arkcli usage stats --start <YYYY-MM-DD> --mine` | 5–30 min delay; read `arkcli-usage/references/arkcli-usage-stats.md` first |
| Money actually owed | `arkcli billing list --start <YYYY-MM>` | Settled T+1; read `arkcli-billing` first |

Each official skill says to read its reference before running these commands.
Do that once the CLI is installed. Speech models (TTS/ASR) have no usage or
balance query in arkcli.

Console for humans: <https://console.volcengine.com/ark/region:cn-beijing/overview>
