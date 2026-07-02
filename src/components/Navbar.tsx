"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { routes } from "@/lib/routes";
import { Logo } from "./Logo";
import { IconMenu, IconClose, IconArrow } from "./icons";

export function Navbar() {
  const { t, locale, toggle } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled; // inner pages are always solid
  const light = open || (isHome && !scrolled); // cream treatment over the dark hero

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          solid && !open
            ? "bg-ivory/80 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ height: 78 }}
      >
        <nav className="shell flex h-[78px] items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label="HML Distribution — accueil">
            <Logo variant={light ? "dark" : "light"} width={108} priority />
          </Link>

          {/* Center nav */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {routes.map((r) => {
              const active = pathname === r.path;
              return (
                <li key={r.key}>
                  <Link
                    href={r.path}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-[0.92rem] font-medium transition-colors duration-300 ${
                      light
                        ? active
                          ? "text-cream"
                          : "text-cream/80 hover:text-cream"
                        : active
                          ? "text-ink"
                          : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {t.nav[r.key]}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px transition-all duration-500 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      } ${light ? "bg-cream/70" : "bg-gold"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggle}
              aria-label={t.aria.switchLang}
              className={`hidden items-center gap-1.5 text-[0.82rem] font-semibold tracking-wide transition-colors duration-300 sm:flex ${
                light ? "text-cream/80 hover:text-cream" : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className={locale === "fr" ? "opacity-100" : "opacity-45"}>FR</span>
              <span className={light ? "text-cream/40" : "text-line-strong"}>/</span>
              <span className={locale === "ar" ? "opacity-100" : "opacity-45"}>ع</span>
            </button>

            <Link
              href="/espace-pro"
              className={`hidden text-[0.88rem] font-medium transition-colors duration-300 md:inline-flex ${
                light ? "text-cream/85 hover:text-cream" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t.nav.login}
            </Link>

            <Link
              href="/contact"
              className={`hidden h-10 items-center rounded-full px-5 text-[0.86rem] font-semibold transition-all duration-400 sm:inline-flex ${
                light
                  ? "border border-cream/35 text-cream hover:border-cream/80"
                  : "bg-forest text-cream hover:bg-forest-900"
              }`}
            >
              {t.nav.cta}
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.aria.close : t.aria.menu}
              aria-expanded={open}
              className={`-me-2 grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
                light ? "text-cream" : "text-ink"
              }`}
            >
              {open ? <IconClose width={22} height={22} /> : <IconMenu width={22} height={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-forest-900 lg:hidden"
          >
            <div className="flex h-full flex-col px-7 pb-10 pt-28">
              <ul className="flex flex-col">
                {routes.map((r, i) => {
                  const active = pathname === r.path;
                  return (
                    <motion.li
                      key={r.key}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={r.path}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-4 border-b border-cream/10 py-5"
                      >
                        <span className="font-display text-[0.85rem] tabular-nums text-gold-soft">
                          {r.index}
                        </span>
                        <span
                          className={`text-3xl tracking-tight ${
                            active ? "text-gold-soft" : "text-cream"
                          }`}
                        >
                          {t.nav[r.key]}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <button
                  onClick={toggle}
                  className="flex items-center gap-2 text-sm font-semibold tracking-wide text-cream-soft"
                >
                  <span className={locale === "fr" ? "text-cream" : ""}>Français</span>
                  <span className="text-cream/30">/</span>
                  <span className={locale === "ar" ? "text-cream" : ""}>العربية</span>
                </button>
                <Link href="/contact" className="btn btn-light h-12 w-full">
                  {t.nav.cta}
                  <IconArrow className="rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
