import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Database, Users, Heart, DollarSign, Cloud } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const projects = [
    {
      title: 'Enterprise CRM Management System',
      description: 'Currently developing a comprehensive Customer Relationship Management system. This full-stack solution features advanced customer data management, sales pipeline tracking, automated reporting, and real-time analytics with role-based access control.',
      detailedFeatures: [
        'Advanced customer data management with 360-degree customer view',
        'Interactive sales pipeline with drag-and-drop functionality',
        'Automated email campaigns and follow-up scheduling',
        'Real-time analytics dashboard with customizable KPI tracking',
        'Role-based access control for different organizational levels',
        'Multi-tenant architecture supporting multiple organizations',
        'Advanced reporting with data visualization and export capabilities',
        'Integration with popular CRM tools and email services'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'REST APIs', 'Real-time DB'],
      type: 'Enterprise Application',
      icon: Database,
      gradient: 'from-emerald-400 to-cyan-500',
      status: 'In Development',
      links: {
        github: 'https://github.com/Sayed4281/CRMPRO26',
        live: '#'
      }
    },
    {
      title: 'NeuVitX - Health Monitoring App',
      description: 'Revolutionary healthcare monitoring system presented at ICETI4T 2025. This research project combines IoT sensors, real-time data processing, and automated alerts to monitor intravenous glucose infusion and vital signs, significantly improving patient safety and care quality in medical facilities.',
      detailedFeatures: [
        'Real-time glucose infusion monitoring with precision IoT sensors',
        'Automated vital signs tracking (heart rate, blood pressure, temperature)',
        'Intelligent alert system for medical emergencies and anomalies',
        'Flutter mobile app for healthcare professionals with real-time notifications',
        'Firebase backend for secure data storage and real-time synchronization',
        'Machine learning algorithms for predictive health analytics',
        'HIPAA-compliant data security and patient privacy protection',
        'Integration with existing hospital management systems'
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'IoT', 'Machine Learning', 'Healthcare APIs', 'Real-time Analytics'],
      type: 'Research Project',
      icon: Heart,
      gradient: 'from-red-400 to-pink-500',
      status: 'Published Research',
      links: {
        github: 'https://github.com/Sayed4281/NEUVITX_AUTOMATIC-GLUCOSE-AND-VITAL-SIGN-MONITORING-SYSTEM',
        live: '#'
      }
    },
    {
      title: 'ShopSmart - Expense Tracker',
      description: 'Comprehensive expense tracking application with advanced budget forecasting capabilities. Features intelligent categorization, spending analytics, and predictive budgeting to help users manage their finances effectively.',
      detailedFeatures: [
        'Intelligent expense categorization with machine learning',
        'Advanced budget forecasting and spending predictions',
        'Real-time expense tracking with receipt scanning',
        'Comprehensive financial analytics and reporting',
        'Goal setting and savings tracking features',
        'Multi-currency support for international users',
        'Secure data encryption and privacy protection',
        'Export capabilities for tax and accounting purposes'
      ],
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Machine Learning', 'Charts', 'Local Storage', 'Camera API'],
      type: 'Mobile Application',
      icon: DollarSign,
      gradient: 'from-green-400 to-emerald-500',
      status: 'Completed',
      links: {
        github: 'https://github.com/Sayed4281/ShopSmart-An-Intelligent-Expense-Reduction-App-for-Household-Budget',
        live: '#'
      }
    },
    {
      title: 'WeatherNow - 5-Day Forecast App',
      description: 'Advanced weather application providing accurate 5-day forecasts with beautiful UI and comprehensive weather data. Features location-based weather, severe weather alerts, and detailed meteorological information.',
      detailedFeatures: [
        'Accurate 5-day weather forecasting with hourly breakdowns',
        'Location-based weather detection with GPS integration',
        'Severe weather alerts and notifications',
        'Beautiful animated weather icons and backgrounds',
        'Detailed meteorological data (humidity, pressure, wind speed)',
        'Multiple location support with favorites',
        'Offline caching for previously viewed locations',
        'Weather maps and radar integration'
      ],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Weather API', 'GPS', 'Local Storage', 'Animations', 'Maps Integration'],
      type: 'Mobile Application',
      icon: Cloud,
      gradient: 'from-blue-400 to-indigo-500',
      status: 'Completed',
      links: {
        github: 'https://github.com/Sayed4281/weather_app',
        live: '#'
      }
    },
    {
      title: 'Student Management System',
      description: 'Comprehensive student management system built with Flutter and SQL database. Features student records management, attendance tracking, grade management, and parent-teacher communication portal.',
      detailedFeatures: [
        'Complete student records management with photo uploads',
        'Attendance tracking with QR code scanning',
        'Grade management and report card generation',
        'Parent-teacher communication portal with messaging',
        'Timetable management and class scheduling',
        'Fee management and payment tracking',
        'Library management with book issuing system',
        'Administrative dashboard with analytics and reports'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'SQL Database', 'QR Code', 'PDF Generation', 'Local Storage', 'Charts'],
      type: 'Management System',
      icon: Users,
      gradient: 'from-purple-400 to-pink-500',
      status: 'Completed',
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-950/30 via-slate-900 to-indigo-950/20 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black mb-6"
            animate={isInView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-300% bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 180 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            From published research in healthcare IoT to practical mobile applications, 
            showcasing expertise in Flutter development and innovative problem-solving.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
              }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-500 group relative"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5`}
                transition={{ duration: 0.3 }}
              />

              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                
                {/* Project Type Badge */}
                <motion.div 
                  className={`absolute top-4 left-4 flex items-center space-x-2 bg-gradient-to-r ${project.gradient} bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <project.icon size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">{project.type}</span>
                </motion.div>

                {/* Status Badge */}
                <motion.div 
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Published Research' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    project.status === 'In Development' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 
                    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  {project.status}
                </motion.div>
                
                {/* Project Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500/50 transition-colors duration-200"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/50 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-500 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.7 }}
                >
                  {project.description}
                </motion.p>

                {/* Detailed Features */}
                <motion.div 
                  className="mb-4 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500"
                >
                  <h4 className="text-emerald-400 font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    {project.detailedFeatures.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.9 + i * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)"
                      }}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-emerald-500/30 hover:border-cyan-400/50 transition-all duration-300`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(16, 185, 129, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Let's Collaborate on Your Next Project
              <ExternalLink size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;