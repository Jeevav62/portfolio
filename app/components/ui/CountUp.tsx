"use client";

import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `value` when scrolled into view.
 * `suffix`/`prefix` are static. Falls back to the final value under
 * reduced motion. Uses tabular-nums to avoid width jitter.
 */
export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.4,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: reduce ? 0 : duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce, mv]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
