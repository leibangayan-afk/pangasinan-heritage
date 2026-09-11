"use client";

import HeaderNavigation from "../components/organisms/HeaderNavigation";
import HeritageGrid from "../components/organisms/HeritageGrid";
import { Eyebrow, Heading, Body } from "../components/atoms/Typography";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <HeaderNavigation />

      {/* HOME */}
      <section id="home" className="scroll-mt-[73px]">
        {/* HERO */}
        <div className="relative min-h-[calc(100vh-73px)] overflow-hidden text-white">
          <img
            src="/images/back ground.jpg"
            alt="Pangasinan Capitol Building in Lingayen, Pangasinan"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-blue-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/65 via-blue-950/35 to-blue-950/10" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20 md:px-8">
            <div className="max-w-3xl">
              <Eyebrow light className="mb-5">
                Discover • Preserve • Experience
              </Eyebrow>

              <Heading level={1} size="xl" light>
                The Heritage
                <span className="block text-amber-300">of Pangasinan</span>
              </Heading>

              <Body light muted className="mt-7 max-w-2xl text-lg md:text-xl">
                Explore remarkable destinations, natural attractions, and cultural treasures that
                tell the story of Pangasinan.
              </Body>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="#heritage" variant="solid">
                  Explore Heritage
                </Button>
                <Button href="#about" variant="outline">
                  Discover More
                </Button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => window.scrollBy({ top: window.innerHeight - 73, behavior: "smooth" })}
            aria-label="Scroll down to see more"
            className="animate-float absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition hover:text-white"
          >
            <Icon name="chevron-down" className="h-8 w-8" />
          </button>
        </div>

        {/* INTRODUCTION */}
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/hundred-islands.jpg"
                alt="Aerial view of the Hundred Islands in Alaminos City, Pangasinan"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <Eyebrow>A Province of Heritage</Eyebrow>
              <Heading level={2} size="md" className="mt-3">
                Stories worth discovering.
              </Heading>
              <Body muted className="mt-6">
                Pangasinan offers a diverse collection of natural, historical, and cultural
                attractions. This digital showcase presents selected destinations through a
                simple and accessible experience designed for visitors using mobile devices.
              </Body>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl font-bold text-blue-950">6</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    Heritage Sites
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-950">124</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    Islands
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-950">1</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    Province
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeritageGrid />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-[73px]">
        <div className="bg-amber-50 px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <Eyebrow>Our Purpose</Eyebrow>
            <Heading level={1} size="lg" className="mt-3">
              About the Showcase
            </Heading>
            <Body muted className="mt-6 max-w-2xl text-lg">
              A digital space created to make Pangasinan&apos;s heritage easier to discover,
              appreciate, and remember.
            </Body>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl">🏛️</div>
              <Heading level={2} size="sm" className="mt-5">
                Cultural Awareness
              </Heading>
              <Body muted className="mt-4">
                The showcase introduces visitors to selected places that contribute to the
                cultural and tourism identity of Pangasinan.
              </Body>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl">🌏</div>
              <Heading level={2} size="sm" className="mt-5">
                Tourism Promotion
              </Heading>
              <Body muted className="mt-4">
                The platform provides an accessible digital experience for people who want to
                discover destinations in the province.
              </Body>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-4xl">💙</div>
              <Heading level={2} size="sm" className="mt-5">
                Heritage Appreciation
              </Heading>
              <Body muted className="mt-4">
                By presenting heritage destinations digitally, the project encourages visitors to
                learn more about the places they encounter.
              </Body>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow className="text-blue-800">Why this project matters</Eyebrow>
              <Heading level={2} size="md" className="mt-3">
                Preserving stories through technology
              </Heading>
            </div>

            <Body muted>
              Technology can provide a simple way to introduce cultural and natural destinations
              to a wider audience. This showcase combines responsive web design, reusable
              components, and accessible content to create an experience that can be maintained
              and expanded in the future.
            </Body>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-blue-950 px-6 py-10 text-center text-blue-100">
        <p className="font-semibold">Pangasinan Heritage Digital Showcase</p>
        <p className="mt-2 text-sm text-blue-300">Discover • Preserve • Experience</p>
      </footer>

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-slideUp {
          animation: slideUp 700ms ease-out both;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
