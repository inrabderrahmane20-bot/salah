"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

/* Muted, earth-toned stand-ins for commissioned photography.
   Clearly captioned so they read as intentional placeholders. */
const tones: Record<string, string> = {
  field:
    "linear-gradient(155deg,#3a4a32 0%,#5b6a44 28%,#9aa06a 58%,#cdb87e 100%)",
  warehouse:
    "linear-gradient(160deg,#cfc8b8 0%,#b7b2a3 40%,#8d8a7d 78%,#6b6a60 100%)",
  eggs:
    "linear-gradient(155deg,#efe7d4 0%,#e2d4b6 45%,#cdb98e 80%,#b59a64 100%)",
  poultry:
    "linear-gradient(150deg,#e7d8c2 0%,#cdb18d 42%,#a8845c 78%,#7d5e3c 100%)",
  kitchen:
    "linear-gradient(155deg,#21372a 0%,#2f4634 38%,#5a6347 72%,#8a8463 100%)",
  truck:
    "linear-gradient(160deg,#11241a 0%,#1f3d2e 45%,#384a35 80%,#6a6c4d 100%)",
};

export function Figure({
  tone = "field",
  className = "",
  rounded = "rounded-2xl",
  zoom = false,
  caption,
  label,
}: {
  tone?: keyof typeof tones | string;
  className?: string;
  rounded?: string;
  zoom?: boolean;
  caption?: string;
  label?: string;
}) {
  const { t } = useI18n();
  return (
    <div
      className={`placeholder-grain relative overflow-hidden ${rounded} ${className}`}
      style={{ background: "#cfc8b8" }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: tones[tone] ?? tones.field }}
        initial={zoom ? { scale: 1.12 } : false}
        whileInView={zoom ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      {/* soft depth */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.18), transparent 55%), linear-gradient(to top, rgba(17,36,26,0.32), transparent 50%)",
        }}
      />
      {/* caption / label */}
      <div className="absolute inset-0 flex items-end p-4 sm:p-6">
        {label ? (
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream/85">
            {label}
          </span>
        ) : null}
      </div>
      <div className="absolute end-4 top-4 flex items-center gap-1.5 rounded-full bg-black/20 px-2.5 py-1 backdrop-blur-sm">
        <span className="block h-1.5 w-1.5 rounded-full bg-cream/70" />
        <span className="text-[0.62rem] font-medium tracking-wide text-cream/80">
          {caption ?? t.placeholder}
        </span>
      </div>
    </div>
  );
}
