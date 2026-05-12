"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, ArrowDown, MapPin, Sparkles, FileText, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const roles = [
    "Full Stack Web Developer",
    "Software Developer",
    "Frontend Developer",
    "IEEE Published Researcher",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const current = roles[roleIndex];
        let t: ReturnType<typeof setTimeout>;
        if (!deleting && displayed.length < current.length) {
            t = setTimeout(
                () => setDisplayed(current.slice(0, displayed.length + 1)),
                65,
            );
        } else if (!deleting && displayed.length === current.length) {
            t = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        } else {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
        }
        return () => clearTimeout(t);
    }, [displayed, deleting, roleIndex]);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-28 pb-20"
        >
            {/* Aurora background */}
            <div className="aurora" />

            {/* Dot grid overlay */}
            <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
                {/* Availability badge */}
                <div
                    className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold mb-8 border transition-all duration-700 ${
                        mounted
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4"
                    }`}
                    style={{
                        background: "var(--glass)",
                        backdropFilter: "blur(12px)",
                        color: "var(--accent-text)",
                        borderColor: "var(--accent)",
                    }}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    Available for opportunities in the UK
                </div>

                {/* Profile photo with gradient ring + pulse */}
                <div
                    className={`mb-8 flex justify-center transition-all duration-700 delay-100 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                >
                    <div className="relative float">
                        {/* Outer rotating gradient ring */}
                        <div
                            className="absolute -inset-1.5 rounded-full"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, #1d4ed8, #38bdf8, #22d3ee, #1d4ed8)",
                                animation: "spin 8s linear infinite",
                            }}
                        />
                        {/* Inner ring (theme-aware spacer) */}
                        <div
                            className="absolute -inset-0.5 rounded-full"
                            style={{ background: "var(--background)" }}
                        />
                        {/* Photo */}
                        <div
                            className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden z-10"
                            style={{
                                boxShadow: "0 20px 50px rgba(37, 99, 235, 0.4)",
                            }}
                        >
                            <Image
                                src="/profile.jpg"
                                alt="Lin Wai Yan"
                                fill
                                priority
                                unoptimized
                                sizes="160px"
                                className="object-cover"
                            />
                        </div>
                        {/* Outer pulse */}
                        <div className="absolute inset-0 rounded-full pulse-ring" />
                    </div>
                </div>

                <p
                    className={`text-sm font-mono mb-4 tracking-widest uppercase transition-all duration-700 delay-150 ${mounted ? "opacity-100" : "opacity-0"}`}
                    style={{ color: "var(--accent)" }}
                >
                    Hi there, I&apos;m
                </p>

                <h1
                    className={`text-6xl md:text-8xl font-black mb-4 tracking-tight leading-[1.05] transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <span className="gradient-text">Lin Wai Yan</span>
                </h1>

                <p
                    className={`text-base md:text-lg mb-6 transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
                    style={{ color: "var(--muted)" }}
                >
                    call me{" "}
                    <span
                        className="font-bold inline-block px-2 py-0.5 rounded-md"
                        style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent-text)",
                        }}
                    >
                        Lin
                    </span>{" "}
                    or{" "}
                    <span
                        className="font-bold inline-block px-2 py-0.5 rounded-md"
                        style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent-text)",
                        }}
                    >
                        William
                    </span>
                </p>

                <div
                    className={`h-12 flex items-center justify-center mb-8 transition-all duration-700 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    <span className="text-2xl md:text-3xl font-semibold">
                        <span style={{ color: "var(--muted)" }}>{"<"}</span>
                        <span className="mx-1">{displayed}</span>
                        <span
                            className="cursor-blink"
                            style={{ color: "var(--accent)" }}
                        >
                            |
                        </span>
                        <span style={{ color: "var(--muted)" }}>{"/>"}</span>
                    </span>
                </div>

                <p
                    className={`text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ color: "var(--foreground-muted)" }}
                >
                    A fresh graduate passionate about crafting{" "}
                    <strong style={{ color: "var(--foreground)" }}>
                        clean
                    </strong>
                    ,{" "}
                    <strong style={{ color: "var(--foreground)" }}>
                        accessible
                    </strong>
                    , and{" "}
                    <strong style={{ color: "var(--foreground)" }}>
                        impactful
                    </strong>{" "}
                    web experiences. Currently pursuing BSc (Hons) Information
                    Technology at UWE Bristol — turning ideas into real
                    products.
                </p>

                {/* Quick info chips */}
                <div
                    className={`flex flex-wrap items-center justify-center gap-2 mb-10 transition-all duration-700 delay-600 ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    {[
                        { icon: MapPin, text: "Bristol, UK" },
                        { icon: Sparkles, text: "Fresh Graduate" },
                        { icon: FileText, text: "IEEE Published" },
                    ].map(({ icon: Icon, text }) => (
                        <span
                            key={text}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border"
                            style={{
                                background: "var(--card)",
                                borderColor: "var(--border)",
                                color: "var(--foreground-muted)",
                            }}
                        >
                            <Icon
                                size={12}
                                style={{ color: "var(--accent)" }}
                            />
                            {text}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <button
                        onClick={() =>
                            document
                                .querySelector("#projects")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group relative px-7 py-3.5 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
                        style={{
                            background: "var(--accent)",
                            boxShadow: "0 10px 30px rgba(37,99,235,0.3)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "var(--accent-hover)";
                            e.currentTarget.style.transform =
                                "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                                "0 15px 40px rgba(37,99,235,0.45)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--accent)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 10px 30px rgba(37,99,235,0.3)";
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            See my work
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </button>
                    <button
                        onClick={() =>
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-7 py-3.5 rounded-full font-semibold border-2 transition-all duration-300"
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
                        Get in touch
                    </button>
                    <a
                        href="/Lin-Wai-Yan-CV.pdf"
                        download
                        className="group px-7 py-3.5 rounded-full font-semibold border-2 transition-all duration-300 inline-flex items-center gap-2"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--accent)";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.transform =
                                "translateY(-3px)";
                            e.currentTarget.style.boxShadow =
                                "0 10px 30px rgba(37,99,235,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--accent)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Download
                            size={16}
                            className="transition-transform group-hover:translate-y-0.5"
                        />
                        Download CV
                    </a>
                </div>

                {/* Social links */}
                <div
                    className={`flex items-center justify-center gap-3 transition-all duration-700 delay-[800ms] ${mounted ? "opacity-100" : "opacity-0"}`}
                >
                    {[
                        {
                            icon: GithubIcon,
                            href: "https://github.com/linwaiyans",
                            label: "GitHub",
                        },
                        {
                            icon: LinkedinIcon,
                            href: "https://www.linkedin.com/in/linwaiyan",
                            label: "LinkedIn",
                        },
                        {
                            icon: Mail,
                            href: "mailto:linwaiyan742004@gmail.com",
                            label: "Email",
                        },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
                            style={{
                                borderColor: "var(--border-strong)",
                                color: "var(--muted)",
                                background: "var(--card)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                    "var(--accent)";
                                e.currentTarget.style.color = "var(--accent)";
                                e.currentTarget.style.transform =
                                    "translateY(-3px) rotate(-5deg)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                    "var(--border-strong)";
                                e.currentTarget.style.color = "var(--muted)";
                                e.currentTarget.style.transform =
                                    "translateY(0) rotate(0)";
                            }}
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            <button
                onClick={() =>
                    document
                        .querySelector("#about")
                        ?.scrollIntoView({ behavior: "smooth" })
                }
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: "var(--muted)" }}
                aria-label="Scroll down"
            >
                <span className="text-[10px] font-mono uppercase tracking-widest">
                    scroll
                </span>
                <ArrowDown size={14} className="animate-bounce" />
            </button>
        </section>
    );
}
