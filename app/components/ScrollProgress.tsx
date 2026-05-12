"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setP(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, #2563eb, #38bdf8, #0ea5e9)",
          boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
        }}
      />
    </div>
  );
}
