import type { Metadata } from 'next';
import { Layers } from 'lucide-react';
import ProjectsHero from '@/components/ProjectsHero';
import Projects from '@/components/Projects';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Projects & Systems Portfolio — Sayed Shahloob P',
  description: 'Explore enterprise ERP systems, full-stack web applications, AI research platforms, and mobile apps built by Sayed Shahloob P.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Bespoke Projects Hero Section */}
      <ProjectsHero />

      <div id="projects-showcase" className="relative">
        <Projects />

        {/* Call to action card */}
        <CTASection
          badge="Modular Enterprise Engineering"
          badgeIcon={<Layers size={14} className="text-blue-400" />}
          title="Need a Tailored System Like"
          highlightText="Hirush ERP?"
          description="I can help architect modular workflows, secure role-based portals, automated payroll, and scalable databases configured for your enterprise operations."
          primaryBtnText="Discuss Your Requirements"
          primaryBtnHref="/contact"
          secondaryBtnText="See Delivery Process"
          secondaryBtnHref="/services"
          trustBadges={[
            'Architecture & Requirement Discovery',
            'Full-Stack Next.js & Node.js Delivery',
            'Production Deployment & SRE Support',
          ]}
        />
      </div>
    </div>
  );
}

