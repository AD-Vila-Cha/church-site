"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "@/components/site/Brand";

const LINKS = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#o-que-fazemos", label: "O Que Fazemos" },
  { href: "#onde-estamos", label: "Onde Estamos" },
  { href: "#contactos", label: "Contactos" },
];

// Sticky header: transparent over the hero, solid and compact once scrolled.
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border bg-background/92 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 transition-[padding] duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <a
          href="#top"
          aria-label="Assembleia de Deus Vila Chã, início"
          className="flex min-w-0 items-center gap-3"
        >
          <Brand compact={scrolled} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs font-bold uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border bg-background/70 p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Principal"
          className="border-t bg-background px-5 pb-6 pt-2 lg:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-sm font-bold uppercase tracking-[0.18em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
