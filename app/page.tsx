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
  IconStar,
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

const TESTIMONIALS = [
  {
    name: "Carolina M.",
    location: "Palermo, CABA",
    quote:
      "El sofá llegó impecable y en el plazo prometido. La atención por WhatsApp fue rapidísima. ¡Mi living quedó de revista!",
  },
  {
    name: "Martín R.",
    location: "Córdoba",
    quote:
      "Compré un rack y un set de jardín. Excelente calidad y las cuotas sin interés me ayudaron un montón.",
  },
  {
    name: "Lucía F.",
    location: "Rosario",
    quote:
      "Muebles preciosos y muy bien embalados. Se nota la calidad de los materiales. Vuelvo a comprar seguro.",
  },
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
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/catalogo?cat=${c.slug}`}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-line transition hover:ring-clay"
            >
              <Image
                src={c.image}
                alt={c.label}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
              <div className="relative p-6">
                <h3 className="font-display text-2xl text-cream">{c.label}</h3>
                <p className="mt-1 text-sm text-cream/85">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-cream">
                  Descubrir
                  <IconArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
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

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <header className="text-center">
          <p className="eyebrow">Reseñas</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-line bg-linen p-7"
            >
              <div className="flex gap-0.5 text-taupe">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="text-stone"> · {t.location}</span>
              </figcaption>
            </figure>
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
