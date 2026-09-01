import { motion } from 'framer-motion';
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
    <section id="leadership" className="py-28 relative bg-[#0B1220] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.5em] uppercase mb-4 block">
              Cross-Functional Operations
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-6 uppercase tracking-tight">
              Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Management</span>
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
              Combining technical depth with operational management—driving team productivity, client alignment, and project execution.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-[2rem] p-8 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {item.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LeadershipManagement;
