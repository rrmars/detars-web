# Runway

Checked 2026-10-20 against Runway's official API skills (`runwayml/skills`,
`rw-check-org-details`).

DeTars provider `runway` (env `RUNWAYML_API_SECRET`).

- Identity: the same API secret.
- Credits and limits: `GET https://api.dev.runwayml.com/v1/organization` with
  header `X-Runway-Version: 2024-11-06`. It returns `creditBalance`, tier limits
  and today's usage. Credit history: `POST /v1/organization/usage`. With the
  SDK: `client.organization.retrieve()`.
- Run it as
  `detars infer provider exec --provider runway --env RUNWAYML_API_SECRET -- node <script>`.
- Console: <https://dev.runwayml.com>
