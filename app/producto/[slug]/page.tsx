import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductView } from "@/components/ProductView";
import { IconChevronRight } from "@/components/icons";
import {
  PRODUCTS,
  getCategory,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

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

      <ProductView product={product} categoryLabel={category?.label ?? ""} />

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
