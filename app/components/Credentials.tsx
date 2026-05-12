"use client";

import { Award, Languages as LangIcon, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { GoogleLogo, CVSHealthLogo } from "./CompanyLogos";

const certificates = [
  {
    title: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    date: "July 2025",
    Logo: GoogleLogo,
    accent: "#4285F4",
  },
  {
    title: "CVS Health Retail Customer Service",
    issuer: "CVS Health",
    date: "June 2025",
    Logo: CVSHealthLogo,
    accent: "#cc0000",
  },
];

const languages = [
  { name: "English", level: "Full Professional", percent: 95 },
  { name: "Burmese", level: "Native", percent: 100 },
  { name: "Korean", level: "Elementary", percent: 35 },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-32 px-6" style={{ background: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="07"
          eyebrow="extras"
          title="Certificates &"
          highlight="Languages"
          subtitle="A few extras that round out the picture."
        />

        <div className="grid md:grid-cols-2 gap-7">
          {/* Certificates */}
          <Reveal variant="left">
            <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
              <Award size={20} style={{ color: "var(--accent)" }} />
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((c, i) => (
                <Reveal
                  key={c.title}
                  delay={i * 80}
                  className="card card-hover p-5 flex items-center gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden p-1.5"
                    style={{
                      background: "#ffffff",
                      boxShadow: `0 8px 20px ${c.accent}33`,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <c.Logo size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base leading-tight mb-1">{c.title}</h4>
                    <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{c.issuer}</p>
                    <p className="text-xs mt-1 font-mono" style={{ color: "var(--muted)" }}>{c.date}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal variant="right">
            <h3 className="font-bold text-xl mb-5 flex items-center gap-2">
              <LangIcon size={20} style={{ color: "var(--accent)" }} />
              Languages
            </h3>
            <div className="card p-6 space-y-5">
              {languages.map((l, i) => (
                <Reveal key={l.name} delay={i * 70}>
                  <div className="flex items-center justify-between mb-2">
                    <span>
                      <span className="block leading-tight font-semibold">{l.name}</span>
                      <span className="block text-xs font-normal" style={{ color: "var(--muted)" }}>{l.level}</span>
                    </span>
                    <span className="text-xs font-mono font-bold" style={{ color: "var(--accent)" }}>{l.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${l.percent}%`,
                        background: "linear-gradient(90deg, #1d4ed8, #2563eb, #38bdf8)",
                        boxShadow: "0 0 10px rgba(37,99,235,0.4)",
                      }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-5 card p-5 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30"
                style={{ background: "var(--accent)" }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} style={{ color: "var(--accent)" }} />
                  <span className="font-bold text-sm" style={{ color: "var(--accent)" }}>
                    Right to Work in the UK
                  </span>
                  <span className="ml-auto relative flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                </div>
                <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                  Eligible to work in the United Kingdom{" "}
                  <strong>full-time with unlimited hours</strong>. Ready to start immediately after
                  graduation.
                </p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
