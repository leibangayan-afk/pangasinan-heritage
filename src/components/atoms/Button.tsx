import type { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "solid" | "outline" | "text";

interface ButtonProps {
  children: ReactNode;
  /** Provide `href` for a link-styled CTA (scrolls to an anchor, navigates,
   *  etc.) — renders an <a>. Omit it and pass `onClick` for an in-page
   *  action (open a detail view, toggle a menu) — renders a <button>.
   *  Never both: a control is either a destination or an action. */
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

/**
 * Button (atom)
 * ---------------------------------------------------------------
 * Usage context: every clickable call-to-action in the showcase that
 * isn't a plain navigation link — the Hero's "Explore Heritage" / "Discover
 * More" pair, a Heritage Card's "Discover this place →", the detail
 * view's "← Back to Heritage Sites", and the mobile menu toggle. It is
 * NOT used for the header/mobile nav links themselves — those are list
 * items with an active state, which is the Navigation Item molecule's
 * job, not this atom's.
 *
 * Three variants cover every CTA currently in the site:
 *   - "solid"   — amber fill, dark text. The one primary action per
 *                 screen (Hero's "Explore Heritage").
 *   - "outline" — translucent fill with a white border, for use directly
 *                 on top of a photo (Hero's "Discover More"). Never used
 *                 on a light background — the translucency assumes a
 *                 dark/photo backdrop to read against.
 *   - "text"    — no fill or border, just colored text with a hover
 *                 shift. For lower-emphasis in-flow actions (a card's
 *                 "Discover this place →", the detail view's back link)
 *                 that shouldn't compete visually with a page's one
 *                 primary "solid" CTA.
 *
 * Responsive logic: intentionally none of its own. Padding, radius, and
 * type size stay constant across breakpoints — at this component's own
 * size (a single button), font-size media queries would be more
 * complexity than the visual benefit justifies. Responsive behavior
 * (stacking two buttons on narrow screens, e.g.) belongs to whatever
 * flex/grid container places multiple Buttons together, not to Button
 * itself — see Hero's `flex flex-wrap gap-4` wrapper for that.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
  ariaLabel,
  ariaExpanded,
  ariaControls,
}: ButtonProps) {
  const variantClass: Record<ButtonVariant, string> = {
    solid:
      "rounded-full bg-amber-400 px-7 py-3 font-semibold text-blue-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-lg",
    outline:
      "rounded-full border border-white/60 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blue-950",
    text: "font-semibold text-blue-800 transition hover:text-amber-700",
  };

  const classes = `${variantClass[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}
