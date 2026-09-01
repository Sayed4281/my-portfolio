import { motion } from 'framer-motion';
import { 
  FolderKanban, 
  Code2, 
  Database, 
  ShieldCheck, 
  CheckCircle,
  SearchCheck,
  Target,
  Users,
  MessageSquare,
  Brain,
  Zap,
  Lightbulb,
  Compass
} from 'lucide-react';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Project Management & Business Analysis',
      icon: FolderKanban,
      skills: [
        'Jira', 'Trello', 'Agile/Scrum', 'Requirements Analysis', 
        'Business Process Analysis', 'Sprint Planning', 'UAT', 'Documentation', 'Client Coordination'
      ]
    },
    {
      title: 'Software Development',
      icon: Code2,
      skills: [
        'Next.js', 'React', 'TypeScript', 'JavaScript', 
        'Node.js', 'Flutter', 'Dart', 'Tailwind CSS'
      ]
    },
    {
      title: 'Backend & Database Systems',
      icon: Database,
      skills: [
        'REST APIs', 'PostgreSQL', 'MySQL', 'Prisma', 
        'Supabase', 'Firebase', 'MongoDB'
      ]
    },
    {
      title: 'Security & Access Governance',
      icon: ShieldCheck,
      skills: [
        'JWT', 'RBAC', 'Authentication', 'Authorization'
      ]
    },
    {
      title: 'Testing & QA',
      icon: CheckCircle,
      skills: [
        'Functional Testing', 'Regression Testing', 'UAT', 
        'API Testing', 'Postman', 'Bug Tracking', 'Test Reports'
      ]
    },
    {
      title: 'SEO & Performance Optimization',
      icon: SearchCheck,
      skills: [
        'Technical SEO', 'Core Web Vitals', 'Schema Markup', 
        'XML Sitemap', 'Google Search Console', 'Google Analytics'
      ]
    }
  ];

  const leadershipQualities = [
    { name: 'Cross-Functional Team Leadership', icon: Target },
    { name: 'Client Relationship Management', icon: Users },
    { name: 'Stakeholder Communication', icon: MessageSquare },
    { name: 'Strategic Problem Solving', icon: Brain },
    { name: 'Sprint Velocity & Tracking', icon: Zap },
    { name: 'Solution Planning & Execution', icon: Lightbulb },
    { name: 'Resource Allocation', icon: Compass }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden bg-[#0B1220]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-cyan-400 text-xs font-black tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 block">Competencies</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white mb-4 sm:mb-6 uppercase tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Capabilities</span>
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg leading-relaxed">
            Structured skills directly matching project management, functional business analysis, full-stack software development, QA, and security.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-24">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="bg-[#172033] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-[#263449] hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                      <Icon size={20} className="sm:size-[22px]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#0B1220]/60 border border-[#263449] hover:border-blue-500/40 rounded-lg text-[11px] sm:text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership & Operational Competencies */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3">Management & Leadership Competencies</h3>
            <p className="text-[#94A3B8] text-xs sm:text-sm">Key soft skills enabling smooth project delivery and cross-team alignment.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {leadershipQualities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#172033] border border-[#263449] hover:border-blue-500/40 rounded-xl sm:rounded-2xl transition-all group"
                >
                  <Icon size={16} className="sm:size-[18px] text-cyan-400 group-hover:text-blue-300 transition-colors shrink-0" />
                  <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#F8FAFC] group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;