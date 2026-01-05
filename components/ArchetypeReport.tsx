import React from 'react';
import { ArchetypeData } from '../types';
import AnimalIllustration from './Crystal';

interface ArchetypeReportProps {
  archetype: ArchetypeData;
  onBack: () => void;
}

const ArchetypeReport: React.FC<ArchetypeReportProps> = ({ archetype, onBack }) => {
  return (
    <div className="min-h-screen bg-transparent pt-48 pb-32 animate-in fade-in duration-[1.5s] transition-colors duration-1000">
      <div className="container mx-auto px-12">
        <button onClick={onBack} className="mb-24 text-[11px] uppercase tracking-[0.6em] text-[var(--color-gold)] font-bold hover:opacity-70 transition-all flex items-center gap-6">
          <div className="w-16 h-[1.5px] bg-[var(--color-gold)] shadow-[0_0_10px_var(--color-gold)]" /> Return to Reflection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <div className="order-2 lg:order-1">
            <h2 className="text-[var(--color-gold)] tracking-[1em] uppercase text-[12px] mb-10 font-bold">Animal Archetype</h2>
            <h3 className="text-7xl md:text-[110px] font-serif mb-4 font-light leading-none tracking-tighter shimmer-text">{archetype.animal}</h3>
            <h4 className="text-2xl font-serif text-[var(--color-gold-deep)] mb-8 italic">{archetype.title}</h4>
            <p className="text-[14px] uppercase tracking-[0.6em] text-[var(--color-gold-deep)] mb-16 font-bold">{archetype.tagline}</p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              {archetype.keywords.map(word => (
                <span key={word} className="px-6 py-2 border border-[var(--color-gold)]/20 text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--color-gold-deep)] bg-white/5 backdrop-blur-sm">
                  {word}
                </span>
              ))}
            </div>

            <div className="inline-flex items-center gap-8 px-10 py-5 border border-[var(--color-gold)]/20 rounded-full bg-white/10">
              <span className="text-[11px] uppercase tracking-[0.6em] text-[var(--color-gold)] font-bold">Dimension Profile</span>
              <div className="flex gap-2">
                {Object.entries(archetype.dimensions).map(([key, val]) => (
                  <div key={key} className="w-8 h-8 border border-[var(--color-gold)] flex items-center justify-center text-[10px] font-bold text-[var(--color-gold)]">
                    {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-96 h-96 floating-jewel">
              <AnimalIllustration icon={archetype.animalIcon} color={archetype.color} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 relative">
          <div className="mirror-divider absolute top-0 left-0 w-full" />
          
          <div className="space-y-16">
            <div className="border-l-2 border-[var(--color-gold)] pl-8">
              <span className="text-[12px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold block mb-6">Core Behavioral Pattern</span>
              <p className="text-xl font-medium text-[var(--text-color)] leading-relaxed max-w-md">{archetype.description}</p>
            </div>
            <div className="border-l-2 border-[var(--color-gold)] pl-8">
              <span className="text-[12px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold block mb-6">Totem Symbolism</span>
              <p className="text-xl font-medium text-[var(--text-color)] leading-relaxed">{archetype.symbolism}</p>
            </div>
          </div>
          <div className="space-y-16">
            <div className="border-l-2 border-[var(--color-gold)] pl-8">
              <span className="text-[12px] uppercase tracking-[0.5em] text-[var(--color-gold)] font-bold block mb-6">Abundance Wisdom</span>
              <p className="text-2xl font-light text-[var(--color-gold-deep)] leading-relaxed italic">
                The {archetype.animal} finds wealth through its natural alignment with the environment. Your path to prosperity lies in honoring this innate geometric signature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypeReport;