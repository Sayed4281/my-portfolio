import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Briefcase } from 'lucide-react';
import WhatIDo from '@/components/WhatIDo';
import HowIWork from '@/components/HowIWork';
import ProjectLifecycle from '@/components/ProjectLifecycle';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Enterprise ERP Architecture, Technical Project Management, Full-Stack Engineering, and Business Analysis services by Sayed Shahloob P.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Standalone Services Page Hero */}
      <section className="pt-16 sm:pt-24 pb-16 sm:pb-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Mesh Lighting */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-slate-100/70 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-6 shadow-2xs">
              <Briefcase size={13} className="text-blue-600" />
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-widest font-mono">
                Enterprise Capabilities &amp; Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight mb-6 font-display leading-[1.1]">
              Full-Lifecycle Engineering &amp; Strategic Delivery
            </h1>

            <p className="text-slate-600 text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
              End-to-end software execution spanning technical scoping, functional business requirements, multi-tenant ERP/HRMS architecture, and production delivery governance.
            </p>
          </div>

          {/* Core Service Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-10 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-2xl sm:text-3xl font-black text-slate-950 block tracking-tight font-display">Agile</span>
              <span className="text-xs font-bold text-slate-800 block mt-1">Sprint Orchestration</span>
              <span className="text-[11px] text-slate-500">Cross-functional team velocity</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-2xl sm:text-3xl font-black text-slate-950 block tracking-tight font-display">BRD / UAT</span>
              <span className="text-xs font-bold text-slate-800 block mt-1">Business Analysis</span>
              <span className="text-[11px] text-slate-500">Requirements &amp; user acceptance</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-2xl sm:text-3xl font-black text-slate-950 block tracking-tight font-display">Modular</span>
              <span className="text-xs font-bold text-slate-800 block mt-1">ERP Architecture</span>
              <span className="text-[11px] text-slate-500">Finance, Payroll &amp; RBAC</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-2xl sm:text-3xl font-black text-slate-950 block tracking-tight font-display">Next.js &amp; TS</span>
              <span className="text-xs font-bold text-slate-800 block mt-1">Full-Stack Execution</span>
              <span className="text-[11px] text-slate-500">Production-ready engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Balanced Core Services */}
      <WhatIDo />

      {/* 6-Phase Engineering Lifecycle */}
      <HowIWork />

      {/* Governance & Lifecycle Gates */}
      <ProjectLifecycle />

      {/* Direct Consultation Banner */}
      <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">Technical Delivery Mandates</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display mb-3">
                Have a Complex Platform to Architect or Deliver?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect directly to discuss requirements analysis, architecture blueprints, or end-to-end technical leadership.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-950 text-sm font-bold rounded-xl hover:bg-slate-100 transition-all shadow-sm active:scale-95"
              >
                <span>Request Scoping Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
