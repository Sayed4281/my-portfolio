import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Target, Sparkles } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'B.Tech in Computer Science Engineering',
      detail: '8.08 CGPA',
    },
    {
      icon: Award,
      title: 'Research Publication',
      description: 'ICETI4T 2025 Conference',
      detail: 'NeuVitX Health System',
    },
    {
      icon: Star,
      title: 'NSS Leadership',
      description: 'Dream House Project Coordinator',
      detail: '5 Houses Completed',
    },
    {
      icon: Target,
      title: 'Professional Growth',
      description: 'Active Strategic Roles',
      detail: '4 Active Positions',
    },
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#0B1220]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 flex flex-col items-center text-center"
        >
          <span className="flex items-center gap-2 text-cyan-400 text-[11px] sm:text-xs font-black tracking-[0.4em] uppercase mb-2">
            <Sparkles size={14} />
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight uppercase">
            Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Achievements</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative group p-6 sm:p-8 bg-[#172033] rounded-[2rem] border border-[#263449] hover:border-blue-500/40 transition-all duration-500 cursor-default"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon size={26} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-white mb-2 font-display leading-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[#94A3B8] text-xs mb-5 font-medium leading-relaxed">
                  {item.description}
                </p>
                
                <div className="pt-4 border-t border-[#263449]">
                  <span className="text-cyan-300 text-xs sm:text-sm font-black tracking-widest uppercase">
                    {item.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;