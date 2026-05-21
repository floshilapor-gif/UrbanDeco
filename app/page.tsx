import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import {
  IconArrowRight,
  IconTruck,
  IconShield,
  IconSparkle,
  IconLeaf,
} from "@/components/icons";
import { CATEGORIES, getFeaturedProducts, getProductBySlug } from "@/lib/products";
import { formatEUR } from "@/lib/format";

const VALUE_PROPS = [
  { Icon: IconTruck, title: "Envío en 24-72h", text: "Entrega cuidada en toda la península." },
  { Icon: IconShield, title: "Garantía 2 años", text: "Calidad que respalda cada pieza." },
  { Icon: IconSparkle, title: "Pago 100% seguro", text: "Cifrado y protegido en cada compra." },
  { Icon: IconLeaf, title: "Materiales nobles", text: "Tejidos y maderas seleccionados." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const heroProduct = getProductBySlug("sofa-mykonos");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="eyebrow">Muebles &amp; Decoración</p>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Sillones y decoración{" "}
              <span className="italic text-taupe">premium</span> para tu hogar
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
              Nuevas colecciones urbanas. Descubre el arte de vivir con piezas
              de diseño que transforman cada espacio.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
              >
                Ver catálogo <IconArrowRight className="size-4" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:border-ink hover:bg-ink hover:text-cream"
              >
                Sobre nosotros
              </Link>
            </div>
            <dl className="mt-12 flex gap-10">
              <div>
                <dt className="font-display text-3xl">+500</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-stone">
                  Hogares
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl">4,9★</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-stone">
                  Valoración
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl">24h</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-stone">
                  Envío
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white ring-1 ring-line">
              <ProductImage
                src={heroProduct?.image ?? null}
                alt="Sofá Mykonos"
                priority
                sizes="(min-width:1024px) 50vw, 100vw"
                imgClassName="object-contain p-8"
              />
            </div>
            {heroProduct && (
              <Link
                href={`/producto/${heroProduct.slug}`}
                className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-cream/95 p-3 pr-5 shadow-lg ring-1 ring-line backdrop-blur transition hover:ring-clay"
              >
                <span className="relative size-14 overflow-hidden rounded-xl bg-white">
                  <ProductImage
                    src={heroProduct.image}
                    alt=""
                    sizes="56px"
                    imgClassName="object-contain p-1.5"
                  />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-taupe">
                    Destacado
                  </span>
                  <span className="block font-display text-base">
                    {heroProduct.name}
                  </span>
                  <span className="block text-sm text-stone">
                    {formatEUR(heroProduct.price)}
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-line bg-linen">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {VALUE_PROPS.map(({ Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-6 shrink-0 text-taupe" />
              <div>
                <p className="font-medium">{title}</p>
                <p className="mt-0.5 text-sm text-stone">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Explora</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Nuestras colecciones
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-stone transition hover:text-ink sm:inline-flex"
          >
            Ver todo <IconArrowRight className="size-4" />
          </Link>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/catalogo?cat=${c.slug}`}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-sand p-6 ring-1 ring-line transition hover:ring-clay"
            >
              <span className="absolute right-5 top-5 font-display text-2xl text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl">{c.label}</h3>
              <p className="mt-1 text-sm text-stone">{c.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-ink">
                Descubrir
                <IconArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selección</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Piezas destacadas
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-stone transition hover:text-ink sm:inline-flex"
          >
            Ver catálogo <IconArrowRight className="size-4" />
          </Link>
        </header>

        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Editorial band */}
      <section className="mt-20 bg-ink text-cream">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
            Descubre el arte de vivir
          </h2>
          <div>
            <p className="max-w-md leading-relaxed text-cream/70">
              En Urban Deco creemos que el hogar es el lienzo de tu vida.
              Seleccionamos cada pieza por su diseño, sus materiales y su
              capacidad de hacerte sentir en casa. Bienvenido a tu nuevo
              espacio.
            </p>
            <Link
              href="/catalogo"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-white"
            >
              Explorar la tienda <IconArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
