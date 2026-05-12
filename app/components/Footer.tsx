"use client";

import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import WillizeLogo from "./WillizeLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-4 px-6 border-t"
      style={{ borderColor: "var(--border)", background: "var(--background-alt)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: logo + socials */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2 font-bold text-base group"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="block rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{ boxShadow: "0 4px 12px rgba(37,99,235,0.25)" }}
            >
              <WillizeLogo size={28} />
            </span>
            <span className="gradient-text tracking-tight">Willize</span>
          </a>

          <div className="flex items-center gap-1.5">
            {[
              { icon: GithubIcon, href: "https://github.com/linwaiyans", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/linwaiyan", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200"
                style={{ borderColor: "var(--border-strong)", color: "var(--muted)", background: "var(--card)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: copyright */}
        <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
          © {year} Willize. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
