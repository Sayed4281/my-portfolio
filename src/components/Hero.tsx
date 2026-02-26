import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/[0.05] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-display">
              <span className="text-white">Building</span> <br />
              <span className="text-white">Digital </span>
              <span className="text-violet-400">
                Experiences
              </span>
            </h1>

            <p className="text-base md:text-lg text-neutral-500 mb-10 max-w-xl leading-relaxed">
              I'm Sayed Shahloob, a Full Stack Developer specializing in building exceptional digital products. I transform complex problems into beautiful, intuitive, and performant web applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 bg-violet-500 text-black text-sm font-semibold rounded-lg hover:bg-violet-400 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/[0.04] text-neutral-300 text-sm font-medium rounded-lg border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-10 bg-neutral-800"></div>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/Sayed4281" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
                  { Icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
                  { Icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-violet-400 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-violet-500/[0.08] rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] shadow-2xl group-hover:border-violet-500/20 transition-all duration-700">
                <img
                  src="/sayed.png"
                  alt="Sayed Shahloob"
                  className="w-full max-w-md object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20"></div>
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
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-white/[0.06] bg-white/[0.02]"
          >
            <ArrowDown className="text-neutral-600" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
