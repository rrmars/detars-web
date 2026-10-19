# Google Gemini / Veo / Lyria

Checked 2026-10-20 (secondary sources). Not verified: a public API for remaining
quota or balance.

DeTars providers `google` and `google-gemini-cli`.

- Rate limits and usage: Google AI Studio's usage and rate-limit pages. Money:
  Google Cloud Console → Billing. Use the browser tool with `import_signins`.
- `google-gemini-cli` sign-ins have a plan quota that OpenClaw reads through an
  internal endpoint. It is not a public API; don't call it by hand.
