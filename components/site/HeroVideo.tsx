"use client";

import { useEffect, useState } from "react";

const SRC = {
  small: "/hero/hero-720.mp4",
  large: "/hero/hero-1080.mp4",
};

type SaveDataConnection = { connection?: { saveData?: boolean } };

// Looping background video. Not rendered at all (so nothing is downloaded) for
// visitors who prefer reduced motion or have data-saver on; they get the poster.
export function HeroVideo({ poster }: { poster: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    const saveData = (navigator as Navigator & SaveDataConnection).connection?.saveData;

    const update = () => {
      if (reduce.matches || saveData) setSrc(null);
      else setSrc(wide.matches ? SRC.large : SRC.small);
    };
    update();
    reduce.addEventListener("change", update);
    wide.addEventListener("change", update);
    return () => {
      reduce.removeEventListener("change", update);
      wide.removeEventListener("change", update);
    };
  }, []);

  if (!src) return null;

  return (
    <video
      key={src}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
