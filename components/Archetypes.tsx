import React from 'react';
import { ARCHETYPES } from '../constants';
import { ArchetypeData } from '../types';
import AnimalIllustration from './Crystal';

interface ArchetypesProps {
  onSelect: (archetype: ArchetypeData) => void;
}

const Archetypes: React.FC<ArchetypesProps> = ({ onSelect }) => {
  const groups = [
    {
      theme: "Preservation · Structure · Long-term security · Responsibility",
      color: "blue",
      ids: ['guardian', 'builder']
    },
    {
      theme: "Flexibility · Enjoyment · Timing · Experiential wealth",
      color: "yellow",
      ids: ['empath', 'explorer']
    },
    {
      theme: "Meaning · Community · Values-aligned wealth",
      color: "green",
      ids: ['harmonizer', 'strategist']
    },
    {
      theme: "Expansion · Strategy · Leverage · Mastery",
      color: "purple",
      ids: ['power-seeker', 'visionary']
    }
  ];

  return (
    <section id="archetypes" className="py-48 bg-transparent min-h-screen relative overflow-hidden transition-colors duration-1000">
      <div className="prism-flare top-0 left-0 opacity-15" />
      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-3xl mb-48">
          <h2 className="text-[var(--color-gold)] tracking-[1em] uppercase text-[12px] mb-12 font-bold">The Registry of Signatures</h2>
          <h3 className="text-8xl md:text-9xl font-serif mb-12 font-[200] leading-none tracking-tighter shimmer-text">
            The Eight <br/><span className="italic">Archetypes</span>
          </h3>
          <p className="text-[14px] text-[var(--text-color)] font-semibold max-w-sm leading-loose uppercase tracking-[0.4em] border-l-2 border-[var(--color-gold)] pl-8 opacity-100">
            A mapping of the fundamental prototypes, grouped by their core energetic frequency.
          </p>
        </div>

        <div className="space-y-64">
          {groups.map((group, idx) => (
            <div key={idx} className="space-y-16">
              {/* Theme Header */}
              <div className="border-b border-[var(--border-color)] pb-8">
                <p className="text-[11px] uppercase tracking-[0.6em] text-[var(--color-gold-deep)] font-bold mb-2">Theme</p>
                <h4 className="text-[14px] md:text-lg uppercase tracking-[0.4em] font-medium text-[var(--text-color)] opacity-80">
                  {group.theme}
                </h4>
              </div>

              {/* Grid Layout - 2 per row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {group.ids.map((id) => {
                  const archetype = ARCHETYPES.find(a => a.id === id);
                  if (!archetype) return null;
                  return (
                    <div 
                      key={archetype.id}
                      onClick={() => onSelect(archetype)}
                      className="group cursor-pointer flex flex-col gap-12 items-center border border-[var(--border-color)]/30 p-16 md:p-24 hover:border-[var(--color-gold)]/50 transition-all duration-700 bg-[var(--text-color)]/[0.01]"
                    >
                      <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 flex items-center justify-center overflow-hidden bg-[var(--text-color)]/[0.02]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_75%)] opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                        <div className="w-56 h-56 md:w-72 md:h-72 transform group-hover:scale-105 transition-all duration-[2.5s] ease-out">
                          <AnimalIllustration icon={archetype.animalIcon} color={archetype.color} />
                        </div>
                      </div>
                      
                      <div className="space-y-6 text-center max-w-md">
                        <h4 className="text-4xl md:text-6xl font-serif tracking-tight text-[var(--text-color)] opacity-100 group-hover:text-[var(--color-gold)] transition-colors font-[200]">
                          {archetype.title}
                        </h4>
                        <div className="w-16 h-[1px] bg-[var(--color-gold)]/30 group-hover:w-32 mx-auto transition-all duration-700" />
                        <div className="space-y-2">
                          <p className="text-[11px] uppercase tracking-[0.5em] text-[var(--color-gold-deep)] font-bold">
                            The {archetype.animal}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-color)] opacity-40 italic">
                            {archetype.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archetypes;