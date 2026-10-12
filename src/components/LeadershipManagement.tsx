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
    <section id="leadership" className="py-16 sm:py-20 md:py-28 relative bg-white overflow-hidden">
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
              Cross-Functional Operations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-950 mb-4 tracking-tight">
              Leadership &amp; Management
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Combining technical depth with operational management—driving squad velocity, client alignment, and predictable delivery.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid (Balanced 6 Cards: 3 cols x 2 rows, Zero Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="h-full flex"
              >
                <TiltCard className="bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 group w-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 mb-2 font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
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


