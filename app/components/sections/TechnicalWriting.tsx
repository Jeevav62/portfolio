"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { BookOpen, Clock, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "Zvec vs Qdrant vs Milvus: Vector Database Comparison for RAG",
    excerpt:
      "Benchmarked Zvec, Qdrant, and Milvus on RAG retrieval accuracy and latency across identical testing conditions — indexing speed, query latency, and retrieval consistency. Identified Zvec as the fastest with highest recall accuracy.",
    url: "https://www.f22labs.com/blogs/zvec-vs-qdrant-vs-milvus-vector-database-comparison-for-rag",
    date: "Apr 2026",
    readTime: "6 min read",
    category: "Vector Databases",
  },
  {
    id: "2",
    title: "What Is TOON and How Does It Reduce AI Token Costs?",
    excerpt:
      "Deep dive into TOON (Token-Oriented Object Notation) — a data representation format designed to reduce token usage when sending structured data to AI models, cutting costs without sacrificing accuracy.",
    url: "https://www.f22labs.com/blogs/what-is-toon-and-how-does-it-reduce-ai-token-costs",
    date: "Apr 2026",
    readTime: "7 min read",
    category: "LLM Optimization",
  },
  {
    id: "3",
    title: "Reflection Prompting — Why One Prompt Is Not Enough",
    excerpt:
      "Explore the power of reflection prompting techniques to improve LLM outputs through iterative refinement and self-correction mechanisms.",
    url: "https://www.f22labs.com/blogs/reflection-prompting-explained-why-one-prompt-is-not-enough/",
    date: "2025",
    readTime: "8 min read",
    category: "Prompt Engineering",
  },
  {
    id: "4",
    title: "How to Run Local LLM on an Android Phone",
    excerpt:
      "A comprehensive guide to running large language models locally on Android devices for private, on-device AI inference without cloud dependencies.",
    url: "https://www.f22labs.com/blogs/how-to-run-local-llm-on-an-android-phone/",
    date: "2025",
    readTime: "12 min read",
    category: "Edge AI",
  },
  {
    id: "5",
    title: "I Merged Two AI Voice Models With Math And It Actually Worked",
    excerpt:
      "Task Arithmetic research for TTS — combined fine-tuned female voice and Indian accent Kokoro models in shared weight space without any retraining, achieving MOS 4.4 and 55% listener preference vs 27% baseline.",
    url: "#",
    date: "2026",
    readTime: "10 min read",
    category: "Voice AI Research",
    comingSoon: true,
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  const isComingSoon = "comingSoon" in article && article.comingSoon;

  return (
    <motion.a
      href={isComingSoon ? undefined : article.url}
      target={isComingSoon ? undefined : "_blank"}
      rel={isComingSoon ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={isComingSoon ? {} : { y: -8, scale: 1.02 }}
      className={`group block ${isComingSoon ? "cursor-default" : ""}`}
    >
      <div className={`relative h-full glass rounded-2xl p-6 border border-white/10 ${isComingSoon ? "opacity-70" : "hover:border-blue-500/50"} transition-all duration-500 overflow-hidden`}>
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

        {/* Category Badge */}
        <div className="relative flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {article.category}
            </span>
            {isComingSoon && (
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Coming Soon
              </span>
            )}
          </div>
          {!isComingSoon && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ArrowUpRight className="w-4 h-4 text-blue-400" />
            </motion.div>
          )}
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
        {!isComingSoon && (
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
        )}
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

      </div>
    </section>
  );
}
