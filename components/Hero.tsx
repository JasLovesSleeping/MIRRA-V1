import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(scrollY / 800, 1);

  return (
    <section className="relative h-[130vh] w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-12 z-10 transition-all duration-1000" style={{ opacity: 1 - progress * 1.5, transform: `translateY(${-scrollY * 0.1}px)` }}>
        <div className="max-w-4xl text-left">
          <h1 className="text-8xl md:text-[130px] font-serif mb-12 leading-[0.8] tracking-tighter shimmer-text lowercase italic font-light">
            Wealth <br/><span className="not-italic uppercase font-light tracking-[-0.04em]">Archetype</span>
          </h1>
          
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="text-[var(--color-gold)] tracking-[0.8em] uppercase text-[12px] font-bold">
              Decode Your Financial DNA
            </h2>
          </div>

          <div className="space-y-10 max-w-md">
            <p className="text-[var(--text-color)] font-medium leading-[1.8] uppercase tracking-[0.25em] text-[11px] opacity-80">
              The architecture of prosperity is written in your subconscious. <br/>Discover your signature pattern in five minutes.
            </p>
            
            <button 
              onClick={() => document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-16 group flex items-center gap-8 cursor-pointer"
            >
              <div className="w-12 h-[1px] bg-[var(--text-color)] group-hover:w-24 transition-all duration-[1.2s] ease-out" />
              <span className="text-[10px] uppercase tracking-[0.8em] text-[var(--text-color)] font-semibold group-hover:opacity-60 transition-all">Begin Assessment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;