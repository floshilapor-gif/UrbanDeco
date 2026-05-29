import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { getProductBySlug, type Product } from "@/lib/products";

export const metadata: Metadata = {
  title: "Inspírate",
  description:
    "Ambientes completos pensados por nosotros. Cada espacio combina productos de la tienda para que te inspires y armes tu hogar.",
};

interface Look {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  fit?: "cover" | "contain";
  description: string;
  products: string[];
}

const LOOKS: Look[] = [
  {
    slug: "living-atemporal",
    title: "Living atemporal",
    tagline: "Cuero, maderas nobles y luz cálida",
    heroImage: "/images/hero-salon.jpg",
    fit: "cover",
    description:
      "Un living clásico con sofá tipo Chesterfield, butacas claras y una lámpara de pie de carácter. Atmósfera elegante y tranquila para recibir cualquier noche.",
    products: ["sofa-mykonos", "sofa-madrid"],
  },
  {
    slug: "living-calido-urbano",
    title: "Living cálido y urbano",
    tagline: "Terracota, boucle y plantas",
    heroImage: "/images/sillon-monaco-3.jpg",
    fit: "cover",
    description:
      "Un rincón envolvente con el modular Mónaco en terracota, mantas suaves y una lámpara ámbar. La combinación perfecta entre confort y diseño.",
    products: ["sillon-monaco", "sillon-oslo"],
  },
  {
    slug: "comedor-luminoso",
    title: "Comedor luminoso",
    tagline: "Para recibir en grande",
    heroImage: "/images/juego-comedor-toscana-castano.jpg",
    fit: "cover",
    description:
      "Una mesa rectangular para 6 con sillas tapizadas y una lámpara colgante de cristal. Pensado para sobremesas largas y momentos en familia.",
    products: ["juego-comedor-toscana", "silla-capitone", "silla-bristol"],
  },
  {
    slug: "dormitorio-suite",
    title: "Dormitorio de suite",
    tagline: "Descanso de hotel boutique",
    heroImage: "/images/cama-king-imperial.jpg",
    fit: "cover",
    description:
      "Una cama King imponente con respaldo ranurado, textiles cálidos y luces ambientales. Para que cada noche se sienta como un mini retiro.",
    products: ["cama-king-imperial", "cama-victoria", "cama-nube"],
  },
  {
    slug: "cine-en-casa",
    title: "Cine en casa",
    tagline: "Panel a medida y butaca para maratones",
    heroImage: "/images/rack-boston.jpg",
    fit: "cover",
    description:
      "Un panel flotante para tu TV con luz LED y un sofá cómodo de chaise para acompañar pochoclos y maratones de pelis.",
    products: ["rack-boston", "rack-habana", "sillon-oslo"],
  },
  {
    slug: "jardin-relax",
    title: "Jardín de relax",
    tagline: "Mate, lectura y aire libre",
    heroImage: "/images/set-ibiza.jpg",
    fit: "cover",
    description:
      "Un set lounge para tu galería o jardín, ideal para acompañar mate, libros y siestas al aire libre. Confort outdoor sin renunciar al diseño.",
    products: ["set-ibiza", "set-tulum", "sillon-hamaca-doble"],
  },
];

export default function InspiracionPage() {
  return (
    <div className="pb-24">
      {/* Intro */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-12 sm:px-8 lg:pt-16">
        <header className="max-w-2xl">
          <p className="eyebrow">Inspírate</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Ambientes</h1>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            Espacios completos pensados por nosotros: cada ambiente combina
            piezas de la tienda para que te inspires y armes el tuyo. Tocá
            cualquier producto para verlo en detalle.
          </p>
        </header>
      </section>

      {/* Looks */}
      <div className="mt-12 space-y-20">
        {LOOKS.map((look) => {
          const products = look.products
            .map((slug) => getProductBySlug(slug))
            .filter((p): p is Product => Boolean(p));
          return (
            <section
              key={look.slug}
              className="mx-auto w-full max-w-7xl px-5 sm:px-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-line">
                <Image
                  src={look.heroImage}
                  alt={look.title}
                  fill
                  sizes="(min-width:1024px) 80vw, 100vw"
                  className={
                    look.fit === "contain"
                      ? "object-contain"
                      : "object-cover"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/85">
                    {look.tagline}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-cream sm:text-5xl">
                    {look.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-cream/90">
                    {look.description}
                  </p>
                </div>
              </div>

              {products.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">
                    Productos del ambiente
                  </p>
                  <div className="mt-4 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
