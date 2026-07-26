// Download wiring for the DeTars desktop app — FIRST INSTALL only.
//
// Binaries live in the detars-releases repo as GitHub Releases. The
// `releases/latest/download/<asset>` URL is a permanent alias that always
// points to the newest release, so these links never need to change.
//
// REQUIRED asset-name contract: the desktop release pipeline
// (momoclaw/scripts/release-desktop.ts → stableAliasName) uploads these exact,
// version-less alias copies alongside each canonical versioned binary, so the
// latest/download alias resolves:
//   - DeTars-mac-arm64.dmg   (Apple silicon)
//   - DeTars-mac-x64.dmg     (Intel)
//   - DeTars-win-x64.exe     (Windows NSIS installer)
//
// IN-APP UPDATES do NOT use electron-updater / latest.yml, and do NOT go
// through momocenter. The app fetches the public, login-free channel manifest
// (detars-update-<channel>.json) published on the same detars-releases release,
// compares versions, and verifies the artifact sha256 before installing. The
// website only needs these first-install links; auto-update needs no website
// wiring. (Source of truth: momoclaw/scripts/release-desktop.ts.)
//
// Availability is tracked PER PLATFORM, not with one global flag: the release
// pipeline builds for the machine it runs on, so Apple silicon ships first
// while the Intel and Windows binaries do not exist yet. Linking a platform
// before its asset exists would send people to a GitHub 404 — the tile stays
// "coming soon" until the asset is actually published.
//
// Flip a flag only after confirming the alias resolves, e.g.:
//   curl -sIL -o /dev/null -w '%{http_code}\n' \
//     https://github.com/rrmars/detars-releases/releases/latest/download/DeTars-mac-arm64.dmg

export const availability = {
  macArm: false,
  macIntel: false,
  win: false
} as const;

/** True once at least one platform is downloadable. */
export const anyAvailable = Object.values(availability).some(Boolean);

const BASE = "https://github.com/rrmars/detars-releases/releases/latest/download";

export const dl = (asset: string): string => `${BASE}/${asset}`;

export const assets = {
  macArm: "DeTars-mac-arm64.dmg",
  macIntel: "DeTars-mac-x64.dmg",
  win: "DeTars-win-x64.exe"
} as const;
