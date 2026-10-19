# ElevenLabs

Checked 2026-10-20 against
<https://elevenlabs.io/docs/api-reference/user/subscription/get>.

DeTars provider `elevenlabs` (TTS).

- Characters: `GET https://api.elevenlabs.io/v1/user/subscription` returns
  `character_count`, `character_limit` and `next_character_count_reset_unix`.
- Identity: most likely the same API key in the `xi-api-key` header. The page
  does not state its permission scope (not verified).
