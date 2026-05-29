import Link from "next/link";
import Image from "next/image";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { StarField } from "@/components/StarField";
import { Counter } from "@/components/Counter";
import { Newsletter } from "@/components/Newsletter";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const HERO_SLIDES = [
  {
    src: "/images/hero-salon.jpg",
    alt: "Salón decorado con sofá Chesterfield, butacas y lámpara de pie",
  },
  {
    src: "/images/coleccion-sillones.jpg",
    alt: "Living moderno con sectional gris y mesa ratona de madera",
  },
  {
    src: "/images/sillon-monaco-3.jpg",
    alt: "Living cálido con sillón Mónaco en terracota",
  },
];
import {
  IconArrowRight,
  IconTruck,
  IconShield,
  IconSparkle,
  IconLeaf,
  IconStar,
  IconBank,
  IconCard,
  IconClock,
  IconPin,
  IconCheck,
  IconUsers,
  IconTag,
  IconHeadset,
  IconBadge,
  IconLock,
  IconRefresh,
  IconDocument,
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

const PAYMENT_METHODS = [
  { Icon: IconBank, label: "Transferencia" },
  { Icon: IconCard, label: "Tarjeta" },
];

const STATS = [
  { value: 78555, label: "Clientes satisfechos" },
  { value: 9559, label: "Seguidores en Instagram" },
  { value: 3, label: "Años en el rubro" },
];

const SHIPPING_FEATURES = [
  {
    Icon: IconTruck,
    title: "Andreani",
    text: "Express a todo el país con código de seguimiento para rastrear tu pedido.",
  },
  {
    Icon: IconShield,
    title: "100% Seguro",
    text: "Paquetes con embalaje reforzado y seguro incluido para proteger tu producto.",
  },
  {
    Icon: IconClock,
    title: "2 a 5 días hábiles",
    text: "Recibí tu pedido en tiempo récord sin importar en qué parte del país estés.",
  },
  {
    Icon: IconPin,
    title: "Seguimiento en vivo",
    text: "Rastreá tu envío en todo momento con el código que te enviamos por email.",
  },
];

const SHIPPING_HIGHLIGHTS = [
  "CABA y GBA: 1-2 días",
  "Interior: 3-5 días",
  "Retiro en persona disponible",
];

const PROTECTION_FEATURES = [
  {
    Icon: IconBadge,
    iconColor: "text-emerald-300",
    iconBg: "bg-emerald-500/15 ring-emerald-400/30",
    title: "Garantía oficial Urban Deco — 2 años",
    text: "Todos nuestros productos cuentan con 2 años de garantía oficial. Si presenta algún defecto de fabricación, nos encargamos de la reparación o reemplazo sin costo.",
  },
  {
    Icon: IconLock,
    iconColor: "text-sky-300",
    iconBg: "bg-sky-500/15 ring-sky-400/30",
    title: "Compra 100% segura",
    text: "Tu dinero está protegido. Realizamos la transacción de forma segura y transparente. No procesamos ningún envío hasta que el pago esté confirmado y verificado.",
  },
  {
    Icon: IconRefresh,
    iconColor: "text-amber-300",
    iconBg: "bg-amber-500/15 ring-amber-400/30",
    title: "Política de devolución",
    text: "Si recibís tu producto y tiene algún inconveniente, contactanos dentro de las primeras 48 horas. Nos hacemos cargo del cambio o devolución completa.",
  },
  {
    Icon: IconDocument,
    iconColor: "text-fuchsia-300",
    iconBg: "bg-fuchsia-500/15 ring-fuchsia-400/30",
    title: "Facturación y comprobante",
    text: "Emitimos comprobante de compra con cada pedido. Tenés respaldo legal de tu adquisición para cualquier trámite o reclamo futuro.",
  },
];

const WHY_US = [
  {
    Icon: IconSparkle,
    title: "Materiales premium",
    text: "Trabajamos con maderas nobles, telas y cueros cuidadosamente seleccionados para que cada pieza dure.",
  },
  {
    Icon: IconShield,
    title: "Garantía 2 años",
    text: "Cubrimos defectos de fabricación durante 2 años desde la entrega de tu pedido.",
  },
  {
    Icon: IconUsers,
    title: "+78.555 clientes",
    text: "Familias en todo el país ya confían en Urban Deco para amueblar su hogar.",
  },
  {
    Icon: IconTruck,
    title: "Envíos a todo el país",
    text: "Envíos seguros por Andreani con código de seguimiento en tiempo real, directo a tu casa.",
  },
  {
    Icon: IconTag,
    title: "Mejores precios",
    text: "Comprá directo sin intermediarios y aprovechá precios competitivos en todo el catálogo.",
  },
  {
    Icon: IconHeadset,
    title: "Atención personalizada",
    text: "Te asesoramos antes, durante y después de tu compra. Respondemos por WhatsApp al instante.",
  },
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
  {
    name: "Sofía B.",
    location: "La Plata",
    quote:
      "El rack Recoleta quedó hermoso, los terminados se notan apenas lo armás. Súper recomendable, ya recomendé a mis amigas.",
  },
  {
    name: "Javier T.",
    location: "Mendoza",
    quote:
      "Renové todo el living con Urban Deco. El equipo me asesoró por WhatsApp para combinar colores. Diez puntos de principio a fin.",
  },
  {
    name: "Laura C.",
    location: "Mar del Plata",
    quote:
      "El envío al interior tardó lo prometido y la cama llegó intacta. Es enorme y comodísima. Estoy muy contenta con la compra.",
  },
  {
    name: "Diego P.",
    location: "San Isidro, BsAs",
    quote:
      "Pedí el set Ibiza para la galería. La calidad para exterior es de otro nivel — resistente y cómodo a la vez. Sí o sí volvería a comprar.",
  },
  {
    name: "Valentina S.",
    location: "Belgrano, CABA",
    quote:
      "Las sillas Bristol quedaron espectaculares en mi comedor. El tapizado es de muy buena calidad, mejor de lo que esperaba por el precio.",
  },
  {
    name: "Mauricio L.",
    location: "Tucumán",
    quote:
      "Atención impecable. Tenía dudas con los colores y me mandaron fotos extras antes de comprar. Muy profesionales, todo perfecto.",
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
        <HeroSlideshow slides={HERO_SLIDES} className="-z-20" />
        <div className="absolute inset-0 -z-10 bg-ink/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/30 via-ink/30 to-ink/55" />
        <StarField className="-z-10" />

        <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/85">
          Nuevas colecciones urbanas
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.05] text-cream [text-shadow:0_2px_30px_rgba(20,18,15,0.35)] sm:text-6xl lg:text-7xl">
          Sillones y decoración premium para{" "}
          <em className="font-normal italic">tu hogar</em>
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
          {VALUE_PROPS.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-6 shrink-0 text-taupe" />
              <div>
                <p className="font-medium">{title}</p>
                <p className="mt-0.5 text-sm text-stone">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
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
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 90}>
              <Link
                href={`/catalogo?cat=${c.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-line transition duration-300 hover:ring-clay"
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8">
        <Reveal>
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
        </Reveal>

        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 80}>
              <ProductCard product={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lookbook editorial */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8 lg:pt-28">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <Link
              href="/inspiracion"
              className="group relative block aspect-[5/4] overflow-hidden rounded-3xl ring-1 ring-line"
            >
              <Image
                src="/images/sillon-monaco-3.jpg"
                alt="Ambiente Urban Deco — sofá modular en terracota"
                fill
                sizes="(min-width:1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent" />
              <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink backdrop-blur-sm">
                Editorial · Otoño 2026
              </span>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pl-4">
              <p className="eyebrow">Lookbook</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Ambientes que{" "}
                <em className="font-normal italic text-clay">cuentan</em>{" "}
                historias
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-stone">
                Cada estación curamos selecciones pensadas para inspirarte.
                Combinaciones de texturas, paletas y piezas que hablan de cómo
                querés vivir tu hogar.
              </p>
              <Link
                href="/inspiracion"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-cream"
              >
                Ver lookbook completo <IconArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ¿Por qué elegir Urban Deco? */}
      <section className="mt-16 border-y border-line bg-linen">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <header className="text-center">
              <p className="eyebrow">Por qué nosotros</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                ¿Por qué elegir Urban Deco?
              </h2>
            </header>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col items-center rounded-3xl bg-cream p-6 text-center ring-1 ring-line transition hover:ring-clay sm:p-8">
                  <span className="grid size-12 place-items-center rounded-full bg-linen ring-1 ring-line sm:size-14">
                    <Icon className="size-5 text-clay sm:size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg sm:mt-5">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Métodos de pago + Números (dark trust band) */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <StarField />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
          {/* Métodos de pago */}
          <Reveal>
            <header className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/65">
                Confianza
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Métodos de pago
              </h2>
            </header>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:gap-4">
            {PAYMENT_METHODS.map(({ Icon, label }, i) => (
              <Reveal key={label} delay={i * 90}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-cream/15 bg-cream/[0.04] px-3 py-5 transition hover:border-cream/30 hover:bg-cream/[0.08] sm:px-6 sm:py-8">
                  <Icon className="size-7 text-cream sm:size-9" />
                  <p className="mt-2.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-cream/90 sm:mt-4 sm:text-xs sm:tracking-[0.22em]">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto mt-14 h-px max-w-2xl bg-cream/15 sm:mt-20" />

          {/* Números */}
          <Reveal>
            <header className="mt-14 text-center sm:mt-20">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/65">
                Trayectoria
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Números que nos respaldan
              </h2>
            </header>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 110}>
                <div className="text-center">
                  <Counter
                    to={s.value}
                    prefix="+"
                    className="font-display text-5xl text-cream sm:text-6xl"
                  />
                  <p className="mt-3 text-sm text-cream/75">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto mt-14 h-px max-w-2xl bg-cream/15 sm:mt-20" />

          {/* Envíos */}
          <Reveal>
            <header className="mt-14 text-center sm:mt-20">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/65">
                Logística
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">
                Envíos a todo el país
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream/75">
                Realizamos envíos a todo el país de manera 100% segura. Tu
                pedido llega a la puerta de tu casa con seguimiento en tiempo
                real.
              </p>
            </header>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SHIPPING_FEATURES.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 text-center transition hover:border-cream/30 hover:bg-cream/[0.08]">
                  <Icon className="size-8 text-cream" />
                  <p className="mt-4 font-display text-lg text-cream">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/85">
              {SHIPPING_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <IconCheck className="size-4 text-clay" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Divider */}
          <div className="mx-auto mt-14 h-px max-w-2xl bg-cream/15 sm:mt-20" />

          {/* Tu compra está protegida */}
          <Reveal>
            <header className="mt-14 text-center sm:mt-20">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-cream/65">
                Respaldo
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl">
                Tu compra está protegida
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream/75">
                Comprá con total tranquilidad y respaldo.
              </p>
            </header>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {PROTECTION_FEATURES.map(({ Icon, iconColor, iconBg, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="flex flex-col items-start gap-5 rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 transition hover:border-cream/30 hover:bg-cream/[0.07] sm:flex-row sm:items-center sm:p-7">
                  <span
                    className={`grid size-14 shrink-0 place-items-center rounded-full ring-1 ${iconBg}`}
                  >
                    <Icon className={`size-6 ${iconColor}`} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-cream sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">
                      {text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mx-auto mt-10 flex items-center justify-center gap-2.5 text-sm text-cream">
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-cream">
                <IconCheck className="size-3" />
              </span>
              <span className="font-medium">
                Más de 78.555 compras exitosas sin reclamos
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <header className="text-center">
            <p className="eyebrow">Reseñas</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
          </header>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className={i >= 3 ? "hidden md:block" : ""}
            >
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-linen p-7">
                <div className="flex gap-0.5 text-taupe">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStar key={j} className="size-4" />
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Editorial band */}
      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <StarField />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-balance font-display text-4xl leading-tight sm:text-5xl">
              Descubre el arte de vivir
            </h2>
          </Reveal>
          <Reveal delay={120}>
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
