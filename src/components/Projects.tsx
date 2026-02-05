import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Enterprise Solutions', 'AI & Research'];

  const projects = [
    {
      title: 'SEO Strategist Portfolio',
      description: 'A comprehensive digital marketing portfolio website featuring SEO optimization strategies, campaign analytics dashboards, and lead generation tools. Designed to showcase marketing expertise and drive client conversions.',
      image: '/haron.png',
      technologies: ['React.js', 'Tailwind CSS', 'SEO', 'Analytics API'],
      status: 'Completed',
      gradient: 'from-blue-600 to-cyan-500',
      category: 'Web Development',
      link: 'https://haronsaeed.vercel.app/'
    },
    {
      title: 'Multimedia Visual Specialist Portfolio',
      description: 'A dynamic portfolio platform featuring advanced video editing showcases and dynamic content management. Designed for multimedia specialists with high-quality playback, gallery grids, and immersive visual storytelling tools.',
      image: '/dilshad.png',
      technologies: ['React.js', 'Framer Motion', 'Video.js', 'UI/UX Design'],
      status: 'Completed',
      gradient: 'from-purple-600 to-pink-500',
      category: 'Web Development',
      link: 'https://muhammed-dilshad-p.vercel.app/'
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            From published research to practical applications, showcasing expertise in full-stack development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-600/50 transition-all duration-300 group h-full flex flex-col"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md shadow-lg border ${project.status === 'Published Research'
                    ? 'bg-yellow-500/10 text-yellow-200 border-yellow-500/50 shadow-yellow-500/20'
                    : 'bg-emerald-500/10 text-emerald-200 border-emerald-500/50 shadow-emerald-500/20'
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white text-xs rounded-full border border-white/20`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300"
          >
            Let's Collaborate on Your Next Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;