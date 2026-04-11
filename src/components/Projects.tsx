import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: string;
  category: string;
  link?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, { project: Project, index: number }>(({ project, index }, ref) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div ref={cardRef} className="relative h-full bg-[#0a0a0a] border border-white/[0.06] rounded-[2rem] overflow-hidden hover:border-white/30 transition-all duration-700 flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ scale: 1.2, y }}
            className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md
              ${project.status === 'Published Research'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                : 'bg-white/10 text-white border-white/20'}
            `}>
              {project.status}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white/50 font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1 relative">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300 font-display">
            {project.title}
          </h3>
          <p className="text-neutral-500 text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-bold text-neutral-400 bg-white/[0.03] border border-white/[0.06] rounded-full uppercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/[0.04] flex items-center justify-between">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-colors group/link"
              >
                Live Demo 
                <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            ) : (
              <span className="text-xs text-neutral-600 font-medium italic">Internal Project</span>
            )}
            
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="p-2 bg-white/5 rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <ArrowRight size={18} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Enterprise Solutions', 'AI & Research'];

  const projects = [
    {
      title: 'Attendance Management System',
      description: 'Comprehensive PWA (Progressive Web App) for attendance management with dual-module architecture. Features location-based check-in, real-time tracking, and leave management.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Firebase', 'GPS API'],
      status: 'Completed',
      category: 'Enterprise Solutions',
    },
    {
      title: 'Restaurant Order Flow',
      description: 'Modern web-based application designed to streamline restaurant operations. Built using React, TypeScript, and Firebase for real-time order processing.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Redux'],
      status: 'Completed',
      category: 'Enterprise Solutions',
    },
    {
      title: 'NeuVitX - Health AI',
      description: 'Integrated hardware-software system presented at ICETI4T 2025. Features custom hardware for monitoring glucose and vitals with AI analysis.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'IoT Hardware', 'Firebase', 'AI/ML'],
      status: 'Published Research',
      category: 'AI & Research',
    },
    {
        title: 'SEO Strategist Portal',
        description: 'High-performance portfolio website designed for an SEO specialist. Features advanced schema markup and optimized core web vitals.',
        image: '/haron.png',
        technologies: ['React.js', 'Tailwind CSS', 'SEO', 'Vite'],
        status: 'Completed',
        category: 'Web Development',
        link: 'https://haronsaeed.vercel.app/',
    },
    {
      title: 'Visual Specialist Portfolio',
      description: 'Immersive portfolio for a multimedia specialist showcasing video and 3D assets with a focus on visual storytelling.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Tailwind', 'GSAP'],
      status: 'Completed',
      category: 'Web Development',
      link: 'https://muhammed-dilshad-p.vercel.app/',
    },
    {
      title: 'ShopSmart Analytics',
      description: 'Comprehensive expense tracking application with advanced budget forecasting and intelligent categorization.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Machine Learning'],
      status: 'Completed',
      category: 'Mobile Apps',
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-[#000000]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-2 text-white/50 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              <Sparkles size={14} />
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight">
              Selected Showcase
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
                  px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border
                  ${activeCategory === category
                    ? 'text-black bg-white border-white'
                    : 'text-neutral-500 hover:text-white bg-white/5 border-white/10 hover:border-white/20'}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://github.com/Sayed4281"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-white/[0.02] border border-white/[0.08] rounded-full text-white text-sm font-bold hover:bg-white hover:border-white hover:text-black transition-all duration-500"
          >
            <Github size={20} />
            SEE ALL PROJECTS
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
