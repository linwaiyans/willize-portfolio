import Reveal from "./Reveal";

export default function SectionHeader({
  number,
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  number: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14 md:mb-16">
      <Reveal>
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-5"
          style={{ borderColor: "var(--border-strong)", background: "var(--card)" }}>
          <span className="section-number text-xs font-mono font-bold" style={{ color: "var(--accent)" }}>
            {number}
          </span>
          <span className="w-1 h-1 rounded-full" style={{ background: "var(--muted)" }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          {title}
          {highlight && <> <span className="gradient-text">{highlight}</span></>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
