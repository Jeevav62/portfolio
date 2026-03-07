"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8946038533",
    href: "tel:+918946038533",
    color: "blue",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jeevav62@gmail.com",
    href: "mailto:jeevav62@gmail.com",
    color: "purple",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "#",
    color: "cyan",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeevarathinamv/",
    color: "#0077B5",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Jeevav62",
    color: "#333",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/jeevav62/",
    color: "#E4405F",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jeevav62@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's collaborate on your next AI project"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Talk</h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const colorClasses = {
                  blue: "hover:border-blue-500/50 hover:shadow-blue-500/20",
                  purple: "hover:border-purple-500/50 hover:shadow-purple-500/20",
                  cyan: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
                };
                const iconColors = {
                  blue: "text-blue-400 bg-blue-500/10",
                  purple: "text-purple-400 bg-purple-500/10",
                  cyan: "text-cyan-400 bg-cyan-500/10",
                };

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-xl glass border border-white/10 ${colorClasses[item.color as keyof typeof colorClasses]} transition-all duration-300 group`}
                  >
                    <div
                      className={`p-3 rounded-lg ${iconColors[item.color as keyof typeof iconColors]}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-gradient transition-all">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
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
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 rounded-xl glass border border-white/10 hover:border-white/30 transition-all group"
                      style={{ borderColor: `${social.color}30` }}
                    >
                      <Icon
                        className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors"
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Options</h3>

              {/* Email Option */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:jeevav62@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Send an Email</p>
                    <p className="text-sm text-slate-400">jeevav62@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </motion.a>

                {/* Copy Email Button */}
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-white/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-white/5">
                    {copied ? (
                      <Check className="w-6 h-6 text-green-400" />
                    ) : (
                      <Copy className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white font-medium">
                      {copied ? "Copied!" : "Copy Email"}
                    </p>
                    <p className="text-sm text-slate-400">
                      {copied ? "Ready to paste" : "Click to copy email address"}
                    </p>
                  </div>
                </motion.button>

                {/* LinkedIn Option */}
                <motion.a
                  href="https://www.linkedin.com/in/jeevarathinamv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-[#0077B5]/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-[#0077B5]/20">
                    <Linkedin className="w-6 h-6 text-[#0077B5]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Connect on LinkedIn</p>
                    <p className="text-sm text-slate-400">Best for professional inquiries</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </motion.a>

                {/* WhatsApp Option */}
                <motion.a
                  href="https://wa.me/918946038533"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/10 hover:border-green-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">Message on WhatsApp</p>
                    <p className="text-sm text-slate-400">Quick response for urgent queries</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Response Time Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-xl glass border border-white/10 text-center"
            >
              <p className="text-sm text-slate-400">
                I typically respond within <span className="text-white font-medium">24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
