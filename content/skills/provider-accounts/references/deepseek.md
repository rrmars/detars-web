# DeepSeek

Checked 2026-10-20 against <https://api-docs.deepseek.com/api/get-user-balance>.

DeTars provider `deepseek` (env `DEEPSEEK_API_KEY`).

- Identity: the same API key (Bearer).
- Balance: `GET https://api.deepseek.com/user/balance` returns `is_available`
  and `balance_infos[]` (total, granted and topped-up balance; CNY or USD).
- Run it as
  `detars infer provider exec --provider deepseek --env DEEPSEEK_API_KEY -- python3 <script>`.
