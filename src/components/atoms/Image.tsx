import { withBasePath } from "../../lib/basePath";

/**
 * Image (atom)
 * ---------------------------------------------------------------
 * Usage context: every photo in the showcase that fills a fixed-shape
 * container — the Heritage Card thumbnail, the detail view's larger
 * photo, the Hero and Heritage Sites banner backgrounds, the About
 * intro photo. A plain `<img className="object-cover">` was previously
 * repeated at five call sites with a subtly different className each
 * time; this atom is that pattern, once, with the one real variation
 * (crop vs. show-the-whole-photo) as a typed prop instead of an ad-hoc
 * ternary re-written at each site.
 *
 * `fit`:
 *   - "cover" (default) — fills the container, cropping overflow. Right
 *     for landscape-ish photos where losing a sliver of edge is fine.
 *   - "contain" — the whole photo is shown, letterboxed on a neutral
 *     `bg-slate-100` fill rather than cropped. Needed for the one tall
 *     portrait photo in this dataset (Natividad Sky Plaza's statue
 *     shot) — a "cover" crop in a landscape-shaped card would slice the
 *     statue's head off the top and the base off the bottom. See
 *     HeritageSite.imageFit in lib/heritageSites.ts for where this is
 *     decided per-photo, not per-component-instance.
 *
 * Responsive logic: none of its own by design — an Image always fills
 * `h-full w-full` of whatever container is placed around it (a fixed
 * `h-64` card slot, an `aspect-[4/3]` box, an `absolute inset-0` full-
 * bleed background). The container's size is what changes across
 * breakpoints (grid columns going 1 → 2 → 3, the Hero being
 * `min-h-[calc(100vh-73px)]`, …); Image itself has no opinion on layout,
 * only on how its pixels map into whatever box it's given.
 *
 * `src` is run through withBasePath() before rendering — this app is
 * deployed to a GitHub Pages *project* site under /pangasinan-heritage/,
 * not the domain root, and a plain `<img src="/images/foo.jpg">` (what
 * every call site passes in, since site data and JSX both just use
 * root-absolute paths) would otherwise 404 in production. Centralizing
 * that prefixing here means every caller can keep writing plain
 * `/images/...` paths and never has to think about the deployment
 * target.
 */
export default function Image({
  src,
  alt,
  fit = "cover",
  className = "",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  className?: string;
}) {
  return (
    <img
      src={withBasePath(src)}
      alt={alt}
      className={`h-full w-full ${fit === "contain" ? "bg-slate-100 object-contain" : "object-cover"} ${className}`.trim()}
    />
  );
}
