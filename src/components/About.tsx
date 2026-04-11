import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#000000]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Immersive Image with Kinetic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto group">
              {/* Animated Floating Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-violet-600/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 border border-white/5 rounded-[3rem] p-4 transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    src="/sayed.png" 
                    alt="Sayed Shahloob P" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Stats Overlay - Premium Glass */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 p-8 backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-8">
                  <div>
                    <h4 className="text-4xl font-black text-white font-display">2+</h4>
                    <p className="text-[10px] uppercase font-black text-violet-500 tracking-[0.2em]">Years Exp.</p>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div>
                    <h4 className="text-4xl font-black text-white font-display">15+</h4>
                    <p className="text-[10px] uppercase font-black text-violet-500 tracking-[0.2em]">Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Narrative Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-violet-500/50" />
                <span className="text-violet-500 text-xs font-black tracking-[0.4em] uppercase">Who I am</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.95] tracking-tighter font-display uppercase">
                Software <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">Developer.</span>
              </h2>
              
              <div className="space-y-8 text-neutral-400 text-lg leading-relaxed mb-16">
                <p className="border-l-2 border-violet-500/30 pl-8 italic">
                  I am <span className="text-white font-black">Sayed Shahloob P</span>, a results-driven Software Developer and technical strategist at <span className="text-white font-medium">Hirush Global LLP</span>. I specialize in building high-performance digital systems that merge code with strategy.
                </p>
                <p className="pl-8 opacity-70">
                  Combining a <span className="text-white font-medium">B.Tech in Computer Science</span> with a background in SEO, I don't just build websites—I craft optimized digital ecosystems designed to scale and succeed in the modern web.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;