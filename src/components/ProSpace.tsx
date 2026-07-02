"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Reveal, RevealGroup, Item } from "./motion";
import { SectionMark } from "./SectionMark";
import { IconArrow } from "./icons";

export function ProSpace() {
  const { t } = useI18n();
  const title = t.pro.title.split("\n");

  return (
    <section
      id="pro"
      className="relative overflow-hidden bg-forest-900 py-28 text-cream sm:py-40 lg:py-[180px]"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(85% 65% at 82% 4%, rgba(176,137,79,0.18), transparent 55%)",
        }}
      />
      <div className="content relative">
        <SectionMark index="04" label={t.pro.eyebrow} tone="light" />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <h2 className="text-balance text-[clamp(2.1rem,4.2vw,3.7rem)] text-cream">
                {title.map((l, i) => (
                  <span
                    key={i}
                    className={`block ${i === title.length - 1 ? "italic-accent text-gold-soft" : ""}`}
                  >
                    {l}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="measure mt-8 text-[1.08rem] leading-relaxed text-cream-soft">
                {t.pro.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link href="/contact" className="btn btn-light w-full sm:w-auto">
                  {t.pro.cta}
                  <IconArrow className="rtl:rotate-180" />
                </Link>
                <Link href="/contact" className="btn btn-outline-light w-full sm:w-auto">
                  {t.pro.login}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Numbered editorial list */}
          <div className="lg:col-span-5 lg:col-start-8">
            <RevealGroup className="border-t border-cream/15">
              {t.pro.points.map((p, i) => (
                <Item
                  key={p}
                  className="flex items-baseline gap-5 border-b border-cream/15 py-5"
                >
                  <span className="font-display text-[0.95rem] text-gold-soft tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] leading-snug text-cream/90">
                    {p}
                  </span>
                </Item>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
