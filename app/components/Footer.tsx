"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Link2, PenTool, Palette, Mail, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Globe, href: "#", label: "Twitter / X", id: "footer-twitter" },
  { icon: Link2, href: "https://linkedin.com/in/lokesh-kumar-90772462/", label: "LinkedIn", id: "footer-linkedin" },
  { icon: PenTool, href: "https://www.figma.com/design/i7Rw8zHJJwwEGM3d5FNl74/Portfolio", label: "Portfolio", id: "footer-portfolio" },
  { icon: Palette, href: "#", label: "Dribbble", id: "footer-dribbble" },
  { icon: Mail, href: "mailto:lokeshdesign30@gmail.com", label: "Email", id: "footer-email" },
];

const navLinks = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.06] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[#080C1A]/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#8B5CF6] flex items-center justify-center">
                <Zap size={17} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-lg font-['Manrope']">
                <span className="text-white">Lokesh</span>
                <span className="gradient-text-blue">Kumar</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Senior Frontend Developer & UX/UI Designer crafting premium digital experiences. Available for new projects.
            </p>
            {/* Socials */}
            <div className="flex gap-2 mt-5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={s.id}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl glass-card border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/20 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#94A3B8] text-sm hover:text-white transition-colors group flex items-center gap-1"
                  >
                    {link}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Get in Touch</p>
            <ul className="space-y-3 text-sm text-[#94A3B8]">
              <li>
                <a href="mailto:lokeshdesign30@gmail.com" className="hover:text-white transition-colors">
                  lokeshdesign30@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919610328630" className="hover:text-white transition-colors">
                  +91 9610328630
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">Available Now</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary mt-5 text-sm px-4 py-2.5"
              id="footer-hire-me-btn"
            >
              Hire Me
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} Lokesh Kumar — Senior UI/UX Designer Portfolio
          </p>
          <div className="flex items-center gap-1 text-[#475569] text-xs">
            <span>Designed & Built with</span>
            <span className="text-red-400">♥</span>
            <span>using Next.js + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
