"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import Button from "../ui/Button";
import SubtleBackground from "../ui/SubtleBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const tags = ["LLM Fine-tuning", "Voice AI", "RAG", "AI Agents"];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 sm:px-8 lg:px-12"
    >
      <SubtleBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl py-32">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to AI / ML Engineering roles
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl"
        >
          Jeevarathinam V
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 text-xl font-medium text-[var(--foreground)] sm:text-2xl"
        >
          AI / ML Engineer
        </motion.p>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          I turn frontier AI research into products people actually use. I fine-tune
          voice and language models, design retrieval systems, and ship them end to end
          from prototype to production.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-wrap gap-2"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo("projects")}
            icon={<ArrowRight className="h-4 w-4" />}
          >
            View Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/Jeeva-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            icon={<FileDown className="h-4 w-4" />}
          >
            Download Résumé
          </Button>
          <span className="flex items-center gap-1.5 text-sm text-[var(--faint)]">
            <MapPin className="h-4 w-4" />
            Chennai, India
          </span>
        </motion.div>
      </div>
    </section>
  );
}
