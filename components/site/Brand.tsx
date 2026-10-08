import Image from "next/image";

// Logo + wordmark lockup shared by both headers. `compact` is the scrolled size.
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <Image
        src="/cross-logo.svg"
        alt=""
        width={118}
        height={203}
        unoptimized
        className={`w-auto shrink-0 object-contain transition-[height] duration-300 ${
          compact ? "h-10 md:h-12" : "h-14 md:h-20"
        }`}
      />
      <div className="flex flex-col leading-tight">
        <span className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground md:text-xs">
          Assembleia de Deus
        </span>
        <span
          className={`font-display font-extrabold uppercase tracking-wide transition-[font-size] duration-300 ${
            compact ? "text-lg md:text-xl" : "text-xl md:text-3xl"
          }`}
        >
          Vila Chã
        </span>
      </div>
    </>
  );
}
