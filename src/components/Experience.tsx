'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import TiltCard from './TiltCard';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 85%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

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
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative bg-[#FAFAFB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 text-xs font-mono font-semibold tracking-[0.25em] uppercase mb-3 block">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight mb-4">
              Career History &amp; Leadership Roles
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Demonstrated leadership spanning modular ERP architectures, cross-functional squad management, and scalable frontend delivery.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          
          {/* Static Background Line Track */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

          {/* Dynamic Scroll Progress Line Fill */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 -translate-x-1/2 z-10"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Clean Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0.6, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-20 flex items-center justify-center border-2 border-slate-900 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  </motion.div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${isEven ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="h-full"
                    >
                      <TiltCard className="bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl rounded-2xl p-6 sm:p-7 transition-all duration-300 group shadow-sm text-left">
                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                          <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-mono font-medium rounded-md shadow-xs">
                            {exp.period}
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-medium rounded-md border border-slate-200">
                            {exp.type}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-1 font-display">
                          {exp.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-3.5">
                          <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                            <Briefcase size={13} className="text-slate-400 shrink-0" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={13} className="text-slate-400 shrink-0" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                          {exp.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2 mb-5 text-xs text-slate-700 font-normal">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skill Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                          {exp.skills.map((skill) => (
                            <span key={skill} className="px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </TiltCard>
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


