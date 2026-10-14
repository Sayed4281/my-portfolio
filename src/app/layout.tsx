import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://sayedshahloob.me'),
  title: 'Sayed Shahloob P — Software Developer | Technical Lead | Business Analyst',
  description: 'Enterprise ERP, HRMS, Business Analysis, Technical Lead, and Full-Stack Software Engineering Portfolio of Sayed Shahloob P.',
  keywords: ['Sayed Shahloob P', 'Software Developer', 'Technical Lead', 'Business Analyst', 'Next.js', 'React', 'Hirush ERP'],
  authors: [{ name: 'Sayed Shahloob P' }],
  icons: {
    icon: '/sayed.png',
    shortcut: '/sayed.png',
    apple: '/sayed.png',
  },
  openGraph: {
    title: 'Sayed Shahloob P — Software Developer | Technical Lead | Business Analyst',
    description: 'Enterprise ERP, HRMS, Business Analysis, Technical Lead, and Full-Stack Software Engineering Portfolio.',
    type: 'website',
    images: [{ url: '/sayed.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-500/20 selection:text-blue-700 font-sans antialiased overflow-x-hidden">
        <Preloader />
        <CustomCursor />
        
        {/* Ambient Ethereal Glow on Light Background */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[650px] h-[650px] bg-blue-500/[0.06] rounded-full blur-[140px] animate-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-cyan-400/[0.05] rounded-full blur-[130px] animate-glow animation-delay-2000" />
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <Header />

        <main className="relative z-10 bg-transparent min-h-screen">
          {children}
        </main>

        <Footer />
        <AIChatBot />
      </body>
    </html>
  );
}
