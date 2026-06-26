"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`mb-12 flex flex-col gap-3 ${alignCls} ${align === "center" ? "max-w-2xl" : ""}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2.5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-7 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-70" />
          <span className="eyebrow">{eyebrow}</span>
          {align === "center" && (
            <span className="h-px w-7 bg-gradient-to-l from-[var(--accent)] to-transparent opacity-70" />
          )}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-[2rem] md:text-[2.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-[var(--muted)] text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
