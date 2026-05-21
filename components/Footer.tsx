import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/products";
import {
  IconFacebook,
  IconInstagram,
  IconTwitterX,
  IconYoutube,
} from "./icons";

const SOCIALS = [
  { label: "Facebook", href: "#", Icon: IconFacebook },
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "X", href: "#", Icon: IconTwitterX },
  { label: "YouTube", href: "#", Icon: IconYoutube },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm tracking-[0.12em] text-ink">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-stone transition hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-linen">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-line">
              <Image
                src="/images/logo.jpeg"
                alt="Urban Deco"
                fill
                sizes="48px"
                className="scale-[1.16] object-cover"
              />
            </span>
            <div className="leading-none">
              <p className="font-display text-base tracking-[0.2em]">
                URBAN DECO
              </p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-taupe">
                Muebles &amp; Decoración
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
            Sillones y decoración premium para tu hogar. Descubre el arte de
            vivir con piezas de diseño pensadas para durar.
          </p>
          <div className="mt-6 flex items-center gap-2.5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-9 place-items-center rounded-full bg-ink text-cream transition hover:bg-charcoal"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Tienda"
          links={CATEGORIES.map((c) => ({
            href: `/catalogo?cat=${c.slug}`,
            label: c.label,
          }))}
        />
        <FooterCol
          title="Compañía"
          links={[
            { href: "/nosotros", label: "Sobre nosotros" },
            { href: "/catalogo", label: "Catálogo" },
            { href: "/contacto", label: "Contacto" },
          ]}
        />
        <FooterCol
          title="Ayuda"
          links={[
            { href: "/contacto", label: "Atención al cliente" },
            { href: "/contacto", label: "Envíos y entregas" },
            { href: "/contacto", label: "Devoluciones" },
          ]}
        />
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-mist sm:flex-row sm:px-8">
          <p>URBAN DECO © {year} — Muebles &amp; Decoración</p>
          <p>Diseñado con cariño para tu hogar</p>
        </div>
      </div>
    </footer>
  );
}
