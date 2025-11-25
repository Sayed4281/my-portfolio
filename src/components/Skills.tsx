import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Smartphone, Search, GitBranch, Settings } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      gradient: 'from-blue-600 to-cyan-500',
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
      gradient: 'from-cyan-500 to-indigo-500',
      skills: [
        { name: 'Node.js & Express', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'REST API Development', level: 87 },
        { name: 'Database Design', level: 85 },
        { name: 'Firebase & Cloud', level: 82 }
      ]
    },
    {
      title: 'SEO & Digital Marketing',
      icon: Search,
      gradient: 'from-indigo-500 to-blue-600',
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
      gradient: 'from-blue-600 to-cyan-500',
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
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
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