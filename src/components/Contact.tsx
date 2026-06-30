"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "./motion";
import { SectionMark } from "./SectionMark";
import { IconMail, IconPhone, IconArrow } from "./icons";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bg-paper py-28 sm:py-36 lg:py-[160px]">
      <div className="content">
        <SectionMark index="05" label={t.contact.eyebrow} />
        <div className="mt-12 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="text-balance text-[clamp(2.4rem,5vw,4.2rem)]">
                {t.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="measure mt-6 text-[1.08rem] leading-relaxed text-ink-soft">
                {t.contact.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="mailto:contact@hml-distribution.ma"
                  className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-line bg-ivory p-6 transition-colors duration-400 hover:border-line-strong"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-forest">
                      <IconMail width={20} height={20} />
                    </span>
                    <span className="text-[1rem] font-semibold text-ink">
                      {t.contact.cta}
                    </span>
                  </span>
                  <IconArrow className="text-ink-faint transition-transform duration-400 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
                <a
                  href="tel:+212000000000"
                  className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-line bg-ivory p-6 transition-colors duration-400 hover:border-line-strong"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-forest">
                      <IconPhone width={20} height={20} />
                    </span>
                    <span className="text-[1rem] font-semibold text-ink">
                      {t.contact.phone}
                    </span>
                  </span>
                  <IconArrow className="text-ink-faint transition-transform duration-400 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
