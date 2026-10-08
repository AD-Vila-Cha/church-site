import { MapPin } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { History } from "@/components/site/History";
import { ComingSoon } from "@/components/site/ComingSoon";
import { ComingSoonFooter, Footer } from "@/components/site/Footer";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { WhoWeAre } from "@/components/site/WhoWeAre";
import { mvpFlag } from "@/flags";

const LOCATIONS = [
  {
    city: "Vila do Conde",
    address: "R. Dom João III 70-84, 4480-646 Vila do Conde",
    maps: "https://www.google.com/maps/search/?api=1&query=R.%20Dom%20Jo%C3%A3o%20III%2070-84%2C%204480-646%20Vila%20do%20Conde",
    services: [
      { day: "Qua", time: "20:30", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "10:00", type: "Culto de Celebração" },
      { day: "Dom", time: "15:30", type: "Culto de Celebração" },
    ],
  },
  {
    city: "Barcelos",
    address: "Urbanização da Formiga, Edifício Panorâmico, Arcozelo, Barcelos",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua%20da%20Formiga%2C%20Arcozelo%2C%20Barcelos",
    services: [
      { day: "Qua", time: "10:00", type: "Culto de Estudo Bíblico" },
      { day: "Dom", time: "15:00", type: "Culto de Celebração" },
    ],
  },
];

export default async function Home() {
  const showMvp = await mvpFlag();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* With the MVP hero the header floats over the video; otherwise it is a plain bar. */}
      <header className={showMvp ? "absolute inset-x-0 top-0 z-20" : "border-b"}>
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-6 md:px-8">
          <img
            src="/cross-logo.svg"
            alt=""
            width={117.75}
            height={202.5}
            className="h-14 w-auto shrink-0 object-contain md:h-20"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-xs">
              Assembleia de Deus
            </span>
            <span className="font-display text-xl font-extrabold uppercase tracking-wide md:text-3xl">
              Vila Chã
            </span>
          </div>
        </div>
      </header>

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
