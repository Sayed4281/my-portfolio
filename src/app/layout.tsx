import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';
import Preloader from '@/components/Preloader';
import ScrollProgressBar from '@/components/ScrollProgressBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://sayedshahloob.me'),
  title: 'Sayed Shahloob P — Software Developer | Technical Lead | SEO Analyst',
  description: 'Enterprise ERP, HRMS, Technical SEO, Technical Lead, and Full-Stack Software Engineering Portfolio of Sayed Shahloob P.',
  keywords: ['Sayed Shahloob P', 'Software Developer', 'Technical Lead', 'SEO Analyst', 'Next.js', 'React', 'Hirush ERP'],
  authors: [{ name: 'Sayed Shahloob P' }],
  icons: {
    icon: '/sayed.png',
    shortcut: '/sayed.png',
    apple: '/sayed.png',
  },
  openGraph: {
    title: 'Sayed Shahloob P — Software Developer | Technical Lead | SEO Analyst',
    description: 'Enterprise ERP, HRMS, Technical SEO, Technical Lead, and Full-Stack Software Engineering Portfolio.',
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
      <body className="min-h-screen bg-white text-[#101B3C] font-sans antialiased overflow-x-hidden selection:bg-[#1677FF]/15 selection:text-[#1677FF]">
        <ScrollProgressBar />
        <Preloader />
        
        {/* Subtle Ethereal Ambient Glow */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[120px]" />
        </div>

        <Header />

        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        <Footer />
        <AIChatBot />
      </body>
    </html>
  );
}
