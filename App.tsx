import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Archetypes from './components/Archetypes';
import Questionnaire from './components/Questionnaire';
import ArchetypeReport from './components/ArchetypeReport';
import SacredGeometry from './components/SacredGeometry';
import { ArchetypeData } from './types';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 
        CLUSTER INSPIRED BY REFERENCE 
        Arranged in a cross/clover formation 
      */}
      <div className="absolute top-[10%] right-[-5%] w-[120vw] h-[120vh] opacity-80 rotate-[15deg]">
        {/* Top Left Orb */}
        <div 
          className="orb-cluster-item floating-orb w-[600px] h-[600px] top-[10%] left-[10%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-white) 0%, transparent 70%)',
            animationDelay: '0s'
          }} 
        />
        {/* Top Right Orb */}
        <div 
          className="orb-cluster-item floating-orb w-[550px] h-[550px] top-[5%] left-[45%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-gold) 0%, transparent 70%)',
            animationDelay: '-4s'
          }} 
        />
        {/* Bottom Left Orb */}
        <div 
          className="orb-cluster-item floating-orb w-[650px] h-[650px] top-[40%] left-[5%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-gold) 0%, transparent 70%)',
            animationDelay: '-8s'
          }} 
        />
        {/* Bottom Right Orb */}
        <div 
          className="orb-cluster-item floating-orb w-[600px] h-[600px] top-[35%] left-[40%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-white) 0%, transparent 70%)',
            animationDelay: '-12s'
          }} 
        />
        
        {/* The Central Shadow/Intersection Point */}
        <div 
          className="orb-cluster-item floating-orb w-[300px] h-[300px] top-[30%] left-[30%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-shadow) 0%, transparent 60%)',
            filter: 'blur(60px)',
            mixBlendMode: 'multiply',
            animationDelay: '-2s'
          }} 
        />
      </div>

      {/* THE SACRED GEOMETRY ELEMENT (Repositioned to the right 75%) */}
      <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        <div className="relative animate-[spin_100s_linear_infinite] opacity-60">
          {/* Main Hero Element: 66vw size to occupy 2/3 of screen width scale, but centered on the right */}
          <SacredGeometry size="66vw" className="animate-[drift_45s_ease-in-out_infinite]" />
        </div>
        
        {/* Accents for depth */}
        <div className="absolute top-[15%] left-[0%] opacity-20 scale-50 rotate-45">
          <SacredGeometry size="30vw" className="animate-[drift-alt_35s_ease-in-out_infinite]" />
        </div>
        <div className="absolute bottom-[5%] right-[-10%] opacity-15 scale-[0.35] -rotate-12">
          <SacredGeometry size="40vw" className="animate-[drift_55s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Secondary lower cluster for balance */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[80vh] opacity-40">
        <div 
          className="orb-cluster-item floating-orb w-[700px] h-[700px] bottom-[10%] left-[-5%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-gold) 0%, transparent 70%)',
            animationDelay: '-15s'
          }} 
        />
        <div 
          className="orb-cluster-item floating-orb w-[500px] h-[500px] bottom-[20%] left-[30%]" 
          style={{ 
            background: 'radial-gradient(circle, var(--orb-color-white) 0%, transparent 70%)',
            animationDelay: '-7s'
          }} 
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [showRegistry, setShowRegistry] = useState(false);
  const [selectedArchetype, setSelectedArchetype] = useState<ArchetypeData | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleArchetypeSelect = (archetype: ArchetypeData) => {
    setSelectedArchetype(archetype);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromReport = () => {
    setSelectedArchetype(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'MAIN' || target.classList.contains('bg-gradient-mirror')) {
      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <main 
      onClick={handleBackgroundClick}
      className="min-h-screen relative selection:bg-[var(--color-gold)] selection:text-white transition-colors duration-1000"
    >
      <div className="bg-gradient-mirror" style={{ height: '300vh' }} />
      
      <Header 
        onToggleArchetypes={(val) => {
          setShowRegistry(val);
          setSelectedArchetype(null);
        }} 
        showArchetypes={showRegistry}
        isReportView={!!selectedArchetype}
      />
      
      <FloatingBackground />
      
      <div className="relative z-10">
        {selectedArchetype ? (
          <ArchetypeReport archetype={selectedArchetype} onBack={handleBackFromReport} />
        ) : showRegistry ? (
          <Archetypes onSelect={handleArchetypeSelect} />
        ) : (
          <>
            <Hero />
            <div className="relative z-30 space-y-96 pb-64">
              <Questionnaire onShowReport={handleArchetypeSelect} />
              
              <section id="the-method" className="py-96 border-t border-[var(--border-color)] relative overflow-hidden">
                  <div className="container mx-auto px-12 text-center max-w-4xl">
                      <span className="text-[10px] uppercase tracking-[1em] text-[var(--color-gold)] font-bold mb-24 block">The Mirroring Method</span>
                      <h2 className="text-8xl md:text-[160px] font-serif mb-24 font-light italic leading-none text-[var(--text-color)] opacity-90">Reflect.</h2>
                      <p className="text-sm font-medium leading-[2.2] mb-32 max-w-2xl mx-auto uppercase tracking-[0.5em] text-[var(--text-color)] opacity-70">
                          Wealth is not a metric, it is an energetic signature. <br/>A geometry that mirrors the architecture of your soul.
                      </p>
                      <div className="mirror-divider w-48 mx-auto opacity-30" />
                  </div>
              </section>
            </div>
          </>
        )}
      </div>

      <footer className="py-64 border-t border-[var(--border-color)] relative z-10 mt-64">
        <div className="container mx-auto px-16">
            <div className="flex flex-col md:flex-row justify-between items-start gap-40">
                <div className="max-w-md">
                    <div className="mb-16">
                      <span className="thin-logo">MIRRA</span>
                    </div>
                    <p className="text-[var(--text-color)] text-[11px] leading-loose tracking-[0.5em] uppercase font-medium opacity-60">
                        A cinematic inquiry into the nature of abundance and spiritual geometry.
                    </p>
                </div>
                <div className="flex gap-48">
                    <div className="space-y-10">
                        <span className="text-[10px] uppercase tracking-[0.8em] text-[var(--color-gold)] font-bold">The Origin</span>
                        <ul className="space-y-4 text-[10px] tracking-[0.4em] uppercase font-semibold">
                            <li><a href="#" className="text-[var(--text-color)] opacity-60 hover:opacity-100 transition-all">Manifesto</a></li>
                            <li><a href="#" className="text-[var(--text-color)] opacity-60 hover:opacity-100 transition-all">Registry</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-48 pt-16 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.8em] opacity-40 text-[var(--text-color)] font-bold">
                <span>London — Zurich — New York</span>
                <span className="italic font-serif normal-case tracking-normal text-[14px]">Reflecting the architecture of abundance</span>
            </div>
        </div>
      </footer>
    </main>
  );
};

export default App;