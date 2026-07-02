"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { IconArrow, IconArrowDown } from "./icons";

const glide = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useI18n();
  const titleLines = t.hero.title.split("\n");

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Cinematic background photography */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 16, ease: "easeOut" }}
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 55%" }}
        />
      </motion.div>
      {/* Cinematic overlays */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,22,16,0.78) 0%, rgba(10,22,16,0.30) 42%, rgba(10,22,16,0.20) 70%, rgba(10,22,16,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 40%, rgba(10,22,16,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: glide, delay: 0.3 }}
            className="eyebrow mb-6 text-gold-soft"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="text-balance text-[clamp(2.9rem,6.4vw,5.8rem)] font-normal leading-[1.0] tracking-[-0.015em] text-cream">
            {titleLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${i === titleLines.length - 1 ? "italic-accent text-gold-soft" : ""}`}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: glide, delay: 0.4 + i * 0.12 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: glide, delay: 0.7 }}
            className="measure mt-7 text-[1.05rem] leading-relaxed text-cream/85"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: glide, delay: 0.85 }}
            className="mt-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link href="/produits" className="btn btn-light w-full sm:w-auto">
              {t.hero.primary}
              <IconArrow className="rtl:rotate-180" />
            </Link>
            <Link href="/espace-pro" className="btn btn-outline-light w-full sm:w-auto">
              {t.hero.secondary}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Editorial masthead meta bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="shell flex items-center justify-center gap-6 border-t border-cream/15 py-4 sm:justify-between sm:py-5">
          <ul className="hidden flex-wrap items-center gap-x-7 gap-y-1 sm:flex">
            {t.hero.meta.map((m, i) => (
              <li
                key={m}
                className="flex items-center gap-7 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70"
              >
                {i > 0 && (
                  <span aria-hidden className="hidden h-1 w-1 rounded-full bg-gold/70 sm:block" />
                )}
                {m}
              </li>
            ))}
          </ul>
          <a
            href="#index"
            aria-label={t.hero.scroll}
            className="group flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-cream"
          >
            <span>{t.hero.scroll}</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <IconArrowDown width={16} height={16} />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
