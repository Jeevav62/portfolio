"use client";

import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import HuggingFaceIcon from "./icons/HuggingFaceIcon";

const socialLinks = [
  { icon: Github, href: "https://github.com/Jeevav62", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jeevarathinamv/", label: "LinkedIn" },
  { icon: HuggingFaceIcon, href: "https://huggingface.co/jeevav62", label: "Hugging Face" },
  { icon: Instagram, href: "https://www.instagram.com/jeevav62/", label: "Instagram" },
  { icon: Mail, href: "mailto:jeevav62@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[var(--foreground)]">
              Jeevarathinam V
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              AI / ML Engineer · Chennai, India
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-lg border border-[var(--border)] p-2.5 text-[var(--muted)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-[0_0_12px_rgba(201,168,76,0.12)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group rounded-lg border border-[var(--border)] p-2.5 text-[var(--muted)] transition-all hover:border-[var(--accent)]/40 hover:text-[var(--accent)] hover:shadow-[0_0_12px_rgba(201,168,76,0.12)]"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6 text-center text-sm text-[var(--faint)]">
          © {currentYear} Jeevarathinam V
        </div>
      </div>
    </footer>
  );
}
