import { Accessibility, Baby, Bus, Car, Clock, Shirt, Smile, type LucideIcon } from "lucide-react";

type Faq = { question: string; answer: string; icon: LucideIcon };

// PLACEHOLDER copy: to be confirmed by the pastoral team before launch.
const FAQS: Faq[] = [
  {
    question: "Quanto tempo dura o culto?",
    answer:
      "Cerca de 1h45m. Começamos a horas com o louvor, seguido da mensagem e de um momento de oração.",
    icon: Clock,
  },
  {
    question: "O que devo vestir?",
    answer: "Venha como está. Não há código de vestuário: o importante é sentir-se à vontade.",
    icon: Shirt,
  },
  {
    question: "Posso levar os meus filhos?",
    answer:
      "Claro! As crianças são sempre bem-vindas. Durante o culto há um espaço próprio para os mais novos, com monitores da igreja.",
    icon: Smile,
  },
  {
    question: "Onde posso estacionar?",
    answer:
      "Existe estacionamento gratuito na rua junto à igreja. Em caso de dúvida, pergunte a quem o receber à entrada.",
    icon: Car,
  },
];

// PLACEHOLDER: confirm which of these are true for each location.
const AMENITIES: { label: string; icon: LucideIcon }[] = [
  { label: "Estacionamento", icon: Car },
  { label: "Acessível", icon: Accessibility },
  { label: "Espaço infantil", icon: Baby },
  { label: "Transportes", icon: Bus },
];

export function PrimeiraVez() {
  return (
    <section id="primeira-vez" className="border-t py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-x-20 lg:gap-y-8">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="eyebrow">Primeira vez?</p>
            <h2 className="mt-5 text-4xl uppercase leading-[1.1] sm:text-5xl lg:text-6xl">
              Sinta-se
              <br />
              <span className="text-gradient-ember">em casa</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Sabemos que visitar uma igreja nova pode criar alguma ansiedade. Aqui fica o
              que precisa de saber para se sentir em casa.
            </p>
            <a
              href="#onde-estamos"
              className="mt-8 inline-flex font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Ver horários →
            </a>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            {FAQS.map(({ question, answer, icon: Icon }) => (
              <div
                key={question}
                className="flex flex-col rounded-2xl border bg-background p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]"
              >
                <Icon className="h-9 w-9 text-primary" strokeWidth={1.25} aria-hidden="true" />
                <dt className="mt-5 font-display text-lg uppercase tracking-tight text-foreground">
                  {question}
                </dt>
                <dd className="mt-3 text-muted-foreground">{answer}</dd>
              </div>
            ))}
          </dl>

          <ul className="flex flex-wrap content-start gap-2.5 lg:col-start-1 lg:row-start-2">
            {AMENITIES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm text-foreground"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
