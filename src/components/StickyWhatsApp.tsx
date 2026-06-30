"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { IconWhatsApp } from "./icons";

export function StickyWhatsApp() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/212000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.aria.whatsapp}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 end-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-forest text-cream shadow-[0_12px_30px_-8px_rgba(17,36,26,0.6)] transition-colors duration-300 hover:bg-forest-900 lg:hidden"
        >
          <IconWhatsApp width={26} height={26} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
