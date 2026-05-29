"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  /** Optional override for object-position. Defaults to center. */
  position?: string;
}

/**
 * Crossfading background slideshow. Each slide is layered, the active one
 * is opaque, the rest are transparent. Respects prefers-reduced-motion
 * (stays on the first slide).
 */
export function HeroSlideshow({
  slides,
  intervalMs = 6500,
  className = "",
}: {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: s.position ?? "center" }}
          />
        </div>
      ))}

      {/* Slide indicators (dots) */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Mostrar ambiente ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-cream" : "w-1.5 bg-cream/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
