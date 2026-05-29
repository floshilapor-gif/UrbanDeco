import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-taupe">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
        Esta página se <em className="text-clay">mudó de casa</em>
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
        No encontramos lo que buscás. Capaz cambió de dirección o nunca estuvo
        acá. Volvé al catálogo o escribinos por WhatsApp y te ayudamos.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
        >
          Ver catálogo <IconArrowRight className="size-4" />
        </Link>
        <a
          href="https://wa.me/5491162624178"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-sand"
        >
          <IconWhatsApp className="size-4" /> Escribinos
        </a>
      </div>

      <Link
        href="/"
        className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-stone transition hover:text-ink"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
