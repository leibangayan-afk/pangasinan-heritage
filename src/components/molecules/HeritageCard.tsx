import type { HeritageSite } from "../../lib/heritageSites";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

/**
 * Heritage Card (molecule)
 * ---------------------------------------------------------------
 * Usage context: used exclusively for displaying a heritage-site preview
 * inside the Heritage Grid organism's responsive card grid. It renders a
 * photo, the site's town/location as an overlay label, its name, a short
 * description, and a "Discover this place" action — everything a
 * visitor needs to decide whether to open the full detail view, and
 * nothing more (the longer `details` copy is deliberately withheld here;
 * it only appears once a visitor has opted into the detail view, so the
 * card stays scannable rather than dense).
 *
 * It's a molecule, not an organism, because it has no logic of its own —
 * `site` and `onOpen` are both handed to it. Heritage Grid decides what
 * the full list is, how it's filtered, and what happens when a card is
 * opened; this component only knows how to render *one* site and report
 * a click.
 *
 * Responsive logic: the card itself doesn't change layout across
 * breakpoints — it's always "photo on top, text below," a fixed `h-64`
 * image slot, and internal padding that stays constant. What changes is
 * how many cards sit per row, which is the Heritage Grid organism's
 * `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` decision, not this
 * component's. Keeping the card's own layout breakpoint-free means it
 * behaves identically whether it ends up as the sole card in a 1-column
 * mobile stack or one of three in a desktop row — it doesn't need to
 * know which.
 */
export default function HeritageCard({
  site,
  onOpen,
}: {
  site: HeritageSite;
  onOpen: (site: HeritageSite) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={site.image}
          alt={site.name}
          fit={site.imageFit}
          className="transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <p className="absolute bottom-5 left-5 text-sm font-medium text-white">{site.location}</p>
      </div>

      <div className="p-7">
        <h2 className="text-2xl font-bold text-slate-900">{site.name}</h2>

        <p className="mt-3 leading-7 text-slate-600">{site.description}</p>

        <Button variant="text" onClick={() => onOpen(site)} className="mt-6">
          Discover this place →
        </Button>
      </div>
    </article>
  );
}
