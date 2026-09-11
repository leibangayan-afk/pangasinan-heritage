/**
 * Color tokens — the palette this whole showcase is built from, pulled out
 * as data so the ColorTokens atom (and any future component) references
 * one source instead of hard-coded Tailwind class names scattered through
 * the codebase. These map 1:1 onto Tailwind's default palette, so using
 * them elsewhere is just `bg-${token.class}` / `text-${token.class}`.
 */
export type ColorToken = {
  name: string;
  /** Tailwind color/shade suffix, e.g. "blue-950" → bg-blue-950 */
  twClass: string;
  /** Approximate hex, for the swatch preview only — Tailwind's own class
   *  still drives the real rendered color everywhere else in the app. */
  hex: string;
  usage: string;
};

export const colorTokens: ColorToken[] = [
  {
    name: "Navy",
    twClass: "blue-950",
    hex: "#172554",
    usage: "Primary brand color — header text, section banners, footer, headings, and primary CTAs.",
  },
  {
    name: "Amber",
    twClass: "amber-400",
    hex: "#fbbf24",
    usage: "Accent color for primary buttons and highlighted heading spans (e.g. \"of Pangasinan\").",
  },
  {
    name: "Amber (muted)",
    twClass: "amber-700",
    hex: "#b45309",
    usage: "Eyebrow/label text on light backgrounds (uppercase section kickers like \"Explore\").",
  },
  {
    name: "Slate",
    twClass: "slate-600",
    hex: "#475569",
    usage: "Body copy on light backgrounds — the default paragraph color throughout the site.",
  },
  {
    name: "Slate (light)",
    twClass: "slate-100",
    hex: "#f1f5f9",
    usage: "Neutral fill behind letterboxed (object-contain) images, and card image placeholders.",
  },
  {
    name: "Stone",
    twClass: "stone-50",
    hex: "#fafaf9",
    usage: "Page background — the default canvas color behind every section.",
  },
];
