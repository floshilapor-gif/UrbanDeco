"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCTS, getCategory } from "@/lib/products";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/lib/format";
import { IconSearch, IconClose } from "./icons";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      // Focus the input after the dialog mounts
      const id = window.setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = "";
      };
    }
    setQ("");
    document.body.style.overflow = "";
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return PRODUCTS.filter((p) => {
      const haystack = [
        p.name,
        p.short,
        p.category,
        getCategory(p.category)?.label ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(term);
    }).slice(0, 8);
  }, [q]);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/45 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-label="Buscar productos"
        className={`absolute left-1/2 top-20 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl bg-cream shadow-2xl ring-1 ring-line transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <IconSearch className="size-5 text-stone" />
          <input
            ref={inputRef}
            type="search"
            placeholder="Buscar productos..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 bg-transparent text-base outline-none placeholder:text-mist"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar buscador"
            className="grid size-8 place-items-center rounded-full text-ink transition hover:bg-sand"
          >
            <IconClose className="size-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {q.trim().length < 2 ? (
            <p className="px-4 py-8 text-center text-sm text-stone">
              Escribí lo que buscás: sillón, cama, rack, color…
            </p>
          ) : results.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-stone">
              Sin resultados para “{q.trim()}”.
            </p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/producto/${p.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-sand"
                  >
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-line">
                      <ProductImage
                        src={p.image}
                        alt=""
                        sizes="56px"
                        imgClassName={
                          p.fit === "cover"
                            ? "object-cover"
                            : "object-contain p-1.5"
                        }
                      />
                    </span>
                    <span className="flex-1 leading-tight">
                      <span className="block font-medium">{p.name}</span>
                      <span className="block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-stone">
                        {getCategory(p.category)?.label}
                      </span>
                    </span>
                    <span className="text-sm font-medium">
                      {formatPrice(p.price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
