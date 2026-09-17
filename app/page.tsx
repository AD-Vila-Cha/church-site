import { Facebook, Instagram, Mail, MapPin, Youtube } from "lucide-react";

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

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/assembleiadedeusvilacha",
    icon: Instagram,
    className: "bg-[linear-gradient(45deg,#f9ce34_0%,#ee2a7b_55%,#6228d7_100%)]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/assembleiadedeusvilacha",
    icon: Facebook,
    className: "bg-[#3b5998]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@umcaminho-advilacha7822",
    icon: Youtube,
    className: "bg-[#ff0000]",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-6 md:px-8">
          <img
            src="/logo-icon.png"
            alt=""
            width={96}
            height={170}
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
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-5 py-16 md:px-8">
          <h1 className="max-w-3xl text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            O novo site está <span className="text-gradient-ember">quase aí</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Estamos a preparar um novo espaço digital para a nossa igreja. Em
            breve com tudo sobre quem somos, o que fazemos e onde nos encontrar.
          </p>
          <a
            href="mailto:geral@advilacha.pt"
            className="mt-10 inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Fale connosco
          </a>
        </div>

        <section className="border-t py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="eyebrow">Onde estamos</p>
            <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[0.95] sm:text-5xl">
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

      <footer className="border-t bg-surface">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
          <a
            href="mailto:geral@advilacha.pt"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" /> geral@advilacha.pt
          </a>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ name, href, icon: Icon, className }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className={`flex h-10 w-10 items-center justify-center rounded-2xl text-white transition-transform hover:-translate-y-1 ${className}`}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Assembleia de Deus de Vila Chã
          </p>
        </div>
      </footer>
    </div>
  );
}
