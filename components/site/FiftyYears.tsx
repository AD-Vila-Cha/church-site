export function FiftyYears() {
  return (
    <section id="historia" className="bg-ink py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p
            aria-label="50 mais"
            className="flex items-start font-display font-black leading-[0.72]"
          >
            <span
              aria-hidden="true"
              className="text-gradient-ember -mb-[0.2em] pb-[0.2em] text-[7rem] sm:text-[9rem]"
            >
              50
            </span>
            <span
              aria-hidden="true"
              className="text-[3.5rem] text-white sm:text-[4.5rem]"
            >
              +
            </span>
          </p>
          <p className="eyebrow mt-4">anos de igreja</p>
        </div>

        <div>
          <p className="eyebrow">A nossa história</p>
          <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[0.95] sm:text-5xl">
            Meio século ao serviço da{" "}
            <span className="text-gradient-ember">comunidade</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Há mais de cinquenta anos que a Assembleia de Deus de Vila Chã
            caminha ao lado da comunidade e das famílias: em celebração, em
            oração e no serviço ao próximo. Mudaram as gerações e os lugares, a
            missão é a mesma.
          </p>
          <p className="mt-6 font-display text-xs font-extrabold uppercase tracking-[0.22em] text-white/50">
            Vila Chã · Vila do Conde · Barcelos
          </p>
        </div>
      </div>
    </section>
  );
}
