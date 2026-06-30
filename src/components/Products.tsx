"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./motion";
import { Photo } from "./Photo";
import { SectionMark } from "./SectionMark";

const photos = ["/images/poultry.jpg", "/images/eggs.jpg"];
const photoPos = ["center", "center 62%"];

export function Products() {
  const { t } = useI18n();
  const title = t.products.title.split("\n");

  return (
    <section id="products" className="bg-paper py-28 sm:py-40 lg:py-[180px]">
      <div className="content">
        <SectionMark index="02" label={t.products.eyebrow} />

        <div className="mt-12 max-w-3xl">
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
              {t.products.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-24 sm:gap-36">
          {t.products.items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={item.name}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Figure */}
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : "lg:order-1"}`}>
                  <Reveal>
                    <Photo
                      src={photos[i] ?? photos[0]}
                      alt={item.name}
                      zoom
                      position={photoPos[i] ?? "center"}
                      rounded="rounded-3xl"
                      className="aspect-[16/11] w-full"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </Reveal>
                </div>

                {/* Detail */}
                <div
                  className={`relative lg:col-span-5 ${flip ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* large faint index numeral */}
                  <span
                    aria-hidden
                    className="index-numeral pointer-events-none absolute -top-20 hidden text-[9rem] sm:block ltr:-left-2 rtl:-right-2"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Reveal delay={0.08}>
                    <div className="relative">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold">
                        {item.tag}
                      </p>
                      <h3 className="mt-4 text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.05]">
                        {item.name}
                      </h3>
                      <p className="measure mt-5 text-[1.04rem] leading-relaxed text-ink-soft">
                        {item.desc}
                      </p>

                      <dl className="mt-9 border-t border-line">
                        {item.meta.map((m) => (
                          <div
                            key={m.k}
                            className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                          >
                            <dt className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-faint">
                              {m.k}
                            </dt>
                            <dd className="text-end text-[1rem] font-medium text-ink">
                              {m.v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
