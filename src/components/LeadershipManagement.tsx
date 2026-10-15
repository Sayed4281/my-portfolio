'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { 
  Users2, 
  SearchCheck, 
  MessagesSquare, 
  FileSpreadsheet, 
  CheckSquare, 
  Building2, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

const LeadershipManagement = () => {
  const highlights = [
    {
      num: '01',
      tag: 'Agile Operations',
      title: 'Dev Team Management',
      icon: Users2,
      accent: 'from-blue-600 to-indigo-600',
      output: 'Daily Standups • PR Reviews • Git Flow',
      description: 'Supervising frontend and backend developers, facilitating sprint backlogs, removing technical bottlenecks, and ensuring code quality standards.'
    },
    {
      num: '02',
      tag: 'Organic Growth',
      title: 'SEO Team Coordination',
      icon: SearchCheck,
      accent: 'from-indigo-600 to-purple-600',
      output: 'Site Audits • Schema Graphs • Speed',
      description: 'Orchestrating technical SEO audits, site architecture optimizations, schema markup strategy, and performance metrics tracking across product surfaces.'
    },
    {
      num: '03',
      tag: 'Client Relations',
      title: 'Client Scoping & Proposals',
      icon: MessagesSquare,
      accent: 'from-cyan-600 to-blue-600',
      output: 'Discovery Calls • Scope Maps • BRDs',
      description: 'Conducting discovery workshops, translating business pain points into technical architectures, and presenting structured client proposals.'
    },
    {
      num: '04',
      tag: 'Commercial Planning',
      title: 'Quotations & Commercial Estimates',
      icon: FileSpreadsheet,
      accent: 'from-emerald-600 to-teal-600',
      output: 'Effort Modeling • Milestone BoQs',
      description: 'Calculating development timelines, structuring modular milestone costs, defining release deliverables, and handling commercial scope alignments.'
    },
    {
      num: '05',
      tag: 'Task Governance',
      title: 'Work Allocation & Sprint Tracking',
      icon: CheckSquare,
      accent: 'from-violet-600 to-fuchsia-600',
      output: 'Jira Backlogs • Sprint Burndowns',
      description: 'Assigning developer tasks, tracking milestone burndown velocity, and validating feature compliance before user acceptance testing (UAT).'
    },
    {
      num: '06',
      tag: 'Strategic Alignment',
      title: 'Cross-Department Bridge',
      icon: Building2,
      accent: 'from-blue-700 to-sky-600',
      output: 'Executive Sync • Stakeholder Signoff',
      description: 'Serving as the unified communication anchor connecting company leadership, enterprise clients, and technical implementation teams.'
    }
  ];

  return (
    <section id="leadership" className="py-16 sm:py-24 relative bg-slate-50/70 border-b border-slate-200/80 overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Compass size={13} className="text-blue-600" />
              <span>Operational Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-slate-900 mb-4 uppercase tracking-tight">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Management</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Bridging engineering excellence with cross-departmental operations — accelerating velocity, alignment, and client satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="h-full flex"
              >
                <TiltCard 
                  maxTilt={8}
                  glowColor="rgba(37, 99, 235, 0.15)"
                  className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-[2rem] p-6 sm:p-7 transition-all duration-300 group w-full flex flex-col justify-between shadow-sm hover:shadow-xl relative overflow-hidden"
                >
                  {/* Subtle Top Gradient Accent on Hover */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    {/* Top Meta: Domain Tag & Watermark Number */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                        {item.tag}
                      </span>
                      <span className="font-mono text-xl font-black text-slate-300 group-hover:text-blue-500 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Icon Box */}
                    <div className="w-12 sm:w-13 h-12 sm:h-13 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs group-hover:scale-105">
                      <Icon size={22} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Deliverables Tag */}
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Deliverable Scope
                    </p>
                    <p className="text-xs font-semibold text-slate-700 group-hover:text-blue-800 transition-colors">
                      {item.output}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LeadershipManagement;

