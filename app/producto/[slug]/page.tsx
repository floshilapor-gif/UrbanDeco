import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCart";
import { IconCheck, IconTruck, IconShield, IconChevronRight } from "@/components/icons";
import {
  PRODUCTS,
  getCategory,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { formatEUR } from "@/lib/format";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return { title: product.name, description: product.short };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-stone">
        <Link href="/" className="transition hover:text-ink">
          Inicio
        </Link>
        <IconChevronRight className="size-3.5 text-mist" />
        <Link
          href={`/catalogo?cat=${product.category}`}
          className="transition hover:text-ink"
        >
          {category?.label}
        </Link>
        <IconChevronRight className="size-3.5 text-mist" />
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white ring-1 ring-line">
          <ProductImage
            src={product.image}
            alt={product.name}
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
            imgClassName="object-contain p-10"
          />
          {product.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-ink/90 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-cream">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="lg:py-2">
          <p className="eyebrow">{category?.label}</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-end gap-3">
            <span className="text-3xl font-medium">
              {formatEUR(product.price)}
            </span>
            {product.compareAt && (
              <span className="pb-1 text-lg text-mist line-through">
                {formatEUR(product.compareAt)}
              </span>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-stone">
            {product.description}
          </p>

          {product.colors && product.colors.length > 0 && (
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
            <AddToCartButton product={product} variant="full" />
          </div>

          {/* Shipping notes */}
          <div className="mt-8 grid gap-3 rounded-2xl bg-linen p-5 ring-1 ring-line">
            <div className="flex items-center gap-3 text-sm">
              <IconTruck className="size-5 shrink-0 text-taupe" />
              <span className="text-stone">
                Envío gratuito en pedidos superiores a {formatEUR(800)}.
                Entrega en 24-72h.
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <IconShield className="size-5 shrink-0 text-taupe" />
              <span className="text-stone">
                Garantía de 2 años y 30 días para devoluciones.
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

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl sm:text-3xl">
            También te puede gustar
          </h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
