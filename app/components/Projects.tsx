"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise CRM Dashboard",
    category: "CRM Platform",
    desc: "Designed a scalable CRM platform focused on analytics, workflow management, user productivity, and responsive dashboard experiences.",
    tags: ["Analytics Dashboard", "User Management", "Dark/Light Mode", "Responsive Layout"],
    color: "#4F46E5",
    gradient: "from-[#4F46E5]/20 via-[#7C3AED]/10 to-transparent",
    accent: "#818CF8",
    stats: { users: "50K+", rating: "4.9", screens: "80+" },
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Healthcare Management Platform",
    category: "HealthTech",
    desc: "Created user-centric healthcare workflows and responsive patient dashboards with accessibility-focused design systems.",
    tags: ["Appointment Management", "Reports Dashboard", "Medical Analytics", "Accessibility"],
    color: "#06B6D4",
    gradient: "from-[#06B6D4]/20 via-[#0891B2]/10 to-transparent",
    accent: "#22D3EE",
    stats: { users: "120K+", rating: "4.8", screens: "60+" },
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SaaS Analytics Platform",
    category: "SaaS Product",
    desc: "Worked on a cloud-native SaaS product with scalable design systems and modern dashboard experiences.",
    tags: ["Admin Dashboard", "Team Management", "Billing System", "AI Insights"],
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6]/20 via-[#7C3AED]/10 to-transparent",
    accent: "#A78BFA",
    stats: { users: "30K+", rating: "5.0", screens: "45+" },
    icon: "📈",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="project-card group cursor-pointer"
      id={`project-card-${project.id}`}
    >
      {/* Image area */}
      <div className="relative h-56 sm:h-64 bg-[#0B1020] overflow-hidden border-b border-white/[0.05]">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
        />
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
            style={{ background: project.color }}
          >
            <ExternalLink size={14} />
            View Case Study
          </motion.div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: project.accent }}>
              {project.category}
            </span>
            <h3 className="text-white font-bold text-xl mt-1 font-['Manrope'] group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <motion.div
            whileHover={{ rotate: 45 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-[#94A3B8] group-hover:border-white/20 transition-all"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-[#4F46E5]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-[#8B5CF6]/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="section-badge mb-5">
            <Briefcase size={13} />
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-['Manrope'] text-white">
            Work That <span className="gradient-text">Speaks Volumes</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-lg text-base">
            A selection of high-impact product designs delivered for industry-leading clients.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary flex items-center gap-2"
            id="view-all-projects-btn"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
