"use client";

import { useState } from "react";
import { ProductImage } from "./ProductImage";
import { AddToCartButton } from "./AddToCart";
import { IconCheck, IconTruck, IconShield } from "./icons";
import { formatPrice, formatInstallment, INSTALLMENTS } from "@/lib/format";
import type { Product } from "@/lib/products";

type Media = {
  src: string;
  fit?: "cover" | "contain";
  label?: string;
};

export function ProductView({
  product,
  categoryLabel,
}: {
  product: Product;
  categoryLabel: string;
}) {
  const variants = product.variants ?? [];
  const isVariant = variants.length > 0;

  // Media is either the colour variants (with swatches) or the photo gallery.
  const media: Media[] = isVariant
    ? variants.map((v) => ({ src: v.image, fit: v.fit, label: v.label }))
    : [
        { src: product.image ?? "", fit: product.fit },
        ...(product.gallery ?? []).map((g) => ({ src: g.src, fit: g.fit })),
      ];

  const [selected, setSelected] = useState(0);
  const current = media[selected] ?? media[0];
  const fit = current?.fit ?? product.fit;
  const imgClassName = fit === "cover" ? "object-cover" : "object-contain p-10";

  const selectedVariant =
    isVariant && current?.label
      ? { label: current.label, image: current.src }
      : null;

  return (
    <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Image + gallery */}
      <div>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white ring-1 ring-line">
          <ProductImage
            src={current?.src ?? product.image}
            alt={
              current?.label
                ? `${product.name} — ${current.label}`
                : product.name
            }
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
            imgClassName={imgClassName}
          />
          {product.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-ink/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-cream">
              {product.badge}
            </span>
          )}
        </div>

        {/* Photo gallery thumbnails (non-variant products with extra angles) */}
        {!isVariant && media.length > 1 && (
          <div className="mt-3 flex gap-3">
            {media.map((m, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Ver foto ${i + 1}`}
                aria-pressed={i === selected}
                className={`relative size-16 shrink-0 overflow-hidden rounded-xl bg-white ring-1 transition sm:size-20 ${
                  i === selected ? "ring-2 ring-ink" : "ring-line hover:ring-clay"
                }`}
              >
                <ProductImage
                  src={m.src}
                  alt=""
                  sizes="80px"
                  imgClassName={
                    (m.fit ?? product.fit) === "cover"
                      ? "object-cover"
                      : "object-contain p-1.5"
                  }
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="lg:py-2">
        <p className="eyebrow">{categoryLabel}</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          {product.name}
        </h1>

        <div className="mt-4 flex items-end gap-3">
          <span className="text-3xl font-medium">
            {formatPrice(product.price)}
          </span>
          {product.compareAt && (
            <span className="pb-1 text-lg text-mist line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-stone">
          <span className="font-medium text-ink">
            {INSTALLMENTS} cuotas sin interés
          </span>{" "}
          de {formatInstallment(product.price)} · o hasta 12 cuotas con tarjeta
        </p>

        <p className="mt-5 leading-relaxed text-stone">{product.description}</p>

        {/* Colour variants */}
        {isVariant && (
          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
              Color: <span className="text-ink">{current?.label}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {variants.map((v, i) => (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={v.label}
                  aria-pressed={i === selected}
                  title={v.label}
                  className={`size-10 rounded-full ring-1 transition ${
                    i === selected
                      ? "ring-2 ring-ink ring-offset-2 ring-offset-cream"
                      : "ring-line hover:ring-clay"
                  }`}
                  style={{ backgroundColor: v.swatch }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Finishes (display only, for non-variant products) */}
        {!isVariant && product.colors && product.colors.length > 0 && (
          <div className="mt-7">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone">
              Acabados disponibles
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="rounded-full border border-line bg-linen px-4 py-2 text-sm text-ink"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <AddToCartButton
            product={product}
            variant="full"
            selectedVariant={selectedVariant}
          />
        </div>

        {/* Shipping notes */}
        <div className="mt-8 grid gap-3 rounded-2xl bg-linen p-5 ring-1 ring-line">
          <div className="flex items-center gap-3 text-sm">
            <IconTruck className="size-5 shrink-0 text-taupe" />
            <span className="text-stone">
              Envío a todo el país. Entrega en 24-72 hs en CABA y GBA.
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <IconShield className="size-5 shrink-0 text-taupe" />
            <span className="text-stone">
              Garantía de 2 años y 30 días para cambios.
            </span>
          </div>
        </div>

        {/* Features & dimensions */}
        <div className="mt-8 border-t border-line pt-8">
          <h2 className="font-display text-xl">Características</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <IconCheck className="mt-0.5 size-4 shrink-0 text-taupe" />
                <span className="text-stone">{f}</span>
              </li>
            ))}
          </ul>
          {product.dimensions && (
            <p className="mt-5 text-sm text-stone">
              <span className="font-medium text-ink">Dimensiones:</span>{" "}
              {product.dimensions}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
