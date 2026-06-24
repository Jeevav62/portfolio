"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
  download?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  icon,
  target,
  rel,
  download,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const variants = {
    primary:
      "bg-[var(--accent)] text-[#0a0800] hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]",
    outline:
      "border border-[var(--border-strong)] text-[var(--foreground)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-subtle)] hover:shadow-[0_0_16px_rgba(201,168,76,0.08)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const cls = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        className={cls}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        {children}
        {icon && <span className="flex items-center">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 0, scale: 0.98 }}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </motion.button>
  );
}
