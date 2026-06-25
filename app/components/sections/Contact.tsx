"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
  ArrowUpRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

import HuggingFaceIcon from "../icons/HuggingFaceIcon";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 8946038533", href: "tel:+918946038533" },
  { icon: Mail, label: "Email", value: "jeevav62@gmail.com", href: "mailto:jeevav62@gmail.com" },
  { icon: MapPin, label: "Location", value: "Chennai, India", href: null },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jeevarathinamv/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Jeevav62" },
  { icon: HuggingFaceIcon, label: "Hugging Face", href: "https://huggingface.co/jeevav62" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/jeevav62/" },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwoepz";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] placeholder-[var(--faint)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20";

  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Open to AI / ML engineering roles and collaborations. Reach out, I reply fast."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                      <Icon className="h-5 w-5 text-[var(--accent)]" />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-wide text-[var(--faint)]">
                        {item.label}
                      </p>
                      <p className="font-medium text-[var(--foreground)]">{item.value}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="card card-hover group flex items-center gap-4 p-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} className="card flex items-center gap-4 p-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div>
              <p className="eyebrow">Find me online</p>
              <div className="mt-3 flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="rounded-lg border border-[var(--border)] p-3 text-[var(--muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--muted)]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputClass}
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--muted)]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={inputClass}
                    placeholder="jane@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about the role or project..."
                    required
                  />
                </div>

                {error && (
                  <div className="rounded-lg border border-red-900/50 bg-red-950/40 px-3 py-2 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                    isSubmitted
                      ? "bg-emerald-700 text-white"
                      : "bg-[var(--accent)] text-[#0a0800] hover:bg-[var(--accent-hover)] hover:shadow-[0_0_20px_rgba(201,168,76,0.35)]"
                  } ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Message sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
