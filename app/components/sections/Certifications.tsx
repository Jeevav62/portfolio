"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    platform: "Coursera",
    logoDomain: "ibm.com",
    url: "https://coursera.org/share/fbab249e5726597a070b812d2935c0f8",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    platform: "Coursera",
    logoDomain: "google.com",
    url: "https://coursera.org/share/b6b667ef8503c2ea666b806b0f8718e3",
  },
  {
    title: "AI Primer & Generative AI",
    issuer: "Infosys",
    platform: "Springboard",
    logoDomain: "infosys.com",
    url: "https://drive.google.com/file/d/1-1nGzZJbOLUXvxRf7HHqjbt3BwBxZtTz/view?usp=sharing",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    logoDomain: "deloitte.com",
    url: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_jnaFPahnwt8gEpDJD_1747469125355_completion_certificate.pdf",
  },
  {
    title: "Power BI for Beginners",
    issuer: "Simplilearn",
    platform: "Simplilearn",
    logoDomain: "simplilearn.com",
    url: "https://simpli-web.app.link/e/ZB4g8HElg4b",
  },
  {
    title: "Automation Developer Associate",
    issuer: "UiPath",
    platform: "UiPath Academy",
    logoDomain: "uipath.com",
    url: "https://credentials.uipath.com/1f72d8a6-89ca-45bf-8744-a5ba736c8c2d",
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    platform: "Networking Academy",
    logoDomain: "cisco.com",
    url: "https://drive.google.com/file/d/1eRjf6L7sEzVby4wr4fBOtptEiOc0bAti/view?usp=sharing",
  },
];

function ProviderLogo({ domain, issuer }: { domain: string; issuer: string }) {
  return (
    <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-white">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={issuer}
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const parent = img.parentElement;
          if (parent) {
            const el = document.createElement("span");
            el.textContent = issuer.charAt(0);
            el.className = "text-sm font-bold text-[var(--accent)]";
            parent.appendChild(el);
            parent.style.background = "var(--accent-soft)";
          }
        }}
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
                <ProviderLogo domain={cert.logoDomain} issuer={cert.issuer} />
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
              <div className="flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--accent)] transition-gap group-hover:gap-2">
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
