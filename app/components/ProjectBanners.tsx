// Project banners — pure visual backdrops, no text.
// CSS gradients + lucide icons + animated decorative elements.

import { ShoppingBag, Footprints, AlertTriangle, Activity, Flame, Recycle, Leaf } from "lucide-react";

/* ────────────────────────────────────────────────────────────────────
   SOLECIAL — sneaker e-commerce
   ──────────────────────────────────────────────────────────────────── */
export function SolecialBanner() {
  return (
    <div
      className="h-52 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #312e81 80%, #4338ca 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-12 -left-12 w-56 h-56 rounded-full blur-3xl opacity-50 blob"
        style={{ background: "#3b82f6" }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-40 blob"
        style={{ background: "#a855f7", animationDelay: "-6s" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Centerpiece icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <ShoppingBag
          size={140}
          strokeWidth={1}
          className="text-white opacity-10 absolute"
        />
        <Footprints
          size={90}
          strokeWidth={1.3}
          className="text-white opacity-90 float drop-shadow-lg"
        />
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-3 text-center pointer-events-none">
        <p className="text-white/70 text-[10px] font-mono tracking-[0.4em] uppercase">
          E-Commerce
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────
   REGAIA — AI waste classification
   ──────────────────────────────────────────────────────────────────── */
export function RegaiaBanner() {
  return (
    <div
      className="h-52 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #052e16 0%, #14532d 40%, #166534 75%, #15803d 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-12 -left-12 w-56 h-56 rounded-full blur-3xl opacity-50 blob"
        style={{ background: "#22c55e" }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-35 blob"
        style={{ background: "#84cc16", animationDelay: "-6s" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Centerpiece icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Leaf
          size={140}
          strokeWidth={1}
          className="text-white opacity-10 absolute"
        />
        <Recycle
          size={90}
          strokeWidth={1.3}
          className="text-white opacity-90 float drop-shadow-lg"
        />
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-3 text-center pointer-events-none">
        <p className="text-white/70 text-[10px] font-mono tracking-[0.4em] uppercase">
          AI Classifier
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────
   IoT Fall Detection
   ──────────────────────────────────────────────────────────────────── */
export function FallDetectionBanner() {
  return (
    <div
      className="h-52 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #042f2e 0%, #115e59 45%, #1e3a8a 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-12 -left-12 w-56 h-56 rounded-full blur-3xl opacity-45 blob"
        style={{ background: "#5eead4" }}
      />
      <div
        className="absolute -bottom-16 -right-12 w-60 h-60 rounded-full blur-3xl opacity-35 blob"
        style={{ background: "#dc2626", animationDelay: "-5s" }}
      />

      {/* Scan lines */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(94,234,212,0.25) 0 1px, transparent 1px 24px)",
        }}
      />

      {/* Pulse rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1.0, 2.0].map((d, i) => (
          <span
            key={i}
            className="absolute block rounded-full ripple"
            style={{
              width: 90,
              height: 90,
              border: "2px solid rgba(248, 113, 113, 0.7)",
              left: -45,
              top: -45,
              animationDelay: `-${d}s`,
            }}
          />
        ))}
      </div>

      {/* Centerpiece icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Activity
          size={140}
          strokeWidth={1}
          className="text-white opacity-10 absolute"
        />
        <AlertTriangle
          size={84}
          strokeWidth={1.3}
          className="text-red-300 opacity-95 float drop-shadow-lg"
          fill="rgba(248,113,113,0.25)"
        />
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-3 text-center pointer-events-none">
        <p className="text-white/70 text-[10px] font-mono tracking-[0.4em] uppercase">
          IoT Device
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────
   Big Data Fire Detection — IEEE paper
   ──────────────────────────────────────────────────────────────────── */
export function FireDetectionBanner({
  tall = false,
  fill = false,
}: {
  tall?: boolean;
  /** When true, the banner fills its parent (use as an absolute background). */
  fill?: boolean;
}) {
  const sizeClass = fill
    ? "absolute inset-0"
    : tall
      ? "h-72 md:h-80"
      : "h-52";
  return (
    <div
      className={`${sizeClass} overflow-hidden`}
      style={{
        background:
          "linear-gradient(135deg, #1a0a0a 0%, #7c2d12 35%, #c2410c 70%, #f97316 100%)",
        position: fill ? "absolute" : "relative",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 rounded-full blur-3xl opacity-50 blob"
        style={{ background: "#fb923c" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40 blob"
        style={{ background: "#dc2626", animationDelay: "-7s" }}
      />

      {/* Data grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Centerpiece flames */}
      <div
        className={`absolute inset-0 flex items-center pointer-events-none ${tall ? "justify-end pr-12 md:pr-20" : "justify-center"}`}
      >
        <Flame
          size={tall ? 220 : 160}
          strokeWidth={0.8}
          className="text-yellow-200 opacity-15 absolute"
          fill="rgba(254, 240, 138, 0.15)"
        />
        <Flame
          size={tall ? 140 : 100}
          strokeWidth={1.2}
          className="text-yellow-100 opacity-95 float drop-shadow-2xl"
          fill="rgba(252, 211, 77, 0.7)"
          style={{ position: tall ? "relative" : undefined }}
        />
      </div>

      {/* Caption — compact card only (tall mode has its own title overlay) */}
      {!tall && (
        <div className="absolute inset-x-0 bottom-3 text-center pointer-events-none">
          <p className="text-white/80 text-[10px] font-mono tracking-[0.4em] uppercase">
            Big Data Fire Alarm
          </p>
        </div>
      )}
    </div>
  );
}
