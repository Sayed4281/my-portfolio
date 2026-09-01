import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase } from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

const Experience = () => {
  const containerRef = useRef(null);

  const experiences: WorkExperience[] = [
    {
      title: 'Software Developer / Technical Lead',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2025 - Present',
      type: 'Full-time',
      description: 'Leading and contributing to the planning, development, testing, and implementation of Hirush ERP system modules. Coordinating dev sprint backlogs, reviewing business requirements, and managing client delivery.',
      highlights: [
        'Led and contributed to Hirush ERP modules (HRMS, CRM, Finance, Payroll, Attendance, RBAC)',
        'Managing dev team tasks, sprint backlogs, and milestone progress reviews',
        'Bridging client business requirements with development execution'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Project Management', 'RBAC'],
    },
    {
      title: 'Frontend Engineer',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2025 - Present',
      type: 'Part-time',
      description: 'Developing responsive React web applications and cross-platform mobile apps with Flutter. Optimizing frontend state management and API integration layers.',
      highlights: [
        'Developed fluid UI components and cross-platform mobile layouts',
        'Integrated real-time Firebase backend services and REST APIs'
      ],
      skills: ['React.js', 'Flutter', 'TypeScript', 'Firebase', 'State Management'],
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2025 - Nov 2025',
      type: 'Full-time / Strategy',
      description: 'Executed technical SEO audits, site performance optimizations, keyword research, structured data implementation, and search console analytics.',
      highlights: [
        'Improved organic search visibility and Core Web Vitals performance across products',
        'Coordinated technical SEO strategies with digital marketing teams'
      ],
      skills: ['Technical SEO', 'Schema Markup', 'Google Search Console', 'Site Performance'],
    },
    {
      title: 'Application Manager',
      company: 'Eduthalim International Educational Consultancy',
      location: 'Manjeri, Kerala',
      period: '3 Months (Aug 2025 - Oct 2025)',
      type: 'Contract / Full-time',
      description: 'Managed software application deployments, conducted functional requirements gathering, and bridged communication between technical teams and operational stakeholders.',
      highlights: [
        'Supervised application deployment cycles and stakeholder feedback',
        'Facilitated UAT testing sessions and release readiness checks'
      ],
      skills: ['Application Management', 'Requirements Gathering', 'Stakeholder Coordination', 'UAT'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 relative bg-[#0E1726] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 block">
              Professional Path
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display uppercase tracking-tight">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Journey</span>
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          
          {/* Vertical Line: Left-aligned on mobile, Centered on md+ */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-blue-500 via-[#263449] to-transparent -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Timeline Dot Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 w-4 sm:w-5 h-4 sm:h-5 bg-blue-500 rounded-full -translate-x-1/2 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.8)] border-2 border-[#0E1726]"
                  >
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full" />
                  </motion.div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${isEven ? 'md:pr-10 lg:pr-12 md:text-right' : 'md:pl-10 lg:pl-12 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-[#172033] border border-[#263449] hover:border-blue-500/50 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 transition-all duration-300 group shadow-xl"
                    >
                      <div className={`flex flex-wrap items-center gap-2 sm:gap-3 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full shadow-md shadow-blue-500/20">
                          {exp.period}
                        </span>
                        <span className="px-2.5 sm:px-3 py-1 bg-blue-500/10 text-cyan-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mb-1.5 font-display">
                        {exp.title}
                      </h3>

                      <div className={`flex flex-wrap items-center gap-2 text-xs font-bold text-[#94A3B8] mb-3.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="inline-flex items-center gap-1">
                          <Briefcase size={13} className="text-cyan-400 shrink-0" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} className="text-cyan-400 shrink-0" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 mb-5 sm:mb-6 text-xs text-[#F8FAFC]">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className={`flex items-start gap-2 text-left ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <span className="text-cyan-400 font-bold shrink-0">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill Chips */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px] font-bold text-cyan-300 bg-blue-500/10 border border-blue-500/20 rounded-md uppercase tracking-tight">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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

export default Experience;

