import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Search, GraduationCap, Users, Smartphone, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'React, Flutter & Modern Web Technologies',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Technical SEO & Performance Optimization',
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
      description: 'NSS Coordinator & Community Service',
      gradient: 'from-blue-600 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Full Stack Developer & SEO Analyst
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              Distinguished Computer Science graduate with 8.08 CGPA, currently working as Jr. Software Developer
              at Hirush Global LLP and SEO Analyst. My journey combines academic excellence with practical
              expertise in full-stack development, specializing in React.js and modern web technologies.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in AI/ML technologies and SEO optimization, I bring a unique perspective
              to development projects. My experience spans from enterprise CRM systems to community service
              initiatives, where I've successfully coordinated the NSS Dream House project.
            </p>

            {/* Status Badge */}
            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-purple-400 font-semibold mb-1">Current Status</p>
              <p className="text-gray-300 text-sm">
                Jr. Software Developer at Hirush Global LLP • SEO Analyst • Open for Opportunities
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
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