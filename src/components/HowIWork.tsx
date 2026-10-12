'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  FileCode2, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const HowIWork = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Context & Feasibility',
      icon: Compass,
      desc: 'Conduct stakeholder interviews to identify business objectives, operational pain points, project constraints, user roles, and commercial goals.',
      qualityCheck: 'Stakeholder alignment document & initial technical feasibility sign-off',
      deliverables: ['Stakeholder Goal Matrix', 'Technical Scope Boundaries', 'Feasibility Summary']
    },
    {
      num: '02',
      title: 'Requirements',
      subtitle: 'Functional Specifications',
      icon: FileCode2,
      desc: 'Translate business needs into rigorous functional workflows, role-based user stories, edge-case definitions, and acceptance criteria.',
      qualityCheck: 'Peer-reviewed Business Requirements Document (BRD) & signed acceptance criteria',
      deliverables: ['Business Requirements Document (BRD)', 'State Machine Flowcharts', 'User Acceptance Criteria']
    },
    {
      num: '03',
      title: 'Architecture',
      subtitle: 'System Blueprint',
      icon: Cpu,
      desc: 'Design relational database schemas, modular service boundaries, multi-tenant RBAC policies, API contracts, and technology stack selection.',
      qualityCheck: 'Relational integrity validation, security threat modeling & API contract schema review',
      deliverables: ['Prisma/SQL Schema Blueprints', 'RBAC Permission Matrix', 'API Route & Server Action Contracts']
    },
    {
      num: '04',
      title: 'Implementation',
      subtitle: 'Full-Stack Execution',
      icon: Terminal,
      desc: 'Build frontend components, backend server actions, database mutations, and external integrations with strict TypeScript type-safety.',
      qualityCheck: 'Strict TypeScript compilation, peer code review & unit/integration test coverage',
      deliverables: ['Modular Codebase Repository', 'Fully Integrated Database Operations', 'Responsive Interface Panels']
    },
    {
      num: '05',
      title: 'QA & UAT',
      subtitle: 'Verification & User Acceptance',
      icon: ShieldCheck,
      desc: 'Execute end-to-end user flows, regression audits, cross-device responsiveness verification, and formal User Acceptance Testing (UAT) with stakeholders.',
      qualityCheck: 'Zero critical defect threshold & formal stakeholder UAT sign-off',
      deliverables: ['UAT Test Execution Reports', 'Defect Triage & Resolution Log', 'Final UAT Sign-Off Document']
    },
    {
      num: '06',
      title: 'Deployment & Support',
      subtitle: 'Launch & Continuity',
      icon: Rocket,
      desc: 'Deploy to production with staging gates, environment variable isolation, post-release smoke testing, error tracking, and post-launch maintenance.',
      qualityCheck: 'Production smoke verification, rollback plan readiness & runtime error monitoring',
      deliverables: ['Live Production Deployment', 'Operational Runbook & Handover Guide', 'Ongoing Maintenance Protocols']
    }
  ];

  return (
    <section id="how-i-work" className="py-16 sm:py-20 md:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-3 block">
              Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 mb-4 tracking-tight">
              Six-Stage Delivery Framework
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every phase incorporates clear quality gates and deliverables to ensure systems are robust, secure, and aligned with business goals.
            </p>
          </motion.div>
        </div>

        {/* Process Diagram Flow Navigation */}
        <div className="hidden lg:flex items-center justify-between mb-12 relative">
          {/* Continuous Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isCurrent = activeStage === idx;
            const isCompleted = activeStage > idx;

            return (
              <button
                key={stage.num}
                onClick={() => setActiveStage(idx)}
                className="relative z-10 flex flex-col items-center group text-center focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 font-mono text-xs font-bold ${
                    isCurrent
                      ? 'bg-slate-950 text-white ring-4 ring-slate-100 shadow-md scale-110'
                      : isCompleted
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span className={`text-xs font-bold mt-2.5 transition-colors ${
                  isCurrent ? 'text-slate-950 font-display' : 'text-slate-500 group-hover:text-slate-800'
                }`}>
                  {stage.title}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Stage {stage.num}</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Stage Focus Card */}
        <div className="bg-[#FAFAFB] border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-slate-950 text-white rounded-lg text-xs font-mono font-bold">
                  Phase {stages[activeStage].num}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {stages[activeStage].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display tracking-tight">
                {stages[activeStage].title} Phase
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {stages[activeStage].desc}
              </p>

              {/* Quality Check Gate (Crucial Enterprise Requirement) */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase text-slate-500 block mb-0.5">
                      Quality Gate &amp; Verification Check:
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {stages[activeStage].qualityCheck}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Phase Deliverables:
              </span>
              <ul className="space-y-2.5">
                {stages[activeStage].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                    <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <ArrowRight size={12} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                <button
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous Phase
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  {activeStage + 1} of {stages.length}
                </span>
                <button
                  disabled={activeStage === stages.length - 1}
                  onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-slate-950 text-white hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Next Phase
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Responsive Mobile / Tablet Grid of All 6 Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:hidden">
          {stages.map((stage, idx) => (
            <div
              key={stage.num}
              onClick={() => setActiveStage(idx)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeStage === idx 
                  ? 'bg-white border-slate-950 shadow-md ring-1 ring-slate-950/5' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400">Stage {stage.num}</span>
                <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {stage.subtitle}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-950 mb-1 font-display">{stage.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIWork;
