import { Brand } from "@/components/site/Brand";

// Plain header shown while the MVP is gated (production, `mvp` flag off).
export function ComingSoonHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-5 py-6 md:px-8">
        <Brand />
      </div>
    </header>
  );
}
