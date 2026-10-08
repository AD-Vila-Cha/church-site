import { CONTACT_EMAIL } from "@/components/site/contact";

export function ComingSoon() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-5 py-16 md:px-8">
      <h1 className="max-w-3xl text-5xl uppercase leading-[1.1] sm:text-6xl md:text-7xl">
        O novo site está <span className="text-gradient-ember">quase aí</span>.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Estamos a preparar um novo espaço digital para a nossa igreja. Em
        breve com tudo sobre quem somos, o que fazemos e onde nos encontrar.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-10 inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
      >
        Fale connosco
      </a>
    </div>
  );
}
