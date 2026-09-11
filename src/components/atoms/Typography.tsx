import type { ReactNode } from "react";

/**
 * Typography (atom)
 * ---------------------------------------------------------------
 * Usage context: the three text roles that repeat across every section
 * of the showcase — Eyebrow (small uppercase kicker above a heading, e.g.
 * "Explore" / "A Province of Heritage"), Heading (the section's own
 * <h1>/<h2>), and Body (paragraph copy). Before this component existed,
 * every section re-typed its own `text-sm font-semibold uppercase
 * tracking-[0.25em] text-amber-700` (etc.) inline — three sections in,
 * that's three places a typo or a design tweak has to be repeated
 * correctly. Centralizing them here means changing the eyebrow style
 * once here changes it everywhere.
 *
 * Responsive logic: only Heading actually needs one — eyebrows and body
 * copy read fine at a single size on any screen, but a Heading used as a
 * page's <h1> (5xl on mobile) would be uncomfortably large re-used as a
 * card's <h2>. `level` picks the semantic tag (accessibility — a page
 * still wants exactly one real <h1>); `size` independently picks the
 * visual scale, since a Heading is sometimes semantically an <h2> but
 * needs to look as large as the page's <h1> (the Heritage Sites banner
 * uses level={1} again deliberately — see Header Navigation's docs on
 * why each section banner is its own landmark <h1>-weight moment, not a
 * literal single-h1-per-page document outline).
 */

export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  /** Set on dark/photo backgrounds (Hero) — swaps amber-700 for the
   *  lighter amber-300 so it stays legible over a dark scrim. */
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.25em] ${
        light ? "text-amber-300" : "text-amber-700"
      } ${className}`.trim()}
    >
      {children}
    </p>
  );
}

type HeadingSize = "sm" | "md" | "lg" | "xl";

const HEADING_SIZE_CLASS: Record<HeadingSize, string> = {
  sm: "text-2xl font-bold",
  md: "text-3xl font-bold md:text-4xl",
  lg: "text-4xl font-bold md:text-6xl",
  xl: "text-5xl font-bold leading-tight tracking-tight md:text-7xl",
};

export function Heading({
  children,
  level = 2,
  size = "md",
  light = false,
  className = "",
}: {
  children: ReactNode;
  /** Semantic tag — keep one real <h1> per section landmark. */
  level?: 1 | 2 | 3;
  /** Visual scale, independent of `level` — see file header comment. */
  size?: HeadingSize;
  light?: boolean;
  className?: string;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  return (
    <Tag
      className={`${HEADING_SIZE_CLASS[size]} ${light ? "text-white" : "text-blue-950"} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

export function Body({
  children,
  muted = false,
  light = false,
  className = "",
}: {
  children: ReactNode;
  /** Softer color for supporting copy under a heading. */
  muted?: boolean;
  /** Set on dark/photo backgrounds. */
  light?: boolean;
  className?: string;
}) {
  const color = light
    ? muted
      ? "text-white/90"
      : "text-white"
    : muted
      ? "text-slate-600"
      : "text-slate-900";

  return <p className={`leading-8 ${color} ${className}`.trim()}>{children}</p>;
}
