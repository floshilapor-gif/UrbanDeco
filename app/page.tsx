import Link from "next/link";
import Image from "next/image";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import {
  IconArrowRight,
  IconTruck,
  IconShield,
  IconSparkle,
  IconLeaf,
} from "@/components/icons";
import {
  CATEGORIES,
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products";

const VALUE_PROPS = [
  { Icon: IconTruck, title: "Envío a todo el país", text: "Entrega cuidada en todo el país." },
  { Icon: IconShield, title: "Garantía 2 años", text: "Calidad que respalda cada pieza." },
  { Icon: IconSparkle, title: "Pago 100% seguro", text: "Cifrado y protegido en cada compra." },
  { Icon: IconLeaf, title: "Materiales nobles", text: "Tejidos y maderas seleccionados." },
];

const HERO_THUMBS = ["sofa-mykonos", "sofa-madrid", "cama-baul-lino"]
  .map((slug) => getProductBySlug(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[74px] flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-center sm:px-8">
        <Image
          src="/images/hero-salon.jpg"
          alt="Salón decorado con sofá Chesterfield, butacas y lámpara de pie"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-ink/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/30 via-ink/30 to-ink/55" />

        <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/85">
          Nuevas colecciones urbanas
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.05] text-cream [text-shadow:0_2px_30px_rgba(20,18,15,0.35)] sm:text-6xl lg:text-7xl">
          Sillones y decoración premium para tu hogar
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
          Descubre el arte de vivir con piezas de diseño que transforman cada
          espacio.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-ink shadow-lg transition hover:bg-white"
          >
            Ver catálogo <IconArrowRight className="size-4" />
          </Link>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 rounded-full border border-cream/70 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream backdrop-blur-sm transition hover:bg-cream hover:text-ink"
          >
            Sobre nosotros
          </Link>
        </div>

        {/* Featured thumbnails */}
        {HERO_THUMBS.length > 0 && (
          <div className="mt-14 flex items-center gap-3 rounded-2xl bg-cream/85 p-3 shadow-2xl ring-1 ring-white/40 backdrop-blur-md">
            {HERO_THUMBS.map((p) => (
              <Link
                key={p.slug}
                href={`/producto/${p.slug}`}
                aria-label={p.name}
                className="group relative size-16 overflow-hidden rounded-xl bg-white ring-1 ring-line transition hover:ring-clay sm:size-[4.5rem]"
              >
                <ProductImage
                  src={p.image}
                  alt={p.name}
                  sizes="80px"
                  imgClassName="object-contain p-1.5 transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            ))}
          </div>
        )}
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
