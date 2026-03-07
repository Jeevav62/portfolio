"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, Github, Cpu, Volume2, Shield, Sparkles } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Local LLM Android App",
    description:
      "Running local LLMs directly on Android devices enabling private on-device AI inference. No cloud required, complete privacy for your conversations.",
    technologies: ["LLM Inference", "Android", "Edge AI", "Kotlin"],
    icon: Cpu,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "TTS Fine Tuning",
    description:
      "Fine-tuned speech synthesis models including VoxCPM and Kokoro TTS to improve pronunciation accuracy and natural speech quality for various languages.",
    technologies: ["Python", "Deep Learning", "Speech AI", "Audio Processing"],
    icon: Volume2,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    title: "Fake News Bias Detection",
    description:
      "Browser extension that analyzes news articles in real-time and detects bias using advanced NLP models and transformer architectures.",
    technologies: ["Transformers", "NLP", "Browser APIs", "JavaScript"],
    icon: Shield,
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "4",
    title: "RAG AI Agents (Coming Soon)",
    description:
      "Advanced RAG system and AI agents built using LiveKit for real-time voice and multimodal interactions. Stay tuned for updates!",
    technologies: ["RAG", "LiveKit", "AI Agents", "Voice AI"],
    icon: Sparkles,
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
    comingSoon: true,
  },
];

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
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
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
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
        <div className="flex items-center gap-4">
          {!project.comingSoon && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
              </motion.button>
            </>
          )}
          {project.comingSoon && (
            <span className="px-4 py-2 text-sm rounded-lg glass text-slate-400 border border-purple-500/30">
              Coming Soon
            </span>
          )}
        </div>

        {/* Corner Glow */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
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
