"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers } from "lucide-react";

const tools = [
  { name: "Figma", emoji: "🎨", color: "#F24E1E", desc: "UI/UX Design" },
  { name: "Adobe XD", emoji: "🟣", color: "#FF61F6", desc: "Prototyping" },
  { name: "Photoshop", emoji: "🖼️", color: "#31A8FF", desc: "Visual Design" },
  { name: "Illustrator", emoji: "✏️", color: "#FF9A00", desc: "Vector Art" },
  { name: "Canva", emoji: "🌈", color: "#00C4CC", desc: "Quick Design" },
  { name: "ChatGPT", emoji: "🤖", color: "#10A37F", desc: "AI Research" },
  { name: "Cursor AI", emoji: "⚡", color: "#8B5CF6", desc: "AI Coding" },
  { name: "Claude AI", emoji: "🧠", color: "#D97757", desc: "AI Assistant" },
];

const skills = [
  { name: "UI Design", level: 97, color: "#4F46E5" },
  { name: "UX Research", level: 90, color: "#8B5CF6" },
  { name: "Prototyping", level: 95, color: "#06B6D4" },
  { name: "Design Systems", level: 92, color: "#4F46E5" },
  { name: "Mobile Design", level: 88, color: "#8B5CF6" },
  { name: "Dashboard Design", level: 94, color: "#06B6D4" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#94A3B8] font-medium">{name}</span>
        <span className="text-white font-bold">{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="progress-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-[#4F46E5]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-badge mb-5">
            <Layers size={13} />
            Skills & Tools
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white">
            My Design <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg text-base">
            A curated toolkit of industry-leading design and development tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tools grid */}
          <div>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-6 font-semibold">Tools & Software</p>
            <div className="grid grid-cols-3 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass-card rounded-2xl p-4 border border-white/[0.06] text-center cursor-default group transition-all duration-300 hover:border-white/20"
                  style={{
                    "--tool-color": tool.color,
                  } as React.CSSProperties}
                >
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${tool.color}20`, border: `1px solid ${tool.color}30` }}
                  >
                    {tool.emoji}
                  </div>
                  <p className="text-white text-xs font-semibold">{tool.name}</p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skill bars */}
          <div>
            <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-6 font-semibold">Proficiency Levels</p>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={i * 0.12}
                />
              ))}
            </div>

            {/* Additional tags */}
            <div className="mt-8">
              <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-3 font-semibold">Also proficient in</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Webflow", "Notion", "Framer", "Jira"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
