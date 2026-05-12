"use client";

import { useState } from "react";
import { Mail, Send, Phone, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "linwaiyan742004@gmail.com",
    href: "mailto:linwaiyan742004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7436 170338",
    href: "tel:+447436170338",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/linwaiyans",
    href: "https://github.com/linwaiyans",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/linwaiyan",
    href: "https://www.linkedin.com/in/linwaiyan",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please tell me your name";
    if (!form.email.trim()) e.email = "I'll need an email to reply";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Hmm, that email looks off";
    if (!form.message.trim()) e.message = "Don't leave the message empty";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError(null);
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          from_name: "Willize Portfolio",
          subject: form.subject || `New message from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
          // Web3Forms reply-to so you can hit "Reply" in your inbox
          replyto: form.email,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Send failed");
      }
      setSent(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          number="08"
          eyebrow="get in touch"
          title="Say"
          highlight="Hello"
          subtitle="Have a job, project, or just want to chat about code and coffee? My inbox is open."
        />

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal variant="left" className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3 p-4 rounded-2xl border" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <MapPin size={18} style={{ color: "var(--accent)" }} />
              <span className="font-semibold">Bristol, United Kingdom</span>
            </div>

            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={i * 60}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl border card-hover"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                        color: "#fff",
                        boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                        {label}
                      </p>
                      <p className="text-sm font-medium truncate">{value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300} className="gradient-border">
              <div className="p-5 rounded-2xl">
                <p className="font-bold mb-1.5 flex items-center gap-2" style={{ color: "var(--accent)" }}>
                  Available for full-time roles
                </p>
                <p className="text-sm" style={{ color: "var(--foreground-muted)" }}>
                  Graduating May 2026. Open to opportunities across the UK — relocate, remote, or
                  hybrid all welcome.
                </p>
              </div>
            </Reveal>
          </Reveal>

          <Reveal variant="right" className="md:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 card">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), #38bdf8)",
                    boxShadow: "0 15px 35px rgba(37,99,235,0.4)",
                  }}
                >
                  <CheckCircle size={36} color="#fff" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p style={{ color: "var(--foreground-muted)" }} className="max-w-sm">
                  Your message has been sent. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-sm font-semibold magnetic-link"
                  style={{ color: "var(--accent)" }}
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" name="name" placeholder="Jane Doe" value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })} error={errors.name} />
                  <Field label="Email" name="email" type="email" placeholder="jane@example.com" value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })} error={errors.email} />
                </div>
                <Field label="Subject (optional)" name="subject"
                  placeholder="Job opportunity / Project / Just saying hi"
                  value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me a bit about what you have in mind..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "var(--background)",
                      borderColor: errors.message ? "#f87171" : "var(--border-strong)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#f87171" : "var(--border-strong)")}
                  />
                  {errors.message && <p className="text-xs mt-1 text-red-500">{errors.message}</p>}
                </div>

                {submitError && (
                  <div
                    className="px-4 py-3 rounded-xl text-sm border"
                    style={{
                      background: "rgba(248, 113, 113, 0.08)",
                      borderColor: "rgba(248, 113, 113, 0.4)",
                      color: "#dc2626",
                    }}
                  >
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: sending ? "var(--accent-hover)" : "var(--accent)",
                    boxShadow: "0 10px 30px rgba(37,99,235,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "var(--accent-hover)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-12" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, value, onChange, error,
}: {
  label: string; name: string; type?: string; placeholder?: string;
  value: string; onChange: (v: string) => void; error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200"
        style={{
          background: "var(--background)",
          borderColor: error ? "#f87171" : "var(--border-strong)",
          color: "var(--foreground)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = error ? "#f87171" : "var(--border-strong)")}
      />
      {error && <p className="text-xs mt-1 text-red-500">{error}</p>}
    </div>
  );
}
