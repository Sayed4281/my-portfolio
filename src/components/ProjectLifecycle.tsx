'use client';

import { motion } from 'framer-motion';

import { 
  UserCheck, 
  FileSearch, 
  Workflow, 
  FileText, 
  Layout, 
  Users, 
  CheckCircle2, 
  Rocket, 
  Headphones 
} from 'lucide-react';

const ProjectLifecycle = () => {
  const steps = [
    { step: '01', title: 'Client Lead', icon: UserCheck, desc: 'Initial contact & opportunity qualification' },
    { step: '02', title: 'Requirement Gathering', icon: FileSearch, desc: 'In-depth stakeholder interviews & scope discovery' },
    { step: '03', title: 'Business Analysis', icon: Workflow, desc: 'Process mapping, logic definition & functional specs' },
    { step: '04', title: 'Proposal & Quotation', icon: FileText, desc: 'Commercial proposals, cost estimates & timelines' },
    { step: '05', title: 'UI/UX Planning', icon: Layout, desc: 'Wireframing, prototype approval & user journeys' },
    { step: '06', title: 'Development Coordination', icon: Users, desc: 'Sprint planning, task assignment & developer guidance' },
    { step: '07', title: 'Testing / UAT', icon: CheckCircle2, desc: 'QA validation, user acceptance testing & sign-off' },
    { step: '08', title: 'Deployment', icon: Rocket, desc: 'Production release, server setup & security checks' },
    { step: '09', title: 'Client Support', icon: Headphones, desc: 'Post-launch maintenance, training & feedback loops' }
  ];

  return (
    <section id="lifecycle" className="py-16 sm:py-20 md:py-28 relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-3 block">
              End-to-End Governance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 mb-4 tracking-tight">
              Project Lifecycle
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Guiding enterprise software initiatives from discovery and architecture through delivery and warranty support.
            </p>
          </motion.div>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="relative bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all duration-300 group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xl font-mono font-bold text-slate-300 group-hover:text-slate-950 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-1.5 font-display">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectLifecycle;

