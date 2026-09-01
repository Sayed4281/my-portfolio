'use client';

import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

import { 
  Users2, 
  SearchCheck, 
  MessagesSquare, 
  FileSpreadsheet, 
  CheckSquare, 
  Building2 
} from 'lucide-react';

const LeadershipManagement = () => {
  const highlights = [
    {
      title: 'Dev Team Management',
      icon: Users2,
      description: 'Supervising frontend and backend developers, facilitating daily standups, removing technical blockers, and code reviews.'
    },
    {
      title: 'SEO Team Coordination',
      icon: SearchCheck,
      description: 'Orchestrating technical SEO audits, site architecture optimizations, schema markup strategy, and performance metrics tracking.'
    },
    {
      title: 'Client Communication & Proposals',
      icon: MessagesSquare,
      description: 'Conducting discovery calls, gathering client needs, presenting technical strategies, and drafting comprehensive project proposals.'
    },
    {
      title: 'Quotations & Commercial Estimates',
      icon: FileSpreadsheet,
      description: 'Estimating development effort, creating structured cost breakups, defining milestone deliverables, and budget negotiations.'
    },
    {
      title: 'Work Allocation & Monitoring',
      icon: CheckSquare,
      description: 'Assigning Jira/Trello tasks, monitoring velocity and sprint progress, ensuring quality compliance before UAT releases.'
    },
    {
      title: 'Cross-Department Bridge',
      icon: Building2,
      description: 'Serving as the single point of contact bridging executive leadership, external clients, and internal development teams.'
    }
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 md:py-20 relative bg-[#0B1220] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-[11px] sm:text-xs font-black tracking-[0.4em] uppercase mb-2 block">
              Cross-Functional Operations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-3 sm:mb-4 uppercase tracking-tight">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Management</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed">
              Combining technical depth with operational management—driving team productivity, client alignment, and project execution.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full flex"
              >
                <TiltCard className="bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 group w-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon size={22} className="sm:size-[24px]" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {item.description}
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


