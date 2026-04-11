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
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="flex items-center gap-2 text-violet-500 text-xs font-bold tracking-[0.4em] uppercase mb-6">
            <Sparkles size={14} />
            Milestones
          </span>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight">
            Major Achievements
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:border-violet-500/30 transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-violet-500 group-hover:text-black group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="text-violet-400 group-hover:text-black" size={28} />
                </div>
                
                <h3 className="text-xl font-black text-white mb-3 font-display leading-tight group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-neutral-500 text-xs mb-6 font-medium leading-relaxed">
                  {item.description}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <span className="text-violet-500 text-sm font-black tracking-widest uppercase">
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