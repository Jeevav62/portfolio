"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know more about my journey" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <TiltCard>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-40 animate-pulse-glow" />

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glow-purple">
                  <Image
                    src="/image.jpg"
                    alt="Jeevarathinam V"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-purple-900/20" />
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 glass rounded-full border border-blue-500/30"
                >
                  <span className="text-sm font-medium text-gradient-blue">AI / ML Engineer</span>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Crafting Intelligent
                <span className="text-gradient"> AI Solutions</span>
              </h3>

              <p className="text-slate-400 text-lg leading-relaxed">
                I&apos;m a final year B.Tech student in Artificial Intelligence and Data Science,
                currently working as an AI/ML Intern at{" "}
                <span className="text-blue-400 font-medium">F22 Labs</span>.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                My passion lies in building intelligent AI systems that solve real-world problems.
                I specialize in working with Large Language Models, Speech AI, NLP, RAG Systems,
                and Agent frameworks. I&apos;m particularly interested in on-device AI and making
                AI accessible to everyone.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center border border-blue-500/20 hover:border-blue-500/50 transition-colors"
              >
                <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-white font-medium">Chennai, India</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center border border-purple-500/20 hover:border-purple-500/50 transition-colors"
              >
                <GraduationCap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">Education</p>
                <p className="text-white font-medium">B.Tech AI & DS</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 text-center border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
              >
                <Briefcase className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-slate-400">Current Role</p>
                <p className="text-white font-medium">AI/ML Intern</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
