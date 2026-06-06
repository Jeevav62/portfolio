"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Github, Star, GitFork, ExternalLink, BookMarked, Download } from "lucide-react";

const githubStats = [
  { label: "Repositories", value: "15", icon: GitFork },
  { label: "Stars Earned", value: "5", icon: Star },
];

const hfModels = [
  {
    id: "xtts",
    name: "jeevav62/xtts-v2-indian-en",
    desc: "XTTS-v2 fine-tuned on Indian-English. WER reduced 58.4% (18.54% to 7.71%), semantic similarity +12.1%",
    downloads: "79+",
    url: "https://huggingface.co/jeevav62/xtts-v2-indian-en",
  },
  {
    id: "kokoro",
    name: "jeevav62/kokoro-82m-indian-en",
    desc: "Kokoro-82M fine-tuned on 4,358 Indian-English clips. Indian proper noun pronunciation improved from 3.4/10 to 8.8/10",
    downloads: "—",
    url: "https://huggingface.co/jeevav62/kokoro-82m-indian-en",
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

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Open Source"
          subtitle="GitHub projects and Hugging Face models"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/10">
                <Github className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Jeevav62</h3>
                <p className="text-slate-400 text-sm">AI / ML Engineer</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {githubStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-4 text-center border border-white/5"
                  >
                    <Icon className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="https://github.com/Jeevav62"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Hugging Face Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-900/40 to-yellow-900/40 flex items-center justify-center border border-orange-500/20">
                <HuggingFaceIcon className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">jeevav62</h3>
                <p className="text-slate-400 text-sm">2 Published Models</p>
              </div>
            </div>

            {/* Models */}
            <div className="space-y-4 mb-6">
              {hfModels.map((model, index) => (
                <motion.a
                  key={model.id}
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="block glass rounded-xl p-4 border border-white/5 hover:border-orange-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BookMarked className="w-4 h-4 text-orange-400" />
                      <span className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors truncate">
                        {model.name}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{model.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Download className="w-3 h-3" />
                    <span>{model.downloads} downloads</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://huggingface.co/jeevav62"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:from-orange-400 hover:to-yellow-400 transition-all"
            >
              <HuggingFaceIcon className="w-5 h-5" />
              <span>View Hugging Face Profile</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
