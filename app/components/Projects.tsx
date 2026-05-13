"use client";

import { Calendar, MapPin, Award } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import {
    SolecialBanner,
    FallDetectionBanner,
    RegaiaBanner,
} from "./ProjectBanners";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const projects = [
    {
        title: "SOLECIAL",
        subtitle: "Sneaker E-commerce Platform",
        Banner: SolecialBanner,
        tagline: "A full-stack online sneaker store, built from scratch.",
        period: "Aug 2025 — Oct 2025",
        location: "Info Myanmar College",
        highlights: [
            "Developed a complete e-commerce site using HTML, CSS, JavaScript, PHP, Bootstrap, and MySQL",
            "Implemented user authentication, dynamic product catalogues, shopping cart, and a secure checkout flow",
            "Designed a clean, responsive UI/UX inspired by Puma and Adidas — focused on a smooth user journey",
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "MySQL"],
        skills: ["Full Stack", "DB Design", "UI/UX", "Auth"],
    },
    {
        title: "IoT Fall Detection",
        subtitle: "Smart Safety Device for Elderly Care",
        Banner: FallDetectionBanner,
        tagline: "A smart safety device designed and built solo.",
        period: "Aug 2024 — Jan 2025",
        location: "Info Myanmar College",
        highlights: [
            "Designed and built the entire system on my own, with primary research and user surveys",
            "Programmed sensor logic and data transmission using C++ (Arduino IDE) and Python",
            "Engineered a multi-stage alert system: local alarm, accurate fall detection, and Telegram notifications",
            "Earned a Distinction grade and presented at the university 'Smart Home' project show",
        ],
        tech: ["C++", "Arduino IDE", "Python", "IoT", "Telegram API"],
        skills: ["Research", "Hardware", "System Design", "Solo Build"],
        award: "Distinction",
    },
    {
        title: "REGAIA",
        subtitle: "AI Waste Classification Web App",
        Banner: RegaiaBanner,
        tagline:
            "An AI-powered web app that classifies waste from photos to help users recycle correctly.",
        period: "Dec 2025 — Apr 2026",
        location: "University of the West of England",
        highlights: [
            "Owned the user interface: designed and built a fully responsive, multi-page web frontend across Home, About, Team, User Guide, Live Cam, and Testing screens",
            "Created a smooth image-upload experience with drag-and-drop, instant preview, and clear classification result cards — focused on accessibility throughout",
            "Wired the UI to a Flask + PyTorch backend via JSON endpoints, integrating a custom-trained CNN classifier and a real-time YOLOv8 live-camera detection pipeline",
            "Built a consistent earth-tones design system (custom CSS variables, animated background, Cinzel + DM Sans typography) for a calm, nature-aligned brand feel",
            "Delivered as a team AI assignment at UWE Bristol with the model classifying cardboard, glass, metal, paper, plastic, and trash",
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Flask", "PyTorch", "YOLOv8"],
        skills: [
            "UI/UX Design",
            "Responsive Web",
            "API Integration",
            "Accessibility",
            "Team Collaboration",
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    number="06"
                    eyebrow="featured work"
                    title="Things I've"
                    highlight="built"
                    subtitle="Full-stack web apps and IoT systems I've shipped during my studies."
                />

                <div className="grid lg:grid-cols-2 gap-7">
                    {projects.map((p, i) => (
                        <Reveal key={p.title} variant="scale" delay={i * 100}>
                            <div className="card card-hover overflow-hidden flex flex-col h-full group">
                                {/* Animated themed banner */}
                                <div className="relative">
                                    <p.Banner />
                                    {p.award && (
                                        <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-md text-white border border-white/30 z-10">
                                            <Award size={11} /> {p.award}
                                        </span>
                                    )}
                                </div>

                                <div className="p-6 md:p-7 flex flex-col flex-1">
                                    <p
                                        className="text-xs font-semibold mb-1 uppercase tracking-wider"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {p.subtitle}
                                    </p>
                                    <h3
                                        className="text-2xl font-black mb-1"
                                        style={{ color: "var(--foreground)" }}
                                    >
                                        {p.title}
                                    </h3>
                                    <p
                                        className="text-base mb-4"
                                        style={{
                                            color: "var(--foreground-muted)",
                                        }}
                                    >
                                        {p.tagline}
                                    </p>

                                    <div
                                        className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] mb-5 font-mono"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={11} /> {p.period}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={11} /> {p.location}
                                        </span>
                                    </div>

                                    <ul className="space-y-2.5 mb-5 flex-1">
                                        {p.highlights.map((h) => (
                                            <li
                                                key={h}
                                                className="flex gap-3 text-sm"
                                                style={{
                                                    color: "var(--foreground-muted)",
                                                }}
                                            >
                                                <span
                                                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                                    style={{
                                                        background:
                                                            "var(--accent)",
                                                    }}
                                                />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div
                                        className="space-y-3 pt-5 border-t"
                                        style={{ borderColor: "var(--border)" }}
                                    >
                                        <div>
                                            <p
                                                className="text-[10px] font-bold mb-2 tracking-widest uppercase"
                                                style={{
                                                    color: "var(--muted)",
                                                }}
                                            >
                                                Tech Stack
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs px-2.5 py-1 rounded-md font-mono border"
                                                        style={{
                                                            background:
                                                                "var(--background-alt)",
                                                            color: "var(--foreground-muted)",
                                                            borderColor:
                                                                "var(--border)",
                                                        }}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p
                                                className="text-[10px] font-bold mb-2 tracking-widest uppercase"
                                                style={{
                                                    color: "var(--muted)",
                                                }}
                                            >
                                                Skills Developed
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.skills.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                                                        style={{
                                                            background:
                                                                "var(--accent-soft)",
                                                            color: "var(--accent-text)",
                                                        }}
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="text-center mt-12">
                    <a
                        href="https://github.com/linwaiyans"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-semibold border-2 px-6 py-3 rounded-full transition-all duration-300"
                        style={{
                            borderColor: "var(--border-strong)",
                            color: "var(--foreground)",
                            background: "var(--card)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.color = "var(--accent)";
                            e.currentTarget.style.transform =
                                "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                                "var(--border-strong)";
                            e.currentTarget.style.color = "var(--foreground)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <GithubIcon size={16} />
                        More on my GitHub
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
