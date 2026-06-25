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
// IN-APP UPDATES do NOT use electron-updater / latest.yml. DeTars pulls a
// signed update manifest from the momocenter control plane, which hands back
// the integrity-checked versioned binary URL in this same repo. The website
// only needs these first-install links; auto-update needs no website wiring.
//
// Flip RELEASED to true once the first release with the above assets is cut.

export const RELEASED = false;

const BASE = "https://github.com/rrmars/detars-releases/releases/latest/download";

export const dl = (asset: string): string => `${BASE}/${asset}`;

export const assets = {
  macArm: "DeTars-mac-arm64.dmg",
  macIntel: "DeTars-mac-x64.dmg",
  win: "DeTars-win-x64.exe"
} as const;
