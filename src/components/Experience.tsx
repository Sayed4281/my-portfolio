'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Calendar, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Code2, 
  Search, 
  Cpu 
} from 'lucide-react';
import TiltCard from './TiltCard';

interface WorkExperience {
  title: string;
  roleCategory: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badgeColor: string;
  icon: typeof Code2;
  description: string;
  highlights: string[];
  skills: string[];
  metrics?: { label: string; value: string };
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 90%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  const experiences: WorkExperience[] = [
    {
      title: 'Software Developer / Technical Lead',
      roleCategory: 'Enterprise Architecture & Sprint Leadership',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Nov 2025 - Present',
      type: 'Full-time / Active',
      badgeColor: 'from-blue-600 to-indigo-600',
      icon: Layers,
      metrics: { label: 'Modules Directed', value: '6+ ERP' },
      description: 'Spearheading the engineering, database architecture, and end-to-end implementation of the proprietary Hirush ERP suite. Facilitating sprint planning, managing git repositories, and aligning client specifications with developer deliverables.',
      highlights: [
        'Architected modular ERP domains: HRMS, CRM, Finance, Payroll, Attendance, and granular RBAC security engines',
        'Directing developer sprint cycles, backlog grooming, and milestone deliverables for enterprise clients',
        'Standardized API architectures and relational schema designs in PostgreSQL and Next.js'
      ],
      skills: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL', 'RBAC Security', 'Sprint Management', 'Git Flow'],
    },
    {
      title: 'Frontend Engineer',
      roleCategory: 'Client-Facing UI & Cross-Platform Mobile',
      company: 'Pro26 LLP',
      location: 'Remote',
      period: 'May 2025 - Present',
      type: 'Part-time',
      badgeColor: 'from-indigo-600 to-purple-600',
      icon: Code2,
      metrics: { label: 'Platform Scope', value: 'Web & App' },
      description: 'Developing high-performance React web interfaces and reactive cross-platform mobile applications in Flutter. Implementing clean state management and micro-interactions.',
      highlights: [
        'Built accessible, responsive React interfaces with modular UI component libraries',
        'Integrated real-time Cloud Firestore backends, authentication flows, and REST endpoints',
        'Maintained fluid 60fps animations across iOS and Android builds with Flutter'
      ],
      skills: ['React.js', 'Flutter', 'TypeScript', 'Firebase', 'REST APIs', 'State Management'],
    },
    {
      title: 'SEO Analyst',
      roleCategory: 'Technical SEO & Web Performance',
      company: 'Hirush Global LLP',
      location: 'Malappuram, Kerala',
      period: 'Feb 2025 - Nov 2025',
      type: 'Full-time / Strategy',
      badgeColor: 'from-emerald-600 to-teal-600',
      icon: Search,
      metrics: { label: 'Core Web Vitals', value: '95+ Score' },
      description: 'Executed technical SEO audits, site architecture optimizations, structured data implementation, and search console analytics to accelerate organic discovery.',
      highlights: [
        'Resolved critical Core Web Vitals bottlenecks (LCP, FID, CLS) across customer portals',
        'Formulated JSON-LD schema graphs, canonical indexing strategies, and automated sitemaps',
        'Conducted competitor keyword gap analyses driving organic search visibility gains'
      ],
      skills: ['Technical SEO', 'JSON-LD Schema', 'Core Web Vitals', 'Search Console', 'Site Performance'],
    },
    {
      title: 'Application Manager',
      roleCategory: 'Operational Deployment & UAT',
      company: 'Eduthalim International Educational Consultancy',
      location: 'Manjeri, Kerala',
      period: 'Aug 2025 - Oct 2025',
      type: 'Contract / Full-time',
      badgeColor: 'from-amber-600 to-orange-600',
      icon: Cpu,
      metrics: { label: 'Stakeholders', value: 'End-to-End' },
      description: 'Managed business software deployments, gathered operational feedback, conducted user acceptance testing (UAT), and streamlined user adoption across branches.',
      highlights: [
        'Bridged communication between branch operational managers and external development vendors',
        'Orchestrated structured UAT defect reporting and verified release candidate stability'
      ],
      skills: ['Application Management', 'Requirements Gathering', 'Stakeholder Alignment', 'UAT Testing'],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Briefcase size={13} className="text-blue-600" />
              <span>Verified Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 font-display uppercase tracking-tight">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Journey</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3 max-w-xl mx-auto">
              Progressive experience leading full-stack engineering, enterprise ERP architecture, and web performance optimization.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="max-w-5xl mx-auto relative pb-6">
          
          {/* Static Track Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

          {/* Dynamic Scroll Progress Glowing Laser Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500 -translate-x-1/2 shadow-[0_0_12px_rgba(37,99,235,0.6)] z-10"
          />

          <div className="space-y-12 sm:space-y-20">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.icon;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Glowing Animated Timeline Center Node */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-4 sm:left-6 md:left-1/2 top-7 sm:top-8 w-6 sm:w-7 h-6 sm:h-7 bg-white rounded-full -translate-x-1/2 z-20 flex items-center justify-center border-2 border-blue-600 shadow-md shadow-blue-500/20"
                  >
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
                  </motion.div>

                  {/* Card Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${isEven ? 'md:pr-10 lg:pr-14 md:text-right' : 'md:pl-10 lg:pl-14 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                      className="h-full"
                    >
                      <TiltCard 
                        maxTilt={8}
                        glowColor="rgba(37, 99, 235, 0.14)"
                        className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 group shadow-sm hover:shadow-2xl relative overflow-hidden"
                      >
                        {/* Decorative Top Accent Stripe */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.badgeColor}`} />

                        {/* Card Header Pills */}
                        <div className={`flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span className={`px-3 py-1 bg-gradient-to-r ${exp.badgeColor} text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-2xs`}>
                            {exp.period}
                          </span>
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200">
                            {exp.type}
                          </span>
                          {exp.metrics && (
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[10px] font-extrabold rounded-full border border-blue-200">
                              {exp.metrics.value}
                            </span>
                          )}
                        </div>

                        {/* Title & Category */}
                        <div className="mb-2">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">
                            {exp.roleCategory}
                          </p>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                            {exp.title}
                          </h3>
                        </div>

                        {/* Company & Location Badges */}
                        <div className={`flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <span className="inline-flex items-center gap-1.5 text-slate-800 font-bold">
                            <Briefcase size={14} className="text-blue-600 shrink-0" />
                            {exp.company}
                          </span>
                          <span>&bull;</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={13} className="text-slate-400 shrink-0" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Role Description */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {exp.description}
                        </p>

                        {/* Structured Highlights */}
                        <div className="mb-5 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 text-left">
                            Key Accomplishments & Responsibilities
                          </p>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-left">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="leading-snug">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skill Chips */}
                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-2.5 py-1 text-[9px] sm:text-[10px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg uppercase tracking-tight shadow-2xs group-hover:border-blue-200 transition-colors"
                            >
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

