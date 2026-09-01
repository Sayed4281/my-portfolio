import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
      <body className="min-h-screen bg-[#0B1220] text-[#F8FAFC] selection:bg-blue-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
