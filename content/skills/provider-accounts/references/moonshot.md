# Moonshot / Kimi

Checked 2026-10-20 against <https://platform.kimi.com/docs/api/balance>.

DeTars provider `moonshot` (env `MOONSHOT_API_KEY`). `kimi-coding` (Kimi Code
plan) is a different product; whether it shares this balance is not verified.

- Identity: the same API key (Bearer).
- Balance (China platform): `GET https://api.moonshot.cn/v1/users/me/balance`
  returns available, voucher and cash balance in CNY.
- The international platform (platform.kimi.ai) has separate keys; its balance
  host is not verified.
- Console: <https://platform.kimi.com> (moved from platform.moonshot.cn).
