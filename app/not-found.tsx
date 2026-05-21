import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl">
        Página no encontrada
      </h1>
      <p className="mt-4 text-stone">
        Lo sentimos, la página que buscas no existe o se ha movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
      >
        Volver al inicio <IconArrowRight className="size-4" />
      </Link>
    </div>
  );
}
