import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  modules?: string[];
  status: string;
  category: string;
  link?: string;
  isFeatured?: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, { project: Project, index: number }>(({ project, index }, ref) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`group relative h-full ${project.isFeatured ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div 
        ref={cardRef} 
        className={`relative h-full border rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden transition-all duration-700 flex flex-col ${
          project.isFeatured 
            ? 'bg-gradient-to-b from-blue-600/20 via-[#172033] to-[#172033] border-blue-500/40 hover:border-blue-400/60 shadow-2xl shadow-blue-500/10' 
            : 'bg-[#172033] border-[#263449] hover:border-blue-500/40'
        }`}
      >
        {/* Featured Layout vs Normal Card */}
        <div className={`${project.isFeatured ? 'grid lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8' : 'flex flex-col h-full'}`}>

          {/* Image Container */}
          <div className={`relative overflow-hidden rounded-2xl ${project.isFeatured ? 'lg:col-span-6 h-60 sm:h-72 lg:h-96' : 'h-52 sm:h-64'}`}>
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ scale: 1.15, y }}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172033] via-transparent to-transparent opacity-80" />

            {/* Status Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
              <span className={`
                inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest border backdrop-blur-md
                ${project.isFeatured 
                  ? 'bg-blue-500/20 text-cyan-300 border-cyan-500/30' 
                  : 'bg-[#0B1220]/80 text-[#F8FAFC] border-[#263449]'}
              `}>
                {project.status}
              </span>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
              <span className="px-2.5 sm:px-3 py-1 bg-[#0B1220]/80 backdrop-blur-md border border-[#263449] rounded-full text-[9px] sm:text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`${project.isFeatured ? 'lg:col-span-6 flex flex-col justify-between' : 'p-6 sm:p-8 flex flex-col flex-1'}`}>
            <div>
              {project.isFeatured && (
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest text-cyan-400 mb-2 sm:mb-3">
                  <Layers size={14} className="sm:size-[16px]" />
                  Flagship Enterprise Platform (#1 Showcase)
                </div>
              )}

              <h3 className={`${project.isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'} font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors font-display`}>
                {project.title}
              </h3>

              <p className="text-[#94A3B8] text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* ERP Module Badges if present */}
              {project.modules && project.modules.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest block mb-2">Integrated Modules:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.modules.map((mod) => (
                      <span
                        key={mod}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-black text-cyan-300 bg-blue-500/10 border border-blue-500/20 rounded-md uppercase tracking-tight"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold text-[#94A3B8] bg-[#0B1220]/60 border border-[#263449] rounded-full uppercase tracking-tight"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 sm:pt-6 border-t border-[#263449] flex items-center justify-between">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-cyan-400 hover:text-white transition-colors group/link uppercase tracking-wider"
                >
                  Explore Platform 
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              ) : (
                <span className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Production System</span>
              )}
              
              <div className="p-2 sm:p-2.5 bg-blue-500/10 rounded-full border border-blue-500/20 text-cyan-300 group-hover:text-white group-hover:bg-blue-600 transition-all">
                <ArrowRight size={16} className="sm:size-[18px] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Enterprise ERP & Systems', 'Web Applications', 'Mobile Apps', 'AI & Research'];

  const projects: Project[] = [
    {
      title: 'Hirush ERP — Enterprise Resource Planning System',
      description: 'Comprehensive, modular Enterprise Resource Planning solution engineered for modern business operations. Led and contributed to the planning, development, testing, and implementation of HRMS, CRM, Finance, Payroll, Attendance, Project Management, Reporting, and RBAC security.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Zustand', 'REST APIs'],
      modules: ['HRMS', 'CRM', 'Finance', 'Payroll', 'Attendance', 'Project Management', 'Reporting', 'RBAC'],
      status: 'Core Enterprise Product',
      category: 'Enterprise ERP & Systems',
      isFeatured: true
    },
    {
      title: 'Resort & Hostel Booking Management System',
      description: 'Comprehensive hospitality management system with real-time room availability calendar, guest information gathering, multi-tier user role permissions, financial ledger tracking, and automated payment gateway processing.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      modules: ['Booking Engine', 'Calendar Availability', 'Guest CRM', 'Financials', 'User Management', 'Payments'],
      status: 'Completed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'Attendance Management System (PWA)',
      description: 'Dual-module Progressive Web Application with GPS-based geo-fencing check-in, shift management, real-time leave approvals, and automated reporting.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Firebase', 'PWA', 'GPS API'],
      status: 'Deployed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'Restaurant Order Flow System',
      description: 'Real-time order management application streamlining kitchen workflows, table management, bill generation, and inventory synchronization.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux'],
      status: 'Completed',
      category: 'Enterprise ERP & Systems',
    },
    {
      title: 'NeuVitX - Health AI System',
      description: 'Hardware-software AI system presented at ICETI4T 2025 international conference for real-time vitals monitoring and algorithmic diagnostics.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'IoT Hardware', 'Firebase', 'AI/ML'],
      status: 'Published Research',
      category: 'AI & Research',
    },
    {
      title: 'SEO Strategist Portal',
      description: 'Optimized digital portal built with advanced schema markup, Core Web Vitals optimizations, and automated metadata rendering.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Vite'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Visual Specialist Portfolio',
      description: 'Immersive portfolio for a multimedia specialist showcasing video and 3D assets with fluid motion graphics and interaction design.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
    {
      title: 'ShopSmart Analytics App',
      description: 'Mobile expense tracking application with intelligent budget forecasting, categorized spending breakdown, and receipt processing.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Machine Learning'],
      status: 'Completed',
      category: 'Mobile Apps',
    },
    {
      title: 'Smart EMI & Financial Calculator',
      description: 'Responsive financial calculator app featuring dynamic amortization schedules, interactive interest split charts, and PDF summary exports.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      status: 'Completed',
      category: 'Web Applications',
      link: 'https://smart-emi-calculator-theta.vercel.app/',
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden bg-[#0E1726]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
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

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all duration-500 border
                  ${activeCategory === category
                    ? 'text-white bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/25'
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="https://github.com/Sayed4281"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#172033] border border-[#263449] rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 shadow-lg"
          >
            <Github size={18} />
            Explore Repositories on GitHub
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
