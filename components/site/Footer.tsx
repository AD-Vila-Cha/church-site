import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_URL, SOCIALS, WHATSAPP_URL } from "@/components/site/contact";

// Slim footer shown while the MVP is gated (production, `mvp` flag off).
export function ComingSoonFooter() {
  return (
    <footer className="border-t bg-surface">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4 shrink-0 text-primary" /> {CONTACT_EMAIL}
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
  );
}

// Full "Contactos" block + footer (contact details and social links).
export function Footer({ showPrivacyLink = false }: { showPrivacyLink?: boolean }) {
  return (
    <footer id="contactos" className="border-t bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">Contactos</p>
            <h2 className="mt-5 max-w-xl text-4xl uppercase leading-[0.95] sm:text-5xl">
              Fale connosco
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tem uma pergunta, um pedido de oração ou quer simplesmente visitar-nos? Teremos
              muito gosto em responder.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center bg-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ligar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center border border-primary px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_URL}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" /> {CONTACT_EMAIL}
                </a>
              </li>
            </ul>

            <p className="eyebrow mt-10">Siga-nos</p>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
              {SOCIALS.map(({ name, href, icon: Icon, className }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className={`flex aspect-[4/3] items-center justify-center rounded-2xl text-white transition-transform hover:-translate-y-1 ${className}`}
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-t pt-8">
          <Image
            src="/cross-logo.svg"
            alt="Assembleia de Deus Vila Chã"
            width={118}
            height={203}
            unoptimized
            className="h-12 w-auto shrink-0 object-contain"
          />
          <div className="min-w-0">
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.22em] text-primary">
              Meio século ao serviço da comunidade
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Assembleia de Deus de Vila Chã
            </p>
            {showPrivacyLink && (
              <Link
                href="/politica-de-privacidade"
                className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Política de Privacidade
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
