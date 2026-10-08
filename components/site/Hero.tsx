import Image from "next/image";
import { HeroVideo } from "@/components/site/HeroVideo";

const POSTER = "/hero/hero-poster.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100svh-6.6rem)] w-full overflow-hidden md:min-h-[calc(100svh-8.1rem)]"
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
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-end px-5 pb-20 pt-24 md:px-8 md:pb-28">
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
          <a
            href="#onde-estamos"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Planeie a sua visita
          </a>
          <a
            href="#quem-somos"
            className="inline-flex items-center justify-center border border-border bg-background/60 px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
          >
            Quem somos
          </a>
        </div>
      </div>
    </section>
  );
}
