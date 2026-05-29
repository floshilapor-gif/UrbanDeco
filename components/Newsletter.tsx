"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight, IconCheck } from "./icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;
    setStatus("sending");
    // Store locally for now — wire to Mailchimp / Resend / etc. later.
    try {
      const list = JSON.parse(localStorage.getItem("ud_newsletter") || "[]");
      list.push({ email: email.trim(), ts: Date.now() });
      localStorage.setItem("ud_newsletter", JSON.stringify(list));
    } catch {
      // ignore storage errors
    }
    setTimeout(() => setStatus("ok"), 500);
  }

  return (
    <section className="bg-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Sumate y recibí{" "}
            <em className="font-normal italic text-clay">10% off</em>{" "}
            en tu primera compra
          </h2>
          <p className="mt-4 max-w-md text-stone">
            Te avisamos de nuevas colecciones, ofertas exclusivas y consejos
            para vestir tu hogar. Sin spam — promesa.
          </p>
        </div>

        <form onSubmit={onSubmit} className="w-full">
          {status === "ok" ? (
            <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-4 text-cream">
              <span className="grid size-7 place-items-center rounded-full bg-emerald-500">
                <IconCheck className="size-4 text-cream" />
              </span>
              <p className="text-sm font-medium">
                ¡Gracias! Te llegará el cupón al mail.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-line bg-cream px-5 py-4 text-sm outline-none ring-clay/30 transition focus:ring-2"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Suscribirme"}
                <IconArrowRight className="size-4" />
              </button>
            </div>
          )}
          <p className="mt-3 text-xs text-stone">
            Al suscribirte aceptás recibir comunicaciones de Urban Deco. Podés
            cancelar cuando quieras.
          </p>
        </form>
      </div>
    </section>
  );
}
