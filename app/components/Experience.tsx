"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer & UX/UI Designer",
    company: "Annexlogics",
    duration: "Aug 2021 – Present",
    type: "Full-Time",
    color: "#4F46E5",
    desc: "Led end-to-end product development combining UX research and frontend engineering for scalable applications.",
    achievements: [
      "Conducted usability testing, improving engagement by 25%",
      "Built scalable UI systems using React.js, Next.js, and Storybook",
      "Designed scalable design systems and branding assets",
      "Improved application performance and UX across platforms",
    ],
    tags: ["React.js", "UX Research", "Design Systems"],
  },
  {
    title: "Frontend Developer & UI Designer",
    company: "Unomer",
    duration: "Nov 2019 – Aug 2021",
    type: "Full-Time",
    color: "#8B5CF6",
    desc: "Developed user feedback and survey tools to gather actionable insights and improved UX through data-driven iterations.",
    achievements: [
      "Developed user feedback and survey tools",
      "Improved UX through data-driven iterations",
      "Optimized user journeys to increase retention",
    ],
    tags: ["UX Strategy", "Survey Tools", "Data-Driven Design"],
  },
  {
    title: "UI Developer",
    company: "Drive Digital",
    duration: "Aug 2015 – Nov 2019",
    type: "Full-Time",
    color: "#06B6D4",
    desc: "Designed and developed responsive web interfaces and delivered end-to-end UX solutions from concept to implementation.",
    achievements: [
      "Designed and developed responsive web interfaces",
      "Created wireframes, prototypes, and UI solutions",
      "Improved client engagement through user-friendly designs",
    ],
    tags: ["HTML/CSS/JS", "Wireframing", "Prototyping"],
  },
  {
    title: "Web Designer & Developer",
    company: "Dogma Soft",
    duration: "Dec 2014 – Aug 2015",
    type: "Full-Time",
    color: "#0891B2",
    desc: "Developed UI components and maintained design consistency across platforms with a focus on accessibility.",
    achievements: [
      "Developed reusable UI components",
      "Focused on accessibility and navigation",
      "Improved overall product usability",
    ],
    tags: ["Accessibility", "UI Components", "Web Design"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-badge mb-5">
            <Clock size={13} />
            Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg text-base">
            8+ years of delivering design excellence across startups and enterprises.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full rounded-full origin-top"
              style={{ background: "linear-gradient(180deg, #4F46E5, #8B5CF6, #06B6D4)" }}
            />
          </div>

          <div className="space-y-8 pl-16 sm:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[52px] sm:-left-[60px] top-6 w-6 h-6 rounded-full border-4 border-[#0B1020] z-10"
                  style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-2xl p-6 border border-white/[0.06] transition-all duration-300 hover:border-white/12"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl font-['Manrope']">{exp.title}</h3>
                      <p className="font-semibold mt-0.5 text-sm" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[#94A3B8] text-xs flex items-center gap-1.5">
                        <Clock size={11} />
                        {exp.duration}
                      </span>
                      <span
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${exp.color}20`, color: exp.color }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{exp.desc}</p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
