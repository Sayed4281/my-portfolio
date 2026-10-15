'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layers, ArrowDown, ArrowRight, CheckCircle2, Sparkles, Database, ShieldCheck } from 'lucide-react';

export default function ProjectsHero() {
  const highlights = [
    'Hirush ERP & HRMS Suite',
    'HMS Hotel & Resort Management',
    'POS & Order Flow Architecture',
    '15+ Production-Proven Solutions',
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
                <Layers size={13} />
              </span>
              <span>Enterprise Systems &amp; Applications</span>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight font-display leading-[1.12]">
              Proven Track Record Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Enterprise &amp; Web Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              Explore flagship enterprise ERP architectures, published AI healthcare platforms, high-performance web systems, and cross-platform mobile apps engineered for scale, high concurrency, and measurable business value.
            </p>

            {/* Feature Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-white to-indigo-50/60 border border-blue-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-l-blue-600">
              &ldquo;Architected multi-branch business workflows for Hirush ERP, delivered computer-vision dietary classification for NeuVitX (ICETI4T 2025), and built 15+ production systems.&rdquo;
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
                href="#projects-showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Browse All Systems</span>
                <ArrowDown size={14} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>Request Custom Architecture</span>
                <ArrowRight size={14} className="text-blue-600" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Systems Showcase Metrics Card */}
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
                    <Database size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 block">Production Systems</span>
                    <h3 className="font-extrabold text-slate-900 text-base">Flagship Deployments</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  15+ Live
                </span>
              </div>

              {/* Showcase Cards */}
              <div className="space-y-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>Hirush ERP &amp; HRMS Suite</span>
                    <span className="text-blue-600 font-extrabold">Tech Lead</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Multi-entity automation, modular payroll calculations, role-based access, and client invoicing portal.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-slate-200/80 hover:border-indigo-300 transition-colors">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>NeuVitX AI Health Platform</span>
                    <span className="text-indigo-600 font-extrabold">ICETI4T 2025</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Computer vision meal classification with automated macronutrient calculation and clinical patient tracking.
                  </p>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="font-semibold">Production SLA: <strong className="text-slate-900">99.9% Uptime</strong></span>
                </div>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Next.js &amp; Cloud</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
