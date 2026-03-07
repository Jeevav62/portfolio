"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "none";
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "none",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  const glowStyles = {
    blue: "hover:shadow-blue-500/30 hover:border-blue-500/50",
    purple: "hover:shadow-purple-500/30 hover:border-purple-500/50",
    cyan: "hover:shadow-cyan-500/30 hover:border-cyan-500/50",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -8,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={`
        glass rounded-2xl p-6
        transition-all duration-500
        ${glowColor !== "none" ? glowStyles[glowColor] : ""}
        ${hover ? "hover:shadow-2xl" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
