// Download wiring for the DeTars Electron desktop app.
//
// Binaries live in the detars-releases repo as GitHub Releases. The
// `releases/latest/download/<asset>` URL is a permanent alias that always
// points to the newest release, so these links never need to change.
//
// REQUIRED asset-name contract (set electron-builder `artifactName` to emit
// these exact, version-less names so the latest/download alias resolves):
//   - DeTars-mac-arm64.dmg   (Apple silicon)
//   - DeTars-mac-x64.dmg     (Intel)
//   - DeTars-win-x64.exe     (Windows NSIS installer)
// electron-builder also emits latest-mac.yml / latest.yml on each release —
// those drive electron-updater auto-update and need no website wiring.
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
