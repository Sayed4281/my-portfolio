import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Users, Award, Building, Search } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const professionalExperience = [
    {
      title: 'Jr. Frontend Developer',
      company: 'Pro26',
      location: 'Manjeri',
      period: '2025 - Present',
      type: 'Professional',
      description: [
        'Currently working as Jr. Frontend Developer specializing in Flutter mobile development',
        'Developing cross-platform mobile applications using Flutter and Dart',
        'Implementing responsive UI designs with Flutter widgets and custom animations',
        'Collaborating with senior developers and design teams to implement pixel-perfect mobile interfaces',
        'Contributing to code reviews and maintaining high code quality standards in Flutter projects',
        'Working on enterprise-level mobile applications with focus on performance optimization',
        'Participating in agile development processes and sprint planning sessions'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'State Management', 'Git', 'Agile'],
      icon: Building,
      gradient: 'from-blue-400 to-indigo-500',
      status: 'Current Position'
    },
    {
      title: 'SEO Analyst',
      company: 'Hirush Global',
      location: 'Perinthalmanna',
      period: '2025 - Present',
      type: 'Professional',
      description: [
        'Conducting comprehensive SEO audits and implementing optimization strategies',
        'Performing keyword research and competitive analysis for client websites',
        'Optimizing website content and technical SEO elements for better search rankings',
        'Creating detailed SEO reports and analytics for client performance tracking',
        'Implementing on-page and off-page SEO techniques to improve organic visibility',
        'Collaborating with content and development teams for SEO-friendly implementations'
      ],
      technologies: ['SEO Tools', 'Google Analytics', 'Search Console', 'Keyword Research', 'Content Optimization', 'Technical SEO'],
      icon: Search,
      gradient: 'from-purple-400 to-pink-500',
      status: 'Current Position'
    }
  ];

  const volunteerExperience = [
    {
      title: 'NSS Dream House Project Coordinator',
      company: 'National Service Scheme (NSS)',
      location: 'Community Development Initiative',
      period: '2023 - 2025',
      type: 'Volunteer',
      description: [
        'Leading and coordinating the NSS Dream House community development project',
        'Successfully completed 5 houses during the coordination and leadership tenure',
        'Developing mobile applications to support underprivileged families and housing initiatives',
        'Creating digital solutions for project management and volunteer coordination',
        'Implementing donation tracking systems and transparent fund management platforms',
        'Training local volunteers in basic technology skills and digital literacy',
        'Collaborating with NGOs and community leaders to identify technology needs',
        'Making significant impact in community development through technology integration'
      ],
      technologies: ['Flutter', 'Community Outreach', 'Project Management', 'Leadership', 'Coordination', 'Digital Literacy'],
      icon: Users,
      gradient: 'from-emerald-400 to-cyan-500',
      status: 'High Impact Project'
    },
    {
      title: 'TACS Assistant Coordinator',
      company: 'Technical Activities & Community Service',
      location: 'Technical Leadership',
      period: '2023 - 2025',
      type: 'Volunteer',
      description: [
        'Serving as Assistant Coordinator for Technical Activities & Community Service (TACS)',
        'Organizing and coordinating technical workshops and coding bootcamps',
        'Leading mentorship programs for junior students in programming and software development',
        'Managing community service projects through technology solutions',
        'Coordinating technical events, hackathons, and coding competitions',
        'Promoting digital literacy and technical education in local communities',
        'Building partnerships with educational institutions and tech organizations',
        'Developing curriculum and training materials for technical workshops'
      ],
      technologies: ['Technical Leadership', 'Workshop Organization', 'Community Service', 'Event Management', 'Mentoring'],
      icon: Users,
      gradient: 'from-cyan-400 to-teal-500',
      status: 'Leadership Role'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-950/30 via-slate-900 to-purple-950/20 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
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
              Professional Experience
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 200 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Professional journey spanning Flutter development, SEO analysis, and impactful community service initiatives.
          </motion.p>
        </motion.div>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </motion.h3>

          <div className="max-w-6xl mx-auto space-y-8">
            {professionalExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < professionalExperience.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-40 bg-gradient-to-b from-blue-400 to-transparent hidden md:block"></div>
                )}
                
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-10 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-slate-900 hidden md:block flex items-center justify-center`}>
                  <exp.icon size={12} className="text-white" />
                </div>
                
                <motion.div 
                  className="md:ml-20 bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  {/* Background Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <motion.h4 
                          className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h4>
                        <h5 className="text-xl text-cyan-400 font-semibold mb-2">
                          {exp.company}
                        </h5>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300">
                          {exp.status}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-300 flex items-start leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <span className="text-blue-400 mr-3 mt-2 text-lg">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + 0.9 + i * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                          }}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Experience Section */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Volunteer Experience
            </span>
          </motion.h3>

          <div className="max-w-6xl mx-auto space-y-8">
            {volunteerExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < volunteerExperience.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-40 bg-gradient-to-b from-emerald-400 to-transparent hidden md:block"></div>
                )}
                
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-10 w-6 h-6 bg-gradient-to-r ${exp.gradient} rounded-full border-4 border-slate-900 hidden md:block flex items-center justify-center`}>
                  <exp.icon size={12} className="text-white" />
                </div>
                
                <motion.div 
                  className="md:ml-20 bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
                  }}
                >
                  {/* Background Animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <motion.h4 
                          className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {exp.title}
                        </motion.h4>
                        <h5 className="text-xl text-cyan-400 font-semibold mb-2">
                          {exp.company}
                        </h5>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exp.status === 'High Impact Project' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-cyan-500/20 text-cyan-300'
                        }`}>
                          {exp.status}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-300 flex items-start leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index + 2) * 0.2 + i * 0.1 }}
                        >
                          <span className="text-emerald-400 mr-3 mt-2 text-lg">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: (index + 2) * 0.2 + 0.9 + i * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)"
                          }}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-emerald-500/30 hover:border-cyan-400/50 transition-all duration-300`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;