import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Enterprise Solutions', 'AI & Research'];

  const projects = [
    {
      title: 'Attendance Management System',
      description: 'Comprehensive PWA (Progressive Web App) for attendance management with dual-module architecture. Features location-based check-in, real-time tracking, and leave management.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'PWA', 'Firebase', 'GPS API'],
      status: 'Completed',
      category: 'Enterprise Solutions',
    },
    {
      title: 'Restaurant Management System',
      description: 'Modern web-based application designed to streamline restaurant operations. Built using React, TypeScript, and Firebase for order processing, menu updates, and table management.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
      status: 'Completed',
      category: 'Enterprise Solutions',
    },
    {
      title: 'Enterprise CRM System',
      description: 'Advanced Customer Relationship Management software built with React and Node.js. Features data management, sales pipeline tracking, and real-time analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
      status: 'Completed',
      category: 'Enterprise Solutions',
    },
    {
      title: 'NeuVitX - Health Monitoring',
      description: 'Integrated hardware-software system presented at ICETI4T 2025. Features custom hardware for monitoring glucose and vitals, connected to a Flutter app for real-time analysis.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'IoT Hardware', 'Firebase', 'Sensors'],
      status: 'Published Research',
      category: 'AI & Research',
    },
    {
      title: 'ShopSmart - Expense Tracker',
      description: 'Comprehensive expense tracking application with advanced budget forecasting, intelligent categorization, and spending analytics.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Machine Learning', 'Charts'],
      status: 'Completed',
      category: 'Mobile Apps',
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive system built with Flutter and SQL database. Features student records, attendance tracking, and grade management.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'SQL Database', 'QR Code', 'PDF Generation'],
      status: 'Completed',
      category: 'Mobile Apps',
    },
    {
      title: 'SEO Strategist Portfolio',
      description: 'High-performance portfolio website designed for an SEO specialist. Features advanced schema markup, optimized core web vitals, and content-rich structure for maximum search visibility.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'Technical SEO', 'Schema Markup'],
      status: 'Completed',
      category: 'Web Development',
      link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Multimedia Visual Specialist',
      description: 'Immersive portfolio for a multimedia specialist showcasing video, 3D assets, and high-resolution imagery with a focus on visual storytelling and interactive performance. This includes dynamic data and content management system features.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
      status: 'Completed',
      category: 'Web Development',
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A collection of projects that demonstrate my passion for building innovative scheduling, management, and research solutions.
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 mb-12 pb-4 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                whitespace-nowrap flex-shrink-0 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 relative overflow-hidden group
                ${activeCategory === category
                  ? 'text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600'}
              `}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transition-opacity duration-300 ${activeCategory === category ? 'opacity-100' : 'opacity-0'}`} />
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

                <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border
                        ${project.status === 'Published Research'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'}
                      `}>
                        {project.status}
                      </span>
                    </div>

                    {/* External Link Overlay */}
                    <div className={`absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredProject === project.title ? 'opacity-100' : ''}`}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-6 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:scale-105"
                      >
                        View Project <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/20 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 border border-slate-700 rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Sayed4281"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all hover:scale-105 border border-slate-700"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
