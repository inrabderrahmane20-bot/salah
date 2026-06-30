"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal, RevealGroup, Item } from "./motion";
import { Photo } from "./Photo";
import { SectionMark } from "./SectionMark";

export function Quality() {
  const { t } = useI18n();
  const title = t.quality.title.split("\n");

  return (
    <section id="quality" className="bg-ivory py-28 sm:py-40 lg:py-[180px]">
      <div className="content">
        <SectionMark index="03" label={t.quality.eyebrow} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <h2 className="text-balance text-[clamp(2.1rem,4.2vw,3.7rem)]">
                {title.map((l, i) => (
                  <span
                    key={i}
                    className={`block ${i === title.length - 1 ? "italic-accent text-forest" : ""}`}
                  >
                    {l}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="measure mt-7 text-[1.05rem] leading-relaxed text-ink-soft">
                {t.quality.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <Photo
                src="/images/logistics.jpg"
                alt="Acheminement réfrigéré HML Distribution"
                zoom
                className="aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 58vw"
                label="0 – 4 °C"
              />
            </Reveal>
          </div>
        </div>

        {/* Numbered editorial rows (no boxes) */}
        <RevealGroup className="mt-24 grid grid-cols-1 border-t border-line md:grid-cols-2 md:gap-x-16">
          {t.quality.pillars.map((p, i) => (
            <Item
              key={p.title}
              className="flex gap-6 border-b border-line py-8 sm:py-10"
            >
              <span className="font-display text-[1.35rem] leading-none text-gold/90 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-[1.2rem] tracking-tight text-ink">{p.title}</h4>
                <p className="measure mt-2.5 text-[0.97rem] leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
