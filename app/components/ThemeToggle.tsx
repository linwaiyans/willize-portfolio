"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
        color: "var(--accent)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
