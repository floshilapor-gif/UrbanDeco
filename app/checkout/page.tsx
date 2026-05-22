"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { ProductImage } from "@/components/ProductImage";
import { IconShield, IconArrowRight } from "@/components/icons";
import { formatPrice, formatInstallment, INSTALLMENTS } from "@/lib/format";

const FREE_SHIPPING_THRESHOLD = 800;
const SHIPPING_COST = 39;

const inputClass =
  "w-full rounded-xl border border-line bg-linen px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mist focus:border-taupe focus:ring-2 focus:ring-taupe/20";
const labelClass =
  "text-xs font-medium uppercase tracking-[0.14em] text-stone";

export default function CheckoutPage() {
  const { lines, subtotal, hydrated, clear } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    cp: "",
  });

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((l) => ({
            slug: l.slug,
            qty: l.qty,
            variant: l.variant,
          })),
          customer: form,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Algo salió mal. Inténtalo de nuevo.");
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url; // Stripe Checkout
        return;
      }

      if (data.demo) {
        clear();
        router.push(`/checkout/confirmacion?order=${data.orderId}`);
        return;
      }

      setError("Respuesta inesperada del servidor.");
      setLoading(false);
    } catch {
      setError("No se pudo conectar. Revisa tu conexión.");
      setLoading(false);
    }
  }

  if (!hydrated) {
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
          Añade algunas piezas antes de tramitar tu pedido.
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

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <header className="max-w-xl">
        <p className="eyebrow">Finalizar compra</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Tramitar pedido</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]"
      >
        {/* Shipping details */}
        <div>
          <h2 className="font-display text-2xl">Datos de envío</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Nombre</span>
              <input required value={form.nombre} onChange={update("nombre")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>Apellidos</span>
              <input required value={form.apellidos} onChange={update("apellidos")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>Email</span>
              <input required type="email" value={form.email} onChange={update("email")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>Teléfono</span>
              <input required type="tel" value={form.telefono} onChange={update("telefono")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block sm:col-span-2">
              <span className={labelClass}>Dirección</span>
              <input required value={form.direccion} onChange={update("direccion")} className={`mt-2 ${inputClass}`} placeholder="Calle, número, piso" />
            </label>
            <label className="block">
              <span className={labelClass}>Ciudad</span>
              <input required value={form.ciudad} onChange={update("ciudad")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>Provincia</span>
              <input required value={form.provincia} onChange={update("provincia")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>Código postal</span>
              <input required value={form.cp} onChange={update("cp")} className={`mt-2 ${inputClass}`} />
            </label>
            <label className="block">
              <span className={labelClass}>País</span>
              <input value="Argentina" disabled className={`mt-2 ${inputClass} opacity-70`} />
            </label>
          </div>
        </div>

        {/* Order summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-line bg-linen p-6">
            <h2 className="font-display text-xl">Resumen del pedido</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center gap-3">
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                    <ProductImage src={l.image} alt={l.name} sizes="56px" imgClassName="object-contain p-1.5" />
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
                <span className="font-display text-2xl">{formatPrice(total)}</span>
              </div>
            </div>

            <p className="mt-3 rounded-xl bg-sand/60 px-4 py-2.5 text-center text-xs text-stone">
              {INSTALLMENTS} cuotas sin interés de {formatInstallment(total)} ·
              o hasta 12 cuotas
            </p>

            {error && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Procesando…" : `Pagar ${formatPrice(total)}`}
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-mist">
              <IconShield className="size-4" />
              Pago seguro y cifrado
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
