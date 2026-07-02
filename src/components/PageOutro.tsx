"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { nextRoute, type RouteKey } from "@/lib/routes";
import { Reveal } from "./motion";
import { IconArrow } from "./icons";

/* "Next chapter" band shown at the foot of an inner page. */
export function PageOutro({ current }: { current: RouteKey }) {
  const { t } = useI18n();
  const next = nextRoute(current);

  return (
    <section className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="content">
        <Reveal>
          <div className="flex items-center justify-between gap-6">
            <p className="eyebrow">{next ? t.outro.eyebrow : ""}</p>
            <Link
              href="/"
              className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink-faint transition-colors hover:text-ink"
            >
              {t.outro.back}
            </Link>
          </div>
        </Reveal>

        {next && (
          <Reveal delay={0.05}>
            <Link href={next.path} className="group mt-6 block">
              <div className="flex items-end justify-between gap-8 border-t border-line pt-8">
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="font-display text-[1.1rem] tabular-nums text-gold">
                    {next.index}
                  </span>
                  <div>
                    <h2 className="text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-ink transition-colors duration-300 group-hover:text-forest">
                      {t.nav[next.key]}
                    </h2>
                    <p className="mt-2 max-w-md text-[0.98rem] leading-snug text-ink-soft">
                      {t.home.chapters[next.key]}
                    </p>
                  </div>
                </div>
                <span className="mb-2 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-all duration-400 group-hover:border-forest group-hover:text-forest sm:h-14 sm:w-14">
                  <IconArrow
                    width={20}
                    height={20}
                    className="transition-transform duration-400 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
