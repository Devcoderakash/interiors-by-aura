import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  }[size];

  const titleSize = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  }[size];

  const subSize = {
    sm: 'text-[8px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[11px] sm:text-xs',
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Emblem SVG: Arched Classical Doorway with Stylized S Monogram */}
      <div 
        className={`${iconDimensions} shrink-0 rounded-xs overflow-hidden shadow-2xs transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 128 128" 
          className="w-full h-full"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DEC2" />
              <stop offset="45%" stopColor="#C89D7A" />
              <stop offset="100%" stopColor="#8D5740" />
            </linearGradient>
            <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#25201D" />
              <stop offset="100%" stopColor="#141210" />
            </linearGradient>
          </defs>
          
          {/* Base Emblem Tile */}
          <rect width="128" height="128" rx="26" fill="url(#logoBg)" stroke="#4A3D34" strokeWidth="3" />
          
          {/* Architectural Classical Door Arch */}
          <path 
            d="M36 102 V52 A28 28 0 0 1 92 52 V102" 
            stroke="url(#logoGold)" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Doorway Base Threshold */}
          <line 
            x1="28" 
            y1="102" 
            x2="100" 
            y2="102" 
            stroke="url(#logoGold)" 
            strokeWidth="7" 
            strokeLinecap="round" 
          />
          
          {/* Stylized S Craftsmanship Monogram inside the doorway */}
          <path 
            d="M73 44 C67 37, 54 37, 49 45 C44 53, 55 60, 65 64 C77 69, 81 77, 77 86 C73 94, 57 95, 49 87" 
            stroke="url(#logoGold)" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Keystone Finial Ornament */}
          <circle cx="64" cy="22" r="4.5" fill="url(#logoGold)" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span 
            className={`block font-serif font-bold tracking-tight transition-colors ${titleSize} ${
              isLight 
                ? 'text-white group-hover:text-[#E8C9A3]' 
                : 'text-[#1C1917] group-hover:text-[#704834]'
            }`}
          >
            SATISH
          </span>
          <span 
            className={`block uppercase font-medium tracking-[0.24em] mt-1 ${subSize} ${
              isLight ? 'text-[#C49B7A]' : 'text-[#704834]'
            }`}
          >
            Furniture & Door House
          </span>
        </div>
      )}
    </div>
  );
};
