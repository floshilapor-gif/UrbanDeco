import Image from "next/image";

export function ProductImage({
  src,
  alt,
  sizes = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw",
  priority = false,
  imgClassName = "object-contain",
}: {
  src: string | null;
  alt: string;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
}) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-sand text-taupe">
        <span className="block size-8 rotate-45 border border-current" aria-hidden />
        <span className="text-[0.62rem] uppercase tracking-[0.3em]">
          Urban Deco
        </span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={imgClassName}
    />
  );
}
