"use client";

export default function SubtleBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fine dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, #000 30%, transparent 100%)",
        }}
      />

      {/* Gold gradient orbs */}
      <div
        className="mesh-a absolute -top-[15%] left-[5%] h-[60vh] w-[60vh] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="mesh-b absolute top-[15%] right-[4%] h-[50vh] w-[50vh] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(180,100,20,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="mesh-c absolute bottom-[-5%] left-[38%] h-[45vh] w-[45vh] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
      />

      {/* Dark vignette to keep text readable */}
      <div className="absolute inset-0 bg-[var(--background)]/60" />
    </div>
  );
}
