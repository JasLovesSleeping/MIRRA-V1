import React, { useState, useMemo } from 'react';
import { QUESTIONS, ARCHETYPES } from '../constants';
import { ArchetypeData, DimensionType, DimensionLetter } from '../types';
import AnimalIllustration from './Crystal';

interface QuestionnaireProps {
  onShowReport: (archetype: ArchetypeData) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ onShowReport }) => {
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, DimensionLetter>>({});
  const [result, setResult] = useState<ArchetypeData | null>(null);

  const dimensionGroups = useMemo(() => {
    const groups: Record<string, typeof QUESTIONS> = {};
    QUESTIONS.forEach(q => {
      if (!groups[q.dimension]) groups[q.dimension] = [];
      groups[q.dimension].push(q);
    });
    return Object.entries(groups).map(([name, qs]) => ({ name: name as DimensionType, questions: qs }));
  }, []);

  const currentDimension = dimensionGroups[currentDimensionIndex];

  const handleAnswer = (questionId: number, type: DimensionLetter) => {
    setResponses(prev => ({ ...prev, [questionId]: type }));
  };

  const isDimensionComplete = currentDimension.questions.every(q => responses[q.id] !== undefined);

  const nextStep = () => {
    if (currentDimensionIndex < dimensionGroups.length - 1) {
      setCurrentDimensionIndex(currentDimensionIndex + 1);
      window.scrollTo({ top: document.getElementById('questionnaire')?.offsetTop || 0, behavior: 'smooth' });
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const dimResults: Record<string, DimensionLetter> = {};
    
    dimensionGroups.forEach(group => {
      let countA = 0;
      let countB = 0;
      group.questions.forEach(q => {
        if (responses[q.id] === 'A') countA++;
        else countB++;
      });
      
      const dimKey = group.name.split(':')[0] as keyof ArchetypeData['dimensions'];
      dimResults[dimKey] = countA >= countB ? 'A' : 'B';
    });

    const match = ARCHETYPES.find(a => 
      a.dimensions.D1 === dimResults.D1 &&
      a.dimensions.D2 === dimResults.D2 &&
      a.dimensions.D3 === dimResults.D3 &&
      a.dimensions.D4 === dimResults.D4
    );

    setResult(match || ARCHETYPES[0]);
  };

  if (result) {
    return (
      <div id="results" className="min-h-screen flex items-center justify-center py-40 animate-in fade-in duration-[2s]">
        <div className="max-w-4xl w-full border border-[var(--color-gold)]/30 p-24 text-center relative overflow-hidden backdrop-blur-3xl bg-transparent shadow-[0_0_50px_rgba(192,164,117,0.1)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_80%)] opacity-10" />
          <div className="w-56 h-56 mx-auto mb-16 floating-shard">
            <AnimalIllustration icon={result.animalIcon} color={result.color} />
          </div>
          <h2 className="text-[var(--color-gold)] tracking-[1.2em] uppercase text-[12px] mb-8 font-bold">The Mirror's Response</h2>
          <h3 className="text-7xl font-serif mb-6 font-[100] tracking-tight shimmer-text">{result.animal}</h3>
          <p className="text-[12px] uppercase tracking-[0.6em] text-[var(--color-gold-deep)] mb-12 font-bold">{result.title} — {result.tagline}</p>
          <p className="text-xl font-medium opacity-100 mb-20 max-w-xl mx-auto leading-relaxed italic text-[var(--text-color)]">
            "{result.description.slice(0, 150)}..."
          </p>
          <div className="flex justify-center gap-12">
            <button 
              onClick={() => onShowReport(result)}
              className="px-20 py-6 bg-[var(--text-color)] text-white text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-[var(--color-gold)] transition-all shadow-xl"
            >
              Reveal Animal Totem
            </button>
            <button onClick={() => window.location.reload()} className="px-12 py-6 border border-[var(--color-gold)]/20 text-[10px] uppercase tracking-[0.6em] text-[var(--text-color)] opacity-60 hover:opacity-100 transition-all">Retry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="questionnaire" className="min-h-screen pt-48 pb-48 relative transition-colors duration-1000">
      <div className="container mx-auto px-12 max-w-4xl relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 border-b border-[var(--border-color)] pb-16 gap-8">
           <div className="max-w-md">
              <span className="text-[12px] uppercase tracking-[1em] text-[var(--color-gold)] block mb-6 font-bold">{currentDimension.name}</span>
              <h2 className="text-6xl font-serif font-[100] mb-4 shimmer-text">Mapping Consciousness</h2>
              <p className="text-[14px] text-[var(--text-color)] font-semibold uppercase tracking-[0.4em] italic leading-loose opacity-100">
                Intuitive Inquiry Phase
              </p>
           </div>
           <div className="w-full md:w-64 h-[2px] bg-[var(--border-color)] relative overflow-hidden mb-4">
              <div className="h-full bg-[var(--color-gold)] transition-all duration-1000 shadow-[0_0_15px_var(--color-gold)]" style={{ width: `${((currentDimensionIndex + 1) / dimensionGroups.length) * 100}%` }} />
           </div>
        </div>

        {/* Light golden-ivory tone Background Container (#FFFBF5) */}
        <div className="relative -mx-16 px-16 py-32 md:py-48 bg-[#FFFBF5]/95 backdrop-blur-md shadow-[0_20px_100px_rgba(188,159,121,0.05)] border-y border-[var(--color-gold)]/10 rounded-sm">
          <div className="space-y-48">
            {currentDimension.questions.map((q) => (
              <div key={q.id} className="group">
                <h4 className="text-3xl font-serif mb-20 font-[100] text-[var(--text-color)] opacity-90 group-hover:opacity-100 transition-all leading-relaxed">{q.text}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(q.id, opt.type)}
                      className={`p-10 text-left border transition-all duration-700 relative group/opt ${responses[q.id] === opt.type ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5' : 'border-[var(--border-color)] hover:border-[var(--color-gold)]/50'}`}
                    >
                      <span className={`text-[12px] font-bold tracking-[0.15em] transition-all uppercase leading-relaxed ${responses[q.id] === opt.type ? 'text-[var(--color-gold)]' : 'text-[var(--text-color)] opacity-100'}`}>{opt.text}</span>
                      <div className={`absolute top-0 left-0 w-[1.5px] h-0 bg-[var(--color-gold)] shadow-[0_0_10px_var(--color-gold)] group-hover/opt:h-full transition-all duration-700 ${responses[q.id] === opt.type ? 'h-full' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-72 flex justify-center">
            <button
              onClick={nextStep}
              disabled={!isDimensionComplete}
              className={`px-28 py-8 text-[11px] uppercase tracking-[1em] transition-all ${isDimensionComplete ? 'bg-[var(--text-color)] text-white font-bold shadow-2xl hover:scale-105 active:scale-95' : 'bg-gray-200 opacity-30 text-gray-500 cursor-not-allowed'}`}
            >
              {currentDimensionIndex === dimensionGroups.length - 1 ? 'Mirror My Totem' : 'Continue Integration'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;