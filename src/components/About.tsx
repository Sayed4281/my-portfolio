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
    },
    {
      icon: Search,
      title: 'SEO Executive',
      description: 'Technical SEO & Analytics',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'B.Tech CSE with 8.08 CGPA',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'NSS Coordinator',
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">About</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            About Me
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight">
              Transforming ideas into <br className="hidden md:block" />
              <span className="text-violet-400">digital reality</span>
            </h3>

            <p className="text-neutral-400 text-base leading-relaxed">
              Distinguished Computer Science graduate with 8.08 CGPA, currently working as <strong className="text-neutral-200 font-medium">Jr. Software Developer</strong> at Hirush Global LLP. My journey combines academic excellence with practical expertise in full-stack development.
            </p>

            <p className="text-neutral-400 text-base leading-relaxed">
              With a strong foundation in <strong className="text-neutral-200 font-medium">AI/ML technologies</strong> and <strong className="text-neutral-200 font-medium">SEO optimization</strong>, I bring a unique perspective to development projects. My experience spans from enterprise CRM systems to community service leadership.
            </p>

            {/* Status Badge */}
            <div className="p-5 bg-white/[0.02] rounded-xl border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-violet-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                  <div className="w-2.5 h-2.5 bg-violet-500 rounded-full relative"></div>
                </div>
                <p className="text-white font-medium text-sm">Current Status</p>
              </div>
              <p className="text-neutral-500 text-sm">
                Jr. Software Developer at Hirush Global LLP • SEO Analyst
              </p>
            </div>
          </motion.div>

          {/* Right Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/[0.02] p-6 rounded-xl border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors duration-300">
                  <item.icon className="text-violet-400" size={20} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-violet-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-neutral-500 text-xs">
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