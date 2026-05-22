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
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent overlay only at the top of the homepage (and not while the
  // mobile menu is open, so the menu stays readable).
  const transparent = isHome && !scrolled && !menuOpen;

  const isActive = (base: string) =>
    base === "/" ? pathname === "/" : pathname === base;

  const iconButton = `relative grid size-11 place-items-center rounded-full transition ${
    transparent ? "text-cream hover:bg-white/10" : "text-ink hover:bg-sand"
  }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          transparent
            ? "bg-transparent"
            : "border-b border-line/80 bg-cream/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Logo tone={transparent ? "light" : "dark"} />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => {
              const active = isActive(item.base);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-xs font-medium uppercase tracking-[0.16em] transition ${
                    transparent
                      ? active
                        ? "text-cream"
                        : "text-cream/80 hover:text-cream"
                      : active
                        ? "text-ink"
                        : "text-stone hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px w-full ${
                        transparent ? "bg-cream" : "bg-taupe"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={openCart}
              aria-label="Abrir carrito"
              className={iconButton}
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
              className={`${iconButton} lg:hidden`}
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
