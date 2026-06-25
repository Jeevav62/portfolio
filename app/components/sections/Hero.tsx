"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";

const HeroCanvas = dynamic(() => import("../ui/HeroCanvas"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
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

const nameParts = ["Jeevarathinam", "V"];

export default function Hero() {
  const reduce = useReducedMotion();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden"
    >
      {/* Three.js gold particle field */}
      <HeroCanvas />

      {/* Gold gradient orb accents */}
      <div
        aria-hidden
        className="mesh-a pointer-events-none absolute -top-[20%] left-[5%] h-[55vh] w-[55vh] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.16) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="mesh-b pointer-events-none absolute bottom-[-10%] right-[8%] h-[45vh] w-[45vh] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(180,100,20,0.12) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="mesh-c pointer-events-none absolute top-[30%] left-[45%] h-[40vh] w-[40vh] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32 sm:px-8 lg:px-12">

        {/* Status badge */}
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/80 px-3.5 py-1.5 text-sm text-[var(--muted)] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="gold-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          Open to AI / ML Engineering roles
        </motion.span>

        {/* Name: Cormorant Garamond, per-char stagger reveal */}
        <motion.h1
          className="mt-6 font-[family-name:var(--font-space-grotesk)] text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-[5.5rem]"
          style={{ filter: "drop-shadow(0 0 48px rgba(201,168,76,0.18))" }}
          whileHover={{ filter: "drop-shadow(0 0 64px rgba(201,168,76,0.32))" }}
          transition={{ duration: 0.4 }}
        >
          {nameParts.map((word, wi) => (
            <span key={wi} className="mr-[0.32em] inline-block pb-2 align-bottom text-gradient-gold">
              {Array.from(word).map((char, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + wi * (Array.from(nameParts[0]).length * 0.035 + 0.06) + ci * 0.035,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Ornament divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 flex items-center gap-3"
          style={{ transformOrigin: "left center" }}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--accent)] opacity-60" />
          <div className="h-1 w-1 rotate-45 bg-[var(--accent)] opacity-70" />
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[var(--accent)] to-transparent opacity-30" />
        </motion.div>

        {/* Role */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 font-[family-name:var(--font-geist-mono)] text-sm uppercase tracking-[0.22em] text-[var(--accent)]"
        >
          AI / ML Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          I turn frontier AI research into products people actually use. Voice agents
          that feel natural, retrieval systems that find the right answer, language
          models that stay grounded when it matters.
        </motion.p>

        {/* Tags */}
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
              className="rounded-full border border-[var(--accent)]/25 bg-[var(--surface)]/70 px-3.5 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--accent)]/80 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
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
            <MapPin className="h-3.5 w-3.5 text-[var(--accent)]/60" />
            Chennai, India
          </span>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 border-y border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-sm"
      >
        <Marquee items={marqueeItems} />
      </motion.div>
    </section>
  );
}
