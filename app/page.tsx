import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

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
      <header className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-6 md:px-8">
        <img
          src="/logo.png"
          alt="Assembleia de Deus Vila Chã"
          width={56}
          height={56}
          className="h-11 w-11 shrink-0 object-contain md:h-14 md:w-14"
        />
        <span className="font-display text-sm font-extrabold uppercase tracking-[0.2em] md:text-base">
          AD Vila Chã
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center px-5 py-16 md:px-8">
        <p className="eyebrow">Assembleia de Deus · Vila Chã</p>
        <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
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
