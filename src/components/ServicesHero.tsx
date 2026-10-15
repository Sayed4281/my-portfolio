'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, ArrowDown, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesHero() {
  const highlights = [
    'Modular ERP & HRMS Systems',
    'Full-Stack Next.js & React Engineering',
    'Technical SEO & Performance Audits',
    'Agile Sprint & Team Leadership',
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
          
          {/* Left Column: Headline, Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50/80 to-blue-50 border border-blue-200/90 text-blue-800 text-xs font-bold shadow-2xs backdrop-blur-md">
              <span className="p-1 rounded-full bg-white shadow-2xs text-blue-600">
                <Briefcase size={13} />
              </span>
              <span>Capabilities &amp; Delivery Lifecycle</span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight font-display leading-[1.12]">
              Comprehensive Enterprise &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Engineering Services
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              From initial discovery and business requirement gathering to production deployment and sprint leadership, here is how I deliver robust, scalable, and mission-critical software solutions.
            </p>

            {/* Feature Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-indigo-50/60 border border-blue-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-l-blue-600">
              &ldquo;Direct architectural consulting without middlemen — translating complex operational challenges into modular codebases, automated database schemas, and intuitive user interfaces.&rdquo;
            </div>

            {/* Capability Chips */}
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
                href="#services-list"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Core Services</span>
                <ArrowDown size={14} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>Request Consultation</span>
                <ArrowRight size={14} className="text-blue-600" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Execution SLA & Standards Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] p-6 sm:p-7 bg-white/95 border border-slate-200/90 shadow-2xl shadow-blue-500/10 backdrop-blur-xl group overflow-hidden max-w-[420px] mx-auto">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                    <Zap size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Execution Standards</span>
                    <h3 className="font-extrabold text-slate-900 text-base">Service Engagement SLA</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  SLA Committed
                </span>
              </div>

              {/* Standards List */}
              <div className="space-y-3 mb-6 text-xs text-slate-600">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Sprint-Based Execution</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">Structured 2-week milestones with regular demo sessions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Direct Lead Engineer Access</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">No agency middlemen — consult directly with the core architect.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Production-Ready Handover</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">Automated CI/CD pipelines, documentation, and handover support.</p>
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Schedule Technical Discovery</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
