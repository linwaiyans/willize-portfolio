// Animated SVG banners for each project — themed to the topic, no static blue.

/* ---------- Trainer (athletic sneaker) silhouette for SOLECIAL ----------
   Side-profile athletic shoe with sole, midsole, upper, heel cup, swoosh,
   and laces. Two-tone colourway so each shoe reads as a real trainer. */
function Trainer({
  className = "",
  upper = "#ffffff",
  accent = "#3b82f6",
  sole = "#0f172a",
  opacity = 0.95,
}: {
  className?: string;
  upper?: string;
  accent?: string;
  sole?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 50"
      fill="none"
      style={{ opacity }}
      aria-hidden
    >
      {/* Outsole (dark base) */}
      <path
        d="M3 38 Q3 42 7 42 L88 42 Q94 42 95 38 L94 35 Q90 33 86 32 L3 32 Z"
        fill={sole}
      />
      {/* Outsole tread marks */}
      {[14, 24, 34, 44, 54, 64, 74, 84].map((x) => (
        <rect key={x} x={x} y={38} width="2" height="4" fill="#fff" opacity="0.25" />
      ))}
      {/* White midsole stripe */}
      <path
        d="M3 32 L86 32 Q90 33 94 35 L94 36 L3 36 Z"
        fill="#ffffff"
      />
      {/* Upper body (toe → vamp → heel) */}
      <path
        d="M3 32 L8 24 Q14 18 24 16 L42 11 Q52 9 62 12 L80 18 Q88 22 90 27 L92 32 Z"
        fill={upper}
      />
      {/* Heel cup (raised collar at back) */}
      <path
        d="M78 18 Q86 18 90 24 L92 32 L82 32 L80 26 Z"
        fill={upper}
        stroke={sole}
        strokeWidth="0.4"
        strokeOpacity="0.4"
      />
      {/* Side accent / swoosh */}
      <path
        d="M18 30 Q34 22 58 24 Q72 25 84 30"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tongue */}
      <path
        d="M40 14 L42 22 L52 22 L54 13 Z"
        fill={upper}
        stroke={sole}
        strokeOpacity="0.25"
        strokeWidth="0.4"
      />
      {/* Laces — three horizontal pairs */}
      {[15, 18, 21].map((y) => (
        <g key={y}>
          <line x1="40" y1={y} x2="54" y2={y - 1} stroke={sole} strokeWidth="0.9" strokeLinecap="round" opacity="0.85" />
          <circle cx="40" cy={y} r="0.6" fill={sole} opacity="0.7" />
          <circle cx="54" cy={y - 1} r="0.6" fill={sole} opacity="0.7" />
        </g>
      ))}
      {/* Eyelet panel highlight */}
      <path d="M38 14 L42 22 L40 23 L36 16 Z" fill={accent} opacity="0.18" />
    </svg>
  );
}

/* ---------- SOLECIAL banner: dark surface + drifting sneakers + price tags ---------- */
export function SolecialBanner() {
  return (
    <div
      className="h-52 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #312e81 100%)",
      }}
    >
      {/* Soft grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute -top-12 -left-10 w-44 h-44 rounded-full blur-2xl"
        style={{ background: "rgba(96, 165, 250, 0.45)" }}
      />
      <div
        className="absolute -bottom-10 -right-12 w-40 h-40 rounded-full blur-2xl"
        style={{ background: "rgba(168, 85, 247, 0.4)" }}
      />

      {/* Drifting trainers */}
      <div className="absolute inset-0">
        <Trainer
          className="absolute top-5 left-6 w-28 drift-1"
          upper="#ffffff"
          accent="#3b82f6"
          sole="#0f172a"
          opacity={0.95}
        />
        <Trainer
          className="absolute top-20 right-6 w-32 drift-2"
          upper="#fcd34d"
          accent="#0f172a"
          sole="#1f2937"
          opacity={0.9}
        />
        <Trainer
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 drift-3"
          upper="#f472b6"
          accent="#ffffff"
          sole="#0f172a"
          opacity={0.9}
        />
      </div>

      {/* Floating price tags */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-4 right-1/3 text-[10px] font-bold px-2 py-1 rounded-md text-white bob-1"
          style={{ background: "rgba(34, 197, 94, 0.9)" }}>$129</span>
        <span className="absolute bottom-10 left-12 text-[10px] font-bold px-2 py-1 rounded-md text-white bob-2"
          style={{ background: "rgba(236, 72, 153, 0.9)" }}>$199</span>
        <span className="absolute top-1/2 right-6 text-[10px] font-bold px-2 py-1 rounded-md text-white bob-3"
          style={{ background: "rgba(59, 130, 246, 0.9)" }}>SALE</span>
      </div>

      {/* Title overlay */}
      <div className="absolute inset-x-0 bottom-3 text-center pointer-events-none">
        <p className="text-white/90 text-xs font-mono tracking-[0.4em] uppercase">E-Commerce</p>
      </div>
    </div>
  );
}

