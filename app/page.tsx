import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { ComingSoonHeader } from "@/components/site/ComingSoonHeader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { History } from "@/components/site/History";
import { LOCATIONS } from "@/components/site/locations";
import { ComingSoon } from "@/components/site/ComingSoon";
import { ComingSoonFooter, Footer } from "@/components/site/Footer";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { mvpFlag } from "@/flags";

const MVP_TITLE = "AD Vila Chã | Igreja Evangélica em Vila do Conde";
const MVP_DESCRIPTION =
  "Assembleia de Deus de Vila Chã, igreja evangélica em Vila do Conde e Barcelos: quem somos, ministérios, horários dos cultos e contactos.";

export async function generateMetadata(): Promise<Metadata> {
  // Coming-soon metadata comes from the root layout.
  if (!(await mvpFlag())) return {};

  return {
    title: MVP_TITLE,
    description: MVP_DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "pt_PT",
      siteName: "Assembleia de Deus de Vila Chã",
      title: MVP_TITLE,
      description: MVP_DESCRIPTION,
    },
    twitter: { card: "summary_large_image", title: MVP_TITLE, description: MVP_DESCRIPTION },
  };
}

export default async function Home() {
  const showMvp = await mvpFlag();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {showMvp ? <Header /> : <ComingSoonHeader />}

      <main className="flex flex-1 flex-col">
        {showMvp ? (
          <>
            <Hero />
            <WhoWeAre />
            <History />
            <WhatWeDo />
          </>
        ) : (
          <ComingSoon />
        )}

        <section id="onde-estamos" className="border-t py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="eyebrow">Onde estamos</p>
            <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[1.1] sm:text-5xl">
              Horários das celebrações
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="surface-card p-8 md:p-10">
                  <h3 className="font-display text-3xl uppercase text-foreground">
                    {loc.city}
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-muted-foreground">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <span>{loc.address}</span>
                  </p>

                  <dl className="mt-8 divide-y divide-border border-t">
                    {loc.services.map((s) => (
                      <div key={s.day + s.time} className="flex items-baseline gap-4 py-4">
                        <dt className="w-12 shrink-0 font-display text-sm font-extrabold uppercase tracking-widest text-primary">
                          {s.day}
                        </dt>
                        <span className="w-20 shrink-0 font-display text-lg text-foreground">
                          {s.time}
                        </span>
                        <dd className="min-w-0 text-muted-foreground italic">{s.type}</dd>
                      </div>
                    ))}
                  </dl>

                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary hover:underline"
                  >
                    Ver no mapa →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {showMvp ? <Footer /> : <ComingSoonFooter />}
    </div>
  );
}
