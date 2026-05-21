import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconLeaf, IconSparkle, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Urban Deco nace para acercar el diseño premium a tu hogar con piezas seleccionadas por su calidad y carácter.",
};

const VALUES = [
  {
    Icon: IconSparkle,
    title: "Diseño con intención",
    text: "Cada pieza se elige por su proporción, su carácter y su capacidad de transformar un espacio.",
  },
  {
    Icon: IconLeaf,
    title: "Materiales que duran",
    text: "Tejidos nobles, maderas macizas y rellenos de alta resiliencia pensados para acompañarte años.",
  },
  {
    Icon: IconShield,
    title: "Confianza total",
    text: "Garantía de 2 años, devoluciones sencillas y un equipo que te acompaña antes y después de comprar.",
  },
];

export default function NosotrosPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Sobre Urban Deco</p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Creemos que el hogar es el lienzo de tu vida
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            Urban Deco nació de una idea sencilla: el buen diseño no debería ser
            un lujo inalcanzable. Seleccionamos muebles y decoración con alma —
            piezas que combinan estética contemporánea, materiales nobles y un
            confort que se nota desde el primer día.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-line bg-ink text-cream">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:grid-cols-3 sm:px-8">
          {[
            { n: "+500", l: "Hogares decorados" },
            { n: "4,9★", l: "Valoración media" },
            { n: "2 años", l: "De garantía" },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <p className="font-display text-5xl">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream/60">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="font-display text-3xl sm:text-4xl">Lo que nos mueve</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {VALUES.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-line bg-linen p-8"
            >
              <span className="grid size-12 place-items-center rounded-full bg-sand text-taupe">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-sand px-6 py-16 text-center ring-1 ring-line">
          <h2 className="text-balance font-display text-3xl sm:text-4xl">
            Empieza a crear tu espacio
          </h2>
          <p className="max-w-md text-stone">
            Explora nuestras colecciones y encuentra la pieza que estabas
            buscando.
          </p>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
          >
            Ver catálogo <IconArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
