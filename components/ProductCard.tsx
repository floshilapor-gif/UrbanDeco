import Link from "next/link";
import { ProductImage } from "./ProductImage";
import { AddToCartButton } from "./AddToCart";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <div className="group flex flex-col">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-line transition duration-300 group-hover:ring-clay">
          <ProductImage
            src={product.image}
            alt={product.name}
            priority={priority}
            imgClassName="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-cream">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-4">
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
          <p className="mt-1 line-clamp-1 text-sm text-stone">{product.short}</p>
        </div>
      </Link>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-base font-medium text-ink">
          {formatPrice(product.price)}
          {product.compareAt && (
            <span className="ml-2 text-sm font-normal text-mist line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </span>
        <AddToCartButton product={product} variant="compact" />
      </div>
    </div>
  );
}
