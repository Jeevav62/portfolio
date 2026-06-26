"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const experiences = [
  {
    id: "1",
    role: "AI Engineer Intern",
    company: "F22 Labs",
    location: "Chennai, India",
    period: "Dec 2025 – Present",
    description: [
      "Authored 95+ technical POC research documents; evaluated 20+ TTS/STT/LLM/OCR models contributing to internal TTS Leaderboard.",
      "Fine-tuned 3 production TTS models (Kokoro-82M, XTTS-v2, VoxCPM) reducing WER from 60% to 22% and improving NISQA MOS by 18%.",
      "Fine-tuned LFM2.5-1.2B Instruct LLM on a multi-GPU server and served it via vLLM; deployed full STT + LLM + TTS pipeline into LiveKit as a production voice AI agent.",
      "Designed production Hybrid RAG architecture (Qdrant dense retrieval + Groq LLM reranking) achieving ~500ms avg / ~800ms p90 latency; implemented GraphRAG over Neo4j.",
      "Benchmarked Zvec, Qdrant, and Milvus on RAG retrieval accuracy and latency. Zvec fastest with highest recall; published findings on F22 Labs engineering blog.",
      "Researched Task Arithmetic for TTS model merging. Combined 2 fine-tuned Kokoro models in shared weight space without retraining, achieving 55% listener preference.",
    ],
    technologies: ["vLLM", "LLM Fine-tuning", "TTS/STT", "Hybrid RAG", "GraphRAG", "LiveKit", "Qdrant", "Neo4j"],
  },
  {
    id: "2",
    role: "Data Science Intern",
    company: "Shiash Pvt Ltd",
    location: "Chennai, India",
    period: "Jul 2025 – Nov 2025",
    description: [
      "Engineered data pipelines using Pandas/NumPy to preprocess 50+GB datasets, improving training efficiency by 20%.",
      "Performed systematic hyperparameter tuning using GridSearchCV and RandomizedSearchCV, boosting classification accuracy by 25% on test data.",
      "Integrated trained models into Flask APIs for real-time inference, reducing latency by 30%.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Flask", "GridSearchCV"],
  },
  {
    id: "3",
    role: "Data Analytics Intern",
    company: "UptoSkills",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Built Power BI dashboards for 500+ colleges enabling regional insights and accreditation analysis.",
      "Automated data preparation with Power Query and Excel, reducing manual reporting effort by 60%.",
    ],
    technologies: ["Power BI", "Power Query", "Excel", "Data Analytics"],
  },
  {
    id: "4",
    role: "AI/ML Intern",
    company: "Arul Technologies Pvt Ltd",
    location: "Chennai, India",
    period: "Nov 2024 – Dec 2024",
    description: [
      "Developed regression model for real estate pricing achieving R² of 0.85+ using NumPy, Pandas, and scikit-learn.",
      "Executed full ML pipeline from data ingestion through feature engineering, model tuning, and evaluation.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "scikit-learn", "Regression"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Four internships across AI engineering, data science, and analytics."
        />

        <div className="relative ml-2 border-l border-[var(--border)] pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative pb-12 last:pb-0"
            >
              {/* marker */}
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--background)] bg-[var(--accent)]" />

              <div
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className="spotlight card card-hover p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {exp.role}
                    <span className="text-[var(--accent)]"> · {exp.company}</span>
                  </h3>
                  <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[var(--faint)] tnum whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-[var(--faint)]">{exp.location}</p>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--border-strong)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[var(--surface-subtle)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
