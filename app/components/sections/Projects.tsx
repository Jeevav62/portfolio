"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="10.5" r="1.25" fill="currentColor" />
    <circle cx="15" cy="10.5" r="1.25" fill="currentColor" />
    <path d="M8.5 15c1 1.5 6 1.5 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 8.5C7.5 7 9 6.5 9 6.5M17 8.5C16.5 7 15 6.5 15 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

type Link = { type: "github" | "hf" | "live"; url: string };

const projects: {
  id: string;
  title: string;
  tag: string;
  description: string;
  technologies: string[];
  links: Link[];
}[] = [
  {
    id: "1",
    title: "TTS Fine-Tuning & Task Arithmetic Research",
    tag: "Voice AI Research",
    description:
      "Pioneered Task Arithmetic for TTS, combining fine-tuned female-voice and Indian-accent Kokoro models in shared weight space (α=0.6, β=1.0) without retraining, reaching MOS 4.4 and 55% listener preference. Fine-tuned XTTS-v2 reducing WER 58.4% (18.54% to 7.71%). Published 3 models on Hugging Face.",
    technologies: ["Kokoro-82M", "XTTS-v2", "VoxCPM", "PyTorch", "PEFT", "LoRA", "DDP"],
    links: [
      { type: "github", url: "https://github.com/Jeevav62/tts-finetune-recipes" },
      { type: "hf", url: "https://huggingface.co/jeevav62" },
    ],
  },
  {
    id: "2",
    title: "Real-Time Multilingual Translation",
    tag: "Speech-to-Speech",
    description:
      "Browser-native live speech-to-speech translation across 5+ Indian languages at ~380ms E2E latency, 25+ concurrent listeners per room. Cut cross-lingual TTS latency 83% (650ms→75ms) via 5-provider benchmarking. Multi-room WebSocket architecture with API-key pool rotation and live cost tracking.",
    technologies: ["Node.js", "WebSocket", "Deepgram Nova-3", "Sarvam Translate", "ElevenLabs"],
    links: [{ type: "github", url: "https://github.com/Jeevav62/live-translation" }],
  },
  {
    id: "3",
    title: "GEO Optimizer: AI-Native Content Engine",
    tag: "LLM Systems",
    description:
      "Multi-stage AI content engine that researches, verifies, and generates citation-optimized articles directly cited by ChatGPT, Claude, Gemini, and Perplexity. 5-stage pipeline: Question Discovery → Source Authority Mapping → Fact Verification → Hub & Spoke Knowledge Map → Article Generation, with hallucination prevention and resume-from-checkpoint.",
    technologies: ["Python", "LLM APIs", "Web Scraping", "JWT Auth", "Async"],
    links: [{ type: "github", url: "https://github.com/Jeevav62/geo-optimizer" }],
  },
  {
    id: "4",
    title: "Offline LLM on Android: Edge AI",
    tag: "Edge AI",
    description:
      "On-device LLM inference deploying LFM 2.5 1.2B on Android (Poco X3) via llama.cpp + CMake, fully offline with zero internet dependency. Proves edge-AI viability: a quantized LLM running entirely on consumer mobile hardware with no cloud backend.",
    technologies: ["llama.cpp", "CMake", "Android", "LFM 2.5 1.2B", "C++"],
    links: [{ type: "github", url: "https://github.com/Jeevav62/pocketlfm" }],
  },
  {
    id: "5",
    title: "AI Hoax Buster: Chrome Extension",
    tag: "Applied NLP",
    description:
      "Browser-integrated NLP Chrome extension for real-time bias and hoax detection with sub-800ms latency on news and web content. Deterministic inference pipelines with chunked processing, label normalization, reproducible scoring, and manifest-compliant extension logic.",
    technologies: ["Python", "Django", "HF Transformers", "scikit-learn", "Chrome APIs"],
    links: [{ type: "github", url: "https://github.com/Jeevav62/AI-Hoax-Buster" }],
  },
  {
    id: "6",
    title: "RAG Techniques Cookbook",
    tag: "Retrieval",
    description:
      "Practical implementations of 10 advanced RAG methods (Naive, Hybrid, HyDE, Fusion, Parent-Child, RRR, Contextual Compression, GraphRAG and more) with production-grade optimization patterns for LLM retrieval.",
    technologies: ["Python", "LangChain", "LlamaIndex", "Qdrant", "Neo4j", "GraphRAG"],
    links: [{ type: "github", url: "https://github.com/Jeevav62/Rag-techniques" }],
  },
];

const linkMeta = {
  github: { Icon: Github, label: "GitHub" },
  hf: { Icon: HuggingFaceIcon, label: "Hugging Face" },
  live: { Icon: ExternalLink, label: "Live demo" },
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          subtitle="Production AI systems and research spanning Voice AI, LLMs, RAG, and edge inference."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className="spotlight card card-hover group flex flex-col p-6"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{project.tag}</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--foreground)]">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[var(--surface-subtle)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-[var(--border)] pt-4">
                {project.links.map(({ type, url }) => {
                  const { Icon, label } = linkMeta[type];
                  return (
                    <a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — ${label}`}
                      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)]"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-xs">{label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
