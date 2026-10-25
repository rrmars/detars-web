# fal

Checked 2026-10-25 against <https://fal.ai/docs/platform-apis/v1/account/billing>.

DeTars provider `fal` (image and video).

- Balance: `GET https://api.fal.ai/v1/account/billing?expand=credits` returns
  `credits.current_balance` and currency.
- Identity: a key with **`billing:usage:read`**, included in the `BILLING`,
  `READONLY` and `FULL` presets (`Authorization: Key <KEY>`). It need not be an
  admin key. Reuse the DeTars-configured key through `detars infer provider exec`
  if it has that permission; otherwise open fal's key settings or billing
  dashboard for the user. Do not infer a key's permissions from its use for
  inference, or treat every query failure as a missing permission.
- Neither `fal-ai-community-skills` nor `genmedia-cli` has a billing command.
- Models from other brands (Kling, Wan, …) that run on fal are billed here.
