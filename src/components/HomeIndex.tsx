"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { Reveal, RevealGroup, Item } from "./motion";
import { IconArrow } from "./icons";

export function HomeIndex() {
  const { t } = useI18n();
  const title = t.home.indexTitle.split("\n");

  return (
    <section id="index" className="scroll-mt-24 bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="content">
        {/* Intro */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">{t.home.indexEyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance text-[clamp(2.1rem,4.4vw,3.8rem)]">
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
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="measure text-[1.05rem] leading-relaxed text-ink-soft">
                {t.home.indexLead}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Chapter index */}
        <RevealGroup className="mt-16 border-t border-line sm:mt-20">
          {routes.map((r) => (
            <Item key={r.key}>
              <Link
                href={r.path}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 transition-colors duration-500 hover:bg-paper sm:gap-8 sm:py-9"
              >
                <span className="font-display text-[1.05rem] tabular-nums text-gold sm:text-[1.2rem]">
                  {r.index}
                </span>

                <div className="min-w-0">
                  <h3 className="text-[clamp(1.5rem,3vw,2.3rem)] leading-tight text-ink transition-colors duration-300 group-hover:text-forest">
                    {t.nav[r.key]}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] leading-snug text-ink-soft">
                    {t.home.chapters[r.key]}
                  </p>
                </div>

                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="relative hidden h-16 w-24 overflow-hidden rounded-xl md:block lg:h-20 lg:w-32">
                    <Image
                      src={r.photo}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: r.position ?? "center" }}
                    />
                    <span className="absolute inset-0 bg-forest-900/10" />
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-all duration-400 group-hover:border-forest group-hover:text-forest">
                    <IconArrow
                      width={18}
                      height={18}
                      className="transition-transform duration-400 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Item>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
