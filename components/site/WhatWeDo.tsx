"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MINISTRIES = [
  {
    name: "Jovens",
    image: "/ministries/jovens.jpg",
    text: "Atividades juvenis para adolescentes e jovens adultos crescerem juntos na fé.",
  },
  {
    name: "Crianças",
    image: "/ministries/criancas.jpg",
    text: "Um espaço seguro e alegre onde os mais novos aprendem sobre Jesus ao seu nível.",
  },
  {
    name: "Escola de Música",
    image: "/ministries/escola-de-musica.jpg",
    text: "Formação musical para todas as idades, ao serviço da igreja e da comunidade.",
  },
  {
    name: "Louvor",
    image: "/ministries/louvor.jpg",
    text: "A equipa que conduz a congregação em adoração em cada celebração.",
  },
];

const AUTOPLAY_MS = 5500;

const pad = (n: number) => String(n).padStart(2, "0");

export function WhatWeDo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setCurrent(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on("select", update).on("reInit", update);
    return () => {
      emblaApi.off("select", update).off("reInit", update);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused || reduceMotion) return;
    const timer = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused, reduceMotion]);

  return (
    <section id="o-que-fazemos" className="border-t bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Ministérios
            </h2>
          </div>

          <div
            className="flex items-center gap-3 self-end"
            role="group"
            aria-label="Controlos do carrossel"
          >
            <span
              className="mr-2 font-display text-sm font-bold tabular-nums text-muted-foreground"
              aria-live="polite"
            >
              {pad(current + 1)} / {pad(MINISTRIES.length)}
            </span>
            {[
              { label: "Ministério anterior", onClick: scrollPrev, Icon: ArrowLeft },
              { label: "Próximo ministério", onClick: scrollNext, Icon: ArrowRight },
            ].map(({ label, onClick, Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={onClick}
                className="flex h-11 w-11 items-center justify-center rounded-full border bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Ministérios da AD Vila Chã"
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollNext();
            }
          }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-3 flex md:-ml-6">
              {MINISTRIES.map((m, index) => (
                <div
                  key={m.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${MINISTRIES.length}: ${m.name}`}
                  className="min-w-0 shrink-0 grow-0 basis-[94%] pl-3 md:basis-[82%] md:pl-6 lg:basis-[72%]"
                >
                  <article className="group relative h-[29rem] overflow-hidden rounded-2xl text-primary-foreground sm:h-[34rem] lg:h-[40rem]">
                    <Image
                      src={m.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 72vw, (min-width: 768px) 82vw, 94vw"
                      className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 max-w-2xl p-7 sm:p-10 lg:p-12">
                      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        Ministério
                      </p>
                      <h3 className="mt-3 font-display text-3xl uppercase sm:text-4xl lg:text-5xl">
                        {m.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                        {m.text}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-7 flex justify-center gap-2"
          role="group"
          aria-label="Escolher ministério"
        >
          {MINISTRIES.map((m, index) => (
            <button
              key={m.name}
              type="button"
              aria-label={`Ver ${m.name}`}
              aria-current={current === index ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
              className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span
                aria-hidden="true"
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/35"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
