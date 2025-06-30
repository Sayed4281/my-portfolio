import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Smartphone, Award, Users, Target, Trophy, BookOpen, Star, Search } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const achievements = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in Flutter, React, and modern web technologies with proven track record in enterprise applications.',
      gradient: 'from-emerald-400 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Professional SEO Analyst at Hirush Global with expertise in technical SEO and performance optimization.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'B.Tech Computer Science Engineering graduate with outstanding 8.08 CGPA, demonstrating consistent academic performance.',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Leadership & Community',
      description: 'NSS Dream House Project Coordinator and TACS Assistant Coordinator with proven leadership in community service.',
      gradient: 'from-cyan-400 to-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Innovation',
      description: 'Expert in cross-platform mobile development with Flutter, creating scalable and user-centric applications.',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Professional Growth',
      description: 'Currently working as Jr. Frontend Developer at Pro26, contributing to enterprise-level applications.',
      gradient: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-purple-950/30 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
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
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-300% bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 140 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Professional Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-black mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Full Stack Developer & SEO Analyst
              </span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Distinguished Computer Science graduate with 8.08 CGPA, currently working as Jr. Frontend Developer 
              at Pro26 and SEO Analyst at Hirush Global. My journey combines academic excellence with practical 
              expertise in full-stack development, specializing in Flutter applications and modern web technologies.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              With a strong foundation in AI/ML technologies and SEO optimization, I bring a unique perspective 
              to development projects. My experience spans from enterprise CRM systems to community service 
              initiatives, where I've successfully coordinated the NSS Dream House project and completed 5 houses 
              during my leadership tenure.
            </motion.p>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              My approach combines technical excellence with practical problem-solving, ensuring that every 
              solution I develop is not only functional but also optimized for performance and user experience. 
              I'm passionate about creating scalable applications that make a meaningful impact.
            </motion.p>

            {/* Professional Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl border border-emerald-400/20"
            >
              <div className="flex items-center mb-2">
                <Trophy className="text-emerald-400 mr-3" size={24} />
                <span className="text-emerald-400 font-bold">Current Status</span>
              </div>
              <p className="text-gray-300 text-sm">
                Jr. Frontend Developer at Pro26 • SEO Analyst at Hirush Global • Open for New Opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
                }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-r ${item.gradient} bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="text-white group-hover:text-white transition-colors duration-300" size={28} />
                  </motion.div>
                  <h4 className="text-white font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;