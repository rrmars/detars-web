# fal

Checked 2026-10-20 against <https://fal.ai/docs/platform-apis/v1/account/billing>.

DeTars provider `fal` (image and video).

- Balance: `GET https://api.fal.ai/v1/account/billing?expand=credits` returns
  `credits.current_balance` and currency.
- Identity: an **admin-scoped** key (`Authorization: Key <ADMIN_KEY>`). Whether
  an ordinary inference `FAL_KEY` is accepted is not verified. If it is rejected,
  that is expected: tell the user an admin key is needed and where fal's
  dashboard creates one, or open the fal billing dashboard in the browser tool.
- Neither `fal-ai-community-skills` nor `genmedia-cli` has a billing command.
- Models from other brands (Kling, Wan, …) that run on fal are billed here.
