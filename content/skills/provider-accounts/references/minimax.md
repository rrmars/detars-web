# MiniMax

Checked 2026-10-20 against MiniMax's official CLI `mmx-cli` source (MiniMax-AI/cli
@a965e72: `src/client/endpoints.ts`, `src/commands/quota/show.ts`) and OpenClaw's
`provider-usage.fetch.minimax.ts`.

DeTars providers `minimax` and `minimax-portal` (`minimax-cn` is an alias).
Inference key env: `MINIMAX_API_KEY`.

## Identity: same key

The inference key works (Bearer). Regions are separate accounts: mmx uses
`https://api.minimax.io` (global) and `https://api.minimax.cn` (cn). Use the host
DeTars's minimax provider actually uses.

## Two pools, picked by key type

| Key | Endpoint (relative to the base host) | Returns |
|---|---|---|
| Pay-as-you-go secret key (`sk-api-…`) | `GET /account/query_balance` | available / cash / voucher / credit / owed balance |
| Token / Coding Plan key or portal OAuth | `GET /v1/token_plan/remains` | per-model plan remains |

Report the two pools separately.

## Ways to run it

- With the DeTars key, write a small HTTP script that reads `MINIMAX_API_KEY`
  from its environment, and run it as
  `detars infer provider exec --provider minimax --env MINIMAX_API_KEY -- python3 <script>`.
  `mmx` reads its key from `--api-key` or its own config file, not from that
  environment variable at query time. Don't put the key in argv.
- If the user already set up `mmx` (`npm i -g mmx-cli`, then `mmx auth login`),
  `mmx quota show` does the same selection. The CLI ships an official skill
  (`skill/SKILL.md`); `MiniMax-AI/skills` has more.
