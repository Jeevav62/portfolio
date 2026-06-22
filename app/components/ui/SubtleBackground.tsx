"use client";

/**
 * Subtle monochrome background for the hero.
 * Faint dot grid + a slow, low-opacity light wash. No neon, no 3D.
 * Animation is CSS-only and suppressed under prefers-reduced-motion (global rule).
 */
export default function SubtleBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(9,9,11,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, #000 40%, transparent 100%)",
        }}
      />
      {/* Slow drifting light wash */}
      <div
        className="absolute -top-1/3 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full blur-3xl drift"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, 4%) scale(1.08); }
        }
        .drift { animation: drift 16s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
