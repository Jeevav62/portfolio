"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const skillCategories = [
  {
    title: "Generative AI & LLMs",
    skills: [
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Context Engineering",
      "Prompt Caching",
      "Hallucination Prevention",
      "Hybrid RAG",
      "GraphRAG",
      "Task Arithmetic",
      "vLLM",
      "llama.cpp",
      "Hugging Face Hub",
      "AI Agents",
    ],
  },
  {
    title: "Voice AI",
    skills: [
      "TTS Fine-tuning",
      "STT Fine-tuning",
      "Speech-to-Speech",
      "Phoneme Engineering (G2P/IPA)",
      "LiveKit",
      "Twilio",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "PyTorch",
      "LangChain",
      "LlamaIndex",
      "LangGraph",
      "CrewAI",
      "HF Transformers",
      "PEFT / LoRA / DDP",
      "scikit-learn",
      "Pandas / NumPy",
      "Gradio",
    ],
  },
  {
    title: "Databases & Vector Stores",
    skills: ["Qdrant", "Neo4j", "Redis", "Supabase", "MySQL"],
  },
  {
    title: "Backend & Languages",
    skills: [
      "Python",
      "SQL",
      "FastAPI",
      "Flask",
      "WebSocket",
      "REST APIs",
      "JWT Auth / Cryptography",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "RunPod",
      "Multi-GPU Training",
      "EasyPanel",
      "Power BI",
    ],
  },
];

const stats = [
  { value: "4", label: "Internships" },
  { value: "3", label: "Published Models" },
  { value: "5", label: "Technical Articles" },
  { value: "10+", label: "Shipped Projects" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & expertise"
          subtitle="The stack I use to research, fine-tune, and ship production AI systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
              className="card p-6"
            >
              <h3 className="flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[var(--foreground)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[var(--surface-subtle)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card p-6 text-center"
            >
              <div className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-[var(--foreground)] tnum">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
