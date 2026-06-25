"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, className = "", maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-1, 1], [maxTilt, -maxTilt]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-maxTilt, maxTilt]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(rawX, [-1, 1], [0, 100]);
  const glareY = useTransform(rawY, [-1, 1], [0, 100]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width * 2 - 1);
    rawY.set((e.clientY - r.top) / r.height * 2 - 1);
  };

  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.1) 0%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}
