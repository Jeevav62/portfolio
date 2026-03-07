"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    id: "1",
    role: "AI/ML Intern",
    company: "F22 Labs",
    location: "Chennai, India",
    startDate: "Dec 2025",
    endDate: "Present",
    description: [
      "Building and optimizing Large Language Model systems for production",
      "Implementing advanced prompt engineering techniques",
      "Experimenting with Speech AI and voice synthesis technologies",
      "Conducting AI research and experimentation with cutting-edge models",
    ],
    technologies: ["LLMs", "Prompt Engineering", "Speech AI", "Python"],
    color: "blue",
  },
  {
    id: "2",
    role: "Data Science Intern",
    company: "Shiash Info Solutions Pvt Ltd",
    location: "Chennai, India",
    startDate: "Jul 2025",
    endDate: "Sep 2025",
    description: [
      "Built scalable data pipelines using Pandas and NumPy",
      "Processed and analyzed large datasets (~500GB)",
      "Implemented data cleaning and transformation workflows",
      "Created automated data validation systems",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Pipelines"],
    color: "purple",
  },
  {
    id: "3",
    role: "Data Analyst Intern",
    company: "UptoSkills",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    description: [
      "Designed interactive Power BI dashboards for business insights",
      "Built data preparation pipelines for analytics",
      "Performed comprehensive data analytics and reporting",
      "Collaborated with stakeholders to define KPIs",
    ],
    technologies: ["Power BI", "SQL", "Excel", "Data Analytics"],
    color: "cyan",
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  const isEven = index % 2 === 0;
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 border-blue-500/30",
    purple: "from-purple-500 to-purple-600 border-purple-500/30",
    cyan: "from-cyan-500 to-cyan-600 border-cyan-500/30",
  };

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, x: isEven ? x : useTransform(x, (v) => -v), scale }}
      className={`relative flex items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:items-center`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 z-10 hidden md:block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-50" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className={`glass rounded-2xl p-6 border ${colorClasses[experience.color as keyof typeof colorClasses]} hover:shadow-2xl transition-all duration-300`}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 className="w-4 h-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[experience.color as keyof typeof colorClasses]} bg-opacity-20`}>
              <Briefcase className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Calendar className="w-4 h-4" />
            <span>
              {experience.startDate} — {experience.endDate}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full glass text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI and Data Science"
        />

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
