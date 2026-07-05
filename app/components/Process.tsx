"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Research",
    desc: "Deep user interviews, competitive analysis, and data synthesis to uncover real problems worth solving.",
    icon: "🔍",
    color: "#4F46E5",
  },
  {
    num: "02",
    title: "Wireframing",
    desc: "Rapid low-fidelity wireframes to explore layout ideas, user flows, and information architecture.",
    icon: "✏️",
    color: "#7C3AED",
  },
  {
    num: "03",
    title: "UI Design",
    desc: "Pixel-perfect high-fidelity designs with a comprehensive design system, components, and visual polish.",
    icon: "🎨",
    color: "#8B5CF6",
  },
  {
    num: "04",
    title: "Prototyping",
    desc: "Interactive prototypes with realistic micro-interactions to validate designs with real users before dev.",
    icon: "⚡",
    color: "#06B6D4",
  },
  {
    num: "05",
    title: "Dev Handoff",
    desc: "Meticulous Figma specs, component documentation, and close collaboration with engineers for perfect execution.",
    icon: "🚀",
    color: "#0891B2",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-48 bg-gradient-to-r from-[#4F46E5]/8 via-[#8B5CF6]/8 to-[#06B6D4]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-badge mb-5">
            <Sparkles size={13} />
            Design Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white">
            From{" "}
            <span className="gradient-text">Chaos to Clarity</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg text-base">
            A battle-tested process that consistently delivers exceptional outcomes.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-16 left-0 right-0 h-[2px] mx-20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, #4F46E5, #7C3AED, #8B5CF6, #06B6D4, #0891B2)" }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 z-10 glass-card border transition-all duration-300 hover:border-white/20"
                  style={{ borderColor: `${step.color}40`, boxShadow: `0 0 20px ${step.color}25` }}
                >
                  {step.icon}
                  <div
                    className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#0B1020]"
                    style={{ background: step.color, boxShadow: `0 0 12px ${step.color}` }}
                  />
                </motion.div>

                <span
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{ color: step.color }}
                >
                  {step.num}
                </span>
                <h3 className="text-white font-bold text-base mb-2 font-['Manrope']">{step.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical connector */}
          <div className="absolute left-7 top-8 bottom-8 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full w-full rounded-full origin-top"
              style={{ background: "linear-gradient(180deg, #4F46E5, #7C3AED, #8B5CF6, #06B6D4, #0891B2)" }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="flex gap-6 items-start"
              >
                {/* Node */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 z-10 glass-card border"
                  style={{ borderColor: `${step.color}40`, boxShadow: `0 0 20px ${step.color}25` }}
                >
                  {step.icon}
                  <div
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#0B1020]"
                    style={{ background: step.color }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>
                    STEP {step.num}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-1 font-['Manrope']">{step.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mt-1.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
