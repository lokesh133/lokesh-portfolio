"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Link2, Globe, Send, Calendar, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "lokeshdesign30@gmail.com", href: "mailto:lokeshdesign30@gmail.com", color: "#4F46E5" },
  { icon: Phone, label: "Phone", value: "+91 9610328630", href: "tel:+919610328630", color: "#8B5CF6" },
  { icon: Link2, label: "LinkedIn", value: "lokesh-kumar-90772462", href: "https://linkedin.com/in/lokesh-kumar-90772462/", color: "#06B6D4" },
  { icon: Globe, label: "Portfolio", value: "Figma Portfolio", href: "https://www.figma.com/design/i7Rw8zHJJwwEGM3d5FNl74/Portfolio", color: "#7C3AED" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", budget: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-gradient-to-r from-[#4F46E5]/12 via-[#8B5CF6]/10 to-[#06B6D4]/12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Hero CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-badge mb-6 mx-auto w-fit">
            <Mail size={13} />
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Manrope'] text-white leading-tight">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-[#94A3B8] mt-6 max-w-xl mx-auto text-base leading-relaxed">
            Whether you have a product to redesign, a startup to launch, or an enterprise system to modernize —
            I'm ready to make it exceptional.
          </p>

          {/* Quick contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:alex@designstudio.io"
              className="btn-primary flex items-center gap-2"
              id="contact-email-btn"
            >
              <Mail size={16} />
              Email Me
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary flex items-center gap-2"
              id="contact-schedule-btn"
            >
              <Calendar size={16} />
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 border border-white/[0.06] hover:border-white/12 transition-all duration-300 group cursor-pointer block"
                id={`contact-info-${item.label.toLowerCase()}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={17} style={{ color: item.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#94A3B8] text-xs font-medium">{item.label}</p>
                  <p className="text-white text-sm font-semibold truncate mt-0.5">{item.value}</p>
                </div>
                <ArrowRight size={14} className="text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.a>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card rounded-xl p-5 border border-emerald-500/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Available Now</span>
              </div>
              <p className="text-[#94A3B8] text-sm">
                Currently accepting new projects for{" "}
                <span className="text-white font-medium">Q2 2026</span>. Let's connect!
              </p>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.06]">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-white font-bold text-xl font-['Manrope']">Message Sent!</h3>
                  <p className="text-[#94A3B8] mt-2 text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-[#818CF8] hover:text-white transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-2">Your Name</label>
                      <input
                        id="contact-form-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="premium-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#94A3B8] font-medium mb-2">Email Address</label>
                      <input
                        id="contact-form-email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="premium-input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-2">Project Budget</label>
                    <select
                      id="contact-form-budget"
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="premium-input"
                      style={{ appearance: "none" }}
                    >
                      <option value="" style={{ background: "#0F1629" }}>Select budget range</option>
                      <option value="5k-10k" style={{ background: "#0F1629" }}>$5K – $10K</option>
                      <option value="10k-25k" style={{ background: "#0F1629" }}>$10K – $25K</option>
                      <option value="25k-50k" style={{ background: "#0F1629" }}>$25K – $50K</option>
                      <option value="50k+" style={{ background: "#0F1629" }}>$50K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#94A3B8] font-medium mb-2">Tell me about your project</label>
                    <textarea
                      id="contact-form-message"
                      placeholder="Describe your project, timeline, and goals..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="premium-input resize-none"
                      rows={4}
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                    id="contact-form-submit"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
