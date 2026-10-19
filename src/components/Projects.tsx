'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Layers, X, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface Project {
  title: string;
  watermark: string;
  category: 'Enterprise Systems' | 'Web Applications' | 'Mobile Applications' | 'AI & Research';
  status: string;
  summary: string;
  problem: string;
  role: string;
  architecture?: string;
  image: string;
  technologies: string[];
  modules: string[];
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
      title: 'Hirush ERP — Enterprise Resource Planning',
      watermark: 'HIRUSH ERP',
      category: 'Enterprise Systems',
      status: 'Flagship Enterprise Product',
      summary: 'Comprehensive, modular Enterprise Resource Planning solution engineered to streamline organizational operations across multi-tenant corporate hierarchies.',
      problem: 'Organizations struggle with disconnected tools for employee tracking, multi-tier payroll calculation, shift scheduling, client leads, and accounting ledgers.',
      role: 'Technical Lead & Developer — Led system planning, architecture design, module development, sprint backlogs, team task distribution, client discovery, and final UAT sign-off.',
      architecture: 'Modular multi-tenant architecture with PostgreSQL relational schemas, Prisma ORM, Next.js 15 App Router, Node.js REST services, and strict Role-Based Access Control (RBAC).',
      image: '/hirush-erp-dashboard.jpg',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT RBAC', 'Zustand'],
      modules: [
        'HRMS & Staff Management',
        'Automated Payroll Engine',
        'Attendance & Shift Tracking',
        'CRM & Client Pipelines',
        'Financial Ledger & Invoicing',
        'Role-Based Access (RBAC)',
        'Sprint & Project Milestones',
        'Executive Analytics & Reports',
      ],
      isFeatured: true,
    },
    {
      title: 'NeuVitX — AI Health Monitoring & Diagnostics',
      watermark: 'NEUVITX AI',
      category: 'AI & Research',
      status: 'ICETI4T 2025 Research Publication',
      summary: 'Biometric healthcare architecture integrating IoT wearable sensors with mobile telemetry for real-time vitals monitoring and anomaly detection, presented internationally.',
      problem: 'Early detection of cardiovascular and respiratory anomalies requires accessible, low-latency biometric monitoring outside hospital environments.',
      role: 'Research Co-Author & Technical Developer — Integrated hardware sensor communication, engineered mobile telemetry dashboards in Flutter, and co-authored conference paper.',
      architecture: 'Hardware sensor array connected via Bluetooth Low Energy (BLE) to a cross-platform mobile client with Firebase cloud persistence and algorithmic alert pipelines.',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Python', 'Firebase', 'IoT Telemetry', 'Biometric Sensors', 'TensorFlow Lite', 'Research Paper'],
      modules: [
        'Real-time Pulse Monitoring',
        'Oxygen Saturation (SpO2)',
        'ECG Telemetry Live Sync',
        'Emergency Anomaly Triggers',
        'Doctor Telemetry Portal',
        'ICETI4T Conference Publication',
      ],
      isFeatured: true,
    },
    {
      title: 'Attendance Management System (PWA)',
      watermark: 'ATTENDANCE',
      category: 'Enterprise Systems',
      status: 'Deployed Production System',
      summary: 'Dual-module Progressive Web Application with GPS-based geo-fencing check-in, shift management, real-time leave approvals, and exportable monthly payroll logs.',
      problem: 'Field and remote staff attendance tracking suffered from manual logging errors and lack of verifiable location check-ins.',
      role: 'Full-Stack Lead — Architected the GPS geo-fencing perimeter validation, offline-first PWA caching, and supervisor approval workflow.',
      architecture: 'Offline-first PWA with Service Workers, browser geolocation API with perimeter radius calculation, and real-time backend synchronization.',
      image: '/hrms-payroll-dashboard.jpg',
      technologies: ['React.js', 'Node.js', 'Firebase', 'PWA', 'GPS Geofencing', 'Service Workers'],
      modules: [
        'Geo-fencing Radius Check',
        'Shift Scheduling Matrix',
        'Leave Request & Approval Flow',
        'Monthly Payroll Data Export',
        'Offline-First Check-in Cache',
        'Supervisor Verification Portal',
      ],
    },
    {
      title: 'Resort & Hostel Booking Management System',
      watermark: 'HOSPITALITY',
      category: 'Enterprise Systems',
      status: 'Completed Enterprise Solution',
      summary: 'Comprehensive hospitality booking portal with real-time room availability calendar, guest KYC gathering, multi-tier staff permissions, and automated invoice PDF generation.',
      problem: 'Resort operations experienced double-booking conflicts during seasonal peaks and inefficient paper-based check-in ledgers.',
      role: 'Full-Stack Developer — Built the interactive booking calendar grid, user permission roles, and invoice generation service.',
      architecture: 'Relational database schema enforcing row-level locking for room reservations during concurrent checkout sessions.',
      image: '/resort-hms-dashboard.jpg',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay API'],
      modules: [
        'Interactive Booking Calendar',
        'Room Inventory Grid',
        'Guest CRM & KYC Gathering',
        'Financial Ledger & Folio',
        'Automated PDF Invoices',
        'Payment Gateway Checkout',
      ],
    },
    {
      title: 'Restaurant Kitchen Order Flow System',
      watermark: 'KITCHEN POS',
      category: 'Enterprise Systems',
      status: 'Completed Solution',
      summary: 'Real-time order management application streamlining kitchen workflows, table status mapping, split bill generation, and inventory synchronization.',
      problem: 'Kitchen staff and waitstaff communication delays caused inaccurate order tracking during rush hours.',
      role: 'Frontend & WebSocket Developer — Implemented Kitchen Display System (KDS) live sync and interactive table layout maps.',
      architecture: 'Event-driven WebSocket architecture broadcasting table state updates instantaneously across POS and kitchen displays.',
      image: '/restaurant-pos-kds.jpg',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux Toolkit', 'WebSockets'],
      modules: [
        'Live Table Color Map',
        'KDS Kitchen Display Tickets',
        'Split Bill Calculations',
        'Inventory Depletion Alerts',
        'WebSocket Instant Broadcasts',
        'POS Cashier Synchronization',
      ],
    },
    {
      title: 'SEO Strategist Digital Portal',
      watermark: 'SEO PORTAL',
      category: 'Web Applications',
      status: 'Live Production Web App',
      summary: 'High-performance personal brand portal engineered for search engine indexability, achieving 98+ Google Lighthouse scores with rich schema markup.',
      problem: 'Digital portfolio required exceptional Core Web Vitals performance, automated social preview cards, and comprehensive schema taxonomy.',
      role: 'Frontend Engineer & SEO Specialist — Implemented technical SEO architecture, structured data JSON-LD, and responsive design.',
      architecture: 'Static site generation with pre-rendered semantic HTML, optimized WebP imagery, and schema.org microdata.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite', 'Schema JSON-LD'],
      modules: [
        '98+ Google Lighthouse Score',
        'Schema.org JSON-LD Taxonomy',
        'Automated OpenGraph Cards',
        'Core Web Vitals Optimization',
        'Pre-rendered Semantic HTML',
        'Ultra-Fast CDN Delivery',
      ],
      link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Visual Specialist Portfolio',
      watermark: 'CREATIVE',
      category: 'Web Applications',
      status: 'Live Production Web App',
      summary: 'Multimedia showcase for a video creator incorporating fluid interaction design, custom video modal lightbox, and smooth layout transitions.',
      problem: 'Traditional portfolio templates struggled to showcase high-resolution video reels without dragging down page performance.',
      role: 'Frontend Developer — Designed responsive component hierarchy and optimized asset loading pipelines.',
      architecture: 'Lazy-loaded video players with progressive poster frame pre-fetching and Framer Motion layout transitions.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP Animation'],
      modules: [
        'Fluid Interaction Design',
        'Custom Video Lightbox Modal',
        'Framer Motion Transitions',
        'Lazy-loaded Video Pipelines',
        'High-Res Asset Pre-fetching',
        'Ultra-Responsive Layouts',
      ],
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
    {
      title: 'ShopSmart Personal Analytics App',
      watermark: 'SHOPSMART',
      category: 'Mobile Applications',
      status: 'Completed Mobile Application',
      summary: 'Cross-platform mobile expense tracking app with intelligent budget forecasting, categorized spending breakdowns, and recurring bill notifications.',
      problem: 'Users required a clear, distraction-free tool to log daily expenditures and visualize monthly category trends on mobile.',
      role: 'Mobile App Developer — Built cross-platform UI screens in Flutter and integrated real-time cloud persistence.',
      architecture: 'BLoC state management pattern in Flutter paired with cloud storage and local encrypted caching.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Data Visualization'],
      modules: [
        'Real-time Expense Logging',
        'Budget Category Forecasting',
        'Monthly Spending Trends',
        'Recurring Bill Reminders',
        'BLoC State Architecture',
        'Encrypted Local Storage',
      ],
    },
    {
      title: 'Smart EMI & Financial Calculator',
      watermark: 'CALCULATOR',
      category: 'Web Applications',
      status: 'Live Web Utility',
      summary: 'Responsive financial planning tool featuring dynamic loan amortization schedules, interactive interest vs principal pie charts, and PDF summary exports.',
      problem: 'Loan applicants needed an instant, accurate way to model interest rate variations and download complete repayment schedules.',
      role: 'Developer — Formulated financial math calculation algorithms, dynamic SVG chart rendering, and client-side PDF compilation.',
      architecture: 'Pure client-side mathematical algorithms with zero server dependencies for sub-millisecond calculation response times.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'jsPDF'],
      modules: [
        'Dynamic Amortization Engine',
        'Interest vs Principal Breakdown',
        'Interactive Chart.js Visuals',
        'Exportable PDF Summary',
        'Sub-millisecond Math Logic',
        'Zero Server Dependency',
      ],
      link: 'https://smart-emi-calculator-theta.vercel.app/',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* ============================================================== */}
        {/* Filter Navigation Bar                                          */}
        {/* ============================================================== */}
        <div className="mb-14 sm:mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
              <Layers size={13} className="text-blue-600" />
              <span>Full Portfolio Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display tracking-tight">
              Production Systems &amp; Engineering Case Studies
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border whitespace-nowrap min-h-[38px]
                  ${activeCategory === category
                    ? 'text-white bg-[#0284C7] border-[#0284C7] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 hover:border-slate-300 shadow-2xs'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Horizontal Project Showcase Rows (Matching Reference Dubai)    */}
        {/* ============================================================== */}
        <div className="space-y-20 sm:space-y-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Expansive Visual Card (Matching Reference Dubai Image) */}
                  <div className="lg:col-span-6 relative">
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-lg shadow-slate-200/60 cursor-pointer group/img"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                      />
                      
                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                      {/* Status Tag on Top-Left */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200/80 shadow-sm backdrop-blur-md">
                          {project.status}
                        </span>
                      </div>

                      {/* Category Tag on Top-Right */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900/90 text-white shadow-sm backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Watermark, Title, Narrative & Feature Box (Matching Reference) */}
                  <div className="lg:col-span-6 relative flex flex-col justify-center">
                    
                    {/* Faint Watermark Text Behind Title (Matching Reference DUBAI Watermark) */}
                    <div className="relative">
                      <span className="text-4xl sm:text-6xl font-black text-slate-100 uppercase tracking-wider select-none pointer-events-none -mb-5 sm:-mb-7 block font-display">
                        {project.watermark}
                      </span>

                      {/* Blue Project Title (Matching Reference "Dubai" Blue Header) */}
                      <h3 
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0284C7] font-display tracking-tight hover:text-[#0369A1] transition-colors cursor-pointer relative z-10"
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Narrative Subtitle (Matching Reference Text) */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 mb-5 font-normal">
                      <span className="font-semibold text-slate-800">Architected with Sayed Shahloob P.</span> {project.summary}
                    </p>

                    {/* Feature Card Box (Matching Reference "MUST-VISIT SPOTS" Box) */}
                    <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      {/* Header with Amber Bullet Dot */}
                      <div className="flex items-center gap-2 mb-3.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-800 font-display">
                          Key Deliverables &amp; Architecture
                        </span>
                      </div>

                      {/* 2-Column List with Amber Bullets (Matching Dubai Box Layout) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-[13px] text-slate-700">
                        {project.modules.map((mod) => (
                          <div key={mod} className="flex items-center gap-2">
                            <span className="text-amber-500 font-bold text-sm shrink-0">•</span>
                            <span className="font-medium text-slate-700">{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons & Tech Pills */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-1">
                      {/* Technical Specs Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95"
                      >
                        <span>Explore Technical Specifications</span>
                        <ArrowRight size={13} />
                      </button>

                      {/* External Link if Live */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0284C7] transition-colors"
                        >
                          <span>Live Platform</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* ============================================================== */}
      {/* Accessible Technical Specification Modal                     */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm overflow-y-auto"
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
                  <span className="px-3 py-1 bg-[#0284C7] text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {selectedProject.status}
                  </span>
                  <span className="px-3 py-1 bg-white/95 text-slate-800 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-200 shadow-xs">
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
                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-xs text-slate-700">
                    <strong className="block text-sky-900 font-bold mb-1 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#0284C7]" />
                      Architecture &amp; Security Implementation:
                    </strong>
                    <p className="leading-relaxed">{selectedProject.architecture}</p>
                  </div>
                )}

                {selectedProject.modules && selectedProject.modules.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0284C7]" /> Key Features &amp; System Modules
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {selectedProject.modules.map((mod) => (
                        <div key={mod} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
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
                      className="px-6 py-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
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

