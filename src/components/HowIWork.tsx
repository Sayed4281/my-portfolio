'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

import { 
  Lightbulb, 
  Workflow, 
  FileText, 
  Users, 
  CheckSquare2, 
  Rocket 
} from 'lucide-react';

const HowIWork = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Requirements',
      icon: Lightbulb,
      desc: 'Understand business goals, map stakeholder processes, identify operational bottlenecks, and document functional requirements.'
    },
    {
      num: '02',
      title: 'Planning & Architecture',
      icon: Workflow,
      desc: 'Formulate system architecture, database schemas, RBAC permission models, sprint milestones, and development timelines.'
    },
    {
      num: '03',
      title: 'Development & QA',
      icon: CheckSquare2,
      desc: 'Lead sprint execution, engineer full-stack features, conduct code reviews, and perform user acceptance testing (UAT).'
    },
    {
      num: '04',
      title: 'Deployment & Review',
      icon: Rocket,
      desc: 'Oversee production rollout, conduct stakeholder walkthroughs, ensure operational readiness, and deliver ongoing maintenance.'
    }
  ];

  return (
    <section id="how-i-work" className="py-12 sm:py-16 md:py-20 relative bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-700 text-[11px] sm:text-xs font-black tracking-[0.4em] uppercase mb-2 block">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-900 mb-3 sm:mb-4 uppercase tracking-tight">
              How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Work</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              A structured 4-phase methodology connecting business discovery to software delivery.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="h-full flex"
              >
                <TiltCard className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 group w-full flex flex-col justify-between shadow-sm hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl sm:text-3xl font-black font-display text-slate-300 group-hover:text-blue-600 transition-colors">
                        {item.num}
                      </span>
                      <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon size={20} className="sm:size-[22px]" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5 font-display">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
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

export default HowIWork;
