export default function HuggingFaceIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face */}
      <circle cx="16" cy="16" r="13.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Left eye */}
      <ellipse cx="11.5" cy="13.5" rx="2" ry="2.3" fill="currentColor" />
      <circle cx="12.2" cy="12.7" r="0.55" fill="white" />
      {/* Right eye */}
      <ellipse cx="20.5" cy="13.5" rx="2" ry="2.3" fill="currentColor" />
      <circle cx="21.2" cy="12.7" r="0.55" fill="white" />
      {/* Wide smile */}
      <path
        d="M9.5 18.5 Q16 24.5 22.5 18.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Teeth */}
      <path
        d="M10.5 19.5 Q16 22.5 21.5 19.5"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      {/* Blush */}
      <ellipse cx="7" cy="20" rx="2" ry="1.3" fill="currentColor" opacity="0.18" />
      <ellipse cx="25" cy="20" rx="2" ry="1.3" fill="currentColor" opacity="0.18" />
      {/* Hug arms */}
      <path
        d="M3.5 15 Q2 12 4 10.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28.5 15 Q30 12 28 10.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
