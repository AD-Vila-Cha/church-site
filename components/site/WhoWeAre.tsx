import { Flame, Send, Users } from "lucide-react";

const PILLARS = [
  {
    title: "Adoração",
    text: "Reunimo-nos para exaltar a Cristo com sinceridade, em oração, louvor e Palavra.",
    icon: Flame,
  },
  {
    title: "Comunhão",
    text: "Somos uma família. Ninguém deve caminhar sozinho na fé nem na vida.",
    icon: Users,
  },
  {
    title: "Missão",
    text: "Levamos o evangelho à nossa cidade e apoiamos a obra missionária além dela.",
    icon: Send,
  },
];

export function WhoWeAre() {
  return (
    <section id="quem-somos" className="border-t py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Quem somos</p>
            <h2 className="mt-5 text-4xl uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
              Uma igreja
              <br />
              com raízes e
              <br />
              <span className="text-gradient-ember">com propósito</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Assembleia de Deus de Vila Chã é uma comunidade evangélica
              pentecostal ao serviço das pessoas do concelho de Vila do Conde
              e região há mais de cinquenta anos. Existimos para que homens,
              mulheres e crianças conheçam Jesus Cristo, cresçam à Sua
              semelhança e vivam uma fé que se vê no dia a dia.
            </p>
            <p>
              Não somos um edifício, somos pessoas comuns transformadas pela
              graça de Deus.{" "}
              <span className="highlight-marker text-foreground">
                Venha como está: encontrará uma casa aberta, uma mensagem
                clara e alguém disposto a caminhar consigo.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-2xl border bg-background transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex h-36 items-center justify-center bg-surface md:h-40">
                <Icon className="h-14 w-14 text-primary" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-display text-xl uppercase tracking-tight text-primary">
                  {title}
                </h3>
                <p className="mt-4 text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
