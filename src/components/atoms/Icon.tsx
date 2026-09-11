/**
 * Icon (atom)
 * ---------------------------------------------------------------
 * Usage context: every small inline SVG glyph in the showcase — the
 * hamburger/close toggle in Header Navigation's mobile menu button, the
 * magnifying glass in the Search Form, and the chevron used both as the
 * Hero's scroll-down cue and (flipped 180°) as a generic down-caret. A
 * single `name` prop keeps every glyph's markup in one file instead of
 * a `<svg>` block copy-pasted at each call site — adding a new icon
 * later means adding one case here, not hunting for the nearest
 * existing `<svg>` to clone.
 *
 * Responsive logic: none of its own — an icon's size is a `className`
 * (`h-4 w-4`, `h-8 w-8`, …) supplied by whatever atom/molecule places
 * it, since the "right" size is entirely context-dependent (a search
 * box's icon vs. a full hero scroll cue are both this same component at
 * different sizes).
 */

export type IconName = "menu" | "close" | "search" | "chevron-down";

const PATHS: Record<IconName, string> = {
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 18L18 6M6 6l12 12",
  search: "M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z",
  "chevron-down": "M12 5v14M19 12l-7 7-7-7",
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
