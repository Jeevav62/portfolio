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
  Send,
  ArrowUpRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

const HuggingFaceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="10.5" r="1.25" fill="currentColor" />
    <circle cx="15" cy="10.5" r="1.25" fill="currentColor" />
    <path d="M8.5 15c1 1.5 6 1.5 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 8.5C7.5 7 9 6.5 9 6.5M17 8.5C16.5 7 15 6.5 15 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

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
    color: "#888",
  },
  {
    icon: HuggingFaceIcon,
    label: "Hugging Face",
    href: "https://huggingface.co/jeevav62",
    color: "#FF9D00",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/jeevav62/",
    color: "#E4405F",
  },
];

// Using Formspree for form handling
// Replace 'xqkrovpo' with your actual Formspree form ID from your form endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwoepz";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Your Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
