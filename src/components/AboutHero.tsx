'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, ArrowDown, Mail, CheckCircle2, Sparkles, Award } from 'lucide-react';

export default function AboutHero() {
  const highlights = [
    'Tech Lead @ Hirush Global LLP',
    'KTU B.Tech CSE (8.08 CGPA Distinction)',
    'Published Author · ICETI4T 2025',
    'Enterprise ERP & Full-Stack Systems',
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-white">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-r from-blue-500/12 via-indigo-500/10 to-cyan-500/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/8 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-400/8 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern with Fade Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000006_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Bottom Accent Gradient Streak */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative, Philosophy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50/80 to-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold shadow-2xs backdrop-blur-md">
              <span className="p-1 rounded-full bg-white shadow-2xs text-blue-600">
                <Sparkles size={12} />
              </span>
              <span>Executive Profile &amp; Career Journey</span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight font-display leading-[1.12]">
              Engineering Precision Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Business Vision
              </span>
            </h1>

            {/* Core Narrative Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              I am <strong className="text-slate-900 font-bold">Sayed Shahloob P</strong> — Software Developer, Technical Project Lead, and Business Analyst. I specialize in architecting modular enterprise ERP systems, converting business workflows into technical requirements, and coordinating high-velocity development teams.
            </p>

            {/* Executive Quote / Working Philosophy Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-indigo-50/60 border border-blue-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-l-blue-600">
              &ldquo;I understand the client&apos;s business problem, convert it into a scalable technical architecture, coordinate sprint teams, and deliver production-ready software.&rdquo;
            </div>

            {/* Quick Verification Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-all"
                >
                  <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
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
                <span>Initiate Contact</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] p-3.5 sm:p-4 bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-500/10 backdrop-blur-xl group overflow-hidden max-w-[400px] mx-auto">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

              {/* Portrait Image Frame */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-100">
                <img
                  src="/sayed.png"
                  alt="Sayed Shahloob P — Technical Project Lead"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Status Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md text-[10px] sm:text-[11px] font-bold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Tech Lead @ Hirush Global</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-extrabold shadow-sm">
                    <Award size={11} />
                    <span>8.08 CGPA</span>
                  </span>
                </div>
              </div>

              {/* Bottom Floating Stats Glass Pill */}
              <div className="mt-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-xs flex items-center justify-around text-center">
                <div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">2+</span>
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Years Exp.</p>
                </div>
                <div className="w-px h-7 bg-slate-200" />
                <div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">15+</span>
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Projects</p>
                </div>
                <div className="w-px h-7 bg-slate-200" />
                <div>
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">100%</span>
                  <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
