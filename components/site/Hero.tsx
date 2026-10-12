import Image from "next/image";
import { HeroVideo } from "@/components/site/HeroVideo";
import { LOCATIONS } from "@/components/site/locations";

const POSTER = "/hero/hero-poster.jpg";

// Sunday times shared by the two main locations, surfaced right in the hero.
const MAIN_LOCATIONS = LOCATIONS.slice(0, 2);
const sundayTimes = (services: (typeof LOCATIONS)[number]["services"]) =>
  services.filter((s) => s.day === "Dom").map((s) => s.time);
const SHARED_SUNDAY_TIMES = sundayTimes(MAIN_LOCATIONS[0].services).filter((time) =>
  MAIN_LOCATIONS.every((loc) => sundayTimes(loc.services).includes(time)),
);
const MAIN_CITIES = MAIN_LOCATIONS.map((l) => l.city).join(" e ");
const OTHER_LOCATIONS = LOCATIONS.slice(2).map((l) => l.city).join(" e ");

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh w-full overflow-hidden"
    >
      <Image
        src={POSTER}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <HeroVideo poster={POSTER} />

      {/* Wash that keeps the text readable while letting the footage show on the right. */}
      <div className="absolute inset-0 bg-background/55 md:bg-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/10 max-md:hidden" />
      {/* Keeps the dark logo and header over the footage readable. */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background/85 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-end px-5 pb-10 pt-40 md:px-8 md:pb-12">
        <p className="eyebrow">Assembleia de Deus · Vila Chã</p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[0.92] uppercase sm:text-7xl lg:text-8xl">
          Há lugar
          <br />
          <span className="text-gradient-ember">para si</span> aqui.
        </h1>
        <p className="mt-7 max-w-xl text-lg text-foreground/80 md:text-xl">
          Uma igreja de famílias, em Vila Chã e Vila do Conde, que se reúne para adorar a Deus,
          crescer na Palavra e servir a cidade.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          {OTHER_LOCATIONS && (
            <a
              href="#onde-estamos"
              className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Também em {OTHER_LOCATIONS} →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
