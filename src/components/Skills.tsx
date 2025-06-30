import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-emerald-400 to-cyan-500',
      skills: [
        { name: 'Flutter & Dart', level: 95 },
        { name: 'React & Next.js', level: 75 },
        { name: 'TypeScript/JavaScript', level: 70 },
        { name: 'Responsive Design', level: 88 },
        { name: 'State Management', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      color: 'from-blue-400 to-indigo-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 90 },
        { name: 'Database Design', level: 82 },
        { name: 'REST API Development', level: 80 },
        { name: 'Cloud Services', level: 78 }
      ]
    },
    {
      title: 'SEO & Digital Marketing',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Technical SEO', level: 88 },
        { name: 'Keyword Research', level: 85 },
        { name: 'Content Optimization', level: 87 },
        { name: 'Analytics & Reporting', level: 82 },
        { name: 'Performance Optimization', level: 90 }
      ]
    },
    {
      title: 'AI/ML & Emerging Tech',
      color: 'from-amber-400 to-orange-500',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'AI Integration', level: 82 },
        { name: 'Data Science', level: 80 },
        { name: 'Predictive Analytics', level: 78 },
        { name: 'Neural Networks', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-purple-950/30 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            animate={isInView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-300% bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 160 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Comprehensive expertise spanning Flutter development, SEO optimization, 
            and AI/ML technologies with proven track record in academic and professional excellence.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
              }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </motion.h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <motion.span 
                          className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className={`text-xs font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.8,
                            ease: "easeOut"
                          }}
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 2.5
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;