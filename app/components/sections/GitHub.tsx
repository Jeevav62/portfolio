"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Github, Star, Download, Heart, ArrowUpRight } from "lucide-react";
import CountUp from "../ui/CountUp";

const githubStats = [
  { label: "Public Repos", value: 16 },
  { label: "Stars Earned", value: 52 },
];

const topRepos = [
  { name: "tts-finetune-recipes", url: "https://github.com/Jeevav62/tts-finetune-recipes" },
  { name: "Rag-techniques", url: "https://github.com/Jeevav62/Rag-techniques" },
  { name: "chunking-techniques", url: "https://github.com/Jeevav62/chunking-techniques" },
  { name: "live-translation", url: "https://github.com/Jeevav62/live-translation" },
  { name: "voxpolish", url: "https://github.com/Jeevav62/voxpolish" },
  { name: "pocketlfm", url: "https://github.com/Jeevav62/pocketlfm" },
  { name: "linkedin-job-finder", url: "https://github.com/Jeevav62/linkedin-job-finder" },
];

const hfModels = [
  {
    id: "xtts",
    name: "xtts-v2-indian-en",
    desc: "XTTS-v2 fine-tuned on Indian-English. WER reduced 58.4% (18.54% → 7.71%), semantic similarity +12.1%.",
    downloads: "93",
    likes: "3",
    url: "https://huggingface.co/jeevav62/xtts-v2-indian-en",
  },
  {
    id: "kokoro",
    name: "kokoro-82m-indian-en",
    desc: "Kokoro-82M fine-tuned on 4,358 Indian-English clips. Proper-noun pronunciation improved 3.4 → 8.8 / 10.",
    downloads: "29",
    likes: "4",
    url: "https://huggingface.co/jeevav62/kokoro-82m-indian-en",
  },
  {
    id: "voxcpm",
    name: "voxcpm-lora-finetune",
    desc: "VoxCPM LoRA fine-tune for expressive Indian-English speech synthesis with parameter-efficient adapters.",
    downloads: "1",
    likes: "—",
    url: "https://huggingface.co/jeevav62/voxcpm-lora-finetune",
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
    <section id="github" className="relative px-6 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Open Source"
          title="Models & code in the open"
          subtitle="Fine-tuned models published on Hugging Face and research code on GitHub."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {/* Hugging Face Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            className="spotlight card flex flex-col p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                  <HuggingFaceIcon className="h-6 w-6 text-[var(--accent)]" />
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">Hugging Face</h3>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
                    @jeevav62
                  </p>
                </div>
              </div>
              <span className="eyebrow">3 Models</span>
            </div>

            <div className="mt-5 space-y-3">
              {hfModels.map((model) => (
                <a
                  key={model.id}
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-lg border border-[var(--border)] p-4 transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-subtle)]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-[family-name:var(--font-geist-mono)] text-sm font-medium text-[var(--foreground)]">
                      {model.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{model.desc}</p>
                  <div className="mt-3 flex items-center gap-4 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
                    <span className="inline-flex items-center gap-1 tnum">
                      <Download className="h-3 w-3" /> {model.downloads}
                    </span>
                    <span className="inline-flex items-center gap-1 tnum">
                      <Heart className="h-3 w-3" /> {model.likes}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://huggingface.co/jeevav62"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-subtle)]"
            >
              <HuggingFaceIcon className="h-4 w-4" />
              View profile
            </a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
            className="spotlight card flex flex-col p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-subtle)]">
                <Github className="h-6 w-6 text-[var(--foreground)]" />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">GitHub</h3>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-[var(--faint)]">
                  @Jeevav62
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {githubStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[var(--border)] p-4 text-center">
                  <CountUp
                    value={stat.value}
                    className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]"
                  />
                  <div className="mt-0.5 text-xs text-[var(--faint)]">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="mt-5 eyebrow">Top repositories</p>
            <div className="mt-3 flex-1 space-y-1">
              {topRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--surface-subtle)]"
                >
                  <span className="flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-sm text-[var(--muted)] group-hover:text-[var(--foreground)]">
                    <Star className="h-3.5 w-3.5 text-[var(--faint)]" />
                    {repo.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[var(--faint)] opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <a
              href="https://github.com/Jeevav62"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-subtle)]"
            >
              <Github className="h-4 w-4" />
              View profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
