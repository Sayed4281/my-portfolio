import type { Metadata } from 'next';
import { Briefcase } from 'lucide-react';
import ServicesHero from '@/components/ServicesHero';
import WhatIDo from '@/components/WhatIDo';
import ProjectLifecycle from '@/components/ProjectLifecycle';
import TechnologiesOverview from '@/components/TechnologiesOverview';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services & Engineering Capabilities — Sayed Shahloob P',
  description: 'Enterprise ERP/HRMS solutions, full-stack web development, business analysis, technical project leadership, and delivery lifecycle by Sayed Shahloob P.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Bespoke Services Hero Section */}
      <ServicesHero />

      <div className="relative">
        {/* 2. Core Service Offerings */}
        <div id="services-list">
          <WhatIDo />
        </div>

        {/* 3. Simplified 6-Step Delivery Process */}
        <div id="lifecycle">
          <ProjectLifecycle />
        </div>

        {/* 4. Technologies Grouped by Service */}
        <TechnologiesOverview />

        {/* 4. Project Inquiry CTA Card */}
        <CTASection
          badge="Project Engagements & Consulting"
          badgeIcon={<Briefcase size={14} className="text-blue-400" />}
          title="Have an Enterprise Project or"
          highlightText="System Requirement?"
          description="Let's evaluate your operational workflows, define your requirements, and execute a structured engineering roadmap from day one."
          primaryBtnText="Request Consultation"
          primaryBtnHref="/contact"
          secondaryBtnText="View Implemented Systems"
          secondaryBtnHref="/projects"
          trustBadges={[
            'Comprehensive Workflow & Requirements Analysis',
            'Full-Stack Architecture & Security Compliance',
            'Milestone-Driven Execution & Team Leadership',
          ]}
        />
      </div>
    </div>
  );
}

