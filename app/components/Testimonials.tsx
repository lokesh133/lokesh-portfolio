"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client 1",
    role: "Product Manager",
    initials: "C1",
    color: "#4F46E5",
    rating: 5,
    text: "Lokesh consistently delivers modern, user-focused, and scalable design solutions with excellent collaboration and communication skills.",
  },
  {
    name: "Client 2",
    role: "Engineering Lead",
    initials: "C2",
    color: "#8B5CF6",
    rating: 5,
    text: "Strong understanding of UX strategy, dashboard systems, and responsive design workflows.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-64 bg-gradient-to-r from-[#4F46E5]/6 via-[#8B5CF6]/6 to-[#06B6D4]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-badge mb-5">
            <Star size={13} />
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg text-base">
            Real results, real relationships. Hear from the teams I've partnered with.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="testimonial-card"
            >
              {/* Quote icon */}
              <Quote size={28} className="mb-4 opacity-20 text-white" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#94A3B8] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 glass-card rounded-2xl p-6 border border-white/[0.06] max-w-md mx-auto"
        >
          <div className="text-center">
            <p className="text-5xl font-black font-['Manrope'] stat-number">5.0</p>
            <div className="flex gap-1 justify-center mt-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <p className="text-white font-bold">Average Rating</p>
            <p className="text-[#94A3B8] text-sm">Based on 20+ client reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
