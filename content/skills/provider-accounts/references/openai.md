# OpenAI

Checked 2026-10-20 against the OpenAI Admin APIs guide and usage reference
(developers.openai.com).

DeTars provider `openai`. `openai-codex` is a ChatGPT sign-in, not an API
account.

- Usage: `GET /v1/organization/usage/completions` (and other usage types).
  Costs: `GET /v1/organization/costs`.
- Identity: an **admin key** (`sk-admin-…`) created by an organization owner.
  An ordinary API key is rejected, and ChatGPT workspace admin keys don't work
  here.
- No credit-balance API was found (not verified as absent). For the remaining
  balance, open the platform billing page in the browser tool.
- `openai-codex` plan limits are not an OpenAI API balance; don't mix them up.
