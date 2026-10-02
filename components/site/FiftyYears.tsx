export function FiftyYears() {
  return (
    <section
      id="meio-seculo"
      className="relative overflow-hidden bg-ink py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-ember)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-24">
        <div className="flex items-baseline gap-3">
          <span className="text-gradient-ember font-display text-[9rem] font-extrabold leading-none tracking-tighter sm:text-[12rem] lg:text-[16rem]">
            50
          </span>
          <span className="text-gradient-ember font-display text-6xl font-extrabold leading-none sm:text-8xl">
            +
          </span>
          <span className="sr-only">anos</span>
        </div>

        <div>
          <p className="eyebrow">Há mais de 50 anos</p>
          <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
            Meio século ao serviço{" "}
            <span className="text-gradient-ember">da comunidade</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Há mais de cinquenta anos que a Assembleia de Deus de Vila Chã
            caminha ao lado das famílias de Vila do Conde e região: em
            celebração, em oração e no serviço ao próximo.{" "}
            <span className="text-white">
              Cada geração que passou por aqui deixou-nos um legado de fé que
              queremos continuar a viver.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
