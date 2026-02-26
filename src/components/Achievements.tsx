import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      detail: 'NeuVitX Health Monitoring System',
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
      description: 'Multiple Roles & Responsibilities',
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
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Milestones</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Achievements
          </h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors duration-300">
                <achievement.icon className="text-violet-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-violet-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-neutral-500 text-xs mb-3 leading-relaxed">
                {achievement.description}
              </p>
              <p className="text-violet-400 text-sm font-semibold">
                {achievement.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;