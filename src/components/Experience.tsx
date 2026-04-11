import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    skills: string[];
}

const Experience = () => {
    const containerRef = useRef(null);

    const experiences: WorkExperience[] = [
    {
      title: 'Jr. Software Developer',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2024 - Present',
      type: 'Full-time',
      description: 'Developing high-performance React.js and Next.js applications with a focus on AI/ML integration and scalable frontend architecture.',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'AI Integration'],
    },
    {
      title: 'Software Coordinator',
      company: 'Edutalim International LLP',
      location: 'Manjeri, Kerala',
      period: 'Aug 2024 - Nov 2024',
      type: 'Full-time',
      description: 'Led agile development cycles and bridged the gap between engineering teams and stakeholders for complex software deployments.',
      skills: ['Agile', 'Project Management', 'Team Leadership', 'SDLC'],
    },
    {
      title: 'Frontend Engineer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2024 - Present',
      type: 'Part-time',
      description: 'Crafting cross-platform mobile experiences using Flutter and optimizing React web interfaces for maximum performance.',
      skills: ['Flutter', 'React.js', 'Dart', 'Firebase'],
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2024 - Present',
      type: 'Part-time',
      description: 'Driving growth through technical SEO audits, keyword strategy, and data-driven performance optimization.',
      skills: ['Technical SEO', 'Analytics', 'Keyword Strategy'],
    },
  ];

  return (
    <section id="experience" className="py-32 relative bg-[#000000] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white font-display tracking-tighter uppercase"
          >
            Our Work <span className="text-neutral-500">Journey</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-24 md:space-y-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative md:h-[350px]">
                  
                  {/* Central Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </motion.div>

                  {/* Content Container */}
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-24 h-full items-center ${isEven ? 'text-left' : 'md:text-left'}`}>
                    
                    {/* Left Content (Text or Decoration) */}
                    <div className={`order-2 ${isEven ? 'md:order-1 md:text-right' : 'md:order-1'}`}>
                      {!isEven && (
                        <div className="hidden md:flex justify-start opacity-30 blur-2xl">
                           <div className="w-48 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                        </div>
                      )}
                      {isEven && (
                        <ExperienceCard exp={exp} index={index} align="right" />
                      )}
                    </div>

                    {/* Right Content (Text or Decoration) */}
                    <div className={`order-3 ${isEven ? 'md:order-2' : 'md:order-2'}`}>
                      {!isEven && (
                        <ExperienceCard exp={exp} index={index} align="left" />
                      )}
                      {isEven && (
                        <div className="hidden md:flex justify-end opacity-30 blur-2xl">
                           <div className="w-48 h-12 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index, align }: { exp: WorkExperience, index: number, align: string }) => (
  <motion.div
    initial={{ opacity: 0, x: align === 'left' ? 30 : -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex flex-col gap-4"
  >
    <div className={`flex items-center gap-3 ${align === 'right' ? 'md:justify-end' : ''}`}>
      <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-wider rounded-sm">
        Exp {index + 1}
      </span>
    </div>
    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
      {exp.title}
    </h3>
    <div className={`flex flex-col gap-1 ${align === 'right' ? 'md:items-end' : ''}`}>
       <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{exp.company}</span>
       <div className="flex items-center gap-2 text-[10px] text-neutral-600 font-bold uppercase tracking-widest">
         <MapPin size={10} />
         {exp.location} | {exp.period}
       </div>
    </div>
    <p className={`text-neutral-500 text-sm leading-relaxed max-w-sm ${align === 'right' ? 'md:ml-auto' : ''}`}>
      {exp.description}
    </p>
    <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'md:justify-end' : ''}`}>
      {exp.skills.map((skill: string) => (
        <span key={skill} className="text-[9px] font-black text-neutral-600 uppercase tracking-widest border-b border-white/5 pb-1">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Experience;
