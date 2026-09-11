# Pangasinan Heritage Digital Showcase

**Student:** Lei Bangayan
**Selected Framework:** React with Next.js 14 (App Router)
_(see Deliverable 1.1 — Framework Selection Report — for the full comparison against Vue/Nuxt.js 3 and the justification for this choice)_

A digital heritage showcase for Pangasinan's tourism sites — Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring, and more — built with a reusable Atomic Design component library (see Deliverable 1.2 — Atomic Design System Manual, and the live `/style-guide` route in this app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Every component in the design system is also viewable in isolation at [http://localhost:3000/style-guide](http://localhost:3000/style-guide).

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
src/
  app/            Pages (Home, Style Guide)
  components/
    atoms/        Button, Typography, Color Tokens, Icon, Image
    molecules/    Heritage Card, Search Form, Navigation Item
    organisms/    Heritage Grid, Header Navigation
  lib/            Shared data (heritage site content)
  design/         Design tokens (color palette)
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
