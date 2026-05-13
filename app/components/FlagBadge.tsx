/**
 * Circular flag badge backed by flagcdn.com — a free CDN serving
 * official country-flag SVGs. No optimisation needed (the SVGs are
 * already tiny), so we use a plain <img> tag.
 */
type FlagCode = "GB" | "MM" | "KR";

const NAMES: Record<FlagCode, string> = {
  GB: "United Kingdom",
  MM: "Myanmar",
  KR: "South Korea",
};

export default function FlagBadge({
  code,
  size = 32,
}: {
  code: FlagCode;
  size?: number;
}) {
  const url = `https://flagcdn.com/${code.toLowerCase()}.svg`;
  return (
    <span
      role="img"
      aria-label={NAMES[code]}
      title={NAMES[code]}
      className="inline-flex items-center justify-center rounded-full overflow-hidden shrink-0"
      style={{
        width: size,
        height: size,
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(0,0,0,0.08)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt={NAMES[code]}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </span>
  );
}
