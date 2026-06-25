"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Chennai, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech AI & DS" },
  { icon: Briefcase, label: "Current Role", value: "AI Engineer Intern" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Bridging ML research and real engineering"
        />

        <div className="grid items-start gap-12 md:grid-cols-[300px_1fr] lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-[300px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-subtle)]">
              <Image
                src="/image.jpg"
                alt="Jeevarathinam V"
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              I read research papers the way some people read news. When something interesting
              lands on arXiv, I want to know if it actually works, so I build a small version and
              find out. That habit is how I ended up fine-tuning voice models, merging two of them with task arithmetic to get something better than either alone, and shipping things I never planned to ship.
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Outside of work I&apos;m usually tinkering with something, reading about how a model
              was trained, or convincing myself one more cup of coffee is a good idea. The best way
              to collaborate with me is to throw a hard problem at me and bring coffee.
            </p>

            {/* Facts */}
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="card p-4">
                  <Icon className="mb-2 h-5 w-5 text-[var(--accent)]" />
                  <p className="text-xs uppercase tracking-wide text-[var(--faint)]">{label}</p>
                  <p className="mt-0.5 font-medium text-[var(--foreground)]">{value}</p>
                </div>
              ))}
            </div>

            {/* Education row */}
            <div className="card flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-[var(--foreground)]">
                  Anand Institute of Higher Technology
                </p>
                <p className="text-sm text-[var(--muted)]">
                  B.Tech, Artificial Intelligence &amp; Data Science &middot; CGPA 8.00
                </p>
              </div>
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[var(--faint)] tnum">
                2022 &ndash; 2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


