"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { NAV_LINKS, type Section } from "../../lib/heritageSites";
import Icon from "../atoms/Icon";
import NavigationItem from "../molecules/NavigationItem";

/**
 * Header Navigation (organism)
 * ---------------------------------------------------------------
 * Usage context: the single site-wide header, mounted once at the top
 * of the page (in app/page.tsx, above every section) and pinned via
 * `sticky top-0` so it stays visible for the entire scroll. It owns
 * three things no smaller component could own on its own: which nav
 * section is currently "active" (scroll-spy), whether the mobile
 * dropdown is open, and composing the brand mark + Navigation Item
 * molecules + mobile toggle into one coherent bar.
 *
 * Scroll-spy: the page is one continuous scroll (Home → Heritage Sites →
 * About all live on the page at once, not swapped in and out), so the
 * nav's active-link highlight has to come from which section is
 * actually in view, not from routing state. An IntersectionObserver
 * watches all three section elements (by the ids in NAV_LINKS); a
 * section counts as "active" once it crosses the vertical center of the
 * viewport (rootMargin shrinks the trigger band to a thin strip there)
 * rather than the instant it merely enters the viewport, so the
 * highlight doesn't flip early while the previous section still fills
 * most of the screen.
 *
 * Mobile menu: below the `md` breakpoint the desktop nav row is hidden
 * and a "Menu" toggle button reveals a dropdown panel instead — see the
 * `md:hidden` / `hidden md:flex` split below. Tapping a link in that
 * dropdown does NOT rely on the browser's native `<a href="#id">` jump:
 * closing the panel removes real height from the header in the same
 * render, and if a native/smooth scroll is still animating when that
 * layout shift happens, Chromium aborts it outright rather than
 * retargeting — it lands back at the top instead of the section you
 * tapped. Deferring an *instant* `scrollIntoView` by one animation frame
 * (so it measures the already-closed layout) sidesteps that class of bug
 * entirely.
 *
 * Responsive logic:
 *   - `hidden md:flex` on the desktop nav / `md:hidden` on the toggle
 *     button: below 768px, only the toggle shows; at 768px+, only the
 *     inline nav row shows. Exactly one of the two is ever visible.
 *   - The mobile dropdown panel is conditionally *rendered* (not just
 *     hidden) — it only exists in the DOM while `mobileMenuOpen` is
 *     true, so it costs nothing when closed and never appears at
 *     desktop widths even transiently.
 */
export default function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenuAfter = (id: string, e: MouseEvent<HTMLAnchorElement>) => {
    // Deliberately NOT relying on the native <a href> jump: preventDefault
    // it and do the scroll ourselves once the menu has actually closed —
    // see Navigation Item's `onClick` doc for why skipping this specific
    // preventDefault silently breaks the scroll (menu still closes, but
    // the page never moves).
    e.preventDefault();
    setMobileMenuOpen(false);
    // A deferred setTimeout(0), not requestAnimationFrame — both let the
    // menu's close commit/paint before measuring where to scroll, but
    // rAF callbacks can be suspended indefinitely on an occluded/hidden
    // page (some engines never fire them until the page is visible
    // again), where a timer still fires on schedule regardless.
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 0);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-left">
          <div className="text-lg font-bold tracking-tight text-blue-950">PANGASINAN</div>
          <div className="text-xs font-medium tracking-[0.25em] text-amber-700">HERITAGE</div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavigationItem
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              active={activeSection === link.id}
            />
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full border border-slate-200 p-2 text-slate-700"
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav id="mobile-nav" className="flex flex-col gap-1 border-t border-slate-100 px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <NavigationItem
              key={link.id}
              href={`#${link.id}`}
              label={link.label}
              active={activeSection === link.id}
              variant="mobile"
              onClick={(e) => closeMobileMenuAfter(link.id, e)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
