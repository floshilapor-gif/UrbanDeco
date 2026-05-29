"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { ProductImage } from "@/components/ProductImage";
import {
  IconArrowRight,
  IconBank,
  IconCard,
  IconCheck,
  IconWhatsApp,
} from "@/components/icons";
import { formatPrice, formatInstallment, INSTALLMENTS } from "@/lib/format";
import { CHECKOUT_CUSTOMER_KEY } from "../page";

const FREE_SHIPPING_THRESHOLD = 800;
const SHIPPING_COST = 39;

// ─────────────────────────────────────────────────────────────────────
// DATOS DE EJEMPLO — REEMPLAZAR ANTES DE ACEPTAR PAGOS REALES
// Estos valores son placeholder. El formato es real (CBU 22 dígitos,
// CUIT 11 dígitos) para que la UI se vea correcta mientras tanto.
// ─────────────────────────────────────────────────────────────────────
const BANK_INFO = {
  banco: "Banco Galicia",
  titular: "Urban Deco S.A.",
  cbu: "0070123420000012345678",
  alias: "URBAN.DECO.HOGAR",
  cuit: "30-71234567-8",
};

const SHOWROOM_INFO = {
  direccion: "Gelly y Obes 3446, San Miguel, Provincia de Buenos Aires",
  horarios: "Lunes a viernes de 09:00 a 17:00 hs",
  telefono: "+54 9 11 6262-4178",
  cierre: "Te esperamos ✨",
};

type Method = "transferencia" | "tarjeta";

const METHODS: {
  id: Method;
  Icon: typeof IconBank;
  label: string;
  description: string;
  highlight?: string;
}[] = [
  {
    id: "transferencia",
    Icon: IconBank,
    label: "Transferencia bancaria",
    description: "Transferí desde tu home banking. Te confirmamos al instante.",
    highlight: "Sin recargos",
  },
  {
    id: "tarjeta",
    Icon: IconCard,
    label: "Tarjeta de crédito/débito",
    description: `Hasta ${INSTALLMENTS} cuotas sin interés con cualquier tarjeta.`,
    highlight: `${INSTALLMENTS} cuotas sin interés`,
  },
];

function makeOrderId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `UD-${stamp}-${rand}`;
}

