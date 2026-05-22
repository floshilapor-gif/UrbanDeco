import { IconWhatsApp } from "./icons";

const WHATSAPP_URL = "https://wa.me/5491162624178";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-white shadow-xl ring-1 ring-black/5 transition hover:bg-[#20b858] sm:pr-5"
    >
      <IconWhatsApp className="size-7" />
      <span className="hidden text-sm font-semibold sm:inline">
        Escribinos
      </span>
    </a>
  );
}
