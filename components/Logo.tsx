import Image from "next/image";
import Link from "next/link";

export function Logo({
  size = 50,
  withWordmark = true,
}: {
  size?: number;
  withWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Urban Deco — inicio"
      className="group inline-flex items-center gap-3"
    >
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-line"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.jpeg"
          alt="Urban Deco"
          fill
          sizes="80px"
          className="scale-[1.16] object-cover"
          priority
        />
      </span>
      {withWordmark && (
        <span className="hidden flex-col leading-none sm:flex">
          <span className="font-display text-lg tracking-[0.2em] text-ink">
            URBAN DECO
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-taupe">
            Muebles &amp; Decoración
          </span>
        </span>
      )}
    </Link>
  );
}
