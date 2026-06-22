"use client";

/**
 * Infinite horizontal marquee. Content is duplicated so the -50% loop is
 * seamless. Pauses on hover. Edges faded via mask. CSS animation respects
 * the global reduced-motion rule.
 */
export default function Marquee({ items }: { items: string[] }) {
  return (
    <div
      className="marquee-track relative overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-sm text-[var(--muted)]"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
