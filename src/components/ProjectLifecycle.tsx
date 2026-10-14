'use client';

import { motion } from 'framer-motion';
import { 
  FileSearch, 
  FileText, 
  Layout, 
  Code2, 
  CheckCircle2, 
  Rocket,
  ArrowRight
} from 'lucide-react';

const ProjectLifecycle = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      icon: FileSearch,
      desc: 'In-depth stakeholder interviews, workflow analysis, pain point identification, and requirement discovery.',
      deliverable: 'Business Requirement Document (BRD)'
    },
    {
      step: '02',
      title: 'Scope Definition',
      icon: FileText,
      desc: 'Clear scope boundaries, commercial proposals, milestone timelines, resource allocation, and effort estimates.',
      deliverable: 'Technical Proposal & Roadmap'
    },
    {
      step: '03',
      title: 'Design & Architecture',
      icon: Layout,
      desc: 'Relational database schema modeling, modular API design, wireframing, and multi-tenant RBAC permissions.',
      deliverable: 'Architecture Blueprint & Schemas'
    },
    {
      step: '04',
      title: 'Development',
      icon: Code2,
      desc: 'Agile sprint execution, modular component development, REST API integration, and daily standups.',
      deliverable: 'Working Software Increments'
    },
    {
      step: '05',
      title: 'Testing & UAT',
      icon: CheckCircle2,
      desc: 'Functional QA, regression checks, performance validation, and hands-on client User Acceptance Testing.',
      deliverable: 'QA Sign-off & UAT Approval'
    },
    {
      step: '06',
      title: 'Deployment & Support',
      icon: Rocket,
      desc: 'Production server rollout, domain & security configuration, staff training, and post-launch maintenance.',
      deliverable: 'Live Production Release'
    }
  ];

  return (
    <section id="lifecycle" className="py-16 sm:py-20 relative bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Execution Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mb-3">
            6-Step Software Delivery Process
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            From initial requirement discovery through deployment and operational support, here is the structured framework I follow to ensure high-quality software delivery.
          </p>
        </div>

        {/* 6-Step Visual Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-display text-blue-600/40 group-hover:text-blue-600 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-2xs">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Deliverable</span>
                  <span className="text-xs font-semibold text-slate-800">{item.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectLifecycle;
