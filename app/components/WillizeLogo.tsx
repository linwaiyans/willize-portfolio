type LogoProps = {
  size?: number;
  className?: string;
  /** When true, renders just the mark (no rounded square background). */
  mark?: boolean;
};

/**
 * Willize brand mark.
 * A bold geometric W formed by clean strokes over a gradient tile,
 * with a small accent dot to distinguish it from a plain letter W.
 */
export default function WillizeLogo({ size = 40, className = "", mark = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Willize logo"
      role="img"
    >
      <defs>
        <linearGradient id="willize-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="willize-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rounded tile background (skipped in mark-only mode) */}
      {!mark && (
        <>
          <rect width="48" height="48" rx="12" fill="url(#willize-grad)" />
          <rect width="48" height="48" rx="12" fill="url(#willize-shine)" />
        </>
      )}

      {/* W strokes: two interlocked V shapes, drawn as one continuous path */}
      <path
        d="M9 13 L16.5 35 L24 21.5 L31.5 35 L39 13"
        stroke={mark ? "url(#willize-grad)" : "#ffffff"}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center inner-V accent for depth */}
      <path
        d="M19 18 L24 28 L29 18"
        stroke={mark ? "url(#willize-grad)" : "#ffffff"}
        strokeOpacity={mark ? "0.45" : "0.55"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Tiny accent dot — the Willize signature */}
      <circle
        cx="40"
        cy="11"
        r="2.4"
        fill={mark ? "#22d3ee" : "#ffffff"}
      />
    </svg>
  );
}
