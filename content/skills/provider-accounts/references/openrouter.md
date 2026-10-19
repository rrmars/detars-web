# OpenRouter

Checked 2026-10-20 against <https://openrouter.ai/docs/api-reference/get-credits>
and the limits page.

DeTars provider `openrouter` (env `OPENROUTER_API_KEY`).

| Question | Endpoint | Identity |
|---|---|---|
| This key's limit, remaining limit and usage (daily, weekly, monthly, all time) | `GET https://openrouter.ai/api/v1/key` | the ordinary key (partly verified) |
| Account total credits and total usage | `GET https://openrouter.ai/api/v1/credits` | **management key** only; others get 403 |

A per-key limit is not the account balance; report them separately.
