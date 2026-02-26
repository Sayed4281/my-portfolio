import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200">
      {/* Subtle ambient glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[120px] animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px] animate-glow animation-delay-2000"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        {/* Noise */}
        <div className="absolute inset-0 noise-overlay"></div>
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <AIChatBot />
    </div>
  );
}

export default App;