'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { 
  Lightbulb, 
  Workflow, 
  CheckSquare2, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

const HowIWork = () => {
  const steps = [
    {
      num: '01',
      phase: 'Phase 01',
      title: 'Discovery & Requirements',
      icon: Lightbulb,
      accent: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      desc: 'Conduct stakeholder discovery interviews, uncover operational friction points, and document technical specifications.',
      deliverables: ['Stakeholder Process Maps', 'Functional Requirements (BRD)', 'Feasibility & Tech Stack Audit']
    },
    {
      num: '02',
      phase: 'Phase 02',
      title: 'Planning & Architecture',
      icon: Workflow,
      accent: 'from-indigo-600 to-purple-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      desc: 'Architect relational database schemas, modular RBAC permission layers, API contract specifications, and sprint milestones.',
      deliverables: ['PostgreSQL / DB Schemas', 'RBAC & Auth Architecture', 'Sprint Roadmap & Milestones']
    },
    {
      num: '03',
      phase: 'Phase 03',
      title: 'Sprint Development & QA',
      icon: CheckSquare2,
      accent: 'from-cyan-600 to-blue-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      desc: 'Execute rapid 2-week development sprints, direct frontend/backend feature coding, conduct PR reviews, and perform UAT testing.',
      deliverables: ['Production Next.js / React Code', 'Integrated REST / SQL APIs', 'User Acceptance Testing (UAT)']
    },
    {
      num: '04',
      phase: 'Phase 04',
      title: 'Deployment & SLA Support',
      icon: Rocket,
      accent: 'from-emerald-600 to-teal-600',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      desc: 'Manage staging-to-production deployment pipelines, perform Core Web Vitals checks, train team members, and ensure stability.',
      deliverables: ['Zero-Downtime Deployment', 'Performance & SEO Validation', 'Post-Launch SLA Maintenance']
    }
  ];

  return (
    <section id="how-i-work" className="py-16 sm:py-24 relative bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Layers size={13} className="text-blue-600" />
              <span>Standard Operating Procedure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 mb-4 uppercase tracking-tight">
              Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Methodology</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              A disciplined 4-stage engineering lifecycle transforming business ideas into high-performance, maintainable software.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid with Connective Top Track for Desktop */}
        <div className="relative">
          
          {/* Connector Line across cards on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full flex"
                >
                  <TiltCard 
                    maxTilt={8}
                    glowColor="rgba(37, 99, 235, 0.15)"
                    className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-[2rem] p-6 sm:p-7 transition-all duration-300 group w-full flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                    <div>
                      {/* Step Header: Watermark Number & Glowing Icon Node */}
                      <div className="flex items-center justify-between mb-5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${item.badgeBg}`}>
                          {item.phase}
                        </span>

                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
                          <Icon size={22} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-black text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Deliverable Checkpoints */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Phase Deliverables
                      </p>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((d, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                            <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                            <span className="truncate">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowIWork;

