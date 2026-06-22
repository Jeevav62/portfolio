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
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
    outline:
      "border border-[var(--border-strong)] text-[var(--foreground)] hover:bg-[var(--surface-subtle)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
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
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
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
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </motion.button>
  );
}
