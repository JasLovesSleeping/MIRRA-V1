import React from 'react';

interface SacredGeometryProps {
  className?: string;
  size?: number | string;
  colorPrimary?: string;
  colorSecondary?: string;
}

const SacredGeometry: React.FC<SacredGeometryProps> = ({ 
  className = "", 
  size = 400,
  colorPrimary = "var(--color-gold)",
}) => {
  return (
    <div className={`${className} relative pointer-events-none opacity-30`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
        <defs>
          <radialGradient id="star-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.95 }} />
            <stop offset="60%" style={{ stopColor: colorPrimary, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: colorPrimary, stopOpacity: 0 }} />
          </radialGradient>
          
          <linearGradient id="gold-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: colorPrimary, stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0.7 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Central Crystal/Star Shape - Refined with thinner stroke for large scale */}
        <path 
          d="M100 15 L118 82 L185 100 L118 118 L100 185 L82 118 L15 100 L82 82 Z" 
          fill="url(#star-grad)" 
          stroke="url(#gold-border)"
          strokeWidth="0.3"
          filter="url(#glow)"
        />

        {/* 4 Circles (Asian Currency Motif) */}
        {/* Top */}
        <circle cx="100" cy="45" r="28" fill="none" stroke="url(#gold-border)" strokeWidth="0.3" opacity="0.6" />
        <circle cx="100" cy="45" r="14" fill="url(#star-grad)" opacity="0.4" />
        
        {/* Bottom */}
        <circle cx="100" cy="155" r="28" fill="none" stroke="url(#gold-border)" strokeWidth="0.3" opacity="0.6" />
        <circle cx="100" cy="155" r="14" fill="url(#star-grad)" opacity="0.4" />
        
        {/* Left */}
        <circle cx="45" cy="100" r="28" fill="none" stroke="url(#gold-border)" strokeWidth="0.3" opacity="0.6" />
        <circle cx="45" cy="100" r="14" fill="url(#star-grad)" opacity="0.4" />
        
        {/* Right */}
        <circle cx="155" cy="100" r="28" fill="none" stroke="url(#gold-border)" strokeWidth="0.3" opacity="0.6" />
        <circle cx="155" cy="100" r="14" fill="url(#star-grad)" opacity="0.4" />

        {/* Connecting Lines / Architectural Detail */}
        <g stroke="url(#gold-border)" strokeWidth="0.15" opacity="0.3">
          <line x1="100" y1="45" x2="100" y2="155" />
          <line x1="45" y1="100" x2="155" y2="100" />
          <circle cx="100" cy="100" r="82" fill="none" strokeDasharray="2,6" />
          <circle cx="100" cy="100" r="40" fill="none" strokeDasharray="1,4" />
        </g>
      </svg>
    </div>
  );
};

export default SacredGeometry;