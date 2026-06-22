"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = navItems.map((item) => item.href.slice(1));
      sections.unshift("hero");

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--border)] bg-[rgba(250,250,250,0.85)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-[var(--foreground)]"
          >
            JV<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--accent)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/Jeeva-resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
              className="inline-flex rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-[var(--foreground)] md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[rgba(9,9,11,0.3)]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="absolute inset-x-4 top-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-lg"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? "bg-[var(--surface-subtle)] text-[var(--foreground)]"
                        : "text-[var(--muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/Jeeva-resume.pdf"
                  download
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border-strong)] px-4 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  <FileText className="h-4 w-4" />
                  Download Résumé
                </a>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
