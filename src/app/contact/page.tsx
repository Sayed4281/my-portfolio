import type { Metadata } from 'next';
import ContactHero from '@/components/ContactHero';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact & Hire — Sayed Shahloob P',
  description: 'Get in touch with Sayed Shahloob P for enterprise software projects, consulting, technical leadership, or development inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* 1. Bespoke Contact Hero Section */}
      <ContactHero />

      <div id="contact-form" className="relative">
        <Contact />
      </div>
    </div>
  );
}

