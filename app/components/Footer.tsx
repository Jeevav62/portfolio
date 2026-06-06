"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="10.5" r="1.25" fill="currentColor" />
    <circle cx="15" cy="10.5" r="1.25" fill="currentColor" />
    <path d="M8.5 15c1 1.5 6 1.5 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 8.5C7.5 7 9 6.5 9 6.5M17 8.5C16.5 7 15 6.5 15 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

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
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gradient"
            >
              Jeevarathinam V
            </motion.div>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js &
              Three.js
            </p>
            <p className="text-slate-600 text-xs">© {currentYear} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
