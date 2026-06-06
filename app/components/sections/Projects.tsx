"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, Github, Cpu, Volume2, Shield, Database, Globe, Search } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "TTS Fine-Tuning & Task Arithmetic Research",
    description:
      "Pioneered Task Arithmetic for TTS, combining fine-tuned female voice and Indian accent Kokoro models in shared weight space at α=0.6, β=1.0 without retraining. Achieved MOS 4.4 and 55% listener preference. Fine-tuned XTTS-v2 reducing WER by 58.4% (18.54% to 7.71%). Published 2 models on Hugging Face.",
    technologies: ["Kokoro-82M", "XTTS-v2", "VoxCPM", "PyTorch", "PEFT", "LoRA", "DDP", "Hugging Face"],
    icon: Volume2,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/Jeevav62/tts-finetune-recipes",
    hfUrl: "https://huggingface.co/jeevav62",
  },
  {
    id: "2",
    title: "Real-Time Multilingual Translation System",
    description:
      "Browser-native live speech-to-speech translation across 5+ Indian languages at ~380ms E2E latency, supporting 25+ concurrent listeners per room. Reduced cross-lingual TTS latency by 83% (650ms → 75ms) through systematic 5-provider benchmarking. Multi-room WebSocket architecture with API key pool rotation and real-time cost tracking.",
    technologies: ["Node.js", "WebSocket", "Deepgram Nova-3", "Sarvam Translate", "ElevenLabs", "STT/TTS APIs"],
    icon: Globe,
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
    githubUrl: "https://github.com/Jeevav62/live-translation",
  },
  {
    id: "3",
    title: "LLM SEO: AI-Native Content Engine",
    description:
      "Multi-stage AI content engine that researches, verifies, and generates citation-optimized articles directly cited by ChatGPT, Claude, Gemini, and Perplexity. 5-stage pipeline: Question Discovery → Source Authority Mapping → Fact Verification → Hub & Spoke Knowledge Map → Article Generation. Includes hallucination prevention and resume-from-checkpoint for cost safety.",
    technologies: ["Python", "LLM APIs", "Web Scraping", "JWT Auth", "Cryptography", "Async Processing"],
    icon: Search,
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
    githubUrl: "https://github.com/Jeevav62/llm-seo",
  },
  {
    id: "4",
    title: "Offline LLM on Android: Edge AI Inference",
    description:
      "On-device LLM inference system deploying LFM 2.5 1.2B on Android (Poco X3) via llama.cpp and CMake, fully offline with zero internet dependency. Proves edge AI viability: quantized LLM runs entirely on consumer mobile hardware with no cloud backend.",
    technologies: ["Python", "llama.cpp", "CMake", "Android", "LFM 2.5 1.2B", "Edge AI"],
    icon: Cpu,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/Jeevav62/AIP",
  },
  {
    id: "5",
    title: "AI Hoax Buster: Chrome Extension",
    description:
      "Browser-integrated NLP Chrome extension for real-time bias and hoax detection with sub-800ms latency on news articles and web content. Engineered deterministic inference pipelines with chunked processing, label normalization, reproducible scoring, and manifest-compliant Chrome extension logic.",
    technologies: ["Python", "Django", "Hugging Face Transformers", "scikit-learn", "JavaScript", "Chrome APIs"],
    icon: Shield,
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
    githubUrl: "https://github.com/Jeevav62/AI-Hoax-Buster",
  },
  {
    id: "6",
    title: "RAG Techniques",
    description:
      "Comprehensive implementation of normal and advanced RAG methodologies, covering dense retrieval, hybrid search, reranking, GraphRAG, and production-grade optimization patterns for LLM-powered retrieval systems.",
    technologies: ["Python", "LangChain", "LlamaIndex", "Qdrant", "Neo4j", "RAG", "GraphRAG"],
    icon: Database,
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
    githubUrl: "https://github.com/Jeevav62/Rag-techniques",
  },
];

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="10.5" r="1.25" fill="currentColor" />
    <circle cx="15" cy="10.5" r="1.25" fill="currentColor" />
    <path d="M8.5 15c1 1.5 6 1.5 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 8.5C7.5 7 9 6.5 9 6.5M17 8.5C16.5 7 15 6.5 15 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div
        className={`relative h-full glass rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-500 hover:border-${project.color}-500/50`}
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
        />

        {/* Icon */}
        <div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} p-0.5 mb-6`}
        >
          <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-xs rounded-full glass border border-${project.color}-500/20 text-slate-300`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
            </motion.a>
          )}
          {(project as {hfUrl?: string}).hfUrl && (
            <motion.a
              href={(project as {hfUrl?: string}).hfUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Hugging Face"
            >
              <HuggingFaceIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
            </motion.a>
          )}
          {(project as {liveUrl?: string}).liveUrl && (
            <motion.a
              href={(project as {liveUrl?: string}).liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
            </motion.a>
          )}
        </div>

        {/* Corner Glow */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing my work in AI, ML, and software development"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
