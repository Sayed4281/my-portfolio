import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Search, Settings } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React & Next.js', level: 90 },
        { name: 'TypeScript/JavaScript', level: 88 },
        { name: 'Flutter & Dart', level: 85 },
        { name: 'Redux & State Management', level: 85 },
        { name: 'Responsive Design', level: 92 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'REST API Development', level: 87 },
        { name: 'Database Design', level: 85 },
        { name: 'Firebase & Cloud', level: 82 }
      ]
    },
    {
      title: 'SEO Executive',
      icon: Search,
      skills: [
        { name: 'Technical SEO', level: 88 },
        { name: 'Google Analytics', level: 85 },
        { name: 'Keyword Research', level: 87 },
        { name: 'Content Optimization', level: 85 },
        { name: 'Search Console', level: 86 }
      ]
    },
    {
      title: 'Tools & Management',
      icon: Settings,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Project Management', level: 85 },
        { name: 'Team Coordination', level: 88 },
        { name: 'Agile Methodology', level: 82 },
        { name: 'Documentation', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Technical Skills
          </h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/[0.02] rounded-xl p-6 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors duration-300">
                  <category.icon className="text-violet-400" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-neutral-400 text-sm">{skill.name}</span>
                      <span className="text-violet-400 text-xs font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIndex * 0.1 + skillIndex * 0.08, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-violet-500 to-violet-400/50 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;