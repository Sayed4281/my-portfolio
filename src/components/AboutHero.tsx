'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Download, 
  ArrowDown, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Briefcase, 
  Terminal, 
  Compass, 
  Workflow, 
  GraduationCap, 
  Layers 
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function AboutHero() {
  const highlights = [
    { label: 'Technical Lead @ Hirush Global', icon: Briefcase, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { label: 'KTU B.Tech CSE (8.08 CGPA Distinction)', icon: GraduationCap, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { label: 'ICETI4T 2025 Published Researcher', icon: Award, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { label: 'Modular Enterprise ERP Architect', icon: Layers, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  ];

  const quickNav = [
    { name: 'Timeline', href: '#experience', icon: Briefcase },
    { name: 'Leadership', href: '#leadership', icon: Compass },
    { name: 'Methodology', href: '#how-i-work', icon: Workflow },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Research', href: '#research', icon: Award },
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50">
      {/* Dynamic 3D Ambient Glowing Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/12 to-cyan-400/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Background Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb12_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Bottom Accent Gradient Streak */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Quick-Nav Section Jump Dock */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm text-xs">
            <span className="hidden sm:inline-block px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 border-r border-slate-200 mr-1">
              Explore Profile
            </span>
            {quickNav.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-slate-600 hover:text-blue-700 hover:bg-blue-50/80 transition-all text-[11px] sm:text-xs font-semibold"
                >
                  <Icon size={12} className="text-blue-600" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Executive Positioning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50/90 to-blue-50 border border-blue-200/90 text-blue-900 text-xs font-bold shadow-2xs backdrop-blur-md">
              <span className="p-1 rounded-full bg-white shadow-2xs text-blue-600">
                <Sparkles size={12} />
              </span>
              <span>Software Developer &bull; Technical Lead &bull; SEO Analyst</span>
              <span className="flex h-2 w-2 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight font-display leading-[1.1]">
              Architecting Modular Systems with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Engineering Rigor
              </span>
            </h1>

            {/* Core Narrative Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              I am <strong className="text-slate-900 font-bold">Sayed Shahloob P</strong> — an engineer bridging enterprise system architecture with agile team leadership. Currently spearheading ERP development modules and technical operations at <span className="font-bold text-slate-900">Hirush Global LLP</span>.
            </p>

            {/* Executive Quote / Working Philosophy Box with 3D Left Accent */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/50 border border-blue-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-l-blue-600">
              <div className="flex items-start gap-3">
                <Terminal size={18} className="text-blue-600 shrink-0 mt-0.5 not-italic" />
                <p>
                  &ldquo;I translate ambiguous client requirements into robust database schemas, secure RBAC micro-architectures, and high-velocity sprint deliveries.&rdquo;
                </p>
              </div>
            </div>

            {/* Verification Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-semibold text-slate-700 hover:border-blue-300 hover:shadow-xs transition-all"
                  >
                    <div className={`p-1 rounded-lg ${item.color} shrink-0`}>
                      <Icon size={13} />
                    </div>
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download="Sayed_Shahloob_P_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={15} />
                <span>Download Executive CV</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>Career Timeline</span>
                <ArrowDown size={14} className="text-blue-600" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 px-3 py-2 transition-colors group"
              >
                <Mail size={14} />
                <span>Initiate Contact &rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Spatial Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-[420px] mx-auto">
              
              {/* Backlight Halo Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-cyan-400/20 rounded-[3rem] blur-2xl -z-10 transform scale-95 group-hover:scale-105 transition-all duration-500" />

              <TiltCard 
                maxTilt={10} 
                glowColor="rgba(59, 130, 246, 0.18)"
                className="rounded-[2.5rem] p-4 bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-500/10 backdrop-blur-xl group overflow-visible"
              >
                {/* Accent Top Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[2.5rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

                {/* Portrait Image Frame */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-100 shadow-inner">
                  <img
                    src="/sayed.png"
                    alt="Sayed Shahloob P — Software Developer & Technical Lead"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent pointer-events-none" />

                  {/* 3D Floating Top Left Badge */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-[10px] sm:text-[11px] font-bold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Tech Lead @ Hirush Global</span>
                    </span>
                  </div>

                  {/* 3D Floating Top Right Badge */}
                  <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-blue-600/95 backdrop-blur-md text-white text-[10px] font-extrabold shadow-lg">
                      <Award size={12} />
                      <span>8.08 CGPA</span>
                    </span>
                  </div>

                  {/* In-Image Bottom Identifier */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white pointer-events-none">
                    <p className="text-xs font-mono font-medium text-blue-200 uppercase tracking-widest">
                      Full-Stack &bull; Tech Lead
                    </p>
                    <h3 className="text-xl font-bold font-display text-white">
                      Sayed Shahloob P
                    </h3>
                  </div>
                </div>

                {/* Bottom 3D Stats Glass Matrix */}
                <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200/90 shadow-xs flex items-center justify-around text-center">
                  <div className="px-1">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">2+</span>
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Years Exp.</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div className="px-1">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">15+</span>
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Deployments</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <div className="px-1">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">100%</span>
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Commitment</p>
                  </div>
                </div>

              </TiltCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

