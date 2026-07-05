"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Usability Score", value: "98.5%", change: "+5.2%", positive: true },
  { label: "System Components", value: "1,240+", change: "In Design System", positive: true },
  { label: "Task Success Rate", value: "94.2%", change: "+8.4%", positive: true },
];

const chartBars = [40, 65, 45, 80, 60, 90, 70, 85, 55, 75, 88, 95];

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="dashboard-card p-5 shadow-2xl"
        style={{ boxShadow: "0 40px 100px rgba(79,70,229,0.25), 0 0 0 1px rgba(79,70,229,0.15)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium">UX Metrics Overview</p>
            <h3 className="text-white font-bold text-base mt-0.5 font-['Manrope']">Q4 Product Experience</h3>
          </div>
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]"
            >
              <p className="text-[#94A3B8] text-[10px] mb-1">{m.label}</p>
              <p className="text-white font-bold text-sm font-['Manrope']">{m.value}</p>
              <p className={`text-[10px] font-medium mt-1 ${m.positive ? "text-emerald-400" : "text-red-400"}`}>
                {m.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] text-white font-semibold">User Engagement Trend</p>
            <div className="flex gap-3 text-[10px] text-[#94A3B8]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#4F46E5] inline-block" />Engagement</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#06B6D4] inline-block" />Target</span>
            </div>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {chartBars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: "easeOut" }}
                className="flex-1 rounded-t-sm relative"
                style={{
                  background: i === chartBars.length - 1
                    ? "linear-gradient(180deg, #06B6D4 0%, #4F46E5 100%)"
                    : "linear-gradient(180deg, #4F46E5 0%, rgba(79,70,229,0.3) 100%)",
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
              <span key={m} className="text-[8px] text-[#475569] flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 rounded-xl p-3 border border-[#4F46E5]/20">
            <p className="text-[10px] text-[#818CF8] mb-1">System Usability (SUS)</p>
            <p className="text-white font-bold text-lg font-['Manrope']">88.5</p>
            <div className="progress-bar mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "88%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="progress-fill"
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#06B6D4]/15 to-[#0891B2]/10 rounded-xl p-3 border border-[#06B6D4]/20">
            <p className="text-[10px] text-[#06B6D4] mb-1">User Testing Sessions</p>
            <p className="text-white font-bold text-lg font-['Manrope']">120+</p>
            <div className="progress-bar mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "74%" }}
                transition={{ duration: 1.5, delay: 0.7 }}
                className="progress-fill"
                style={{ background: "linear-gradient(90deg, #06B6D4, #0891B2)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-6 top-8 glass-card rounded-xl p-3 w-44 shadow-xl border border-white/10"
        style={{ boxShadow: "0 20px 60px rgba(139,92,246,0.2)" }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center text-[10px]">🚀</div>
          <p className="text-[10px] font-semibold text-white">Design Handoff</p>
        </div>
        <p className="text-[9px] text-[#94A3B8]">V2.0 Design System deployed!</p>
        <div className="mt-1.5 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-400">Shipped</span>
        </div>
      </motion.div>

      {/* Floating activity card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -left-8 bottom-16 glass-card rounded-xl p-3 w-40 shadow-xl border border-white/10"
        style={{ boxShadow: "0 20px 60px rgba(6,182,212,0.15)" }}
      >
        <p className="text-[9px] text-[#94A3B8] mb-1">Design Score</p>
        <div className="flex items-baseline gap-1">
          <p className="text-white font-bold text-xl font-['Manrope']">9.8</p>
          <p className="text-[9px] text-[#94A3B8]">/ 10</p>
        </div>
        <div className="flex gap-0.5 mt-1.5">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`h-1 flex-1 rounded-full ${i <= 4 ? "bg-[#06B6D4]" : "bg-[#06B6D4]/30"}`} />
          ))}
        </div>
      </motion.div>

      {/* Glow blobs */}
      <div className="absolute -inset-10 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#4F46E5]/20 blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#8B5CF6]/15 blur-2xl" />
      </div>
    </div>
  );
}
