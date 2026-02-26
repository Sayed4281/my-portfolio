import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Search, GraduationCap, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'React, Flutter & Modern Tech',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO Executive',
      description: 'Technical SEO & Analytics',
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'B.Tech CSE with 8.08 CGPA',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'NSS Coordinator',
      gradient: 'from-blue-600 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight">
              Transforming ideas into <br className="hidden md:block" />
              <span className="text-cyan-400">digital reality</span>
            </h3>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Distinguished Computer Science graduate with 8.08 CGPA, currently working as <strong className="text-white">Jr. Software Developer</strong> at Hirush Global LLP. My journey combines academic excellence with practical expertise in full-stack development.
            </p>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              With a strong foundation in <strong className="text-white">AI/ML technologies</strong> and <strong className="text-white">SEO optimization</strong>, I bring a unique perspective to development projects. My experience spans from enterprise CRM systems to community service leadership.
            </p>

            {/* Status Badge */}
            <div className="p-5 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full relative"></div>
                </div>
                <p className="text-white font-semibold">Current Status</p>
              </div>
              <p className="text-slate-400 text-sm">
                Jr. Software Developer at Hirush Global LLP • SEO Analyst
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;