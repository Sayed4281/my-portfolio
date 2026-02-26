import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

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
      description: 'Immersive portfolio for a multimedia specialist showcasing video, 3D assets, and high-resolution imagery with a focus on visual storytelling and interactive performance.',
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
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Featured Work
          </h2>
          <div className="section-line mb-6"></div>
          <p className="text-neutral-500 max-w-2xl text-base">
            A collection of projects that demonstrate my passion for building innovative scheduling, management, and research solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto md:flex-wrap gap-2 mb-12 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
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
                whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'text-black bg-violet-500'
                  : 'text-neutral-500 hover:text-neutral-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1]'}
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-full bg-[#0a0a0a] border border-white/[0.06] rounded-xl overflow-hidden hover:border-violet-500/20 transition-all duration-500 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80" />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`
                        inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-medium border
                        ${project.status === 'Published Research'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-violet-500/10 text-violet-400 border-violet-500/20'}
                      `}>
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    {'link' in project && project.link && (
                      <div className={`absolute inset-0 bg-[#050505]/70 backdrop-blur-[2px] flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredProject === project.title ? 'opacity-100' : ''}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-violet-500 text-black text-sm font-semibold rounded-lg flex items-center gap-2 hover:bg-violet-400 transition-colors duration-300"
                        >
                          View Project <ArrowRight size={16} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-xs mb-5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-medium text-neutral-400 bg-white/[0.03] border border-white/[0.06] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] font-medium text-neutral-500 bg-white/[0.02] border border-white/[0.04] rounded">
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
          className="mt-16"
        >
          <a
            href="https://github.com/Sayed4281"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] text-neutral-400 hover:text-violet-400 rounded-lg text-sm font-medium transition-all duration-300 border border-white/[0.06] hover:border-violet-500/20"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
