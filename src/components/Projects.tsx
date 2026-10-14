'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';
import { ArrowRight, ExternalLink, Sparkles, Layers, X, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';

export interface Project {
  title: string;
  category: 'Enterprise Systems' | 'Web Applications' | 'Mobile Applications' | 'AI & Research';
  status: string;
  summary: string;
  problem: string;
  role: string;
  architecture?: string;
  image: string;
  technologies: string[];
  modules?: string[];
  link?: string;
  isFeatured?: boolean;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Enterprise Systems',
    'Web Applications',
    'Mobile Applications',
    'AI & Research',
  ];

  const projects: Project[] = [
    {
      title: 'Hirush ERP — Enterprise Resource Planning System',
      category: 'Enterprise Systems',
      status: 'Flagship Enterprise Product',
      summary: 'Comprehensive, modular Enterprise Resource Planning solution engineered to streamline organizational operations across multi-tenant corporate hierarchies.',
      problem: 'Organizations struggle with disconnected tools for employee tracking, multi-tier payroll calculation, shift scheduling, client leads, and accounting ledgers.',
      role: 'Technical Lead & Developer — Led system planning, architecture design, module development, sprint backlogs, team task distribution, client discovery, and final UAT sign-off.',
      architecture: 'Modular multi-tenant architecture with PostgreSQL relational schemas, Prisma ORM, Next.js 15 App Router, Node.js REST services, and strict Role-Based Access Control (RBAC).',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT RBAC', 'REST APIs', 'Zustand'],
      modules: [
        'HRMS & Staff Management',
        'Automated Payroll Engine',
        'Attendance & Shift Tracking',
        'CRM & Client Pipelines',
        'Financial Ledger & Invoicing',
        'Role-Based Access Control (RBAC)',
        'Sprint & Project Milestones',
        'Executive Analytics & Reports',
      ],
      isFeatured: true,
    },
    {
      title: 'NeuVitX — AI Health Monitoring & Diagnostics',
      category: 'AI & Research',
      status: 'ICETI4T 2025 Research Publication',
      summary: 'Biometric healthcare architecture integrating IoT wearable sensors with mobile telemetry for real-time vitals monitoring and anomaly detection, presented internationally.',
      problem: 'Early detection of cardiovascular and respiratory anomalies requires accessible, low-latency biometric monitoring outside hospital environments.',
      role: 'Research Co-Author & Technical Developer — Integrated hardware sensor communication, engineered mobile telemetry dashboards in Flutter, and co-authored conference paper.',
      architecture: 'Hardware sensor array connected via Bluetooth Low Energy (BLE) to a cross-platform mobile client with Firebase cloud persistence and algorithmic alert pipelines.',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Python', 'Firebase', 'IoT Telemetry', 'Biometric Sensors', 'TensorFlow Lite', 'Research Paper'],
      modules: ['Real-time Pulse Monitoring', 'Oxygen Saturation (SpO2)', 'ECG Telemetry Sync', 'Emergency Anomaly Triggers', 'Doctor Consultation Dashboard'],
    },
    {
      title: 'Attendance Management System (PWA)',
      category: 'Enterprise Systems',
      status: 'Deployed Production System',
      summary: 'Dual-module Progressive Web Application with GPS-based geo-fencing check-in, shift management, real-time leave approvals, and exportable monthly payroll logs.',
      problem: 'Field and remote staff attendance tracking suffered from manual logging errors and lack of verifiable location check-ins.',
      role: 'Full-Stack Lead — Architected the GPS geo-fencing perimeter validation, offline-first PWA caching, and supervisor approval workflow.',
      architecture: 'Offline-first PWA with Service Workers, browser geolocation API with perimeter radius calculation, and real-time backend synchronization.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Firebase', 'PWA', 'GPS Geofencing', 'Service Workers'],
      modules: ['Geo-fencing Radius Check', 'Shift Scheduling', 'Leave Request & Approval', 'Monthly Payroll Export', 'Offline Check-in Cache'],
    },
    {
      title: 'Resort & Hostel Booking Management System',
      category: 'Enterprise Systems',
      status: 'Completed Enterprise Solution',
      summary: 'Comprehensive hospitality booking portal with real-time room availability calendar, guest KYC gathering, multi-tier staff permissions, and automated invoice PDF generation.',
      problem: 'Resort operations experienced double-booking conflicts during seasonal peaks and inefficient paper-based check-in ledgers.',
      role: 'Full-Stack Developer — Built the interactive booking calendar grid, user permission roles, and invoice generation service.',
      architecture: 'Relational database schema enforcing row-level locking for room reservations during concurrent checkout sessions.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay API'],
      modules: ['Interactive Booking Calendar', 'Room Inventory Grid', 'Guest CRM & KYC', 'Financial Ledger', 'Invoice PDF Generator'],
    },
    {
      title: 'Restaurant Kitchen Order Flow System',
      category: 'Enterprise Systems',
      status: 'Completed Solution',
      summary: 'Real-time order management application streamlining kitchen workflows, table status mapping, split bill generation, and inventory synchronization.',
      problem: 'Kitchen staff and waitstaff communication delays caused inaccurate order tracking during rush hours.',
      role: 'Frontend & WebSocket Developer — Implemented Kitchen Display System (KDS) live sync and interactive table layout maps.',
      architecture: 'Event-driven WebSocket architecture broadcasting table state updates instantaneously across POS and kitchen displays.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux Toolkit', 'WebSockets'],
      modules: ['Live Table Color Map', 'KDS Order Tickets', 'Split Bill Calculations', 'Inventory Depletion Alerts'],
    },
    {
      title: 'SEO Strategist Digital Portal',
      category: 'Web Applications',
      status: 'Live Production Web App',
      summary: 'High-performance personal brand portal engineered for search engine indexability, achieving 98+ Google Lighthouse scores with rich schema markup.',
      problem: 'Digital portfolio required exceptional Core Web Vitals performance, automated social preview cards, and comprehensive schema taxonomy.',
      role: 'Frontend Engineer & SEO Specialist — Implemented technical SEO architecture, structured data JSON-LD, and responsive design.',
      architecture: 'Static site generation with pre-rendered semantic HTML, optimized WebP imagery, and schema.org microdata.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite', 'Schema JSON-LD'],
      link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Visual Specialist Portfolio',
      category: 'Web Applications',
      status: 'Live Production Web App',
      summary: 'Multimedia showcase for a video creator incorporating fluid interaction design, custom video modal lightbox, and smooth layout transitions.',
      problem: 'Traditional portfolio templates struggled to showcase high-resolution video reels without dragging down page performance.',
      role: 'Frontend Developer — Designed responsive component hierarchy and optimized asset loading pipelines.',
      architecture: 'Lazy-loaded video players with progressive poster frame pre-fetching and Framer Motion layout transitions.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP Animation'],
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
    {
      title: 'ShopSmart Personal Analytics App',
      category: 'Mobile Applications',
      status: 'Completed Mobile Application',
      summary: 'Cross-platform mobile expense tracking app with intelligent budget forecasting, categorized spending breakdowns, and recurring bill notifications.',
      problem: 'Users required a clear, distraction-free tool to log daily expenditures and visualize monthly category trends on mobile.',
      role: 'Mobile App Developer — Built cross-platform UI screens in Flutter and integrated real-time cloud persistence.',
      architecture: 'BLoC state management pattern in Flutter paired with cloud storage and local encrypted caching.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Data Visualization'],
      modules: ['Expense Logging', 'Budget Categories', 'Monthly Trend Charts', 'Bill Reminders'],
    },
    {
      title: 'Smart EMI & Financial Calculator',
      category: 'Web Applications',
      status: 'Live Web Utility',
      summary: 'Responsive financial planning tool featuring dynamic loan amortization schedules, interactive interest vs principal pie charts, and PDF summary exports.',
      problem: 'Loan applicants needed an instant, accurate way to model interest rate variations and download complete repayment schedules.',
      role: 'Developer — Formulated financial math calculation algorithms, dynamic SVG chart rendering, and client-side PDF compilation.',
      architecture: 'Pure client-side mathematical algorithms with zero server dependencies for sub-millisecond calculation response times.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'jsPDF'],
      link: 'https://smart-emi-calculator-theta.vercel.app/',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  const featuredCaseStudy = projects.find((p) => p.isFeatured) || projects[0];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* ============================================================== */}
        {/* 1. Featured Case Study Banner (Hirush ERP)                     */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
            <Sparkles size={14} />
            <span>Featured Case Study</span>
          </div>
          
          <div className="rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-6 relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-md">
                  {featuredCaseStudy.status}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  {featuredCaseStudy.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-3">
                  {featuredCaseStudy.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {featuredCaseStudy.summary}
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  <p>
                    <strong className="text-slate-900">Problem Solved:</strong> {featuredCaseStudy.problem}
                  </p>
                  <p>
                    <strong className="text-slate-900">My Contribution:</strong> {featuredCaseStudy.role}
                  </p>
                  {featuredCaseStudy.architecture && (
                    <p>
                      <strong className="text-slate-900">Architecture:</strong> {featuredCaseStudy.architecture}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredCaseStudy.technologies.map((tech) => (
                    <span key={tech} className="text-[11px] font-semibold text-slate-700 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(featuredCaseStudy)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all"
                >
                  <span>Explore Full Specifications & Modules</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. Interactive Filter Bar & Section Header                    */}
        {/* ============================================================== */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
              <Layers size={13} className="text-blue-600" />
              <span>Full Portfolio Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
              Systems, Applications & Research
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border whitespace-nowrap min-h-[38px]
                  ${activeCategory === category
                    ? 'text-white bg-blue-600 border-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 hover:border-slate-300 shadow-2xs'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. Responsive Projects Grid                                   */}
        {/* ============================================================== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-full cursor-pointer"
              >
                <div className="h-full bg-white border border-slate-200 hover:border-blue-400 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col shadow-xs hover:shadow-md">
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 shadow-xs">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-semibold text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-50">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      <span>View Case Study Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 4. Accessible Project Detail Modal                             */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[88vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden shrink-0 bg-slate-100">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/95 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-full transition-all shadow-md"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 bg-white/95 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-200 shadow-xs">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Business Problem:</strong>
                    <p className="leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold mb-1">Sayed&apos;s Contribution:</strong>
                    <p className="leading-relaxed">{selectedProject.role}</p>
                  </div>
                </div>

                {selectedProject.architecture && (
                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                    <strong className="block text-blue-900 font-bold mb-1 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-blue-600" />
                      Architecture & Security Implementation:
                    </strong>
                    <p className="leading-relaxed">{selectedProject.architecture}</p>
                  </div>
                )}

                {selectedProject.modules && selectedProject.modules.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-blue-600" /> Key Features & System Modules
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedProject.modules.map((mod) => (
                        <div key={mod} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="truncate">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.link && (
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink size={14} />
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
