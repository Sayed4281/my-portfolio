import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      title: 'Jr. Software Developer',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2024 - Present',
      type: 'Full-time',
      description: 'Leading React.js and Next.js development projects with focus on AI/ML integration and modern web technologies.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Node.js', 'MongoDB', 'AI/ML Integration'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Software Coordinator',
      company: 'Edutalim International LLP',
      location: 'Manjeri, Kerala',
      period: 'Aug 2024 - Nov 2024',
      type: 'Full-time',
      description: 'Managed software projects and coordinated between development teams and other branch teams using Agile methodology.',
      skills: ['Project Management', 'Team Coordination', 'Agile', 'Software Management'],
      gradient: 'from-cyan-500 to-indigo-500',
    },
    {
      title: 'Frontend Engineer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2024 - Present',
      type: 'Part-time',
      description: 'Developing cross-platform mobile applications using Flutter and modern web implementations using React.js.',
      skills: ['Flutter', 'React.js', 'Dart', 'Firebase', 'Web & Mobile'],
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2024 - Present',
      type: 'Part-time',
      description: 'Optimizing website performance and search rankings using advanced SEO tools and analytics.',
      skills: ['SEO Tools', 'Google Analytics', 'Keyword Research', 'Technical SEO'],
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-display">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-indigo-500 opacity-30"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                {/* Dot */}
                <motion.div
                  className={`absolute left-2 md:left-6 top-6 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-slate-900 z-10`}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(59,130,246,0.4)',
                      '0 0 0 10px rgba(59,130,246,0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex flex-col gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-blue-400" />
                          <span className="font-semibold text-sm md:text-base">{exp.company}</span>
                        </div>
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/20">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} className="text-cyan-400" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-indigo-400" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base bg-slate-900/50 p-4 rounded-lg border border-white/5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-white text-xs md:text-sm rounded-full border border-white/20`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
