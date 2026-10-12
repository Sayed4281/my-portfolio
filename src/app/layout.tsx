import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIChatBot from '@/components/AIChatBot';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://sayedshahloobp-portfolio.vercel.app'),
  title: {
    default: 'Sayed Shahloob P — Software Developer | Technical Lead | Business Analyst',
    template: '%s | Sayed Shahloob P',
  },
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
      <body className="min-h-screen bg-[#FAFAFB] text-slate-900 selection:bg-slate-900 selection:text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between">
        <Preloader />
        <CustomCursor />
        
        {/* Light Luxury ambient canvas */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <Header />

        <main className="flex-1 relative z-10 pt-20 sm:pt-24">
          {children}
        </main>

        <Footer />
        <AIChatBot />
      </body>
    </html>
  );
}
