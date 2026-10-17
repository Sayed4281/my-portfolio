'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-white">
      {/* Decorative Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-gradient-to-r from-blue-500/10 via-indigo-500/8 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000006_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
              <Sparkles size={13} className="text-blue-600" />
              <span>Executive Profile &amp; Background</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tight font-display leading-[1.12]">
              Engineering Precision Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Business Vision
              </span>
            </h1>

            {/* Core Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              I am <strong className="text-slate-900 font-bold">Sayed Shahloob P</strong> — Software Developer, Technical Project Lead, and SEO Analyst. I specialize in architecting modular enterprise ERP systems, optimizing high-performance web systems, and coordinating high-velocity development teams.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="/Sayed_Shahloob_P_.pdf"
                target="_blank"
                download="Sayed_Shahloob_P_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[46px]"
              >
                <Download size={15} />
                <span>Download Executive CV</span>
              </a>

              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xs min-h-[46px]"
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

