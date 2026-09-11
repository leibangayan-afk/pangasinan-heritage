import type { MouseEvent } from "react";

/**
 * Navigation Item (molecule)
 * ---------------------------------------------------------------
 * Usage context: one link inside Header Navigation — rendered once per
 * entry in NAV_LINKS (lib/heritageSites.ts), twice per link in total:
 * once in the desktop nav row, again inside the mobile dropdown panel.
 * It is a molecule rather than a bare atom because it composes a
 * behavior (active-state styling driven by scroll position) on top of a
 * plain link, not just a styled tag — the active/inactive color swap is
 * this component's whole reason to exist separately from a raw `<a>`.
 *
 * Why it's not just an inline `<a>` at both call sites (as it originally
 * was): the desktop and mobile versions need different closing behavior
 * (mobile has to close the dropdown after navigating; desktop doesn't),
 * different padding (mobile items are larger tap targets in a stacked
 * list; desktop items are inline text), and both need the exact same
 * active-color logic kept in sync. Centralizing that logic here means a
 * change to "what active looks like" can't drift between the two.
 *
 * Responsive logic: the component itself doesn't branch on screen size —
 * Header Navigation decides which *instance* to render where (desktop
 * row vs. mobile panel) and passes a `variant` so this component applies
 * the right padding/background treatment for that context:
 *   - "desktop": inline text, no background, just a color change.
 *   - "mobile": full-width block with padding and a light background
 *     tint when active, sized for a touch target inside the dropdown.
 */
export default function NavigationItem({
  href,
  label,
  active,
  variant = "desktop",
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  variant?: "desktop" | "mobile";
  /** Receives the click event (not just a bare callback) so a caller —
   *  specifically Header Navigation's mobile variant — can call
   *  `preventDefault()` on it. That matters: without it, the browser's
   *  native anchor jump fires immediately, and if the caller's onClick
   *  also closes something that shifts layout (the mobile dropdown), a
   *  same-tick native/smooth scroll gets caught mid-animation by that
   *  shift and aborted outright rather than retargeted — see Header
   *  Navigation's docs for the full mechanics. */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
          active ? "bg-blue-50 text-blue-800" : "text-slate-600 hover:bg-slate-50 hover:text-blue-800"
        }`}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition ${
        active ? "text-blue-800" : "text-slate-600 hover:text-blue-800"
      }`}
    >
      {label}
    </a>
  );
}
