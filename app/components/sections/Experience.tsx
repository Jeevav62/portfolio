"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    id: "1",
    role: "AI Engineer Intern",
    company: "F22 Labs",
    location: "Chennai, India",
    startDate: "Dec 2025",
    endDate: "Present",
    description: [
      "Authored 95+ technical POC research documents; evaluated 20+ TTS/STT/LLM/OCR models contributing to internal TTS Leaderboard.",
      "Fine-tuned 3 production TTS models (Kokoro-82M, XTTS-v2, VoxCPM) reducing WER from 60% to 22% and improving NISQA MOS by 18%.",
      "Fine-tuned LFM 2.5 1.2B instruct LLM via vLLM on multi-GPU server; deployed full STT + LLM + TTS pipeline into LiveKit as production voice AI agent.",
      "Designed production Hybrid RAG architecture (Qdrant dense retrieval + Groq LLM reranking) achieving ~500ms avg / ~800ms p90 latency; implemented GraphRAG over Neo4j.",
      "Benchmarked Zvec, Qdrant, and Milvus on RAG retrieval accuracy and latency — Zvec fastest with highest recall; published findings on F22 Labs engineering blog.",
      "Researched Task Arithmetic for TTS model merging — combined 2 fine-tuned Kokoro models in shared weight space without retraining, achieving 55% listener preference.",
    ],
    technologies: ["vLLM", "LLM Fine-tuning", "TTS/STT", "Hybrid RAG", "GraphRAG", "LiveKit", "Qdrant", "Neo4j"],
    color: "blue",
  },
  {
    id: "2",
    role: "Data Science Intern",
    company: "Shiash Pvt Ltd",
    location: "Chennai, India",
    startDate: "Jul 2025",
    endDate: "Nov 2025",
    description: [
      "Engineered data pipelines using Pandas/NumPy to preprocess 50+GB datasets, improving training efficiency by 20%.",
      "Performed systematic hyperparameter tuning using GridSearchCV and RandomizedSearchCV, boosting classification accuracy by 25% on test data.",
      "Integrated trained models into Flask APIs for real-time inference, reducing latency by 30%.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Flask", "GridSearchCV"],
    color: "purple",
  },
  {
    id: "3",
    role: "Data Analytics Intern",
    company: "UptoSkills",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: [
      "Built Power BI dashboards for 500+ colleges enabling regional insights and accreditation analysis.",
      "Automated data preparation with Power Query and Excel, reducing manual reporting effort by 60%.",
    ],
    technologies: ["Power BI", "Power Query", "Excel", "Data Analytics"],
    color: "cyan",
  },
  {
    id: "4",
    role: "AI/ML Intern",
    company: "Arul Technologies Pvt Ltd",
    location: "Chennai, India",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    description: [
      "Developed regression model for real estate pricing achieving R² of 0.85+ using NumPy, Pandas, and scikit-learn.",
      "Executed full ML pipeline from data ingestion through feature engineering, model tuning, and evaluation.",
    ],
    technologies: ["Python", "NumPy", "Pandas", "scikit-learn", "Regression"],
    color: "green",
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const isEven = index % 2 === 0;
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 border-blue-500/30",
    purple: "from-purple-500 to-purple-600 border-purple-500/30",
    cyan: "from-cyan-500 to-cyan-600 border-cyan-500/30",
    green: "from-green-500 to-green-600 border-green-500/30",
  };

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, x: isEven ? x : useTransform(x, (v) => -v), scale }}
      className={`relative flex items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:items-center`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 hidden md:block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-50" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className={`glass rounded-2xl p-6 border ${colorClasses[experience.color as keyof typeof colorClasses]} hover:shadow-2xl transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 className="w-4 h-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[experience.color as keyof typeof colorClasses]} bg-opacity-20`}>
              <Briefcase className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Calendar className="w-4 h-4" />
            <span>
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full glass text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI and Data Science"
        />

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
