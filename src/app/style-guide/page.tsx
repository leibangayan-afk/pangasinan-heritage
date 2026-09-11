"use client";

import { useState } from "react";
import Button from "../../components/atoms/Button";
import { Eyebrow, Heading, Body } from "../../components/atoms/Typography";
import Icon from "../../components/atoms/Icon";
import Image from "../../components/atoms/Image";
import ColorTokens from "../../components/atoms/ColorTokens";
import HeritageCard from "../../components/molecules/HeritageCard";
import SearchForm from "../../components/molecules/SearchForm";
import NavigationItem from "../../components/molecules/NavigationItem";
import HeaderNavigation from "../../components/organisms/HeaderNavigation";
import HeritageGrid from "../../components/organisms/HeritageGrid";
import { heritageSites } from "../../lib/heritageSites";

/**
 * Style Guide — a living reference for every component in the atomic
 * design system (Deliverable 1.2), not part of the visitor-facing
 * showcase. Rendering each atom/molecule/organism here in isolation
 * means a contributor can see a component's states and variants without
 * having to hunt for them inside the live page, and it's what backs the
 * "Visual Preview" for each entry in the component library manual.
 */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-slate-200 px-6 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-bold text-blue-950">{title}</h2>
        <div id={`${id}-preview`} className="mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function StyleGuide() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="min-h-screen bg-stone-50 pb-24 text-slate-900">
      <div className="bg-blue-950 px-6 py-12 text-white md:px-8">
        <div className="mx-auto max-w-6xl">
          <Eyebrow light>Deliverable 1.2</Eyebrow>
          <Heading level={1} size="lg" light className="mt-2">
            Atomic Design System — Style Guide
          </Heading>
          <Body light muted className="mt-3 max-w-2xl">
            Every atom, molecule, and organism in the Pangasinan Heritage Digital Showcase,
            rendered in isolation.
          </Body>
        </div>
      </div>

      {/* ATOMS */}
      <Section id="atom-button" title="Atom — Button">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-blue-950 p-8">
          <Button variant="solid">Explore Heritage</Button>
          <Button variant="outline">Discover More</Button>
          <Button variant="text" className="text-white hover:text-amber-300">
            Discover this place →
          </Button>
        </div>
      </Section>

      <Section id="atom-typography" title="Atom — Typography">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8">
          <Eyebrow>Explore</Eyebrow>
          <Heading level={2} size="lg">
            Heading — size &quot;lg&quot;
          </Heading>
          <Heading level={2} size="md">
            Heading — size &quot;md&quot;
          </Heading>
          <Heading level={3} size="sm">
            Heading — size &quot;sm&quot;
          </Heading>
          <Body muted>
            Body copy — muted. Pangasinan offers a diverse collection of natural, historical, and
            cultural attractions.
          </Body>
        </div>
      </Section>

      <Section id="atom-color-tokens" title="Atom — Color Tokens">
        <ColorTokens />
      </Section>

      <Section id="atom-icon" title="Atom — Icon">
        <div className="flex flex-wrap gap-8 rounded-2xl border border-slate-200 bg-white p-8">
          {(["menu", "close", "search", "chevron-down"] as const).map((name) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon name={name} className="h-8 w-8 text-blue-950" />
              <span className="text-xs text-slate-500">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="atom-image" title="Atom — Image">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="h-56 overflow-hidden rounded-2xl">
              <Image src="/images/hundred-islands.jpg" alt="Hundred Islands" fit="cover" />
            </div>
            <p className="mt-2 text-xs text-slate-500">fit=&quot;cover&quot; (default)</p>
          </div>
          <div>
            <div className="h-56 overflow-hidden rounded-2xl">
              <Image
                src="/images/natividad-sky-plaza.jpg"
                alt="Natividad Sky Plaza"
                fit="contain"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">fit=&quot;contain&quot;</p>
          </div>
        </div>
      </Section>

      {/* MOLECULES */}
      <Section id="molecule-heritage-card" title="Molecule — Heritage Card">
        <div className="w-fit max-w-sm">
          <HeritageCard site={heritageSites[0]} onOpen={() => {}} />
        </div>
      </Section>

      <Section id="molecule-search-form" title="Molecule — Search Form">
        <div className="w-96 rounded-2xl border border-slate-200 bg-white p-8">
          <SearchForm value={searchValue} onChange={setSearchValue} id="style-guide-search" />
        </div>
      </Section>

      <Section id="molecule-navigation-item" title="Molecule — Navigation Item">
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8">
          <div>
            <p className="mb-2 text-xs text-slate-500">variant=&quot;desktop&quot;</p>
            <div className="flex gap-8">
              <NavigationItem href="#" label="Home" active={false} />
              <NavigationItem href="#" label="Heritage Sites" active />
              <NavigationItem href="#" label="About" active={false} />
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs text-slate-500">variant=&quot;mobile&quot;</p>
            <div className="flex max-w-xs flex-col gap-1">
              <NavigationItem href="#" label="Home" active={false} variant="mobile" />
              <NavigationItem href="#" label="Heritage Sites" active variant="mobile" />
              <NavigationItem href="#" label="About" active={false} variant="mobile" />
            </div>
          </div>
        </div>
      </Section>

      {/* ORGANISMS */}
      <Section id="organism-header-navigation" title="Organism — Header Navigation">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative">
            <HeaderNavigation />
          </div>
        </div>
      </Section>

      <Section id="organism-heritage-grid" title="Organism — Heritage Grid">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <HeritageGrid />
        </div>
      </Section>
    </main>
  );
}
