import { motion } from 'framer-motion';
import { 
  Code, Database, Search, Settings, 
  Users, Target, MessageSquare, Lightbulb, 
  Zap, Brain, Presentation, Compass
} from 'lucide-react';

const Skills = () => {

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

  const softSkills = [
    { name: 'Leadership', icon: Target, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Team Management', icon: Users, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Communication', icon: MessageSquare, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Problem Solving', icon: Brain, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Time Management', icon: Zap, size: 'small', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Critical Thinking', icon: Lightbulb, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    
    { name: 'Mentoring', icon: Presentation, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' },
    { name: 'Decision Making', icon: Compass, size: 'medium', color: 'bg-white/[0.03] text-neutral-400' }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-[#000000]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-white/50 text-xs font-black tracking-[0.6em] uppercase mb-4 block">Capacities</span>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-6">
            Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">Influence.</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills Grid - Column Wise on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto mb-20 md:mb-32">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/[0.02] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/[0.06] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle inner glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <category.icon size={20} className="md:size-[22px] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-5 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-400 text-xs md:text-sm font-medium">{skill.name}</span>
                      <span className="text-white text-xs font-black tracking-widest">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: catIndex * 0.1 + skillIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-neutral-300 to-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section: The High-End Bento Chips */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] mb-4">Interpersonal Excellence</h3>
            <p className="text-neutral-500 text-sm">Orchestrating teams and projects with strategic coordination.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-2">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 ${skill.color} border border-white/5 rounded-xl md:rounded-2xl transition-all duration-500 hover:border-white/30 group cursor-default`}
              >
                <skill.icon size={16} className="md:size-[18px] group-hover:rotate-12 transition-transform" />
                <span className={`font-black text-[9px] md:text-[10px] uppercase tracking-widest ${skill.size === 'large' ? 'opacity-100' : 'opacity-60'} group-hover:opacity-100 transition-opacity`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;