"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "Zvec vs Qdrant vs Milvus: Vector Database Comparison for RAG",
    excerpt:
      "Benchmarked Zvec, Qdrant, and Milvus on RAG retrieval accuracy and latency across identical testing conditions: indexing speed, query latency, and retrieval consistency. Identified Zvec as the fastest with highest recall accuracy.",
    url: "https://www.f22labs.com/blogs/zvec-vs-qdrant-vs-milvus-vector-database-comparison-for-rag",
    date: "Apr 2026",
    readTime: "6 min read",
    category: "Vector Databases",
  },
  {
    id: "2",
    title: "What Is TOON and How Does It Reduce AI Token Costs?",
    excerpt:
      "Deep dive into TOON (Token-Oriented Object Notation), a data representation format designed to reduce token usage when sending structured data to AI models, cutting costs without sacrificing accuracy.",
    url: "https://www.f22labs.com/blogs/what-is-toon-and-how-does-it-reduce-ai-token-costs",
    date: "Apr 2026",
    readTime: "7 min read",
    category: "LLM Optimization",
  },
  {
    id: "3",
    title: "Reflection Prompting: Why One Prompt Is Not Enough",
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
      "Task Arithmetic research for TTS, combining fine-tuned female voice and Indian accent Kokoro models in shared weight space without any retraining. Achieved MOS 4.4 and 55% listener preference vs 27% baseline.",
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.05 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={`spotlight card group flex flex-col p-6 ${
        isComingSoon ? "cursor-default" : "card-hover"
      }`}
      aria-label={isComingSoon ? `${article.title} (coming soon)` : article.title}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="eyebrow">{article.category}</span>
          {isComingSoon && (
            <span className="rounded-full border border-[var(--border)] bg-[var(--surface-subtle)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--faint)]">
              Coming Soon
            </span>
          )}
        </div>
        {!isComingSoon && (
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </div>

      <h3 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold leading-snug text-[var(--foreground)]">
        {article.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {article.excerpt}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-[var(--border)] pt-4 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
        <span className="tnum">{article.date}</span>
        <span className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />
        <span>{article.readTime}</span>
      </div>
    </motion.a>
  );
}

export default function TechnicalWriting() {
  return (
    <section id="writing" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Writing"
          title="Technical writing"
          subtitle="Published engineering articles on Voice AI, RAG, LLM optimization, and edge inference, mostly on the F22 Labs engineering blog."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
