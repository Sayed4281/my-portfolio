import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, Smartphone, Search } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950/30 to-purple-950/20 border-t border-slate-800/50 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/15 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Professional Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black mb-4"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                SAYED
              </span>
              <span className="text-white">.</span>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Full Stack Developer, Frontend Lead, and SEO Analyst with expertise in Flutter, React, 
              and modern web technologies. Passionate about creating innovative solutions that drive real-world impact.
            </p>
            
            {/* Professional Achievement Icons */}
            <div className="flex space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-emerald-400"
              >
                <Code size={20} />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-cyan-400"
              >
                <Smartphone size={20} />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-purple-400"
              >
                <Search size={20} />
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">Professional</h3>
            <div className="space-y-3">
              {['About', 'Experience', 'Achievements', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    x: 8,
                    color: "#10b981"
                  }}
                  className="block text-gray-400 hover:text-emerald-400 transition-all duration-300 relative"
                >
                  <span className="relative z-10">{link}</span>
                  <motion.div
                    className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-emerald-400/10 to-transparent"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Professional Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-bold mb-4 text-lg">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <motion.a
                href="mailto:sayedshahloobp@gmail.com"
                whileHover={{ x: 5, color: "#10b981" }}
                className="block transition-all duration-300 cursor-pointer"
              >
                sayedshahloobp@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919567220971"
                whileHover={{ x: 5, color: "#10b981" }}
                className="block transition-all duration-300 cursor-pointer"
              >
                +91 9567220971
              </motion.a>
              <motion.p
                whileHover={{ x: 5, color: "#10b981" }}
                className="transition-all duration-300 cursor-pointer text-sm"
              >
                📍 Angadipuram, Perinthalmanna, Malappuram Dt, Kerala, India
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Professional Bottom Bar */}
        <motion.div 
          className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center text-gray-400 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-2"
            >
              <Heart className="text-red-500" size={16} />
            </motion.div>
            <span>by</span>
            <span className="ml-1 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-bold">
              SAYED SHAHLOOB P
            </span>
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.span 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#10b981" }}
            >
              © 2024 Full Stack Developer & SEO Analyst. All rights reserved.
            </motion.span>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden group"
            >
              <ArrowUp size={18} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;