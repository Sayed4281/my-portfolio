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
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Research Publication',
      description: 'ICETI4T 2025 Conference',
      detail: 'NeuVitX Health Monitoring System',
      gradient: 'from-cyan-500 to-indigo-500',
    },
    {
      icon: Star,
      title: 'NSS Leadership',
      description: 'Dream House Project Coordinator',
      detail: '5 Houses Completed',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Professional Growth',
      description: 'Multiple Roles & Responsibilities',
      detail: '4 Active Positions',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                {achievement.description}
              </p>
              <p className={`text-transparent bg-clip-text bg-gradient-to-r ${achievement.gradient} font-bold`}>
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