"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 50, mass: 0.3 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 50, mass: 0.3 });
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 30, mass: 0.6 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as Element;
      setHovering(!!t.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches)
    return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[var(--accent)]"
        style={{
          left: dotX,
          top: dotY,
          width: hovering ? 6 : 7,
          height: hovering ? 6 : 7,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        transition={{ width: { duration: 0.15 }, height: { duration: 0.15 } }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-[var(--accent)]"
        style={{
          left: ringX,
          top: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.5 : 0,
        }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
