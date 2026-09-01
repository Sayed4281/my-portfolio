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
    <section id="lifecycle" className="py-12 sm:py-16 md:py-20 relative bg-[#0E1726] overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-[11px] sm:text-xs font-black tracking-[0.4em] uppercase mb-2 block">
              End-to-End Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-3 sm:mb-4 uppercase tracking-tight">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Lifecycle</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed">
              How I guide software projects from early client engagement to successful deployment and ongoing support.
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
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xl sm:text-2xl font-black font-display text-[#94A3B8]/30 group-hover:text-blue-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 font-display">
                  {item.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
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

