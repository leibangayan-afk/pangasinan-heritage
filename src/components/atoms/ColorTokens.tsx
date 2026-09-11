import { colorTokens } from "../../design/tokens";

/**
 * ColorTokens (atom)
 * ---------------------------------------------------------------
 * Usage context: a style-guide/documentation surface, not a piece of the
 * live showcase itself — the one atom in this library whose "usage" is
 * showing the palette, rather than being placed inside a page. Renders
 * every token from design/tokens.ts as a labeled swatch, so a new
 * contributor (or this manual's "Visual Preview") can see the full
 * palette and its intended usage in one place instead of grepping
 * Tailwind classes across every component file.
 *
 * The data lives in design/tokens.ts, not here — this component is
 * purely a renderer for it, so any other part of the app (or a future
 * theming settings page) can reuse the same token list without
 * duplicating it.
 *
 * Responsive logic: the swatch grid goes from 2 columns on mobile to 3
 * on tablet+ (`grid-cols-2 sm:grid-cols-3`) — enough columns that a
 * narrow phone screen doesn't turn six swatches into six long single-
 * column rows, but not so many that a swatch's label wraps awkwardly on
 * a small viewport.
 */
export default function ColorTokens() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {colorTokens.map((token) => (
        <div
          key={token.twClass}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          {/* The swatch color comes from the inline style, not a dynamic
              Tailwind class — a template-literal class name like
              `bg-${token.twClass}` is invisible to Tailwind's build-time
              scanner (it only picks up complete, literal class strings),
              so it would silently render unstyled. */}
          <div className="h-20 w-full" style={{ backgroundColor: token.hex }} />

          <div className="p-4">
            <p className="font-semibold text-slate-900">{token.name}</p>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              {token.twClass} · {token.hex}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{token.usage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
