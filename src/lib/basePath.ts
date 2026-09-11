/**
 * This repo deploys to a GitHub Pages *project* site —
 * https://leibangayan-afk.github.io/pangasinan-heritage/ — not a *user*
 * Pages site at the domain root, so every asset URL needs "/pangasinan-heritage"
 * prefixed in production or the browser looks for it at the domain root
 * and gets a 404. Next's `basePath` config (next.config.mjs) rewrites
 * this automatically for its own internal mechanisms (next/link,
 * next/image, the build manifest), but NOT for a plain hardcoded string
 * like `src="/images/foo.jpg"` in JSX — Next has no way to know that
 * string is meant to be an internal asset path. withBasePath() is the
 * explicit version of that same prefixing, for the plain <img> tags
 * this app uses instead of next/image.
 *
 * Must stay in sync with the `basePath` value in next.config.mjs — the
 * value is intentionally duplicated (next.config.mjs runs outside the
 * TypeScript/webpack pipeline, so it can't import this file directly)
 * rather than introducing build tooling just to share one constant.
 */
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/pangasinan-heritage" : "";

export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path; // external URLs pass through untouched
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
