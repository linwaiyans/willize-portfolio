"use client";

import { useState } from "react";
import {
  Code2,
  Library,
  Database,
  Wrench,
  HeartHandshake,
  MessagesSquare,
  Clock,
  Lightbulb,
  Users,
  Target,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Skill = { name: string; level: number };
type Group = { title: string; icon: typeof Code2; description: string; items: Skill[] };

const technicalGroups: Group[] = [
  {
    title: "Languages",
    icon: Code2,
    description: "The languages I reach for daily",
    items: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 88 },
      { name: "Java", level: 82 },
      { name: "C++", level: 78 },
      { name: "PHP", level: 80 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: Library,
    description: "Tools that help me ship faster",
    items: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Vue", level: 75 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description: "Where the data lives",
    items: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Methods",
    icon: Wrench,
    description: "How I get the job done",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Arduino IDE", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Agile Methodologies", level: 80 },
      { name: "Microsoft Office", level: 90 },
    ],
  },
];

const personalSkills = [
  { icon: Lightbulb, title: "Problem Solving", text: "From debugging React components to designing IoT alert algorithms — I love untangling tricky problems." },
  { icon: Clock, title: "Time Management", text: "Balancing studies, freelance work, and a part-time job has made me a careful planner." },
  { icon: Users, title: "Teamwork", text: "Comfortable in collaborative group projects, from academic teams to research co-authorship." },
  { icon: MessagesSquare, title: "Communication", text: "Patient explainer — I've mentored GCSE students and presented research on an international stage." },
  { icon: Target, title: "Self-Motivation", text: "I built solo projects from scratch and earned a Distinction. I don't wait to be told what to do." },
  { icon: HeartHandshake, title: "Customer Focus", text: "Iceland Foods taught me that polite, accurate, and quick is the recipe for great service." },
];

export default function Skills() {
  const [tab, setTab] = useState<"technical" | "personal">("technical");

  return (
    <section id="skills" className="py-24 md:py-32 px-6" style={{ background: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="02"
          eyebrow="my toolkit"
          title="Skills &"
          highlight="Tools"
          subtitle="Switch between my technical stack and personal qualities."
        />

        <Reveal variant="scale" className="flex justify-center mb-12">
          <div
            className="inline-flex p-1.5 rounded-full border"
            style={{ background: "var(--card)", borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
          >
            {(["technical", "personal"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize"
                style={{
                  background: tab === t ? "var(--accent)" : "transparent",
                  color: tab === t ? "#fff" : "var(--muted)",
                  boxShadow: tab === t ? "0 8px 20px rgba(37,99,235,0.3)" : "none",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "technical" ? (
          <div className="grid md:grid-cols-2 gap-5">
            {technicalGroups.map(({ title, icon: Icon, description, items }, gi) => (
              <Reveal key={title} delay={gi * 80} className="card card-hover p-6 md:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                      color: "#fff",
                      boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{description}</p>
                  </div>
                </div>
                <div className="space-y-3.5">
                  {items.map(({ name, level }, i) => (
                    <Reveal key={name} delay={gi * 80 + i * 30}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium">{name}</span>
                        <span className="text-xs font-mono font-bold" style={{ color: "var(--accent)" }}>{level}%</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${level}%`,
                            background: "linear-gradient(90deg, #1d4ed8, #2563eb, #38bdf8)",
                            boxShadow: "0 0 10px rgba(37,99,235,0.4)",
                          }}
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {personalSkills.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} variant="scale" delay={i * 70} className="card card-hover p-6 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                    color: "#fff",
                    boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
