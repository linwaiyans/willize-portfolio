import { GraduationCap, Calendar, Target, Briefcase, MapPin } from "lucide-react";

/**
 * Fresh Graduate info card.
 * Focused summary of academic status and immediate availability.
 */
export default function IdCard() {
  return (
    <div
      className="relative rounded-2xl border overflow-hidden"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Top accent strip */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #22d3ee 100%)",
        }}
      />

      <div className="p-6">
        {/* Header: icon + label */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), #38bdf8)",
              boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div>
            <p
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
            >
              Status
            </p>
            <h3
              className="text-xl font-black leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              Fresh Graduate
            </h3>
          </div>
        </div>

        {/* Degree block */}
        <div
          className="p-4 rounded-xl mb-4 border"
          style={{
            background: "var(--background-alt)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "var(--muted)" }}
          >
            Degree
          </p>
          <p
            className="font-bold text-sm leading-snug mb-1"
            style={{ color: "var(--foreground)" }}
          >
            BSc (Hons) Information Technology
          </p>
          <p className="text-xs" style={{ color: "var(--accent)" }}>
            University of the West of England, Bristol
          </p>
        </div>

        {/* Detail rows */}
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-text)",
              }}
            >
              <Calendar size={14} />
            </span>
            <div>
              <p
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Graduating
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                May 2026
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-text)",
              }}
            >
              <Target size={14} />
            </span>
            <div>
              <p
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Target Grade
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                First-Class Honours
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-text)",
              }}
            >
              <Briefcase size={14} />
            </span>
            <div>
              <p
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Looking for
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                Full-time developer roles
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-text)",
              }}
            >
              <MapPin size={14} />
            </span>
            <div>
              <p
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "var(--muted)" }}
              >
                Open to work in
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                United Kingdom — remote, hybrid, or on-site
              </p>
            </div>
          </li>
        </ul>

        {/* Availability footer */}
        <div
          className="mt-5 pt-4 flex items-center justify-between border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: "var(--muted)" }}
          >
            Availability
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available immediately
          </span>
        </div>
      </div>
    </div>
  );
}
