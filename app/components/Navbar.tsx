"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import WillizeLogo from "./WillizeLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#publication", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...links.map((l) => l.href.slice(1))];
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="px-4 md:px-6">
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "px-4 md:px-6 py-2.5 rounded-full glass" : "px-2"
          }`}
          style={{ boxShadow: scrolled ? "var(--shadow)" : "none" }}
        >
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2.5 font-bold text-lg shrink-0 group"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="block rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
              style={{ boxShadow: "0 6px 16px rgba(37,99,235,0.3)" }}
            >
              <WillizeLogo size={36} />
            </span>
            <span className="gradient-text hidden sm:inline tracking-tight">Willize</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--muted)",
                      background: isActive ? "var(--accent-soft)" : "transparent",
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: "var(--accent)", boxShadow: "0 6px 16px rgba(37,99,235,0.3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Let&apos;s Talk
            </button>
            <button
              className="lg:hidden p-2"
              style={{ color: "var(--foreground)" }}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden mx-4 mt-2 rounded-2xl border p-4 glass"
          style={{ borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-base font-medium w-full text-left py-2.5 px-3 rounded-lg transition-colors"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--foreground-muted)",
                      background: isActive ? "var(--accent-soft)" : "transparent",
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
