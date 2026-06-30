"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Real commissioned-style photography with a shared editorial grade:
   gentle warm overlay + soft vignette so every image feels color-matched. */
export function Photo({
  src,
  alt,
  className = "",
  rounded = "rounded-3xl",
  zoom = false,
  label,
  position = "center",
  sizes = "(max-width: 1024px) 100vw, 60vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  zoom?: boolean;
  label?: string;
  position?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={zoom ? { scale: 1.1 } : false}
        whileInView={zoom ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 9, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </motion.div>

      {/* shared grade */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: "rgba(58,46,28,0.10)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 30%, transparent 55%, rgba(17,36,26,0.30) 100%), linear-gradient(to top, rgba(17,36,26,0.28), transparent 45%)",
        }}
      />

      {label ? (
        <div className="absolute inset-0 flex items-end p-5 sm:p-7">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream/90">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
