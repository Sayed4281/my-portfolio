import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import HowIWork from './components/HowIWork';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectLifecycle from './components/ProjectLifecycle';
import LeadershipManagement from './components/LeadershipManagement';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#F8FAFC] selection:bg-blue-500/30 selection:text-white font-sans antialiased">
      <Preloader />
      <CustomCursor />
      
      {/* Corporate Deep Navy ambient glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/[0.04] rounded-full blur-[140px] animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[120px] animate-glow animation-delay-2000" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <Header />

      <main className="relative z-10 bg-[#0B1220]">
        <Hero />
        <About />
        <WhatIDo />
        <HowIWork />
        <Projects />
        <Experience />
        <Skills />
        <ProjectLifecycle />
        <LeadershipManagement />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <AIChatBot />
    </div>
  );
}

export default App;