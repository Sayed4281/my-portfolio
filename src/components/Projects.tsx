import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Attendance Management System',
      description: 'Comprehensive attendance management system with dual-module architecture for administrators and employees. Features location-based check-in/check-out, real-time tracking, and leave management.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'GPS API', 'JWT Auth'],
      status: 'In Development',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Restaurant Management System',
      description: 'Modern web-based application designed to streamline restaurant operations. Built using React, TypeScript, and Firebase for order processing, menu updates, and table management.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Firestore'],
      status: 'In Development',
      gradient: 'from-cyan-500 to-indigo-500',
    },
    {
      title: 'Enterprise CRM System',
      description: 'Comprehensive Customer Relationship Management system with advanced customer data management, sales pipeline tracking, and real-time analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'REST APIs'],
      status: 'In Development',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'NeuVitX - Health Monitoring',
      description: 'Revolutionary healthcare monitoring system presented at ICETI4T 2025. Combines IoT sensors and real-time data processing for patient safety.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'IoT', 'Machine Learning'],
      status: 'Published Research',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'ShopSmart - Expense Tracker',
      description: 'Comprehensive expense tracking application with advanced budget forecasting, intelligent categorization, and spending analytics.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Machine Learning', 'Charts'],
      status: 'Completed',
      gradient: 'from-cyan-500 to-indigo-500',
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive system built with Flutter and SQL database. Features student records, attendance tracking, and grade management.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'SQL Database', 'QR Code', 'PDF Generation'],
      status: 'Completed',
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

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
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From published research to practical applications, showcasing expertise in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-600/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Published Research' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                  project.status === 'In Development' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View
                  </button>
                  <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <Github size={16} />
                  </button>
                </div>
              </div>
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