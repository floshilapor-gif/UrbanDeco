"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "./CartProvider";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/lib/format";
import { IconClose, IconMinus, IconPlus, IconTrash, IconBag } from "./icons";

export function CartDrawer() {
  const { lines, isOpen, closeCart, subtotal, setQty, remove, count } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-label="Carrito de compra"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-xl">
            Tu carrito{" "}
            {count > 0 && (
              <span className="text-base text-stone">({count})</span>
            )}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-sand"
          >
            <IconClose className="size-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <IconBag className="size-10 text-clay" />
            <p className="text-stone">Tu carrito está vacío.</p>
            <button
              type="button"
              onClick={closeCart}
              className="rounded-full border border-ink/70 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] transition hover:bg-ink hover:text-cream"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="hide-scrollbar flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-5">
                {lines.map((l) => (
                  <li key={l.id} className="flex gap-4">
                    <Link
                      href={`/producto/${l.slug}`}
                      onClick={closeCart}
                      className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-line"
                    >
                      <ProductImage
                        src={l.image}
                        alt={l.name}
                        sizes="80px"
                        imgClassName="object-contain p-2"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          href={`/producto/${l.slug}`}
                          onClick={closeCart}
                          className="font-medium leading-tight transition hover:text-stone"
                        >
                          {l.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => remove(l.id)}
                          aria-label={`Quitar ${l.name}`}
                          className="text-mist transition hover:text-ink"
                        >
                          <IconTrash className="size-4" />
                        </button>
                      </div>
                      <span className="mt-0.5 text-sm text-stone">
                        {formatPrice(l.price)}
                      </span>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="inline-flex items-center rounded-full border border-line">
                          <button
                            type="button"
                            onClick={() => setQty(l.id, l.qty - 1)}
                            aria-label="Restar unidad"
                            className="grid size-8 place-items-center text-ink transition hover:text-stone"
                          >
                            <IconMinus className="size-3.5" />
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">
                            {l.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(l.id, l.qty + 1)}
                            aria-label="Sumar unidad"
                            className="grid size-8 place-items-center text-ink transition hover:text-stone"
                          >
                            <IconPlus className="size-3.5" />
                          </button>
                        </div>
                        <span className="font-medium">
                          {formatPrice(l.price * l.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-line px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone">Subtotal</span>
                <span className="text-lg font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-mist">
                Impuestos incluidos. Gastos de envío calculados en el pago.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
              >
                Tramitar pedido
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full py-2 text-center text-sm text-stone transition hover:text-ink"
              >
                Seguir comprando
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
