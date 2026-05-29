import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { IconWhatsApp, IconArrowRight, IconPin } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes una duda sobre un producto o tu pedido? Contacta con el equipo de Urban Deco.",
};

const INFO = [
  { label: "WhatsApp", value: "+54 9 11 6262-4178" },
  { label: "Instagram", value: "@urbandeco_" },
  { label: "Email", value: "hola@urbandeco.com" },
  { label: "Horario", value: "Lun a Vie · 09:00 - 17:00" },
  {
    label: "Showroom",
    value: "Gelly y Obes 3446, San Miguel, Bs. As.",
    full: true,
  },
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
              <div key={item.label} className={item.full ? "col-span-2" : ""}>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-taupe">
                  {item.label}
                </p>
                <p className="mt-1.5 text-ink">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="-mt-2 text-sm italic text-clay">Te esperamos ✨</p>

          <a
            href="https://wa.me/5491162624178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
          >
            <IconWhatsApp className="size-5" />
            Escríbenos por WhatsApp
          </a>

          <a
            href="https://instagram.com/urbandeco_"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-3xl bg-sand p-8 ring-1 ring-line transition hover:ring-clay"
          >
            <p className="font-display text-2xl leading-snug">
              Síguenos en Instagram
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Descubre novedades, ambientes y nuestras últimas piezas en
              @urbandeco_.
            </p>
          </a>
        </aside>
      </div>

      {/* Map */}
      <section className="mt-16 lg:mt-24">
        <header className="max-w-2xl">
          <p className="eyebrow">Cómo llegar</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Visitanos al showroom
          </h2>
          <p className="mt-3 flex items-center gap-2 text-stone">
            <IconPin className="size-4 shrink-0 text-clay" />
            Gelly y Obes 3446, San Miguel, Provincia de Buenos Aires
          </p>
        </header>

        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-line">
          <iframe
            title="Mapa del showroom Urban Deco"
            src="https://www.google.com/maps?q=Gelly+y+Obes+3446,+San+Miguel,+Buenos+Aires&output=embed"
            className="absolute inset-0 size-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-stone">
            Lunes a viernes de 09:00 a 17:00 hs ·{" "}
            <span className="italic text-clay">Te esperamos ✨</span>
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Gelly+y+Obes+3446,+San+Miguel,+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-cream"
          >
            Cómo llegar <IconArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
