import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const titleWords = ["Building", "Digital", "Experiences"];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-[110vh] flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -40, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              delay: i * 0.5 
            }}
            className="absolute bg-violet-400/20 w-1 h-1 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + (i * 17) % 80}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 font-display tracking-tight text-white">
              {titleWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-4">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.1 * i + 0.5
                    }}
                    className={`inline-block ${i === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-lg md:text-xl text-neutral-400 mb-10 max-w-xl leading-relaxed"
            >
              I'm <span className="text-white font-medium">Sayed Shahloob P</span>, a Full Stack Developer & Technical SEO Strategist building 
              <span className="text-white"> high-performance </span> systems that merge robust code with scalable engineering.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-5 mb-14"
            >
              <a
                href="/#projects"
                className="group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 bg-white/[0.03] text-white text-sm font-medium rounded-full border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Let's Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex gap-5">
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
                    className="group relative p-3 text-neutral-500 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={22} className="relative z-10" />
                    <div className="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image / Creative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
            className="order-1 lg:order-2 flex justify-center perspective-[1000px]"
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 -m-8 border border-white/10 rounded-[3rem] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 -m-4 border border-white/5 rounded-[2.5rem] animate-[spin_15s_linear_infinite_reverse]" />

              <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] shadow-2xl transition-all duration-700 aspect-[3/4] w-[280px] md:w-[400px]">
                <motion.img
                  src="/IMG_0594.JPG.jpeg"
                  alt="Sayed Shahloob"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover brightness-100 contrast-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-20 opacity-40"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 rotate-90 mb-4">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
