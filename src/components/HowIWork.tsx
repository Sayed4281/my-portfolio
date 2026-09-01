import { motion } from 'framer-motion';
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
      title: 'Understand',
      icon: Lightbulb,
      desc: 'Understand client goals, business processes, pain points, and core requirements.'
    },
    {
      num: '02',
      title: 'Analyze',
      icon: Workflow,
      desc: 'Convert requirements into functional workflows, logic maps, and technical specifications.'
    },
    {
      num: '03',
      title: 'Plan',
      icon: FileText,
      desc: 'Define scope, project proposal, quotation estimates, technology stack, and implementation timeline.'
    },
    {
      num: '04',
      title: 'Coordinate',
      icon: Users,
      desc: 'Coordinate designers and developers, assign tasks, conduct standups, and track milestones.'
    },
    {
      num: '05',
      title: 'Build & Test',
      icon: CheckSquare2,
      desc: 'Contribute to development, perform functional testing/UAT, and resolve issues before release.'
    },
    {
      num: '06',
      title: 'Deliver',
      icon: Rocket,
      desc: 'Deploy to production, gather client feedback, provide user training, and ongoing support.'
    }
  ];

  return (
    <section id="how-i-work" className="py-12 sm:py-16 md:py-20 relative bg-[#0B1220] overflow-hidden">
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
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white mb-3 sm:mb-4 uppercase tracking-tight">
              How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Work</span>
            </h2>
            <p className="text-[#94A3B8] text-xs sm:text-sm md:text-base leading-relaxed">
              A structured 6-step methodology connecting business discovery to software delivery.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-[2rem] p-6 sm:p-8 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black font-display text-[#94A3B8]/30 group-hover:text-blue-400 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Icon size={20} className="sm:size-[22px]" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2.5 font-display">
                  {item.title}
                </h3>

                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
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

export default HowIWork;

