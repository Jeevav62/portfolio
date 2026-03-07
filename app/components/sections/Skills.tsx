"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import {
  Brain,
  MessageSquare,
  Mic,
  Terminal,
  Code2,
  GitBranch,
  Smartphone,
  Database,
  Cpu,
  Sparkles,
  Layers,
  Bot,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML",
    color: "blue",
    skills: [
      { name: "Large Language Models", icon: Brain },
      { name: "NLP", icon: MessageSquare },
      { name: "Speech AI", icon: Mic },
      { name: "Prompt Engineering", icon: Terminal },
      { name: "RAG Systems", icon: Database },
      { name: "AI Agents", icon: Bot },
    ],
  },
  {
    title: "Programming",
    color: "purple",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Layers },
      { name: "TypeScript", icon: Code2 },
    ],
  },
  {
    title: "Tools & Frameworks",
    color: "cyan",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Android Studio", icon: Smartphone },
      { name: "TensorFlow/PyTorch", icon: Cpu },
      { name: "Hugging Face", icon: Sparkles },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const colorClasses = {
    blue: {
      border: "border-blue-500/30 hover:border-blue-500/60",
      glow: "group-hover:shadow-blue-500/20",
      icon: "text-blue-400",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    purple: {
      border: "border-purple-500/30 hover:border-purple-500/60",
      glow: "group-hover:shadow-purple-500/20",
      icon: "text-purple-400",
      gradient: "from-purple-500/20 to-purple-600/20",
    },
    cyan: {
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      glow: "group-hover:shadow-cyan-500/20",
      icon: "text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-600/20",
    },
  };

  const colors = colorClasses[category.color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span
          className={`w-3 h-3 rounded-full ${
            category.color === "blue"
              ? "bg-blue-500"
              : category.color === "purple"
              ? "bg-purple-500"
              : "bg-cyan-500"
          }`}
        />
        {category.title}
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3"
      >
        {category.skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`group relative p-4 rounded-xl border ${colors.border} bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default ${colors.glow} hover:shadow-lg`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg bg-white/5 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Decorative Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "4", label: "Internships" },
            { value: "2", label: "Publications" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
