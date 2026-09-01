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
    <section id="lifecycle" className="py-28 relative bg-[#0E1726] overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.5em] uppercase mb-4 block">
              End-to-End Execution
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-6 uppercase tracking-tight">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Lifecycle</span>
            </h2>
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed">
              How I guide software projects from early client engagement and requirements gathering to successful deployment and ongoing support.
            </p>
          </motion.div>
        </div>

        {/* Workflow Grid / Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-display text-[#94A3B8]/30 group-hover:text-blue-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>

                {/* Connecting arrow indicator for desktop grid */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-cyan-400/40 group-hover:text-cyan-300 transition-colors pointer-events-none">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectLifecycle;
