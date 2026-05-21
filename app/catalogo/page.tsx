import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import {
  CATEGORIES,
  getAllProducts,
  getCategory,
  getProductsByCategory,
  type CategorySlug,
} from "@/lib/products";

function resolveCategory(cat?: string): CategorySlug | undefined {
  return CATEGORIES.find((c) => c.slug === cat)?.slug;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}): Promise<Metadata> {
  const { cat } = await searchParams;
  const category = cat ? getCategory(cat) : undefined;
  return {
    title: category ? category.label : "Catálogo",
    description:
      category?.tagline ?? "Explora todos nuestros muebles y decoración.",
  };
}

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const active = resolveCategory(cat);
  const products = active ? getProductsByCategory(active) : getAllProducts();
  const category = active ? getCategory(active) : undefined;

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <header>
        <p className="eyebrow">Tienda</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          {category ? category.label : "Catálogo completo"}
        </h1>
        <p className="mt-3 max-w-xl text-stone">
          {category
            ? category.tagline
            : "Sillones, mesas, camas y decoración para crear el hogar que imaginas."}
        </p>
      </header>

      {/* Filters */}
      <div className="hide-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
        <FilterChip href="/catalogo" label="Todo" active={!active} />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.slug}
            href={`/catalogo?cat=${c.slug}`}
            label={c.label}
            active={active === c.slug}
          />
        ))}
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-dashed border-line bg-linen px-6 py-20 text-center">
          <p className="font-display text-2xl">Próximamente</p>
          <p className="mx-auto mt-2 max-w-sm text-stone">
            Estamos preparando nuevas piezas para esta colección. Vuelve pronto
            o explora el resto del catálogo.
          </p>
          <Link
            href="/catalogo"
            className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
          >
            Ver todo el catálogo
          </Link>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.12em] transition ${
        active
          ? "border-ink bg-ink text-cream"
          : "border-line bg-cream text-stone hover:border-clay hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