export default function PaymentMethodPage() {
  const { lines, subtotal, hydrated, clear } = useCart();
  const router = useRouter();
  const [customer, setCustomer] = useState<Record<string, string> | null>(null);
  const [selected, setSelected] = useState<Method | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  // Pull the customer details that the previous step stashed
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CHECKOUT_CUSTOMER_KEY);
      if (!raw) {
        router.replace("/checkout");
        return;
      }
      setCustomer(JSON.parse(raw));
    } catch {
      router.replace("/checkout");
    }
  }, [router]);

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const summaryLines = useMemo(() => lines, [lines]);

  if (!hydrated || !customer) {
    return (
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <p className="text-stone">Cargando…</p>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto w-full max-w-2xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-4xl">Tu carrito está vacío</h1>
        <p className="mt-3 text-stone">
          Volvé al catálogo para agregar piezas antes de pagar.
        </p>
        <Link
          href="/catalogo"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
        >
          Ir al catálogo <IconArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  function copy(value: string, key: string) {
    navigator.clipboard?.writeText(value).then(
      () => {
        setCopied(key);
        setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
      },
      () => {},
    );
  }

  function confirm() {
    if (!selected) return;
    setLoading(true);
    const orderId = makeOrderId();
    // Clear sensitive customer data after generating the order
    try {
      sessionStorage.removeItem(CHECKOUT_CUSTOMER_KEY);
    } catch {
      /* noop */
    }
    clear();
    router.push(
      `/checkout/confirmacion?order=${orderId}&metodo=${selected}`,
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <header className="max-w-xl">
        <p className="eyebrow">Paso 2 de 2 · Método de pago</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          ¿Cómo querés pagar?
        </h1>
        <p className="mt-4 text-stone">
          Hola <span className="font-medium text-ink">{customer.nombre}</span>,
          elegí la forma de pago que más te convenga. Todas son seguras y sin
          costos ocultos.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        {/* Payment method picker */}
        <div className="flex flex-col gap-4">
          {METHODS.map((m) => {
            const active = selected === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelected(m.id)}
                className={`group w-full rounded-3xl border bg-cream p-6 text-left transition ${
                  active
                    ? "border-ink ring-2 ring-ink/10"
                    : "border-line hover:border-taupe"
                }`}
              >
                <div className="flex items-start gap-5">
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-full transition ${
                      active ? "bg-ink text-cream" : "bg-linen text-ink"
                    }`}
                  >
                    <m.Icon className="size-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-lg">{m.label}</h3>
                      {m.highlight && (
                        <span className="rounded-full bg-sand px-2.5 py-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-taupe">
                          {m.highlight}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-stone">{m.description}</p>
                  </div>
                  <span
                    className={`mt-1 grid size-6 shrink-0 place-items-center rounded-full border transition ${
                      active
                        ? "border-ink bg-ink text-cream"
                        : "border-line bg-cream"
                    }`}
                    aria-hidden
                  >
                    {active && <IconCheck className="size-3.5" />}
                  </span>
                </div>

                {/* Method-specific detail */}
                {active && m.id === "transferencia" && (
                  <div className="mt-5 rounded-2xl bg-linen p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
                      Datos para la transferencia
                    </p>
                    <dl className="mt-4 divide-y divide-line text-sm">
                      <div className="grid grid-cols-[100px_1fr_auto] items-center gap-3 py-2">
                        <dt className="text-stone">Banco</dt>
                        <dd className="font-medium">{BANK_INFO.banco}</dd>
                        <dd />
                      </div>
                      <div className="grid grid-cols-[100px_1fr_auto] items-center gap-3 py-2">
                        <dt className="text-stone">Titular</dt>
                        <dd className="font-medium">{BANK_INFO.titular}</dd>
                        <dd />
                      </div>
                      <div className="grid grid-cols-[100px_1fr_auto] items-center gap-3 py-2">
                        <dt className="text-stone">CBU</dt>
                        <dd className="font-mono text-xs">{BANK_INFO.cbu}</dd>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copy(BANK_INFO.cbu, "cbu");
                          }}
                          className="rounded-full bg-ink px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-cream transition hover:bg-charcoal"
                        >
                          {copied === "cbu" ? "¡Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <div className="grid grid-cols-[100px_1fr_auto] items-center gap-3 py-2">
                        <dt className="text-stone">Alias</dt>
                        <dd className="font-mono text-xs">{BANK_INFO.alias}</dd>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            copy(BANK_INFO.alias, "alias");
                          }}
                          className="rounded-full bg-ink px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-cream transition hover:bg-charcoal"
                        >
                          {copied === "alias" ? "¡Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <div className="grid grid-cols-[100px_1fr_auto] items-center gap-3 py-2">
                        <dt className="text-stone">CUIT</dt>
                        <dd className="font-mono text-xs">{BANK_INFO.cuit}</dd>
                        <dd />
                      </div>
                    </dl>
                    <p className="mt-4 text-xs leading-relaxed text-stone">
                      Una vez transferido el monto de{" "}
                      <span className="font-medium text-ink">
                        {formatPrice(total)}
                      </span>
                      , envianos el comprobante por WhatsApp para activar tu
                      pedido. Te respondemos al instante.
                    </p>
                    <a
                      href={`https://wa.me/${SHOWROOM_INFO.telefono.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Hola! Acabo de hacer la transferencia por ${formatPrice(total)} para mi pedido en Urban Deco. Adjunto el comprobante 📎`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-cream transition hover:bg-emerald-600"
                    >
                      <IconWhatsApp className="size-4" />
                      Enviar comprobante por WhatsApp
                    </a>
                  </div>
                )}

                {active && m.id === "tarjeta" && (
                  <div className="mt-5 rounded-2xl bg-linen p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
                      Pago con tarjeta
                    </p>
                    <p className="mt-3 text-sm leading-relaxed">
                      Aceptamos todas las tarjetas de crédito y débito. Te
                      enviamos por WhatsApp un link de pago seguro para que
                      puedas pagar en {INSTALLMENTS} cuotas sin interés (o
                      hasta 12 cuotas con interés).
                    </p>
                    <p className="mt-3 rounded-xl bg-sand/60 px-4 py-2.5 text-xs text-stone">
                      Total: {formatPrice(total)} · ≈{" "}
                      {formatInstallment(total)} x {INSTALLMENTS} cuotas
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Summary + confirm */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-line bg-linen p-6">
            <h2 className="font-display text-xl">Tu pedido</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {summaryLines.map((l) => (
                <li key={l.id} className="flex items-center gap-3">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                    <ProductImage
                      src={l.image}
                      alt={l.name}
                      sizes="56px"
                      imgClassName="object-contain p-1.5"
                    />
                    <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-ink text-[0.62rem] font-semibold text-cream">
                      {l.qty}
                    </span>
                  </span>
                  <span className="flex-1 text-sm leading-tight">{l.name}</span>
                  <span className="text-sm font-medium">
                    {formatPrice(l.price * l.qty)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
              <div className="flex justify-between text-stone">
                <span>Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-stone">
                <span>Envío</span>
                <span className="text-ink">
                  {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-3 text-base">
                <span className="font-medium">Total</span>
                <span className="font-display text-2xl">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={confirm}
              disabled={!selected || loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Confirmando…"
                : selected
                  ? "Confirmar pedido"
                  : "Elegí un método"}
              {selected && !loading && <IconArrowRight className="size-4" />}
            </button>

            <Link
              href="/checkout"
              className="mt-3 block text-center text-xs font-medium uppercase tracking-[0.14em] text-stone transition hover:text-ink"
            >
              ← Editar datos de envío
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
