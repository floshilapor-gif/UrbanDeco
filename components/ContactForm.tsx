"use client";

import { useState } from "react";
import { IconCheck } from "./icons";

const inputClass =
  "w-full rounded-xl border border-line bg-linen px-4 py-3 text-sm text-ink outline-none transition placeholder:text-mist focus:border-taupe focus:ring-2 focus:ring-taupe/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-linen px-6 py-16 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-ink text-cream">
          <IconCheck className="size-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl">¡Mensaje enviado!</h2>
        <p className="mt-2 max-w-sm text-stone">
          Gracias por escribirnos. Nuestro equipo te responderá en menos de 24
          horas.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-ink/70 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] transition hover:bg-ink hover:text-cream"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-cream p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
            Nombre
          </span>
          <input
            required
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            className={`mt-2 ${inputClass}`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className={`mt-2 ${inputClass}`}
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
          Asunto
        </span>
        <input
          name="asunto"
          type="text"
          placeholder="¿En qué podemos ayudarte?"
          className={`mt-2 ${inputClass}`}
        />
      </label>
      <label className="mt-4 block">
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone">
          Mensaje
        </span>
        <textarea
          required
          name="mensaje"
          rows={5}
          placeholder="Cuéntanos los detalles..."
          className={`mt-2 ${inputClass} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-8 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal sm:w-auto"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
