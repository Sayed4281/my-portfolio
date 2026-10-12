import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WhatIDo from '@/components/WhatIDo';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Executive Hero */}
      <Hero />

      {/* 2. Professional Biography & Leadership Narrative */}
      <About />

      {/* 3. Technical Mastery & Comprehensive Skills Grid */}
      <Skills />

      {/* 4. Core Deliverables & Capabilities (Balanced 6-Card Grid) */}
      <WhatIDo />

      {/* 5. Enterprise Case Studies & Flagship Hirush ERP Architecture */}
      <Projects />

      {/* 6. Professional Experience & Leadership Timeline */}
      <Experience />

      {/* 7. Direct Contact & Executive Consultation */}
      <Contact />
    </div>
  );
}
