import React from 'react';

interface HeaderProps {
  onToggleArchetypes: (show: boolean) => void;
  showArchetypes: boolean;
  isReportView?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleArchetypes, showArchetypes, isReportView }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[150] px-16 py-12 flex justify-between items-center pointer-events-none">
      <div 
        onClick={() => onToggleArchetypes(false)}
        className="pointer-events-auto cursor-pointer flex flex-col group"
      >
        <span className="thin-logo">MIRRA</span>
        <div className="w-0 h-[1px] bg-[var(--text-color)] opacity-20 group-hover:w-full transition-all duration-1000 mt-1" />
      </div>
      
      <nav className="hidden md:flex gap-20 pointer-events-auto items-center">
        <button 
          onClick={() => onToggleArchetypes(!showArchetypes)}
          className={`text-[10px] uppercase tracking-[0.5em] font-medium transition-all ${showArchetypes && !isReportView ? 'text-[var(--color-gold)]' : 'opacity-50 hover:opacity-100 text-[var(--text-color)]'}`}
        >
          {showArchetypes && !isReportView ? 'Back' : 'Registry'}
        </button>
        <button 
          onClick={() => { onToggleArchetypes(false); document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="text-[10px] uppercase tracking-[0.5em] opacity-50 hover:opacity-100 transition-all font-medium text-[var(--text-color)]"
        >
          Assessment
        </button>
      </nav>

      <div className="pointer-events-auto hidden lg:block opacity-30 hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 border border-[var(--border-color)] rounded-full flex items-center justify-center cursor-pointer hover:border-[var(--text-color)] transition-all">
            <div className="w-[2px] h-[2px] bg-currentColor rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;