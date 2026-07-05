"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full pt-32 lg:pt-48 pb-16 overflow-hidden bg-grid"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4F46E5]/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#06B6D4]/8 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-start"
          >
            {/* Top badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="section-badge bg-[#0B1020]/50 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Remote, Full-Time & Relocation
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <span className="text-[#94A3B8] text-sm font-medium tracking-wider uppercase font-['Manrope']">
                Senior Frontend Developer & UX/UI Designer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-['Manrope']"
            >
              Scalable & Premium
              <br />
              <span className="gradient-text">Digital Experiences</span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="mt-4 text-lg sm:text-xl text-[#E2E8F0] font-medium font-['Manrope']"
            >
              For SaaS, enterprise, and modern web platforms.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-[#94A3B8] text-base leading-relaxed max-w-xl font-['Inter']"
            >
              Senior Frontend Developer (React.js) & UX/UI Designer with <span className="text-white font-semibold">8+ years of experience</span> in building scalable, user-centric digital products. Strong blend of frontend engineering and UX research expertise, enabling end-to-end product development from user insights to high-performance interfaces.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 mt-8">
              {[
                { value: "8+", label: "Years Exp." },
                { value: "50+", label: "Projects" },
                { value: "20+", label: "Clients" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-black font-['Manrope'] gradient-text-blue">{s.value}</p>
                  <p className="text-[#94A3B8] text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary flex items-center gap-2"
                id="hero-view-projects-btn"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                id="hero-download-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {["AM", "SK", "JD", "PR"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0B1020] flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${["#4F46E5","#8B5CF6","#06B6D4","#7C3AED"][i]}, ${["#7C3AED","#06B6D4","#4F46E5","#8B5CF6"][i]})`,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-[11px] mt-0.5">Trusted by 20+ clients worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector("#stats")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[#475569] text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-[#475569]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
