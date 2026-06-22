"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Award } from "lucide-react";

const certifications = [
  { title: "Data Science Professional Certificate", issuer: "IBM · Coursera" },
  { title: "Crash Course on Python", issuer: "Google · Coursera" },
  { title: "AI Primer & Generative AI", issuer: "Infosys Springboard" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte · Forage" },
  { title: "Automation Developer Associate", issuer: "UiPath" },
  { title: "Introduction to Networks", issuer: "Cisco Networking Academy" },
];

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
              className="card card-hover flex items-start gap-3 p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
                <Award className="h-4 w-4 text-[var(--accent)]" />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-snug text-[var(--foreground)]">
                  {cert.title}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
