
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'color' }) => {
  const isWhite = variant === 'white';
  
  // Renk tanımları
  const gradientId = isWhite ? "white-gradient" : "brand-gradient";
  const startColor = isWhite ? "#FFFFFF" : "#0ea5e9"; // Sky-500
  const endColor = isWhite ? "#e2e8f0" : "#0369a1";   // Sky-700
  const textColor = isWhite ? "text-white" : "text-slate-900";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* İkon Kısmı */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        
        {/* Başlangıç Noktası (Veri Kaynağı) */}
        <circle cx="20" cy="80" r="8" fill={`url(#${gradientId})`} />

        {/* Basamaklı Devre Yolu (Step & Flow) */}
        <path 
          d="M 20 80 L 45 80 L 45 50 L 75 50 L 75 25" 
          stroke={`url(#${gradientId})`} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Yükseliş Oku (Hedef) */}
        <path 
          d="M 60 25 L 75 25 L 75 40" 
          stroke={`url(#${gradientId})`} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Yazı Kısmı */}
      <div className={`font-sans flex items-baseline leading-none ${textColor}`}>
        <span className="font-extrabold text-[1.5em] tracking-tight">Power</span>
        <span className="font-light text-[1.5em] tracking-tight ml-[1px]">Step</span>
      </div>
    </div>
  );
};

export default Logo;
