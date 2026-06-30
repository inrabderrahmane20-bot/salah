"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal, RevealGroup, Item } from "./motion";
import { Photo } from "./Photo";
import { SectionMark } from "./SectionMark";

export function Story() {
  const { t } = useI18n();
  const title = t.story.title.split("\n");

  return (
    <section id="story" className="bg-ivory py-28 sm:py-40 lg:py-[180px]">
      <div className="content">
        <SectionMark index="01" label={t.story.eyebrow} />

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Text column */}
          <div className="lg:col-span-7">
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
              <p className="measure mt-9 text-[1.18rem] leading-relaxed text-ink">
                {t.story.lead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="measure mt-5 text-[1.02rem] leading-relaxed text-ink-soft">
                {t.story.body}
              </p>
            </Reveal>
          </div>

          {/* Figure column — offset for editorial asymmetry */}
          <div className="lg:col-span-5 lg:-mt-16">
            <Reveal delay={0.1}>
              <Photo
                src="/images/story.jpg"
                alt="Lumière du matin sur la campagne marocaine"
                zoom
                className="aspect-[4/5] w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
                label="HML · Maroc"
              />
            </Reveal>
          </div>
        </div>

        {/* Editorial figures — no boxes, hairline-separated */}
        <RevealGroup className="mt-24 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {t.story.stats.map((s, i) => (
            <Item
              key={s.label}
              className={`py-9 sm:py-11 ${
                i > 0 ? "border-t border-line sm:border-t-0 sm:border-s sm:ps-10" : ""
              } ${i < 2 ? "sm:pe-10" : ""}`}
            >
              <div className="font-display text-[2.1rem] leading-none tracking-tight text-forest">
                {s.value}
              </div>
              <div className="mt-3 max-w-[26ch] text-[0.95rem] leading-snug text-ink-soft">
                {s.label}
              </div>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
