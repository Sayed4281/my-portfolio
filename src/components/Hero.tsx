'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  ArrowUpRight,
  Sparkles,
  FileText
} from 'lucide-react';
import ArchitectureHeroVisual from './ArchitectureHeroVisual';

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Sayed4281", label: "GitHub Profile" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/er-sayed-shahloob-p/", label: "LinkedIn Profile" },
    { name: "Email", href: "mailto:sayedshahloobpofficial@gmail.com", label: "Direct Email" }
  ];

  // Strictly verifiable credentials only - zero fabricated claims
  const verifiableHighlights = [
    { 
      title: "B.Tech Computer Science", 
      detail: "8.08 CGPA · Distinction",
      note: "Engineering Foundation"
    },
    { 
      title: "ERP & HRMS Systems", 
      detail: "Hirush Global LLP",
      note: "Modules & Workflows"
    },
    { 
      title: "Production Software", 
      detail: "Web Systems & PWAs",
      note: "Delivered Deployments"
    },
    { 
      title: "Published Researcher", 
      detail: "ICETI4T 2025 Conference",
      note: "AI Healthcare Anomaly"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-[88vh] lg:min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-[#FAFAFB]"
    >
      {/* Subtle Technical Grid Canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Authentic Executive Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Availability Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-800 tracking-wide font-medium">
                Available for Engineering &amp; Project Mandates
              </span>
            </motion.div>

            {/* Name Subtitle & Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-4"
            >
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase text-slate-600 tracking-widest block mb-2">
                Sayed Shahloob P — Software Engineer &amp; Project Lead
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 font-display leading-[1.15]">
                Connecting Business Requirements with Production Software.
              </h1>
            </motion.div>

            {/* Clear, Realistic Scope Description */}
            <motion.p 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed font-normal"
            >
              Specialized in multi-tenant ERP and HRMS module architecture, full-stack web platforms, and translating complex operational workflows into maintainable software.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-medium text-sm transition-all duration-200 hover:bg-slate-800 active:scale-[0.98] shadow-xs"
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm transition-all duration-200 active:scale-[0.98] shadow-2xs"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight size={15} className="text-slate-600" />
              </Link>

              <a
                href="/sayed.png"
                download="Sayed_Shahloob_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 font-medium text-xs transition-all shadow-2xs"
              >
                <FileText size={14} />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Verified Channels */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-4 text-xs text-slate-600 font-mono"
            >
              <span className="uppercase tracking-widest text-[11px] text-slate-600 font-semibold">Channels</span>
              <div className="h-3 w-[1px] bg-slate-300" />
              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 hover:decoration-slate-950 transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered System Architecture Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <ArchitectureHeroVisual />
          </motion.div>

        </div>

        {/* Verifiable Credentials Strip (Zero Exaggerations) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 sm:mt-20 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {verifiableHighlights.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-xs sm:text-sm font-bold text-slate-950 block">
                {item.title}
              </span>
              <span className="text-xs text-slate-700 font-medium block mt-0.5">
                {item.detail}
              </span>
              <span className="text-[11px] text-slate-600 block mt-0.5 font-mono">
                {item.note}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

