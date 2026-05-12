"use client";

import {
    MapPin,
    GraduationCap,
    Award,
    Globe,
    Coffee,
    Heart,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import IdCard from "./IdCard";

const facts = [
    { icon: MapPin, text: "Based in Bristol, UK" },
    { icon: GraduationCap, text: "Final-year BSc IT student" },
    { icon: Award, text: "IEEE-published researcher" },
    { icon: Globe, text: "Originally from Myanmar" },
    { icon: Coffee, text: "Powered by curiosity (and tea)" },
    { icon: Heart, text: "Loves clean, friendly UI" },
];

const highlights = [
    { value: "Distinction", label: "HND in Computing" },
    { value: "IEEE", label: "Published Author" },
    { value: "First-Class", label: "Target at UWE" },
    { value: "3+", label: "Languages Spoken" },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-24 md:py-32 px-6 relative overflow-hidden"
        >
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "var(--accent)" }}
            />
            <div className="max-w-6xl mx-auto relative">
                <SectionHeader
                    number="01"
                    eyebrow="about me"
                    title="Hello,"
                    highlight="everyone!"
                    subtitle="A bit about who I am, where I've been, and what gets me excited."
                />

                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
                    <Reveal variant="left" className="space-y-5">
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--foreground-muted)" }}
                        >
                            I&apos;m{" "}
                            <strong style={{ color: "var(--accent)" }}>
                                Lin Wai Yan
                            </strong>{" "}
                            — most people call me <strong>Lin</strong> or{" "}
                            <strong>William</strong>. A fresh graduate and
                            aspiring full-stack developer who genuinely loves
                            the craft of turning ideas into things people can
                            actually click, swipe, and use.
                        </p>
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--foreground-muted)" }}
                        >
                            My journey started in{" "}
                            <strong>Yangon, Myanmar</strong>, where I earned a
                            Distinction in my Pearson BTEC Level 5 HND in
                            Computing. That took me to{" "}
                            <strong>Bristol, UK</strong>, where I&apos;m now
                            pursuing a BSc (Hons) Information Technology at UWE
                            — on an international scholarship.
                        </p>
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: "var(--foreground-muted)" }}
                        >
                            Along the way I&apos;ve co-authored an{" "}
                            <strong style={{ color: "var(--accent)" }}>
                                IEEE-published paper
                            </strong>{" "}
                            on IoT fire detection, freelanced as a web developer
                            mentoring GCSE students, and shipped projects
                            ranging from sneaker e-commerce stores to
                            fall-detection systems.
                        </p>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
                            {facts.map(({ icon: Icon, text }, i) => (
                                <Reveal
                                    key={text}
                                    delay={i * 60}
                                    className="flex items-center gap-2.5"
                                >
                                    <span
                                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: "var(--accent-soft)",
                                            color: "var(--accent-text)",
                                        }}
                                    >
                                        <Icon size={14} />
                                    </span>
                                    <span
                                        className="text-sm"
                                        style={{
                                            color: "var(--foreground-muted)",
                                        }}
                                    >
                                        {text}
                                    </span>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal variant="right" className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map(({ value, label }, i) => (
                                <Reveal
                                    variant="scale"
                                    key={label}
                                    delay={i * 80}
                                    className="card card-hover p-5 text-center"
                                >
                                    <p className="text-2xl md:text-3xl font-black mb-1 gradient-text">
                                        {value}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        {label}
                                    </p>
                                </Reveal>
                            ))}
                        </div>

                        <IdCard />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
