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
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-semibold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
