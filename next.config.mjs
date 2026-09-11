/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves plain static files with no Node.js server behind
  // them, so the app has to be pre-rendered to static HTML/CSS/JS at
  // build time rather than relying on Next's normal server runtime.
  output: "export",

  // This repo deploys to a *project* Pages site — https://leibangayan-afk.github.io/pangasinan-heritage/ —
  // not a *user* Pages site at the domain root, so every internal link,
  // script, and asset path needs the repo name prefixed or it'll 404
  // (the browser would otherwise look for /images/... at the domain
  // root instead of /pangasinan-heritage/images/...).
  basePath: "/pangasinan-heritage",
  assetPrefix: "/pangasinan-heritage/",

  // Static export writes each route as .../route/index.html; GitHub
  // Pages' static file server needs the matching trailing-slash URL
  // shape to find it without a server-side rewrite step.
  trailingSlash: true,

  // No next/image usage in this app (it renders plain <img> tags
  // everywhere — see components/atoms/Image.tsx), so this isn't
  // strictly required, but it documents the constraint explicitly:
  // Next's built-in image optimizer needs a server and has no effect
  // in a static export regardless.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
