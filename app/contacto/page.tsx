import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una duda sobre un producto o tu pedido? Contacta con el equipo de Urban Deco.",
};

const INFO = [
  { label: "Email", value: "hola@urbandeco.com" },
  { label: "Teléfono", value: "+34 600 00 00 00" },
  { label: "Showroom", value: "Calle del Diseño 12, Madrid" },
  { label: "Horario", value: "Lun-Sáb · 10:00 - 20:30" },
];

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Estamos aquí</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Hablemos</h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">
          ¿Buscas asesoramiento, quieres saber más sobre una pieza o necesitas
          ayuda con tu pedido? Escríbenos y te acompañamos.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />

        <aside className="flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-6">
            {INFO.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-taupe">
                  {item.label}
                </p>
                <p className="mt-1.5 text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
          >
            <IconWhatsApp className="size-5" />
            Escríbenos por WhatsApp
          </a>

          <div className="relative overflow-hidden rounded-3xl bg-sand p-8 ring-1 ring-line">
            <p className="font-display text-2xl leading-snug">
              Visita nuestro showroom
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Ven a tocar los tejidos, probar los sofás y dejarte inspirar por
              nuestros ambientes. Te esperamos en el corazón de la ciudad.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
