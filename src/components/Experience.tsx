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
    },
    {
      title: 'Software Coordinator',
      company: 'Edutalim International LLP',
      location: 'Manjeri, Kerala',
      period: 'Aug 2024 - Nov 2024',
      type: 'Full-time',
      description: 'Managed software projects and coordinated between development teams and other branch teams using Agile methodology.',
      skills: ['Project Management', 'Team Coordination', 'Agile', 'Software Management'],
    },
    {
      title: 'Frontend Engineer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2024 - Present',
      type: 'Part-time',
      description: 'Developing cross-platform mobile applications using Flutter and modern web implementations using React.js.',
      skills: ['Flutter', 'React.js', 'Dart', 'Firebase', 'Web & Mobile'],
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2024 - Present',
      type: 'Part-time',
      description: 'Optimizing website performance and search rankings using advanced SEO tools and analytics.',
      skills: ['SEO Tools', 'Google Analytics', 'Keyword Research', 'Technical SEO'],
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Career</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Professional Experience
          </h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-violet-500/30 via-violet-500/10 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 bg-violet-500 rounded-full border-4 border-[#050505] z-10">
                  <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-20"></div>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 group"
                >
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <span className="px-2.5 py-0.5 bg-violet-500/10 text-violet-400 text-[10px] font-medium rounded-full border border-violet-500/20 uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-neutral-600" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-neutral-600" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-neutral-600" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-400 mb-5 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-medium text-neutral-400 bg-white/[0.03] rounded-md border border-white/[0.06]"
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
