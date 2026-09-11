import Icon from "../atoms/Icon";

/**
 * Search Form (molecule)
 * ---------------------------------------------------------------
 * Usage context: sits at the top of the Heritage Grid organism, just
 * below the "Heritage Sites" banner and above the card grid — lets a
 * visitor narrow the six heritage sites down by name, town, or category
 * before scanning the full grid. A controlled component on purpose: it
 * owns no state of its own (`value`/`onChange` are supplied by whichever
 * parent renders it), so that parent decides what "search" means for its
 * own data — Heritage Grid filters heritageSites by name/location
 * substring match, but the same component could filter a different list
 * elsewhere without any change here.
 *
 * `id` is a prop rather than hard-coded, even though this project only
 * mounts one instance today — a second simultaneous instance (e.g. a
 * duplicate rendered for a mobile-only layout, the way Header
 * Navigation's Navigation Item is intentionally rendered twice) would
 * otherwise collide on the same `id="site-search"`, which is invalid
 * HTML and breaks the label's `htmlFor` association. Passing a distinct
 * `id` per instance sidesteps that before it becomes a bug.
 *
 * Responsive logic: a single full-width input at every breakpoint — a
 * search box doesn't need a different layout on mobile vs. desktop, just
 * a comfortable tap target (`h-12`) so it's easy to hit on a touchscreen.
 * The *placement* changes with viewport (full-bleed on mobile,
 * width-capped and centered on desktop), but that's Heritage Grid's
 * container styling, not something this component decides for itself.
 *
 * Accessibility: the placeholder is not the only label — a visually
 * hidden (`sr-only`) <label> is tied to the input via htmlFor/id so
 * screen readers announce its purpose, and `role="search"` marks the
 * landmark.
 */
export default function SearchForm({
  value,
  onChange,
  placeholder = "Search by site or town…",
  label = "Search heritage sites",
  id = "site-search",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  id?: string;
  className?: string;
}) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`relative w-full ${className}`.trim()}
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <Icon
        name="search"
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      />

      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-blue-800"
      />
    </form>
  );
}
