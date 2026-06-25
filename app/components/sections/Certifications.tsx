"use client";

import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import IBMIcon from "../icons/IBMIcon";
import InfosysIcon from "../icons/InfosysIcon";

type CertLink = { label: string; url: string };

type Cert = {
  title: string;
  issuer: string;
  platform: string;
  /** Ordered list of favicon/logo URLs to try. Falls back to letter badge on exhaustion. */
  logoSources: string[];
  /** If set, render a styled text badge instead of fetching an image (for logos with CDN issues). */
  logoText?: string;
  logoBg?: string;
  /** If set, renders an inline SVG component instead of fetching a logo. */
  logoComponent?: FC<{ className?: string }>;
  links: CertLink[];
};

const gf = (domain: string, sz = 128) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${sz}`;

const certifications: Cert[] = [
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    logoSources: [],
    logoComponent: IBMIcon,
    links: [{ label: "View Certificate", url: "https://coursera.org/share/fbab249e5726597a070b812d2935c0f8" }],
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    platform: "Coursera",
    logoSources: [gf("google.com", 128)],
    links: [{ label: "View Certificate", url: "https://coursera.org/share/b6b667ef8503c2ea666b806b0f8718e3" }],
  },
  {
    title: "AI Primer & Generative AI",
    issuer: "Infosys",
    platform: "Springboard",
    logoSources: [],
    logoComponent: InfosysIcon,
    links: [{ label: "View Certificate", url: "https://drive.google.com/file/d/1-1nGzZJbOLUXvxRf7HHqjbt3BwBxZtTz/view?usp=sharing" }],
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys",
    platform: "Springboard",
    logoSources: [],
    logoComponent: InfosysIcon,
    links: [
      { label: "Part 1", url: "https://drive.google.com/file/d/1eLys7pvT9mgd4z9xZbyiROIDGP8lwtQr/view?usp=sharing" },
      { label: "Part 2", url: "https://drive.google.com/file/d/1eMiid9FVFABb8GLUMFlZdtC2uQLLj95s/view?usp=sharing" },
    ],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    logoSources: [gf("deloitte.com", 128)],
    links: [{ label: "View Certificate", url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_jnaFPahnwt8gEpDJD_1747469125355_completion_certificate.pdf" }],
  },
  {
    title: "Power BI for Beginners",
    issuer: "Microsoft",
    platform: "Simplilearn",
    logoSources: [gf("microsoft.com", 128)],
    links: [{ label: "View Certificate", url: "https://simpli-web.app.link/e/ZB4g8HElg4b" }],
  },
  {
    title: "Java Full Stack",
    issuer: "Wipro",
    platform: "TalentNext",
    logoSources: [gf("wipro.com", 128)],
    links: [{ label: "View Certificate", url: "https://drive.google.com/file/d/1eZcGfVTI4y4Pq5lxfF-C1gkdBPUOCN-9/view?usp=sharing" }],
  },
  {
    title: "Automation Developer Associate",
    issuer: "UiPath",
    platform: "UiPath Academy",
    logoSources: [gf("uipath.com", 128)],
    links: [{ label: "View Certificate", url: "https://credentials.uipath.com/1f72d8a6-89ca-45bf-8744-a5ba736c8c2d" }],
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    platform: "Networking Academy",
    logoSources: [gf("cisco.com", 128)],
    links: [{ label: "View Certificate", url: "https://drive.google.com/file/d/1eRjf6L7sEzVby4wr4fBOtptEiOc0bAti/view?usp=sharing" }],
  },
];

function ProviderLogo({ cert }: { cert: Cert }) {
  const [srcIdx, setSrcIdx] = useState(0);

  if (cert.logoComponent) {
    const Logo = cert.logoComponent;
    return (
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-1">
        <Logo className="h-full w-full" />
      </div>
    );
  }

  if (cert.logoText) {
    return (
      <div
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-xs font-black tracking-widest text-white"
        style={{ backgroundColor: cert.logoBg ?? "#555" }}
      >
        {cert.logoText}
      </div>
    );
  }

  if (srcIdx >= cert.logoSources.length) {
    return (
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
        {cert.issuer.charAt(0)}
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-2">
      <img
        src={cert.logoSources[srcIdx]}
        alt={cert.issuer}
        className="h-full w-full object-contain"
        onError={() => setSrcIdx((i) => i + 1)}
      />
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Verified coursework across data science, generative AI, and engineering fundamentals."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className="spotlight card card-hover group flex flex-col gap-4 p-5"
            >
              {/* Provider header */}
              <div className="flex items-center gap-3">
                <ProviderLogo cert={cert} />
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{cert.issuer}</p>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
                    {cert.platform}
                  </p>
                </div>
              </div>

              {/* Cert title */}
              <h3 className="flex-1 text-sm font-semibold leading-snug text-[var(--foreground)]">
                {cert.title}
              </h3>

              {/* Link(s) */}
              <div className="flex items-center gap-3">
                {cert.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--accent)] transition-opacity hover:opacity-70"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
