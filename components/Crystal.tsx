import React from 'react';

interface AnimalIllustrationProps {
  icon: 'elephant' | 'otter' | 'tiger' | 'falcon' | 'turtle' | 'snake' | 'wolf' | 'dolphin';
  color: string;
  className?: string;
}

const AnimalIllustration: React.FC<AnimalIllustrationProps> = ({ icon, color, className = "" }) => {
  const gradientId = `totem-grad-${icon}`;
  
  // Color Category Logic:
  // Blue (Preserve/Stabilize): Elephant, Turtle
  // Green (Meaning/Community): Dolphin, Wolf
  // Yellow (Flow/Adapt): Otter, Snake
  // Purple (Vision/Expansion): Tiger, Falcon
  const isBlue = icon === 'elephant' || icon === 'turtle';
  const isGreen = icon === 'dolphin' || icon === 'wolf';
  const isYellow = icon === 'otter' || icon === 'snake';
  const isPurple = icon === 'tiger' || icon === 'falcon';

  const renderMonetaryMotif = () => {
    if (isBlue) { 
      // Asian Round Coin with Square Hole
      return (
        <g transform="translate(10, 10) scale(0.6)" opacity="0.9">
          <circle cx="10" cy="10" r="8" fill="white" />
          <rect x="7" y="7" width="6" height="6" fill={color} rx="1" />
        </g>
      );
    }
    if (isGreen) { 
      // Minimalist flowing cash notes
      return (
        <g transform="translate(15, 25) rotate(-15) scale(0.7)">
          <rect width="22" height="12" rx="2" fill="white" opacity="0.9" />
          <circle cx="11" cy="6" r="4" stroke={color} strokeWidth="0.5" fill="none" />
          <text x="11" y="8.5" fontSize="8" textAnchor="middle" fill={color} fontWeight="900" style={{ fontFamily: 'serif' }}>$</text>
        </g>
      );
    }
    if (isYellow) { 
      // Gold Bars Stack
      return (
        <g transform="translate(78, 20) scale(0.7)">
          {/* Bottom Bar */}
          <path d="M-12,12 L12,12 L10,6 L-10,6 Z" fill="white" opacity="0.9" />
          {/* Middle Bar */}
          <path d="M-10,6 L10,6 L8,0 L-8,0 Z" fill="white" opacity="0.95" />
          {/* Top Bar */}
          <path d="M-8,0 L8,0 L6,-6 L-6,-6 Z" fill="white" opacity="1" />
          
          {/* Gold tint overlay */}
          <path d="M-12,12 L12,12 L10,6 L-10,6 Z" fill={color} opacity="0.2" />
          <path d="M-10,6 L10,6 L8,0 L-8,0 Z" fill={color} opacity="0.3" />
          <path d="M-8,0 L8,0 L6,-6 L-6,-6 Z" fill={color} opacity="0.4" />

          {/* Sparkle */}
          <path d="M10,-10 L12,-4 L18,-3 L12,-2 L10,4 L8,-2 L2,-3 L8,-4 Z" fill="white" />
        </g>
      );
    }
    if (isPurple) { 
      // Digital Token / Virtual Currency
      return (
        <g transform="translate(18, 78)">
           <circle cx="0" cy="0" r="9" fill="white" opacity="0.9" />
           <text x="0" y="3.5" fontSize="12" textAnchor="middle" fill={color} fontWeight="900">₿</text>
        </g>
      );
    }
    return null;
  };

  const renderAnimalSilhouette = () => {
    switch (icon) {
      case 'elephant': // BLUE - Organic silhouette holding coin
        return (
          <g>
            <path d="M25,82 L35,82 L40,70 L55,70 L60,82 L82,82 L82,60 C82,35 60,25 45,25 C30,25 25,35 25,50 L25,60 C25,72 18,72 14,82 Q12,85 14,88 Q18,92 22,90 Q25,88 24,82 Z" fill={`url(#${gradientId})`} />
            <circle cx="58" cy="45" r="1.5" fill="white" />
            {/* Trunk Holding Coin */}
            <g transform="translate(10, 80) scale(0.4)">
               <circle cx="10" cy="10" r="12" fill="white" opacity="0.9" />
               <rect x="6" y="6" width="8" height="8" fill={color} />
            </g>
          </g>
        );
      case 'turtle': // BLUE - Based on reference with coin shell
        return (
          <g>
            {/* Smooth Fins/Head */}
            <path d="M15,65 Q10,40 25,25 M85,65 Q90,40 75,25" stroke={`url(#${gradientId})`} strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M42,22 Q50,10 58,22 L53,30 L47,30 Z" fill={`url(#${gradientId})`} />
            <circle cx="50" cy="18" r="1.2" fill="white" />
            <path d="M35,85 Q40,95 50,90 Q60,95 65,85" stroke={`url(#${gradientId})`} strokeWidth="4" fill="none" strokeLinecap="round" />
            
            {/* Smooth Shell with Coin Motif */}
            <path d="M20,65 C20,35 35,20 50,20 C65,20 80,35 80,65 C80,85 70,92 50,92 C30,92 20,85 20,65 Z" fill={`url(#${gradientId})`} />
            <g opacity="0.15">
               <circle cx="50" cy="56" r="14" fill="none" stroke="white" strokeWidth="1" />
               <rect x="44" y="50" width="12" height="12" fill="none" stroke="white" strokeWidth="1" />
               <circle cx="35" cy="45" r="8" fill="none" stroke="white" strokeWidth="0.5" />
               <circle cx="65" cy="45" r="8" fill="none" stroke="white" strokeWidth="0.5" />
            </g>
          </g>
        );
      case 'wolf': // GREEN - Howling Wolf - Full Body Visible
        return (
          <g transform="translate(10, 10) scale(0.8)">
             {/* Sitting Body */}
             <path d="M40,90 L30,90 Q20,90 25,75 Q30,60 35,55 L35,45 Q35,35 45,25 (Neck) Q50,15 55,10 (Head Top) L65,5 (Snout Tip) L62,15 (Jaw) Q55,25 55,30 Q65,40 60,55 (Chest) L60,80 L75,80 (Front Paws) L75,90 L60,90 L55,75 L50,90 Z" fill={`url(#${gradientId})`} />
             
             {/* Distinct Tail */}
             <path d="M25,75 Q10,75 5,60 Q5,50 15,45" stroke={`url(#${gradientId})`} strokeWidth="6" fill="none" strokeLinecap="round" />
             
             {/* Ear */}
             <path d="M50,15 L48,5 L58,10 Z" fill={`url(#${gradientId})`} />
             
             {/* Eye */}
             <circle cx="56" cy="12" r="1.2" fill="white" opacity="0.9" />
          </g>
        );
      case 'dolphin': // GREEN - Jumping Dolphin - Fish Tail
        return (
          <g transform="rotate(-15, 50, 50)">
            {/* Body */}
            <path d="M25,75 Q25,45 45,35 Q60,30 75,40 L85,45 (Beak tip) L80,50 Q70,50 65,55 Q55,65 50,75 Q40,85 30,80 Z" fill={`url(#${gradientId})`} />
            {/* Dorsal Fin */}
            <path d="M50,40 Q55,25 45,25 Q50,35 55,43 Z" fill={`url(#${gradientId})`} />
            
            {/* Distinct Tail Flukes */}
            <path d="M25,75 Q15,70 10,75 Q5,80 15,85 L25,80 L35,85 Q45,80 40,75 Q35,70 25,75" fill={`url(#${gradientId})`} />
            
            {/* Eye */}
            <circle cx="75" cy="43" r="1.5" fill="white" />
          </g>
        );
      case 'otter': // YELLOW - Chubby Face & Teeth
        return (
          <g>
            {/* Body swimming */}
            <path d="M25,50 Q30,40 45,45 Q60,50 70,60 Q80,70 85,85 L80,90 Q70,80 60,75 Q45,70 30,75 L25,70 Z" fill={`url(#${gradientId})`} />
            
            {/* Head - Chubby Cheeks */}
            <path d="M10,45 Q10,30 25,30 Q40,30 40,45 Q40,55 35,58 Q25,62 15,58 Q10,55 10,45 Z" fill={`url(#${gradientId})`} />
            
            {/* Ears */}
            <circle cx="12" cy="38" r="2.5" fill={`url(#${gradientId})`} />
            <circle cx="38" cy="38" r="2.5" fill={`url(#${gradientId})`} />
            
            {/* Tail */}
            <path d="M80,85 Q95,95 95,100" stroke={`url(#${gradientId})`} strokeWidth="7" fill="none" strokeLinecap="round" />
            
            {/* Paws */}
            <circle cx="50" cy="60" r="4" fill={`url(#${gradientId})`} />
            
            {/* Face Details */}
            <circle cx="18" cy="42" r="1.5" fill="white" />
            <circle cx="32" cy="42" r="1.5" fill="white" />
            <circle cx="25" cy="48" r="1.5" fill="black" opacity="0.3" /> {/* Nose */}
            
            {/* Teeth */}
            <path d="M23,52 L23,55 L24,55 L24,52 Z" fill="white" />
            <path d="M26,52 L26,55 L27,55 L27,52 Z" fill="white" />
          </g>
        );
      case 'snake': // YELLOW - Wavy S-Shape
        return (
          <g>
             {/* Wavy body tapering to tail */}
            <path d="M45,15 Q60,10 65,25 Q70,40 50,50 Q30,60 35,75 Q40,90 55,95 L60,85 Q50,80 45,70 Q40,60 60,50 Q80,40 75,20 Q70,5 50,5 L45,15 Z" fill={`url(#${gradientId})`} />
            {/* Head detail */}
            <circle cx="52" cy="15" r="1.5" fill="white" />
          </g>
        );
      case 'tiger': // PURPLE - Fierce Tiger (Claws, Teeth, Not a cat)
        return (
          <g transform="translate(5,5) scale(0.9)">
             {/* Heavy Muscular Body */}
             <path d="M15,55 Q20,40 40,40 Q60,35 80,45 L90,60 Q80,75 60,70 L60,85 L50,85 L50,65 Q40,60 30,65 L25,85 L15,85 Z" fill={`url(#${gradientId})`} />
             
             {/* Broad Head */}
             <g transform="translate(80, 50) rotate(10)">
                <path d="M-12,-10 Q0,-15 12,-10 L10,5 Q5,10 -5,10 L-12,5 Z" fill={`url(#${gradientId})`} />
                {/* Ears */}
                <path d="M-12,-8 L-15,-15 L-5,-10 Z" fill={`url(#${gradientId})`} />
                <path d="M12,-8 L15,-15 L5,-10 Z" fill={`url(#${gradientId})`} />
                
                {/* Open Mouth / Teeth */}
                <path d="M-5,8 L0,12 L5,8" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M-3,8 L-2,10 L-1,8 M1,8 L2,10 L3,8" fill="white" /> {/* Fangs */}
             </g>

             {/* Tail */}
             <path d="M15,55 Q5,50 5,30 Q5,15 20,10" stroke={`url(#${gradientId})`} strokeWidth="5" fill="none" strokeLinecap="round" />
             
             {/* Stripes */}
             <g opacity="0.4" fill="black">
               <path d="M40,40 L45,50 L38,50 Z" />
               <path d="M55,42 L60,52 L53,52 Z" />
               <path d="M70,45 L75,55 L68,55 Z" />
             </g>
             
             {/* Claws */}
             <g stroke="white" strokeWidth="0.8" fill="none">
                 <path d="M15,85 L12,88 M15,85 L15,89 M15,85 L18,88" />
                 <path d="M25,85 L22,88 M25,85 L25,89 M25,85 L28,88" />
                 <path d="M60,85 L57,88 M60,85 L60,89 M60,85 L63,88" />
             </g>
          </g>
        );
      case 'falcon': // PURPLE - Bird Wings (Feathered) & Talons
        return (
          <g transform="translate(10,10) scale(0.8)">
            {/* Body */}
            <path d="M50,20 Q55,20 60,35 L55,75 L45,75 L40,35 Q45,20 50,20 Z" fill={`url(#${gradientId})`} />
            
            {/* Feathered Wings */}
            <path d="M60,35 L80,20 L95,15 L90,25 L95,30 L90,35 L95,40 L60,55 Z" fill={`url(#${gradientId})`} />
            <path d="M40,35 L20,20 L5,15 L10,25 L5,30 L10,35 L5,40 L40,55 Z" fill={`url(#${gradientId})`} />
            
            {/* Tail Feathers */}
            <path d="M45,75 L40,90 L50,95 L60,90 L55,75 Z" fill={`url(#${gradientId})`} />

            {/* Head & Beak */}
            <path d="M50,20 Q45,10 55,10 L60,15 L55,22 Z" fill={`url(#${gradientId})`} />
            <path d="M60,15 L63,18 L58,19 Z" fill="white" opacity="0.8" /> {/* Sharp Beak */}
            
            {/* Talons */}
            <path d="M45,70 Q40,80 35,80 M35,80 L38,82 M35,80 L32,82" stroke="white" strokeWidth="1" fill="none" />
            <path d="M55,70 Q60,80 65,80 M65,80 L62,82 M65,80 L68,82" stroke="white" strokeWidth="1" fill="none" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${className} relative group w-full h-full`}>
      <svg viewBox="0 0 100 100" className="w-full h-full transition-all duration-[2.5s] ease-out group-hover:scale-105">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.7 }} />
          </linearGradient>
          <filter id="soft-depth" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#soft-depth)">
          {renderAnimalSilhouette()}
          {renderMonetaryMotif()}
        </g>
        
        {/* Subtle geometric circle for presentation */}
        <circle cx="50" cy="50" r="49" fill="none" stroke={color} strokeWidth="0.05" opacity="0.1" />
      </svg>
    </div>
  );
};

export default AnimalIllustration;