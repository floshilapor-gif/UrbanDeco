"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useCart } from "@/components/CartProvider";
import {
  IconCheck,
  IconArrowRight,
  IconWhatsApp,
  IconBank,
  IconCard,
} from "@/components/icons";

const METHOD_LABEL: Record<string, string> = {
  transferencia: "Transferencia bancaria",
  tarjeta: "Tarjeta de crédito/débito",
};

function Confirmation() {
  const params = useSearchParams();
  const order = params.get("order");
  const metodo = params.get("metodo");
  const { clear } = useCart();

  useEffect(() => {
    if (order || params.get("session_id")) clear();
  }, [order, params, clear]);

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center sm:px-8 lg:py-24">
      <span className="mx-auto grid size-16 place-items-center rounded-full bg-ink text-cream">
        <IconCheck className="size-8" />
      </span>
      <h1 className="mt-7 font-display text-4xl sm:text-5xl">
        ¡Pedido confirmado!
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-stone">
        Gracias por confiar en Urban Deco. Recibimos tu pedido y te vamos a
        contactar por WhatsApp para coordinar todos los detalles.
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

      {metodo && METHOD_LABEL[metodo] && (
        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-line bg-cream p-5 text-left">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-stone">
            {metodo === "transferencia" && <IconBank className="size-4" />}
            {metodo === "tarjeta" && <IconCard className="size-4" />}
            Método de pago elegido
          </p>
          <p className="mt-2 font-display text-lg">{METHOD_LABEL[metodo]}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            {metodo === "transferencia" &&
              "Una vez que hagas la transferencia, mandanos el comprobante por WhatsApp y activamos tu pedido enseguida. Guardalo por las dudas."}
            {metodo === "tarjeta" &&
              "En las próximas horas vas a recibir por WhatsApp un link de pago seguro para completar la compra con tu tarjeta."}
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {metodo === "transferencia" ? (
          <a
            href={`https://wa.me/5491162624178?text=${encodeURIComponent(
              `Hola! Ya realicé la transferencia para mi pedido ${order ?? ""} en Urban Deco. Adjunto el comprobante 📎`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream shadow-md transition hover:bg-emerald-600"
          >
            <IconWhatsApp className="size-4" /> Enviar comprobante por WhatsApp
          </a>
        ) : (
          <a
            href="https://wa.me/5491162624178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
          >
            <IconWhatsApp className="size-4" /> Hablar por WhatsApp
          </a>
        )}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:border-ink"
        >
          Seguir comprando <IconArrowRight className="size-4" />
        </Link>
      </div>

      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium uppercase tracking-[0.14em] text-stone transition hover:text-ink"
      >
        ← Volver al inicio
      </Link>
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
