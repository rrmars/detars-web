# Alibaba Bailian / DashScope (阿里云百炼)

Checked 2026-10-20 against `modelstudioai/cli` (npm `bailian-cli` 2.4.0; README and
`packages/commands/src/commands/usage/*.ts`).

DeTars providers `qwen` and `alibaba` (env `QWEN_API_KEY`, `MODELSTUDIO_API_KEY`,
`DASHSCOPE_API_KEY`).

## Identity: console sign-in, not the API key

Every `bl usage` command needs a console OAuth sign-in. An API key
(`bl auth login --api-key`) does not cover usage queries. AK/SK is only needed for
Token Plan seat administration.

- Sign in: `bl auth login --console`; international accounts add
  `--console-site international`. It opens a browser sign-in; the user only
  confirms there.
- `bl skill init` installs Bailian's official Skills. The official installer also
  installs them automatically. Tell the user.

## Queries

| Question | Command |
|---|---|
| Free quota per model | `bl usage free [--model <name>]` |
| Usage summary | `bl usage summary` |
| Usage statistics | `bl usage stats` |
| Token Plan quota | `bl usage token-plan` |
| Coding Plan quota | `bl usage coding-plan` |

Beijing and international are separate accounts.
