import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Stylized Gradient S Icon matching the approved reference design */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#1677FF] via-[#3B82F6] to-[#6945FF] p-[1.5px] shadow-[0_4px_12px_rgba(22,119,255,0.3)] transition-transform duration-300 group-hover:scale-105">
        <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1677FF]/10 to-[#6945FF]/10" />
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-[#1677FF] drop-shadow-sm transition-transform duration-300 group-hover:rotate-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6C18 6 15 4 12 4C8.68629 4 6 6.68629 6 10C6 14.5 18 13.5 18 18C18 21.3137 15.3137 24 12 24C9 24 6 22 6 22" 
              className="text-[#1677FF]"
              stroke="url(#s-gradient)"
            />
            <defs>
              <linearGradient id="s-gradient" x1="6" y1="4" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1677FF" />
                <stop offset="1" stopColor="#6945FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#101B3C] tracking-tight group-hover:text-[#1677FF] transition-colors">
        Sayed
      </span>
    </Link>
  );
}
