/**
 * Single source of truth for the heritage-site content. Pulling this out of
 * page.tsx means the Heritage Grid organism, the Heritage Card molecule,
 * and any future page (e.g. a dedicated site detail route) can all import
 * the same data without page.tsx being the only place that knows its shape.
 */
export type HeritageSite = {
  name: string;
  location: string;
  description: string;
  details: string;
  image: string;
  /** Most photos here are landscape-ish and crop fine with object-cover.
   *  A tall portrait shot (e.g. Natividad Sky Plaza's statue photo) would
   *  have its top/bottom sliced off by that same cover-crop in the card
   *  and detail frames — set "contain" to show the whole photo instead,
   *  letterboxed rather than cropped. Defaults to "cover". */
  imageFit?: "cover" | "contain";
};

export const heritageSites: HeritageSite[] = [
  {
    name: "Hundred Islands",
    location: "Alaminos City, Pangasinan",
    description:
      "A national landmark of over a hundred limestone islets scattered across Lingayen Gulf, offering island-hopping, kayaking, and snorkeling.",
    details:
      "Hundred Islands National Park is one of the Philippines' most recognizable natural attractions, with clear waters and small islets to explore by boat.",
    image: "/images/hundred-islands.jpg",
  },
  {
    name: "Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "One of the oldest Spanish-era lighthouses in the country, standing on a cliff overlooking the West Philippine Sea.",
    details:
      "Cape Bolinao Lighthouse has guided ships along the coast for over a century and remains a scenic spot for sunset views.",
    image: "/images/bolinao-lighthouse.jpg",
  },
  {
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A relaxing resort with mineral-rich hot spring pools set against the foothills of Mount Balungao.",
    details:
      "A popular retreat for unwinding after a day of travel, with warm pools fed by natural mineral springs.",
    image: "/images/balungao-hotspring.jpg",
  },
  {
    name: "Aguilar",
    location: "Aguilar, Pangasinan",
    description:
      "Aguilar, Pangasinan is a peaceful municipality known for its beautiful natural surroundings, friendly community, and rich local culture.",
    details:
      "Aguilar, Pangasinan is a peaceful town known for its agricultural lands, local culture, and beautiful surroundings.",
    image: "/images/natividad.jpg",
  },
  {
    name: "Natividad Sky Plaza",
    location: "Natividad, Pangasinan",
    description:
      "A popular destination offering a relaxing atmosphere and a scenic view of the surrounding area.",
    details:
      "It offers a relaxing atmosphere and a beautiful view, making it a nice place to visit.",
    image: "/images/natividad-sky-plaza.jpg",
    imageFit: "contain",
  },
  {
    name: "Sison Antong Falls",
    location: "Sison, Pangasinan",
    description:
      "Antong Falls is a beautiful natural waterfall in Pangasinan, known for its clear water and relaxing surroundings.",
    details:
      "It is a popular spot for swimming, picnics, and enjoying nature with family and friends.",
    image: "/images/sison-antong-falls.jpg",
  },
];

export type Section = "home" | "heritage" | "about";

/** Nav links shared by the desktop bar and the mobile dropdown — one
 *  source of truth for the three sections, since both just scroll to an
 *  <a href="#id"> anchor instead of toggling which "page" is mounted. */
export const NAV_LINKS: { id: Section; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "heritage", label: "Heritage Sites" },
  { id: "about", label: "About" },
];
