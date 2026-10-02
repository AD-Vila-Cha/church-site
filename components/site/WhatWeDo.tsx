import Image from "next/image";

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

export function WhatWeDo() {
  return (
    <section id="o-que-fazemos" className="border-t bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow">O que fazemos</p>
        <h2 className="mt-5 max-w-2xl text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Ministérios para cada fase da vida
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MINISTRIES.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden text-primary-foreground"
            >
              <Image
                src={m.image}
                alt={m.name}
                width={1024}
                height={1280}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl uppercase">{m.name}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
