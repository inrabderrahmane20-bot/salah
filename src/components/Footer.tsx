"use client";

import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const explore = [
    { id: "story", label: t.nav.story },
    { id: "products", label: t.nav.products },
    { id: "quality", label: t.nav.quality },
    { id: "pro", label: t.nav.pro },
  ];

  return (
    <footer className="bg-forest-900 text-cream">
      <div className="content py-20 sm:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="dark" width={140} />
            <p className="measure mt-6 text-[1rem] leading-relaxed text-cream-soft">
              {t.footer.tagline}
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-sans text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.footer.explore}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {explore.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-[0.98rem] text-cream/85 transition-colors duration-300 hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-[0.98rem] text-cream/85">
              <li>
                <a
                  href="mailto:contact@hml-distribution.ma"
                  className="transition-colors duration-300 hover:text-cream"
                >
                  contact@hml-distribution.ma
                </a>
              </li>
              <li>
                <a
                  href="tel:+212000000000"
                  className="transition-colors duration-300 hover:text-cream"
                >
                  +212 00 00 00 00
                </a>
              </li>
              <li className="text-cream-soft">{t.footer.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/12 pt-7 text-[0.84rem] text-cream-soft sm:flex-row sm:items-center">
          <span>
            © {year} HML Distribution. {t.footer.rights}
          </span>
          <span className="tracking-wide">HML DISTRIBUTION</span>
        </div>
      </div>
    </footer>
  );
}
