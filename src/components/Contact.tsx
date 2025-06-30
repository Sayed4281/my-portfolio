import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Calendar } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sayedshahloobp@gmail.com',
      href: 'mailto:sayedshahloobp@gmail.com',
      gradient: 'from-emerald-400 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9567220971',
      href: 'tel:+919567220971',
      gradient: 'from-cyan-400 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Angadipuram, Perinthalmanna, Malappuram Dt, Kerala, India',
      href: '#',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sayed4281', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sayedshahloobp', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: MessageCircle, href: 'https://wa.me/919567220971', label: 'WhatsApp', color: 'hover:text-green-400' },
  ];

  const projectTypes = [
    'Flutter Mobile App Development',
    'Cross-Platform Mobile Solutions',
    'Frontend Development & Leadership',
    'SEO & Digital Marketing',
    'Enterprise Mobile Applications',
    'E-commerce Mobile Platforms',
    'Educational Technology Apps',
    'Healthcare Technology Solutions',
    'Technical Consultation',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-purple-950/30 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/8 to-cyan-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 30, repeat: Infinity }}
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
              Let's Collaborate
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 160 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            Ready to bring your next project to life? Let's discuss how my expertise in Flutter development, 
            SEO optimization, and technical leadership can drive your success.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-3xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </motion.h3>
              <motion.p 
                className="text-gray-400 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                I'm currently available for exciting opportunities in Flutter development, SEO projects, 
                and technical leadership roles. Whether you need a mobile app, web platform, or innovative 
                technology solution, I'd love to discuss how we can work together.
              </motion.p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') || info.href.startsWith('tel') || info.href.startsWith('mailto') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(16, 185, 129, 0.2)"
                  }}
                  className="flex items-center p-4 bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-xl border border-slate-600/30 hover:border-emerald-400/50 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 flex items-center w-full">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${info.gradient} bg-opacity-20 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="text-emerald-400 group-hover:text-white transition-colors duration-300" size={20} />
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-emerald-400 transition-colors duration-300">{info.title}</h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.3, 
                      y: -8,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 relative overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                      placeholder="Your Full Name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                      placeholder="Your Company Name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 }}
                  >
                    <label htmlFor="project" className="block text-white font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200 resize-none"
                    placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(16, 185, 129, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Send Project Inquiry
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;