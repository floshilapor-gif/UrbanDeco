"use client";

import { useEffect, useState } from "react";
import { IconArrowRight } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={`fixed bottom-24 right-5 z-40 grid size-11 place-items-center rounded-full bg-ink text-cream shadow-lg ring-1 ring-cream/15 transition-all duration-300 hover:bg-charcoal sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <IconArrowRight className="size-5 -rotate-90" />
    </button>
  );
}
