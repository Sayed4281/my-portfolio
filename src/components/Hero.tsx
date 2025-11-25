import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl"
              />
              <img
                src="/sayed.png"
                alt="Sayed Shahloob P"
                className="relative z-10 w-full max-w-xl rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                SAYED SHAHLOOB P
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Full Stack Developer • React Specialist
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                AI/ML Integration Expert • Software Engineer
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              Passionate software developer specializing in React.js, Flutter, and modern web technologies.
              Currently building innovative solutions at Hirush Global LLP with expertise in AI/ML integration and SEO optimization.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/sayed_shahloob_p.pdf"
                download
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              <a href="https://github.com/Sayed4281" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <Github size={20} className="text-white" />
              </a>
              <a href="https://linkedin.com/in/sayed-shahloob-p" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="mailto:sayedshahloobp@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300">
                <Mail size={20} className="text-white" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-white/50" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
