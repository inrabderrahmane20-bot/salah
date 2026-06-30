import Image from "next/image";

/* Pre-processed transparent logo assets:
   - logo-ink.png   = warm near-black mark (for light surfaces)
   - logo-cream.png = cream mark (for dark surfaces) */
export function Logo({
  variant = "dark",
  className = "",
  width = 132,
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  const src = variant === "dark" ? "/logo-cream.png" : "/logo-ink.png";
  return (
    <Image
      src={src}
      alt="HML Distribution"
      width={width}
      height={Math.round(width * 0.5)}
      priority={priority}
      className={`h-auto select-none object-contain ${className}`}
      style={{ width }}
    />
  );
}
