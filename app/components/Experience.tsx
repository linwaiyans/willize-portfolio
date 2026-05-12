"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "General Assistant",
    company: "Iceland Foods",
    location: "Bristol, United Kingdom",
    period: "October 2025 — Present",
    current: true,
    description:
      "Working part-time alongside my BSc studies, supporting a busy retail store and learning the value of dependable, customer-first service.",
    points: [
      "Manage online order picking and processing — aiming for 100% accuracy and on-time deliveries every shift",
      "Handle stock replenishment, inventory control, and customer-facing POS transactions with high accuracy",
      "Operate confidently in a fast-paced, customer-focused environment that demands quick thinking",
    ],
    skills: ["Time Management", "Problem Solving", "Customer Service", "Attention to Detail", "Teamwork"],
  },
  {
    title: "Freelance Web Developer",
    company: "Crown Education",
    location: "Yangon, Myanmar",
    period: "February 2025 — July 2025",
    current: false,
    description:
      "Worked one-on-one with GCSE students, helping them understand web development through real, working examples and patient guidance.",
    points: [
      "Guided GCSE students in their technical studies using clear, patient instruction tailored to each learner",
      "Built and presented sample website projects to demonstrate how HTML, CSS, and JavaScript work together",
      "Supported students in completing their assignment projects successfully and on time",
    ],
    skills: ["HTML / CSS / JavaScript", "Mentoring", "Communication", "Empathy", "Project Planning"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03"
          eyebrow="work experience"
          title="Where"
          highlight="I've worked"
          subtitle="Real-world roles that shaped how I think, communicate, and ship."
        />

        <div className="relative">
          <div
            className="absolute left-6 top-4 bottom-4 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, var(--accent), transparent)" }}
          />

          <div className="space-y-7">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 80} className="md:pl-20 relative">
                <div
                  className="hidden md:flex absolute left-0 top-7 w-12 h-12 rounded-2xl items-center justify-center text-white"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                    boxShadow: "0 10px 25px rgba(37,99,235,0.4), 0 0 0 4px var(--background)",
                  }}
                >
                  <Briefcase size={18} />
                </div>

                <div className="card card-hover p-7 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-xl md:text-2xl">{exp.title}</h3>
                        {exp.current && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                            style={{ background: "linear-gradient(135deg, #10b981, #059669)", color: "#fff" }}
                          >
                            ● Live
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-base" style={{ color: "var(--accent)" }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs space-y-1.5" style={{ color: "var(--muted)" }}>
                      <p className="flex items-center gap-1.5 md:justify-end font-mono">
                        <Calendar size={12} /> {exp.period}
                      </p>
                      <p className="flex items-center gap-1.5 md:justify-end">
                        <MapPin size={12} /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm md:text-base mb-5 leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.points.map((pt) => (
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
                      Skills Developed
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full font-medium"
                          style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
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
