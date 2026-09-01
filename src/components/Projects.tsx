'use client';

import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import TiltCard from './TiltCard';

import { ArrowRight, Github, ExternalLink, Sparkles, Layers, X, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  modules?: string[];
  status: string;
  category: string;
  link?: string;
  isFeatured?: boolean;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Enterprise ERP & Systems', 'Web Applications', 'Mobile Apps', 'AI & Research'];

  const projects: Project[] = [
    {
      title: 'Hirush ERP — Enterprise Resource Planning System',
      description: 'Comprehensive, modular Enterprise Resource Planning solution engineered for modern business operations. Led and contributed to the planning, development, testing, and implementation of HRMS, CRM, Finance, Payroll, Attendance, Project Management, Reporting, and RBAC security.',
      longDescription: 'Hirush ERP is an end-to-end multi-tenant platform designed to streamline corporate workflows across organizational hierarchies. Featuring real-time payroll calculation, automated leave accrual, shift scheduling, financial ledger audit trails, project milestone velocity charts, and fine-grained Role-Based Access Control (RBAC).',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Zustand', 'REST APIs', 'JWT RBAC'],
      modules: ['HRMS', 'CRM', 'Finance', 'Payroll', 'Attendance', 'Project Management', 'Reporting', 'RBAC Security'],
      status: 'Core Enterprise Product',
      category: 'Enterprise ERP & Systems',
      isFeatured: true
    },
    {
      title: 'Resort & Hostel Booking Management System',
      description: 'Comprehensive hospitality management system with real-time room availability calendar, guest information gathering, multi-tier user role permissions, financial ledger tracking, and automated payment gateway processing.',
      longDescription: 'Engineered to handle high-concurrency booking requests, seasonal pricing adjustments, multi-building room grid mapping, guest ID verification uploads, and automated invoice PDF generation with payment gateway webhooks.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay API'],
      modules: ['Booking Engine', 'Calendar Availability', 'Guest CRM', 'Financial Ledger', 'User Management', 'Payments'],
      status: 'Completed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'Attendance Management System (PWA)',
      description: 'Dual-module Progressive Web Application with GPS-based geo-fencing check-in, shift management, real-time leave approvals, and automated reporting.',
      longDescription: 'Offline-first PWA allowing remote and field employees to log attendance via biometric/GPS location validation. Includes geo-fence perimeter radius checking, supervisor push notifications, and exportable monthly payroll logs.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Firebase', 'PWA', 'GPS Geofencing', 'Service Workers'],
      status: 'Deployed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'Restaurant Order Flow System',
      description: 'Real-time order management application streamlining kitchen workflows, table management, bill generation, and inventory synchronization.',
      longDescription: 'Enables waitstaff to place instant POS orders synchronized with Kitchen Display System (KDS) screens. Features table status color maps, split-bill processing, and live stock depletion alerts.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux Toolkit', 'WebSockets'],
      status: 'Completed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'NeuVitX - Health AI System',
      description: 'Hardware-software AI system presented at ICETI4T 2025 international conference for real-time vitals monitoring and algorithmic diagnostics.',
      longDescription: 'Published research project integrating wearable biometric sensors with a cross-platform mobile application for real-time pulse, ECG, and oxygen saturation anomaly detection.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'IoT Hardware', 'Firebase', 'TensorFlow Lite', 'AI Diagnostics'],
      status: 'Published Research',
      category: 'AI & Research',
    },
    {
      title: 'SEO Strategist Digital Portal',
      description: 'Optimized digital portal built with advanced schema markup, Core Web Vitals optimizations, and automated metadata rendering.',
      longDescription: 'Custom personal brand portal engineered for high search engine indexability, achieveing 98+ Google Lighthouse performance, accessibility, and SEO audit scores.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite', 'Schema JSON-LD'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Visual Specialist Portfolio',
      description: 'Immersive portfolio for a multimedia specialist showcasing video and 3D assets with fluid motion graphics and interaction design.',
      longDescription: 'High-impact multimedia showcase incorporating fluid canvas webGL background shaders, custom video player modal lightbox, and smooth layout transitions.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP Animation'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
    {
      title: 'ShopSmart Analytics App',
      description: 'Mobile expense tracking application with intelligent budget forecasting, categorized spending breakdown, and receipt processing.',
      longDescription: 'Cross-platform mobile application providing intuitive personal financial analytics, monthly recurring bill reminders, exportable CSV reports, and cloud data synchronization.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Machine Learning API'],
      status: 'Completed',
      category: 'Mobile Apps',
    },
    {
      title: 'Smart EMI & Financial Calculator',
      description: 'Responsive financial calculator app featuring dynamic amortization schedules, interactive interest split charts, and PDF summary exports.',
      longDescription: 'Comprehensive financial planning tool allowing users to calculate loan EMIs, compare tenure interest variations, view interactive breakdown pie charts, and download complete amortization schedules.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'jsPDF'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://smart-emi-calculator-theta.vercel.app/',
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#0E1726]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-2 text-cyan-400 text-xs font-black tracking-[0.4em] uppercase mb-3 sm:mb-4">
              <Sparkles size={14} />
              Featured Deliverables
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-white tracking-tight uppercase">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Portfolio</span>
            </h2>
          </motion.div>

          {/* Categories Pill Bar - Scrollable on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all duration-300 border whitespace-nowrap shrink-0 min-h-[38px]
                  ${activeCategory === category
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400 shadow-lg shadow-blue-500/25'
                    : 'text-[#94A3B8] hover:text-white bg-[#172033] border-[#263449] hover:border-blue-500/40'}
                `}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative h-full cursor-pointer ${project.isFeatured ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <TiltCard 
                  className={`relative h-full border rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col ${
                    project.isFeatured 
                      ? 'bg-gradient-to-b from-blue-600/20 via-[#172033] to-[#172033] border-blue-500/40 hover:border-blue-400/70 shadow-2xl shadow-blue-500/10' 
                      : 'bg-[#172033] border-[#263449] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5'
                  }`}
                >
                  <div className={`${project.isFeatured ? 'grid lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8' : 'flex flex-col h-full'}`}>
                    <div className={`relative overflow-hidden rounded-2xl ${project.isFeatured ? 'lg:col-span-6 h-56 sm:h-72 lg:h-96' : 'h-48 sm:h-60'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172033] via-transparent to-transparent opacity-85" />
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                        <span className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border backdrop-blur-md ${project.isFeatured ? 'bg-blue-500/30 text-cyan-300 border-cyan-400/40 shadow-lg' : 'bg-[#0B1220]/80 text-[#F8FAFC] border-[#263449]'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
                        <span className="px-2.5 sm:px-3 py-1 bg-[#0B1220]/80 backdrop-blur-md border border-[#263449] rounded-full text-[9px] sm:text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className={`${project.isFeatured ? 'lg:col-span-6 flex flex-col justify-between' : 'p-5 sm:p-7 flex flex-col flex-1'}`}>
                      <div>
                        {project.isFeatured && (
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-cyan-400 mb-2 sm:mb-3">
                            <Layers size={14} className="sm:size-[16px]" />
                            Flagship Enterprise Platform (#1 Showcase)
                          </div>
                        )}
                        <h3 className={`${project.isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-2xl'} font-bold text-white mb-2.5 sm:mb-4 group-hover:text-cyan-300 transition-colors font-display line-clamp-2`}>
                          {project.title}
                        </h3>
                        <p className="text-[#94A3B8] text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        {project.modules && project.modules.length > 0 && (
                          <div className="mb-4 sm:mb-6">
                            <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block mb-2">Integrated Modules:</span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.modules.map((mod) => (
                                <span key={mod} className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-black text-cyan-300 bg-blue-500/10 border border-blue-500/20 rounded-md uppercase tracking-tight">
                                  {mod}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                          {project.technologies.slice(0, 5).map((tech: string) => (
                            <span key={tech} className="px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold text-[#94A3B8] bg-[#0B1220]/60 border border-[#263449] rounded-full uppercase tracking-tight">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="px-2 sm:px-2.5 py-1 text-[9px] font-bold text-cyan-400 bg-blue-500/10 rounded-full">
                              +{project.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t border-[#263449] flex items-center justify-between">
                        <span className="text-[11px] sm:text-xs font-bold text-cyan-400 group-hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1">
                          View Project Details
                        </span>
                        <div className="p-2 sm:p-2.5 bg-blue-500/10 rounded-full border border-blue-500/20 text-cyan-300 group-hover:text-white group-hover:bg-blue-600 transition-all">
                          <ArrowRight size={16} className="sm:size-[18px] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>

        {/* View GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="https://github.com/Sayed4281"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#172033] border border-[#263449] rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 shadow-lg min-h-[48px]"
          >
            <Github size={18} />
            Explore Repositories on GitHub
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1220]/80 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#172033] border border-[#263449] rounded-[2rem] overflow-hidden shadow-2xl my-8 max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image inside Modal */}
              <div className="relative h-48 sm:h-64 overflow-hidden shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172033] via-[#172033]/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#0B1220]/80 border border-[#263449] text-white hover:text-cyan-300 rounded-full transition-all"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-wider">
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 bg-[#0B1220]/90 text-cyan-300 rounded-full text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Scrollable Content inside Modal */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {/* Modules list if present */}
                {selectedProject.modules && selectedProject.modules.length > 0 && (
                  <div>
                    <h4 className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} /> Key System Modules
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedProject.modules.map((mod) => (
                        <div key={mod} className="p-2.5 bg-[#0B1220] border border-[#263449] rounded-xl text-xs font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="truncate">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-black text-[#94A3B8] uppercase tracking-widest mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-[#0B1220] border border-[#263449] rounded-lg text-xs font-semibold text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link if present */}
                {selectedProject.link && (
                  <div className="pt-4 border-t border-[#263449] flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all"
                    >
                      Visit Live Platform <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

