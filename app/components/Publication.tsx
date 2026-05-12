"use client";

import { BookOpen, ExternalLink, Award, MapPin, Calendar, FileText, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { FireDetectionBanner } from "./ProjectBanners";

export default function Publication() {
  return (
    <section id="publication" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          number="05"
          eyebrow="research highlight"
          title="A paper I'm"
          highlight="proud of"
          subtitle="My first international publication — co-authored, presented, and indexed in IEEE Xplore."
        />

        <Reveal variant="scale">
          <div className="gradient-border">
            <div className="rounded-3xl overflow-hidden">
              {/* Animated fire-themed banner */}
              <div className="relative">
                <FireDetectionBanner tall />
                {/* Overlaid text */}
                <div className="absolute inset-0 flex items-end p-8 md:p-12 pointer-events-none">
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold mb-4 border border-white/30">
                      <Award size={14} />
                      IEEE Xplore Published
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight"
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                      Big Data Based House Fire <br className="hidden md:inline" />
                      Detection and Alarm System
                    </h3>
                    <p className="text-white/95 text-sm md:text-base mb-4"
                      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
                      Presented at the 10th International Conference on Big Data Analytics (ICBDA 2025)
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/95"
                      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> March 2025
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> Singapore
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award size={14} /> Excellent Oral Presentation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-12 bg-[var(--card)]">
                <div className="grid md:grid-cols-3 gap-7 mb-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <FileText size={18} style={{ color: "var(--accent)" }} />
                        My Contribution
                      </h4>
                      <ul className="space-y-3 text-sm" style={{ color: "var(--foreground-muted)" }}>
                        {[
                          "Led the academic research, system logic design, and co-authored the paper",
                          "Implemented coding, live data collection, and testing scripts in Python, C++, Arduino IDE",
                          "Awarded for excellent oral presentation — communication & technical depth on display",
                          "Fully indexed and published in the IEEE Xplore digital library",
                        ].map((p) => (
                          <li key={p} className="flex gap-3">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: "var(--accent)" }}
                            />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative pl-6">
                      <Quote
                        className="absolute -left-1 top-0 opacity-20"
                        size={36}
                        style={{ color: "var(--accent)" }}
                      />
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <BookOpen size={18} style={{ color: "var(--accent)" }} />
                        Abstract
                      </h4>
                      <p className="text-sm leading-relaxed italic" style={{ color: "var(--foreground-muted)" }}>
                        House fires, primarily caused by cooking-related incidents, pose a significant threat
                        to individual safety. To address gaps in traditional fire alarm systems, we developed
                        an IoT-based house fire detection and alarm system designed for efficient and reliable
                        prevention. By continuously sensing fire-related parameters and instantly notifying
                        users via a Telegram bot, the system enhances safety and usability. Extensive testing
                        was performed through big data analysis under a controlled environment.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="card p-5">
                      <p className="text-[10px] font-bold mb-3 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Python", "C++", "Arduino IDE", "IoT", "Big Data", "Telegram Bot"].map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-md font-medium"
                            style={{ background: "var(--accent-soft)", color: "var(--accent-text)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="card p-5">
                      <p className="text-[10px] font-bold mb-3 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                        Skills Gained
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Academic Writing", "Research", "Public Speaking", "Data Analysis", "IoT Engineering"].map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-md font-medium border"
                            style={{
                              background: "var(--background-alt)",
                              color: "var(--foreground-muted)",
                              borderColor: "var(--border)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://ieeexplore.ieee.org/document/11211344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300"
                  style={{ background: "var(--accent)", boxShadow: "0 10px 30px rgba(37,99,235,0.3)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-hover)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Read on IEEE Xplore
                  <ExternalLink size={16} className="transition-transform group-hover:rotate-12" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
