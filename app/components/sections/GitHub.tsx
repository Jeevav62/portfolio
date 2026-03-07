"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Github, Star, GitFork, ExternalLink, GitCommit, Users } from "lucide-react";

const stats = [
  { label: "Repositories", value: "15+", icon: GitCommit },
  { label: "Stars Earned", value: "20+", icon: Star },
  { label: "Contributions", value: "200+", icon: GitFork },
];

const contributions = [
  { day: "M", count: 5 },
  { day: "T", count: 8 },
  { day: "W", count: 12 },
  { day: "T", count: 6 },
  { day: "F", count: 10 },
  { day: "S", count: 4 },
  { day: "S", count: 3 },
];

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="GitHub"
          subtitle="Check out my open source contributions and projects"
        />

        {/* GitHub Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/10">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Jeevav62</h3>
                <p className="text-slate-400">AI / ML Engineer & Developer</p>
              </div>
            </div>
            <motion.a
              href="https://github.com/Jeevav62"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Profile</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center border border-white/5 hover:border-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Contribution Graph Simulation */}
          <div className="glass rounded-xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-slate-300">Contribution Activity</h4>
              <span className="text-xs text-slate-500">Last 7 days</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-32">
              {contributions.map((day, index) => (
                <motion.div
                  key={`${day.day}-${index}`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(day.count / 12) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <motion.div
                    className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400 min-h-[4px]"
                    whileHover={{ opacity: 0.8 }}
                  />
                  <span className="text-xs text-slate-500">{day.day}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Activity Placeholder */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { name: "AI-ML-Projects", desc: "Collection of AI/ML experiments and projects", lang: "Python" },
              { name: "local-llm-android", desc: "Local LLM inference on Android devices", lang: "Kotlin" },
            ].map((repo, index) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/Jeevav62/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm text-slate-400 mb-3">{repo.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-xs text-slate-500">{repo.lang}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