/* ---------- IoT Fall Detection: stairs + falling elderly figure + alarm ---------- */
export function FallDetectionBanner() {
  return (
    <div
      className="h-52 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #042f2e 0%, #115e59 45%, #1e3a8a 100%)",
      }}
    >
      {/* Soft scanline grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(94, 234, 212, 0.18) 0 1px, transparent 1px 22px)",
        }}
      />

      {/* Stairs descending from upper-right to lower-left */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="step-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="100%" stopColor="#134e4a" />
          </linearGradient>
        </defs>
        {/* 5 descending steps */}
        {[
          { x: 230, y: 60 },
          { x: 200, y: 90 },
          { x: 170, y: 120 },
          { x: 140, y: 150 },
          { x: 110, y: 180 },
        ].map((s, i) => (
          <g key={i}>
            {/* Step tread (top face) */}
            <path
              d={`M${s.x} ${s.y} L${s.x + 60} ${s.y} L${s.x + 60 - 8} ${s.y + 5} L${s.x - 8} ${s.y + 5} Z`}
              fill="url(#step-grad)"
              stroke="#5eead4"
              strokeWidth="0.6"
              strokeOpacity="0.4"
            />
            {/* Step riser (front face) */}
            <path
              d={`M${s.x - 8} ${s.y + 5} L${s.x + 60 - 8} ${s.y + 5} L${s.x + 60 - 8} ${s.y + 35} L${s.x - 8} ${s.y + 35} Z`}
              fill="#0f172a"
              opacity="0.6"
              stroke="#5eead4"
              strokeWidth="0.5"
              strokeOpacity="0.25"
            />
          </g>
        ))}

        {/* Motion arc — fall trajectory */}
        <path
          d="M270 50 Q230 75 175 130 Q145 165 130 185"
          stroke="rgba(252, 211, 77, 0.7)"
          strokeWidth="1.8"
          strokeDasharray="5 5"
          fill="none"
          className="dash-flow"
        />
        {/* Trajectory arrowhead */}
        <path
          d="M125 183 L132 188 L132 180 Z"
          fill="rgba(252, 211, 77, 0.85)"
        />
      </svg>

      {/* Standing elderly figure (top of stairs) — small */}
      <svg
        className="absolute top-6 right-10 w-12 h-16"
        viewBox="0 0 40 60"
        fill="none"
        aria-hidden
      >
        <circle cx="20" cy="8" r="5" fill="#fef3c7" />
        {/* Body */}
        <path
          d="M20 14 L20 36"
          stroke="#fef3c7"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Arms */}
        <path
          d="M11 22 L20 19 L29 22"
          stroke="#fef3c7"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Legs */}
        <path
          d="M20 36 L15 55 M20 36 L25 55"
          stroke="#fef3c7"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Cane */}
        <path
          d="M30 22 L33 50"
          stroke="#fcd34d"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M30 22 Q32 20 33 22"
          stroke="#fcd34d"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Fallen elderly figure (bottom-left) — tilted on the ground */}
      <svg
        className="absolute bottom-6 left-6 w-28 h-16 bob-1"
        viewBox="0 0 100 50"
        fill="none"
        aria-hidden
      >
        {/* Body lying / tilted */}
        <g transform="translate(50 30) rotate(-75)">
          <circle cx="0" cy="-22" r="6" fill="#fef3c7" />
          <path d="M0 -16 L0 14" stroke="#fef3c7" strokeWidth="3.4" strokeLinecap="round" />
          {/* Arms outstretched */}
          <path d="M-10 -6 L0 -10 L10 -6" stroke="#fef3c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Legs bent */}
          <path d="M0 14 L-6 22 M0 14 L6 22" stroke="#fef3c7" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* Dropped cane */}
        <line x1="70" y1="38" x2="92" y2="42" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 38 Q67 36 68 34" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>

      {/* Alarm pulses radiating from the fallen figure */}
      <div className="absolute" style={{ left: 60, bottom: 38 }}>
        {[0, 0.9, 1.8].map((d, i) => (
          <span
            key={i}
            className="absolute block rounded-full ripple"
            style={{
              width: 70,
              height: 70,
              border: "2px solid rgba(248, 113, 113, 0.75)",
              left: -35,
              top: -35,
              animationDelay: `-${d}s`,
            }}
          />
        ))}
      </div>

      {/* Alarm icon (bell + waves) top-left */}
      <svg
        className="absolute top-4 left-4 w-10 h-10 bob-2"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
      >
        <path
          d="M16 4 Q22 4 22 11 L22 18 L24 22 L8 22 L10 18 L10 11 Q10 4 16 4 Z"
          fill="rgba(248, 113, 113, 0.95)"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="26" r="2" fill="#fff" />
        {/* sound waves */}
        <path d="M5 11 Q3 16 5 21" stroke="#fca5a5" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M27 11 Q29 16 27 21" stroke="#fca5a5" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>

      {/* Live alert pill (top-right) */}
      <div
        className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
        style={{ background: "rgba(220, 38, 38, 0.95)", color: "#fff" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        Fall Detected
      </div>

      {/* Telegram-style notification bubble */}
      <div
        className="absolute bottom-12 right-6 px-3 py-1.5 rounded-lg rounded-tr-none text-[10px] font-mono bob-3"
        style={{
          background: "rgba(15, 23, 42, 0.85)",
          color: "#fef3c7",
          border: "1px solid rgba(248, 113, 113, 0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        <span className="text-red-300 font-bold">!</span> Fall on stairs
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-2 text-center pointer-events-none">
        <p className="text-white/90 text-[10px] font-mono tracking-[0.4em] uppercase">
          IoT Fall Alarm
        </p>
      </div>
    </div>
  );
}

/* ---------- Big Data Fire Detection: animated flames + smoke + sensor data ---------- */
export function FireDetectionBanner({ tall = false }: { tall?: boolean }) {
  return (
    <div
      className={`${tall ? "h-72 md:h-80" : "h-52"} relative overflow-hidden`}
      style={{
        background:
          "linear-gradient(135deg, #1a0a0a 0%, #7c2d12 40%, #ea580c 100%)",
      }}
    >
      {/* Data grid backdrop */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Smoke puffs */}
      <div className={`absolute ${tall ? "bottom-20 right-24" : "bottom-12 left-1/2 -translate-x-1/2"}`}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`absolute block rounded-full smoke-${i + 1}`}
            style={{
              width: 30 + i * 6,
              height: 30 + i * 6,
              background: "rgba(148, 163, 184, 0.5)",
              filter: "blur(8px)",
              left: i * 14 - 22,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* Flames cluster */}
      <div className={`absolute bottom-2 ${tall ? "right-14" : "left-1/2 -translate-x-1/2"} flex items-end gap-1`}>
        {/* Outer flame */}
        <svg className="w-12 h-20 flicker-2" viewBox="0 0 40 64" aria-hidden>
          <path d="M20 4 C 10 18, 6 28, 12 40 C 4 44, 4 56, 20 60 C 36 56, 36 44, 28 40 C 34 28, 30 18, 20 4 Z"
            fill="url(#flame-outer)" />
          <defs>
            <linearGradient id="flame-outer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="55%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
        </svg>
        {/* Main flame */}
        <svg className="w-16 h-24 flicker-1" viewBox="0 0 40 64" aria-hidden>
          <path d="M20 2 C 8 16, 4 28, 12 40 C 2 44, 4 58, 20 62 C 36 58, 38 44, 28 40 C 36 28, 32 16, 20 2 Z"
            fill="url(#flame-main)" />
          <path d="M20 14 C 14 24, 12 32, 16 40 C 12 44, 14 54, 20 56 C 26 54, 28 44, 24 40 C 28 32, 26 24, 20 14 Z"
            fill="#fde047" opacity="0.8" />
          <defs>
            <linearGradient id="flame-main" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="40%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
        </svg>
        {/* Outer flame */}
        <svg className="w-12 h-20 flicker-3" viewBox="0 0 40 64" aria-hidden>
          <path d="M20 4 C 10 18, 6 28, 12 40 C 4 44, 4 56, 20 60 C 36 56, 36 44, 28 40 C 34 28, 30 18, 20 4 Z"
            fill="url(#flame-outer2)" />
          <defs>
            <linearGradient id="flame-outer2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="55%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating data readouts */}
      <div className="absolute top-5 left-5 px-2.5 py-1.5 rounded-md font-mono text-[10px] text-white bob-1"
        style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(251, 146, 60, 0.6)" }}>
        TEMP: <span className="text-orange-300 font-bold">87°C</span>
      </div>
      <div className="absolute top-5 right-5 px-2.5 py-1.5 rounded-md font-mono text-[10px] text-white bob-2"
        style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(248, 113, 113, 0.6)" }}>
        CO: <span className="text-red-300 font-bold">142 ppm</span>
      </div>
      <div className={`absolute ${tall ? "top-20 right-6" : "top-1/2 left-6 -translate-y-1/2"} px-2.5 py-1.5 rounded-md font-mono text-[10px] text-white bob-3`}
        style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(250, 204, 21, 0.6)" }}>
        SMOKE: <span className="text-yellow-300 font-bold">HIGH</span>
      </div>

      {/* Sensor dots */}
      <div className={`absolute ${tall ? "top-36 right-10" : "top-1/2 right-10 -translate-y-1/2"} flex gap-1.5`}>
        <span className="w-2 h-2 rounded-full bg-yellow-300 pulse-soft" />
        <span className="w-2 h-2 rounded-full bg-orange-400 pulse-soft-2" />
        <span className="w-2 h-2 rounded-full bg-red-500 pulse-soft-3" />
      </div>

      {/* Alert pill — only on compact banner */}
      {!tall && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ background: "rgba(220, 38, 38, 0.95)", color: "#fff" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          Big Data Fire Alarm
        </div>
      )}
    </div>
  );
}
