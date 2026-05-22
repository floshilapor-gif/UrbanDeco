import { IconWhatsApp } from "./icons";

export function InfoLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
      <header>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">{intro}</p>
      </header>

      <div className="mt-10 space-y-8">{children}</div>

      <div className="mt-12 rounded-3xl bg-sand p-7 ring-1 ring-line">
        <p className="font-display text-xl">¿Tenés dudas?</p>
        <p className="mt-2 text-sm text-stone">
          Escribinos y te ayudamos al instante.
        </p>
        <a
          href="https://wa.me/5491162624178"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-cream transition hover:bg-charcoal"
        >
          <IconWhatsApp className="size-4" /> Escribinos por WhatsApp
        </a>
      </div>
    </div>
  );
}

export function InfoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-3 space-y-2 leading-relaxed text-stone">{children}</div>
    </section>
  );
}
