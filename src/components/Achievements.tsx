import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, BookOpen, Star, Medal, Target, Zap, Crown } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const majorAchievements = [
    {
      icon: Trophy,
      title: 'Research Publication at ICETI4T 2025',
      description: 'Successfully presented "NeuVitX: Automated Monitoring of Intravenous Glucose Infusion and Vital Signs" at IEEE Bombay Section conference.',
      details: [
        'Presented at SIES Graduate School of Technology, Nerul',
        'Collaboration with IEEE Bombay Section',
        'Focus on healthcare IoT and automation technology',
        'Contribution to patient safety and care advancement'
      ],
      date: '2025',
      category: 'Research Excellence',
      gradient: 'from-amber-400 to-orange-500',
      impact: 'High'
    },
    {
      icon: Award,
      title: 'B.Tech CSE Graduate with 8.08 CGPA',
      description: 'Graduated in 2025 with outstanding academic performance demonstrating consistent excellence throughout the computer science engineering program.',
      details: [
        'Maintained high academic standards across all semesters',
        'Specialized in Software Engineering and Mobile Computing',
        'Completed advanced projects in Flutter and IoT integration',
        'Strong foundation in computer science fundamentals'
      ],
      date: '2025',
      category: 'Academic Excellence',
      gradient: 'from-emerald-400 to-cyan-500',
      impact: 'High'
    }
  ];

  const certifications = [
    {
      title: 'Python with Artificial Intelligence – AI for Techies',
      issuer: 'AI for Techies',
      date: '2024',
      type: 'AI/ML'
    },
    {
      title: 'Machine Learning with Python – ICFOSS',
      issuer: 'ICFOSS',
      date: '2023',
      type: 'AI/ML'
    },
    {
      title: 'Business Intelligence using Power BI – Office Master',
      issuer: 'Office Master',
      date: '2024',
      type: 'Analytics'
    },
    {
      title: 'NSS Volunteering Certificate',
      issuer: 'National Service Scheme',
      date: '2024',
      type: 'Community Service'
    },
    {
      title: 'Paper Publication Certificate',
      issuer: 'ICETI4T 2025',
      date: '2025',
      type: 'Research'
    },
    {
      title: 'Generative AI with Copilot Certificate',
      issuer: 'Microsoft',
      date: '2024',
      type: 'AI/ML'
    },
    {
      title: 'Networking Workshop Certificate',
      issuer: 'Network Bulls',
      date: '2024',
      type: 'Technical'
    }
  ];

  const recognitions = [
    {
      title: 'Outstanding Academic Performance',
      description: 'Recognized for maintaining 8.08 CGPA throughout B.Tech program',
      icon: Crown
    },
    {
      title: 'Research Innovation Award',
      description: 'Acknowledged for innovative healthcare IoT solution',
      icon: BookOpen
    },
    {
      title: 'Community Service Excellence',
      description: 'Recognized for significant contributions to NSS Dream House project',
      icon: Star
    },
    {
      title: 'Technical Leadership',
      description: 'Acknowledged for leading CRM development project',
      icon: Target
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-purple-950/20 to-indigo-950/30 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-300% bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 220 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Showcasing academic excellence, research contributions, and professional accomplishments 
            that demonstrate commitment to innovation and continuous learning.
          </motion.p>
        </motion.div>

        {/* Major Achievements */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Major Achievements
            </span>
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(245, 158, 11, 0.15)"
                }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-amber-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="text-white" size={32} />
                    </motion.div>
                    
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        achievement.impact === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                        achievement.impact === 'Ongoing' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {achievement.impact} Impact
                      </span>
                      <p className="text-gray-400 text-sm mt-2">{achievement.date}</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-amber-500/30`}>
                      {achievement.category}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {achievement.details.map((detail, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-amber-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Certifications & Qualifications
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(16, 185, 129, 0.2)"
                }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 text-center"
              >
                <h4 className="text-white font-bold text-sm mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.type === 'AI/ML' ? 'bg-green-500/20 text-green-300' :
                    cert.type === 'Analytics' ? 'bg-purple-500/20 text-purple-300' :
                    cert.type === 'Research' ? 'bg-amber-500/20 text-amber-300' :
                    cert.type === 'Community Service' ? 'bg-pink-500/20 text-pink-300' :
                    cert.type === 'Technical' ? 'bg-cyan-500/20 text-cyan-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {cert.type}
                  </span>
                  <span className="text-emerald-400 text-xs font-bold">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition & Awards */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Recognition & Awards
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)"
                }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm p-6 rounded-xl border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300 text-center relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4"
                  >
                    <recognition.icon className="text-white" size={24} />
                  </motion.div>
                  <h4 className="text-white font-bold text-sm mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {recognition.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {recognition.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;