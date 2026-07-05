"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { User, MapPin, Mail, Download } from "lucide-react";

const skills = [
  "Frontend Engineering", "React.js", "Next.js", "UX Research", "Usability Testing",
  "User Journeys", "Wireframing", "High-Fidelity UI Design", "A/B Testing", 
  "Design Systems", "Storybook", "Agile Collaboration", "Data-Driven Design"
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="section-badge mb-5">
            <User size={13} />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white leading-tight">
            Crafting Experiences with{" "}
            <span className="gradient-text">Purpose & Precision</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl text-base leading-relaxed">
            I strongly believe in combining design thinking with modern UI systems to create meaningful and impactful user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile image placeholder */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              {/* Gradient background as image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F1629] via-[#1a1f3e] to-[#0F1629]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Avatar circle */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#8B5CF6] flex items-center justify-center text-6xl font-black text-white font-['Manrope'] shadow-2xl"
                  style={{ boxShadow: "0 0 80px rgba(79,70,229,0.4)" }}>
                  LK
                </div>
                <div className="mt-6 text-center px-8">
                  <p className="text-white font-bold text-2xl font-['Manrope']">Lokesh Kumar</p>
                  <p className="text-[#94A3B8] text-sm mt-1">Frontend Dev & UX/UI</p>
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[#94A3B8] text-xs">
                    <MapPin size={12} />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-xl glass-card border border-white/10 flex items-center justify-center text-2xl">
                  🎨
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 rounded-xl glass-card border border-white/10 flex items-center justify-center text-2xl">
                  ✦
                </div>
                <div className="absolute bottom-20 left-8 glass-card rounded-xl p-3 border border-white/10">
                  <p className="text-[10px] text-[#94A3B8]">Currently at</p>
                  <p className="text-white text-xs font-bold mt-0.5">Freelance</p>
                  <span className="inline-flex items-center gap-1 mt-1 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>
              {/* Border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/[0.07]" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-12 glass-card rounded-2xl p-4 border border-white/10"
              style={{ boxShadow: "0 20px 60px rgba(79,70,229,0.2)" }}
            >
              <p className="text-3xl font-black font-['Manrope'] gradient-text-blue">8+</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">Years of</p>
              <p className="text-xs text-white font-semibold">Experience</p>
            </motion.div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="space-y-4 text-[#94A3B8] text-base leading-relaxed">
              <p>
                I am a <span className="text-white font-semibold">Senior Frontend Developer & UX/UI Designer</span> with over 8 years of experience building scalable, user-centric digital products.
              </p>
              <p>
                My expertise lies in a strong blend of frontend engineering and UX research, enabling end-to-end product development from user insights to high-performance interfaces. I focus on usability testing, data-driven design decisions, and building scalable UI systems using <span className="text-white font-semibold">React.js and Next.js</span>.
              </p>
              <p>
                I strongly believe in collaborating closely with global teams to validate product ideas through rapid prototyping and translating UX insights into performant, production-ready interfaces.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { label: "Based in", value: "Jaipur, India" },
                { label: "Specialty", value: "SaaS & Enterprise" },
                { label: "Availability", value: "Open to Work" },
                { label: "Work Mode", value: "Remote / Full-Time" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-3 border border-white/[0.06]">
                  <p className="text-[#94A3B8] text-xs">{item.label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-3 font-medium">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs text-[#94A3B8]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary flex items-center gap-2 text-sm"
                id="about-contact-btn"
              >
                <Mail size={15} />
                Get in Touch
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center gap-2 text-sm"
                id="about-download-resume-btn"
              >
                <Download size={15} />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
