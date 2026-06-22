"use client";

/**
 * Hero background: soft animated gradient mesh (three slow drifting blobs) over
 * a faint dot grid, masked to fade at the edges. Light, airy, no neon/3D.
 * All animation is CSS and suppressed under prefers-reduced-motion (global rule).
 */
export default function SubtleBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(9,9,11,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 35%, transparent 100%)",
        }}
      />

      {/* Gradient mesh blobs */}
      <div
        className="mesh-a absolute -top-[20%] left-[8%] h-[55vh] w-[55vh] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 70%)" }}
      />
      <div
        className="mesh-b absolute top-[10%] right-[6%] h-[50vh] w-[50vh] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="mesh-c absolute bottom-[-10%] left-[35%] h-[45vh] w-[45vh] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }}
      />

      {/* Wash to keep text legible */}
      <div className="absolute inset-0 bg-[var(--background)]/30" />
    </div>
  );
}
