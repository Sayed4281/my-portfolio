import { motion } from 'framer-motion';

const About = () => {

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-[#0B1220]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-[360px] md:max-w-[400px] mx-auto group">
              {/* Animated Floating Glow */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute inset-0 border border-[#263449] rounded-[2.5rem] sm:rounded-[3rem] p-3 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative bg-[#172033]">
                  <img 
                    src="/sayed.png" 
                    alt="Sayed Shahloob P" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Stats Overlay - Premium Glass */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 p-4 sm:p-6 backdrop-blur-2xl bg-[#172033]/95 border border-[#263449] rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-white font-display">2+</h4>
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-cyan-300 tracking-[0.15em] sm:tracking-[0.2em]">Years Exp.</p>
                  </div>
                  <div className="w-[1px] h-8 sm:h-10 bg-[#263449]" />
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-white font-display">15+</h4>
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-cyan-300 tracking-[0.15em] sm:tracking-[0.2em]">Projects</p>
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
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-[1px] bg-blue-500" />
                <span className="text-cyan-400 text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase">Who I Am</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight font-display uppercase">
                Software Developer & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">Technical Lead</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-[#94A3B8] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                <p className="border-l-2 border-blue-500/40 pl-4 sm:pl-6 italic text-[#F8FAFC]">
                  "I understand the client's business problem, convert it into a technical solution, coordinate the team, and help deliver the software."
                </p>

                <p className="pl-4 sm:pl-6 text-[#94A3B8]">
                  I am a <span className="text-white font-semibold">Software Developer and Technical Project Lead</span> with hands-on experience across software development, business analysis, ERP/HRMS implementation, client management, and project delivery.
                </p>

                <p className="pl-4 sm:pl-6 text-[#94A3B8]">
                  I work across the complete project lifecycle—from understanding client requirements and analyzing business processes to planning solutions, coordinating development, testing, deployment, and ongoing support.
                </p>
              </div>

              {/* Core Philosophy Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pl-4 sm:pl-6">
                {['Business Analysis', 'ERP/HRMS Architecture', 'Team Coordination', 'Agile Delivery'].map((tag) => (
                  <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;