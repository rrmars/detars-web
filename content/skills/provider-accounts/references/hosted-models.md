# Hosted models: Kling, Replicate, Luma and others

Checked 2026-10-20.

DeTars has no direct provider for Kling, Replicate, Luma or SiliconFlow. When one
of their models runs through fal, together or vydra, the bill and balance belong
to that host; use its reference ([fal](fal.md)).

- Kling: the official OAuth MCP (`klingai-dev/openclaw-plugin`) has a
  `query_membership_and_credits` tool returning `availableRemainCredits`. That is
  the Kling account's membership credits, possibly not the same pool as API
  resource packs (not verified). A direct-API account endpoint is not verified.
- Replicate: the API has no balance or billing endpoint (`GET /v1/account`
  returns identity only). Use the Replicate dashboard.
- SiliconFlow (if the user has a key outside DeTars):
  `GET https://api.siliconflow.cn/v1/user/info` (`.com` internationally) returns
  `balance`, `chargeBalance` and `totalBalance` with the same key. Only seen in a
  docs summary; not directly verified.
