"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    simpleSlug: "ibm",
    simpleColor: "0530AD",
    logoDomain: "ibm.com",
    url: "https://coursera.org/share/fbab249e5726597a070b812d2935c0f8",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    platform: "Coursera",
    simpleSlug: "google",
    simpleColor: "4285F4",
    logoDomain: "google.com",
    url: "https://coursera.org/share/b6b667ef8503c2ea666b806b0f8718e3",
  },
  {
    title: "AI Primer & Generative AI",
    issuer: "Infosys",
    platform: "Springboard",
    simpleSlug: "infosys",
    simpleColor: "007CC2",
    logoDomain: "infosys.com",
    url: "https://drive.google.com/file/d/1-1nGzZJbOLUXvxRf7HHqjbt3BwBxZtTz/view?usp=sharing",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    simpleSlug: "deloitte",
    simpleColor: "86BC25",
    logoDomain: "deloitte.com",
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_jnaFPahnwt8gEpDJD_1747469125355_completion_certificate.pdf",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn",
    platform: "Simplilearn",
    simpleSlug: "simplilearn",
    simpleColor: "02A6E2",
    logoDomain: "simplilearn.com",
    url: "https://simpli-web.app.link/e/ZB4g8HElg4b",
  },
  {
    title: "Automation Developer Associate",
    issuer: "UiPath",
    platform: "UiPath Academy",
    simpleSlug: "uipath",
    simpleColor: "FA4616",
    logoDomain: "uipath.com",
    url: "https://credentials.uipath.com/1f72d8a6-89ca-45bf-8744-a5ba736c8c2d",
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    platform: "Networking Academy",
    simpleSlug: "cisco",
    simpleColor: "1BA0D7",
    logoDomain: "cisco.com",
    url: "https://drive.google.com/file/d/1eRjf6L7sEzVby4wr4fBOtptEiOc0bAti/view?usp=sharing",
  },
];

type Cert = (typeof certifications)[number];

function ProviderLogo({ cert }: { cert: Cert }) {
  const [srcIdx, setSrcIdx] = useState(0);

  const sources = [
    `https://cdn.simpleicons.org/${cert.simpleSlug}/${cert.simpleColor}`,
    `https://www.google.com/s2/favicons?domain=${cert.logoDomain}&sz=128`,
  ];

  if (srcIdx >= sources.length) {
    return (
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
        {cert.issuer.charAt(0)}
      </div>
    );
  }

  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-white p-2">
      <img
        src={sources[srcIdx]}
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
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
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

              {/* View link */}
              <div className="flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--accent)]">
                <span>View Certificate</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
