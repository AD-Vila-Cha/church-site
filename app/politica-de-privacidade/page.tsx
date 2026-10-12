import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ComingSoonHeader } from "@/components/site/ComingSoonHeader";
import { ComingSoonFooter } from "@/components/site/Footer";
import { POLICY_INTRO, POLICY_SECTIONS, POLICY_UPDATED } from "@/lib/privacy-policy";

export const metadata: Metadata = {
  title: "Política de Privacidade | AD Vila Chã",
  description: "Como a Assembleia de Deus de Vila Chã trata os dados pessoais dos visitantes deste site.",
  alternates: { canonical: "/politica-de-privacidade" },
  // PROTOTYPE: placeholder legal details, keep out of search until they are real.
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ComingSoonHeader />

      <main className="flex-1 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>

          <p className="eyebrow mt-10">Privacidade</p>
          <h1 className="mt-5 text-4xl uppercase leading-[1.1] sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{POLICY_INTRO}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização:{" "}
            <time dateTime={POLICY_UPDATED}>
              {new Date(POLICY_UPDATED).toLocaleDateString("pt-PT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>

          <div className="mt-12 space-y-10">
            {POLICY_SECTIONS.map(({ title, paragraphs, items }, i) => (
              <section key={title}>
                <h2 className="font-display text-xl font-extrabold uppercase tracking-wide">
                  {i + 1}. {title}
                </h2>
                {paragraphs?.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {items && (
                  <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      <ComingSoonFooter />
    </div>
  );
}
