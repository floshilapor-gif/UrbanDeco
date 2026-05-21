"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "./CartProvider";
import { IconBag, IconMenu, IconClose } from "./icons";

const NAV = [
  { href: "/", label: "Inicio", base: "/" },
  { href: "/catalogo?cat=sillones", label: "Sillones", base: "/catalogo" },
  { href: "/catalogo?cat=mesas", label: "Mesas", base: "/catalogo" },
  { href: "/catalogo?cat=deco", label: "Deco", base: "/catalogo" },
  { href: "/catalogo?cat=camas", label: "Camas", base: "/catalogo" },
  { href: "/contacto", label: "Contacto", base: "/contacto" },
];

export function Header() {
  const pathname = usePathname();
  const { count, openCart, hydrated } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (base: string) =>
    base === "/" ? pathname === "/" : pathname === base;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-xs font-medium uppercase tracking-[0.16em] transition hover:text-ink ${
                  isActive(item.base) ? "text-ink" : "text-stone"
                }`}
              >
                {item.label}
                {isActive(item.base) && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-taupe" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={openCart}
              aria-label="Abrir carrito"
              className="relative grid size-11 place-items-center rounded-full text-ink transition hover:bg-sand"
            >
              <IconBag className="size-5" />
              {hydrated && count > 0 && (
                <span className="absolute right-1 top-1 grid min-w-[18px] place-items-center rounded-full bg-ink px-1 text-[0.62rem] font-semibold leading-[18px] text-cream">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              className="grid size-11 place-items-center rounded-full text-ink transition hover:bg-sand lg:hidden"
            >
              {menuOpen ? (
                <IconClose className="size-5" />
              ) : (
                <IconMenu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-line bg-cream lg:hidden">
            <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-2 sm:px-8">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border-b border-line/60 py-3.5 text-sm font-medium uppercase tracking-[0.14em] last:border-0 ${
                    isActive(item.base) ? "text-ink" : "text-stone"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
