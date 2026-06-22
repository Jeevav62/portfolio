"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
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

const marqueeItems = [
  "PyTorch",
  "vLLM",
  "LoRA / PEFT",
  "Hybrid RAG",
  "GraphRAG",
  "Qdrant",
  "LiveKit",
  "Hugging Face",
  "LangChain",
  "Kokoro-82M",
  "XTTS-v2",
  "FastAPI",
];

const name = "Jeevarathinam V";

export default function Hero() {
  const reduce = useReducedMotion();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      <SubtleBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 sm:px-8 lg:px-12">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1 text-sm text-[var(--muted)] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to AI / ML Engineering roles
        </motion.span>

        {/* Headline: per-word reveal */}
        <h1 className="mt-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
          {name.split(" ").map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-medium sm:text-2xl"
        >
          <span className="text-gradient-accent">AI / ML Engineer</span>
        </motion.p>

        <motion.p
          custom={4}
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
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-wrap gap-2"
        >
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)] backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Magnetic>
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo("projects")}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Work
            </Button>
          </Magnetic>
          <Magnetic>
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
          </Magnetic>
          <span className="flex items-center gap-1.5 text-sm text-[var(--faint)]">
            <MapPin className="h-4 w-4" />
            Chennai, India
          </span>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative z-10 border-y border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-sm"
      >
        <Marquee items={marqueeItems} />
      </motion.div>
    </section>
  );
}
