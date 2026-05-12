"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "BSc (Hons) Information Technology",
    school: "University of the West of England",
    location: "Bristol, United Kingdom",
    period: "September 2025 — May 2026",
    status: "In Progress",
    grade: "Targeting First-Class Honours",
    description:
      "Specializing in Artificial Intelligence and Big Data Analytics modules, while strengthening my foundation in advanced software development and business computing.",
    points: [
      "Awarded an international student scholarship for outstanding academic performance",
      "Building advanced, in-demand skills in data-driven systems and business computing",
      "Working hard to graduate with First-Class Honours — already loving the AI / Big Data modules",
    ],
    skills: ["Artificial Intelligence", "Big Data Analytics", "Business Computing", "Advanced Software Development"],
  },
  {
    degree: "Pearson BTEC Level 5 HND in Computing",
    school: "Info Myanmar College",
    location: "Yangon, Myanmar",
    period: "August 2022 — January 2025",
    status: "Completed",
    grade: "Distinction",
    description:
      "Specialized in Software Engineering, finishing with an overall Distinction grade through a practical, project-based curriculum.",
    points: [
      "Built a strong foundation in programming, system design, and database management",
      "Designed and delivered complex solo projects, sharpening self-motivation and problem-solving",
      "Developed teamwork, communication, and agile methodologies through intensive group projects",
    ],
    skills: ["Software Engineering", "System Design", "Database Management", "Agile", "Project Management"],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6" style={{ background: "var(--background-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          eyebrow="academic journey"
          title="My"
          highlight="Education"
          subtitle="From Yangon to Bristol — chasing distinction every step of the way."
        />

        <div className="relative">
          <div
            className="absolute left-6 top-4 bottom-4 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, var(--accent), transparent)" }}
          />

          <div className="space-y-7">
            {education.map((ed, i) => (
              <Reveal key={i} delay={i * 80} className="md:pl-20 relative">
                <div
                  className="hidden md:flex absolute left-0 top-7 w-12 h-12 rounded-2xl items-center justify-center"
                  style={{
                    background: "var(--card)",
                    border: "2px solid var(--accent)",
                    color: "var(--accent)",
                    boxShadow: "0 10px 25px rgba(37,99,235,0.2), 0 0 0 4px var(--background-alt)",
                  }}
                >
                  <GraduationCap size={18} />
                </div>

                <div className="card card-hover p-7 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-xl md:text-2xl">{ed.degree}</h3>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                          style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
                        >
                          {ed.status}
                        </span>
                      </div>
                      <p className="font-semibold text-base" style={{ color: "var(--accent)" }}>
                        {ed.school}
                      </p>
                    </div>
                    <div className="text-xs space-y-1.5" style={{ color: "var(--muted)" }}>
                      <p className="flex items-center gap-1.5 md:justify-end font-mono">
                        <Calendar size={12} /> {ed.period}
                      </p>
                      <p className="flex items-center gap-1.5 md:justify-end">
                        <MapPin size={12} /> {ed.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                      color: "#fff",
                      boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
                    }}
                  >
                    <Award size={14} />
                    {ed.grade}
                  </div>

                  <p className="text-sm md:text-base mb-5 leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    {ed.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {ed.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm" style={{ color: "var(--foreground-muted)" }}>
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-[10px] font-bold mb-2.5 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                      Key Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ed.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full font-medium border"
                          style={{
                            background: "var(--card)",
                            color: "var(--foreground-muted)",
                            borderColor: "var(--border-strong)",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
