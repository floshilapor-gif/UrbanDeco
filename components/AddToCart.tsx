"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import { IconMinus, IconPlus, IconCheck } from "./icons";
import type { Product } from "@/lib/products";

export function AddToCartButton({
  product,
  variant = "compact",
  selectedVariant = null,
}: {
  product: Product;
  variant?: "compact" | "full";
  selectedVariant?: { label: string; image: string } | null;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(
      {
        id: selectedVariant
          ? `${product.slug}::${selectedVariant.label}`
          : product.slug,
        slug: product.slug,
        name: selectedVariant
          ? `${product.name} — ${selectedVariant.label}`
          : product.name,
        price: product.price,
        image: selectedVariant ? selectedVariant.image : product.image,
        variant: selectedVariant ? selectedVariant.label : undefined,
      },
      variant === "full" ? qty : 1,
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Añadir ${product.name} al carrito`}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-cream"
      >
        {added ? (
          <>
            <IconCheck className="size-3.5" /> Añadido
          </>
        ) : (
          "Añadir"
        )}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="inline-flex items-center justify-between rounded-full border border-line bg-linen">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Restar unidad"
          className="grid size-11 place-items-center text-ink transition hover:text-stone"
        >
          <IconMinus className="size-4" />
        </button>
        <span className="w-8 text-center text-sm font-medium tabular-nums">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Sumar unidad"
          className="grid size-11 place-items-center text-ink transition hover:text-stone"
        >
          <IconPlus className="size-4" />
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
      >
        {added ? (
          <>
            <IconCheck className="size-4" /> Añadido al carrito
          </>
        ) : (
          "Añadir al carrito"
        )}
      </button>
    </div>
  );
}
