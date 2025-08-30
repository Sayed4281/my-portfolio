import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Code, Smartphone, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"></div>

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-400/15 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-400/15 rotate-45 rounded-xl"
          animate={{ rotate: [45, 405] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-emerald-400 to-cyan-500 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-500/10 rounded-full animate-pulse"></div>
              <img
                src="/sayed.png"
                alt="SAYED SHAHLOOB P"
                className="w-full h-full object-cover relative z-10"
              />
            </div>

            <motion.div
              className="absolute inset-0 w-48 h-48 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-4 left-1/2 w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center transform -translate-x-1/2 shadow-lg">
                <Code size={16} className="text-white" />
              </div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-cyan-500 rounded-xl flex items-center justify-center transform -translate-y-1/2 shadow-lg">
                <Smartphone size={16} className="text-white" />
              </div>
              <div className="absolute -bottom-4 left-1/2 w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center transform -translate-x-1/2 shadow-lg">
                <Search size={16} className="text-white" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              SAYED SHAHLOOB P
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 space-y-3"
          >
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-300% bg-clip-text text-transparent font-bold text-2xl md:text-3xl"
            >
              Full Stack Developer • Frontend Lead
            </motion.div>
            <motion.div
              animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-300% bg-clip-text text-transparent font-semibold text-xl md:text-2xl"
            >
              AI/ML Enthusiast • SEO Analyst
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate Full Stack Developer specializing in Flutter and modern web technologies. 
            Currently working as Jr. Frontend Developer at Pro26, with expertise in AI/ML integration 
            and SEO optimization. Dedicated to creating innovative solutions that drive real-world impact.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-4 mb-10"
          >
            {[
              { icon: Github, href: 'https://github.com/Sayed4281', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sayedshahloobp', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:sayedshahloobp@gmail.com', label: 'Email', color: 'from-emerald-600 to-cyan-800' },
              { icon: MessageCircle, href: 'https://wa.me/919567220971', label: 'WhatsApp', color: 'from-green-600 to-green-800' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -8, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              >
                <social.icon size={20} className="relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Download Resume Button */}
            <motion.a
              href="/sayed_shahloob_p_resume.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <MessageCircle size={20} className="group-hover:animate-pulse relative z-10" />
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-cyan-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-emerald-400"
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

