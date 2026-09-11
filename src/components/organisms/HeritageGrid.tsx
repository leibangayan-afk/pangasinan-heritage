"use client";

import { useMemo, useState } from "react";
import { heritageSites, type HeritageSite } from "../../lib/heritageSites";
import { withBasePath } from "../../lib/basePath";
import { Eyebrow, Heading, Body } from "../atoms/Typography";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import HeritageCard from "../molecules/HeritageCard";
import SearchForm from "../molecules/SearchForm";

/**
 * Heritage Grid (organism)
 * ---------------------------------------------------------------
 * Usage context: the site's second screen (`id="heritage"`), reached by
 * scrolling or via the "Heritage Sites" nav link / the Hero's "Explore
 * Heritage" button. Owns the full heritage-site browsing experience: the
 * section banner, the Search Form molecule and the filtering logic
 * behind it (the grid decides what "search" means for this data — name
 * or location substring match — the Search Form itself stays dumb and
 * reusable), the responsive card grid built from Heritage Card
 * molecules, and which site (if any) is shown in the single-site detail
 * view. Only one site can be open at a time by construction (a single
 * `selectedSite` state value, not a set).
 *
 * Why the detail view lives here instead of being its own route/page:
 * this is a one-page scrolling showcase by design (see Header
 * Navigation's docs on why nav links scroll rather than navigate) — a
 * separate route per site would break that model and cost a full page
 * load to view one paragraph of extra detail. Swapping the grid for a
 * detail view in place keeps the visitor's scroll position and header
 * context intact.
 *
 * Scroll-position fix: switching between the grid (many cards, tall) and
 * the detail view (one card, short) changes this section's content
 * height a lot, but the page's scroll offset doesn't move on its own
 * when that happens. If a visitor had scrolled partway down the grid
 * before opening a site, the much-shorter detail view would leave the
 * viewport sitting at that same pixel offset — which can land past the
 * whole section, showing the About section instead of the detail they
 * just opened. `openSite`/`closeSite` both scroll this section back to
 * its own top after the swap (deferred one frame so the scroll measures
 * the *new* layout, not the stale one from before the click) so the view
 * always lands on content that's actually still there.
 *
 * Responsive logic:
 *   - Search box is capped at `max-w-md` and centered — full-bleed on
 *     mobile would look fine, but stretching it edge-to-edge on desktop
 *     would look oversized next to the heading above it.
 *   - Card grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — one
 *     column on mobile (each card gets full width for its photo),
 *     two from `sm` (640px) once there's room for a pair, three from
 *     `lg` (1024px) once there's room for the full row without
 *     cramming. Heritage Card itself has no breakpoint logic of its
 *     own — this grid is entirely what decides how many fit per row.
 *   - Detail view: `grid md:grid-cols-2` — image and copy stack
 *     vertically on mobile (image first, full width) and sit
 *     side-by-side only from `md` up, once there's enough width for
 *     both without cramping either.
 */
export default function HeritageGrid() {
  const [query, setQuery] = useState("");
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);

  const filteredSites = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return heritageSites;
    return heritageSites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) || site.location.toLowerCase().includes(q)
    );
  }, [query]);

  const scrollToTop = () => {
    // setTimeout(0), not requestAnimationFrame — see Header Navigation's
    // closeMobileMenuAfter for why: rAF can be suspended indefinitely on
    // an occluded/hidden page, where a timer still fires on schedule.
    setTimeout(() => {
      document.getElementById("heritage")?.scrollIntoView({ behavior: "instant", block: "start" });
    }, 0);
  };

  const openSite = (site: HeritageSite) => {
    setSelectedSite(site);
    scrollToTop();
  };

  const closeSite = () => {
    setSelectedSite(null);
    scrollToTop();
  };

  return (
    <section id="heritage" className="scroll-mt-[73px]">
      <div className="relative overflow-hidden bg-blue-950 px-6 py-20 text-white md:px-8">
        <img
          src={withBasePath("/images/hundred-islands.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/60" />

        <div className="relative mx-auto max-w-7xl">
          <Eyebrow light>Explore</Eyebrow>
          <Heading level={1} size="lg" light className="mt-3">
            Heritage Sites
          </Heading>
          <Body light muted className="mt-5 max-w-2xl">
            Discover selected destinations that showcase the natural and cultural character of
            Pangasinan.
          </Body>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        {!selectedSite ? (
          <>
            <div className="mx-auto mb-10 max-w-md">
              <SearchForm value={query} onChange={setQuery} />
            </div>

            {filteredSites.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSites.map((site) => (
                  <HeritageCard key={site.name} site={site} onOpen={openSite} />
                ))}
              </div>
            ) : (
              <Body muted className="text-center">
                No heritage site matches &ldquo;{query}&rdquo;. Try &ldquo;falls&rdquo;,
                &ldquo;lighthouse&rdquo;, or a town name.
              </Body>
            )}
          </>
        ) : (
          <div className="animate-slideUp">
            <Button variant="text" onClick={closeSite} className="mb-8">
              ← Back to Heritage Sites
            </Button>

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="min-h-[350px]">
                  <Image src={selectedSite.image} alt={selectedSite.name} fit={selectedSite.imageFit} />
                </div>

                <div className="p-8 md:p-12">
                  <Eyebrow>{selectedSite.location}</Eyebrow>
                  <Heading level={2} size="md" className="mt-3">
                    {selectedSite.name}
                  </Heading>
                  <Body muted className="mt-6">
                    {selectedSite.description}
                  </Body>

                  <div className="my-8 h-px bg-slate-200" />

                  <Heading level={3} size="sm">
                    About this destination
                  </Heading>
                  <Body muted className="mt-3">
                    {selectedSite.details}
                  </Body>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
