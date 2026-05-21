"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useCart } from "@/components/CartProvider";
import { IconCheck, IconArrowRight } from "@/components/icons";

function Confirmation() {
  const params = useSearchParams();
  const order = params.get("order");
  const { clear } = useCart();

  useEffect(() => {
    if (order || params.get("session_id")) clear();
  }, [order, params, clear]);

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 lg:py-28">
      <span className="mx-auto grid size-16 place-items-center rounded-full bg-ink text-cream">
        <IconCheck className="size-8" />
      </span>
      <h1 className="mt-7 font-display text-4xl sm:text-5xl">
        ¡Pedido confirmado!
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone">
        Gracias por confiar en Urban Deco. Hemos recibido tu pedido y te
        enviaremos un email con todos los detalles y el seguimiento del envío.
      </p>

      {order && (
        <div className="mx-auto mt-8 inline-flex flex-col items-center rounded-2xl border border-line bg-linen px-8 py-5">
          <span className="text-xs uppercase tracking-[0.18em] text-taupe">
            Número de pedido
          </span>
          <span className="mt-1 font-display text-2xl tracking-wide">
            {order}
          </span>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
        >
          Seguir comprando <IconArrowRight className="size-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:border-ink"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmacionPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-2xl px-5 py-28 text-center sm:px-8">
          <p className="text-stone">Cargando…</p>
        </div>
      }
    >
      <Confirmation />
    </Suspense>
  );
}
