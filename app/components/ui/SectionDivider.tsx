"use client";

import { motion } from "framer-motion";

/** Slim ornamental gold rule between sections — centered diamond + tapered hairlines. */
export default function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-center px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full items-center justify-center gap-4"
        style={{ transformOrigin: "center" }}
        aria-hidden
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--accent)] opacity-25" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[var(--accent)] opacity-60 shadow-[0_0_10px_var(--accent-glow)]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--accent)] opacity-25" />
      </motion.div>
    </div>
  );
}
