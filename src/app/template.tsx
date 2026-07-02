"use client";

import { motion } from "framer-motion";

/* Remounts on every route change → gives each page a soft cinematic entrance. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
