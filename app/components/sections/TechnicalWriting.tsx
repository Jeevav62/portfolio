"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, BookOpen, Clock, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "Reflection Prompting — Why One Prompt Is Not Enough",
    excerpt:
      "Explore the power of reflection prompting techniques to improve LLM outputs through iterative refinement and self-correction mechanisms.",
    url: "https://www.f22labs.com/blogs/reflection-prompting-explained-why-one-prompt-is-not-enough/",
    date: "2025",
    readTime: "8 min read",
    category: "Prompt Engineering",
  },
  {
    id: "2",
    title: "How to Run Local LLM on an Android Phone",
    excerpt:
      "A comprehensive guide to running large language models locally on Android devices for private, on-device AI inference without cloud dependencies.",
    url: "https://www.f22labs.com/blogs/how-to-run-local-llm-on-an-android-phone/",
    date: "2025",
    readTime: "12 min read",
    category: "Edge AI",
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group block"
    >
      <div className="relative h-full glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

        {/* Category Badge */}
        <div className="relative flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {article.category}
          </span>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-gradient-blue transition-all duration-300 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="relative text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="relative flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Hover Line */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.a>
  );
}

export default function TechnicalWriting() {
  return (
    <section id="writing" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Writing"
          subtitle="Sharing knowledge and insights about AI, ML, and software engineering"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.f22labs.com/blogs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <span>View all articles on F22 Labs Blog</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
