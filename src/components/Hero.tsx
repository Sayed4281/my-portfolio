import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-slate-300">Available for Freelance Projects</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-display">
              Building Digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                Experiences
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              I'm Sayed Shahloob, a Full Stack Developer specializing in building exceptional digital products. I transform complex problems into beautiful, intuitive, and performant web applications.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 w-full max-w-md sm:w-auto">
              <a
                href="#projects"
                className="px-4 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm md:text-base rounded-full font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center text-center leading-tight"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-4 py-3 md:px-8 md:py-4 bg-white/5 text-white text-sm md:text-base rounded-full font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center text-center leading-tight"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">Connect</span>
              <div className="h-px w-12 bg-slate-800"></div>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Sayed4281", color: "hover:text-white" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/sayed-shahloob-p", color: "hover:text-blue-400" },
                  { Icon: WhatsAppIcon, href: "https://wa.me/919567220971", color: "hover:text-green-400" },
                  { Icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com", color: "hover:text-cyan-400" }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${color} transition-colors transform hover:scale-110 duration-300`}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center perspective-1000"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -rotate-6"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                <img
                  src="/sayed.png"
                  alt="Sayed Shahloob"
                  className="w-full max-w-md object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-20"></div>
              </div>


            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <ArrowDown className="text-slate-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
