import { ArchetypeData, Question, DimensionType } from './types';

export const ARCHETYPES: ArchetypeData[] = [
  {
    id: 'guardian',
    title: "The Guardian",
    animal: "Elephant",
    animalIcon: 'elephant',
    tagline: "Preservation of legacy and ancestral strength.",
    dimensions: { D1: 'A', D2: 'B', D3: 'A', D4: 'B' },
    keywords: ['Legacy', 'Protection', 'Security', 'Prudence'],
    description: "The Guardian acts as a fortress for wealth, prioritizing the safety of the collective over speculative gain. You are the steward of tradition and the guarantor of future stability.",
    symbolism: "The Elephant signifies communal memory and immense protective power, standing firm against the volatility of the external world.",
    color: '#3B82F6' // 🟦 Blue: Preserve / Stabilize
  },
  {
    id: 'builder',
    title: "The Builder",
    animal: "Turtle",
    animalIcon: 'turtle',
    tagline: "Solid foundations through intuitive stability.",
    dimensions: { D1: 'A', D2: 'B', D3: 'A', D4: 'A' },
    keywords: ['Structure', 'Accumulation', 'Growth', 'Awareness'],
    description: "The Builder represents a methodical approach to abundance, grounded in consistent effort and a deep sense of internal alignment. You value long-term structures that provide both physical and spiritual security.",
    symbolism: "The Turtle embodies the marriage of patience and protection, navigating the tides of wealth with an unshakeable inner compass.",
    color: '#1D4ED8' // 🟦 Blue: Preserve / Stabilize
  },
  {
    id: 'harmonizer',
    title: "The Harmonizer",
    animal: "Dolphin",
    animalIcon: 'dolphin',
    tagline: "Fluid resonance and collaborative abundance.",
    dimensions: { D1: 'A', D2: 'A', D3: 'B', D4: 'A' },
    keywords: ['Fluidity', 'Resonance', 'Creation', 'Unity'],
    description: "The Harmonizer views wealth as a frequency to be tuned rather than a resource to be hoarded. You excel at creating environments where prosperity flows naturally through connection and shared purpose.",
    symbolism: "The Dolphin represents a high-frequency intelligence that masterfully navigates the emotional and financial currents of life.",
    color: '#10B981' // 🟩 Green: Meaning / Community
  },
  {
    id: 'strategist',
    title: "The Strategist",
    animal: "Wolf",
    animalIcon: 'wolf',
    tagline: "Calculated expansion with collective vision.",
    dimensions: { D1: 'B', D2: 'B', D3: 'A', D4: 'A' },
    keywords: ['Execution', 'Logic', 'Strategy', 'Optimization'],
    description: "The Strategist is the architect of growth, using precision and logical foresight to build influential systems. You balance individual mastery with a deep understanding of market dynamics.",
    symbolism: "The Wolf represents disciplined independence and tactical intelligence, knowing exactly when to lead and when to act with the pack.",
    color: '#059669' // 🟩 Green: Meaning / Community
  },
  {
    id: 'empath',
    title: "The Empath",
    animal: "Otter",
    animalIcon: 'otter',
    tagline: "Nurturing flow with flexible resilience.",
    dimensions: { D1: 'A', D2: 'A', D3: 'B', D4: 'B' },
    keywords: ['Empathy', 'Flexibility', 'Nurture', 'Joy'],
    description: "The Empath prioritizes human connection as the ultimate form of currency. You seek a relationship with money that is light, responsive, and deeply rooted in the well-being of your inner circle.",
    symbolism: "The Otter symbolizes the joy of social abundance and the ability to maintain fluid wealth within a close-knit community.",
    color: '#F59E0B' // 🟨 Yellow: Flow / Adapt
  },
  {
    id: 'explorer',
    title: "The Explorer",
    animal: "Snake",
    animalIcon: 'snake',
    tagline: "Metamorphic growth and adaptive discovery.",
    dimensions: { D1: 'B', D2: 'A', D3: 'B', D4: 'B' },
    keywords: ['Evolution', 'Adaptation', 'Discovery', 'Trial'],
    description: "The Explorer views wealth as an evolving journey of transformation. You are willing to shed outdated skins and financial structures in pursuit of deeper truths and unconventional prosperity.",
    symbolism: "The Snake signifies the cycles of renewal and the wisdom found in patient, calculated movement through unknown territories.",
    color: '#D97706' // 🟨 Yellow: Flow / Adapt
  },
  {
    id: 'power-seeker',
    title: "The Power Seeker",
    animal: "Tiger",
    animalIcon: 'tiger',
    tagline: "Unwavering drive and primal execution.",
    dimensions: { D1: 'B', D2: 'B', D3: 'A', D4: 'B' },
    keywords: ['Dominance', 'Execution', 'Ambition', 'Action'],
    description: "The Power Seeker thrives on the frontier of expansion. You view wealth as a primary tool for asserting influence and realizing grand-scale objectives through decisive action and control.",
    symbolism: "The Tiger embodies raw courage and concentrated focus, seizing opportunities with a singular, unyielding intent.",
    color: '#8B5CF6' // 🟪 Purple: Vision / Expansion
  },
  {
    id: 'visionary',
    title: "The Visionary",
    animal: "Falcon",
    animalIcon: 'falcon',
    tagline: "High-perspective foresight and creative speed.",
    dimensions: { D1: 'B', D2: 'A', D3: 'B', D4: 'A' },
    keywords: ['Precision', 'Insight', 'Speed', 'Ideals'],
    description: "The Visionary operates from a place of elevated perspective, identifying patterns others miss. You leverage innovation to leapfrog standard models and create entirely new paradigms of value.",
    symbolism: "The Falcon represents the clarity of a high-altitude view and the precision of a perfectly timed descent upon new opportunities.",
    color: '#7C3AED' // 🟪 Purple: Vision / Expansion
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: DimensionType.VALUE_ORIENTATION,
    text: "At this stage of your evolution, what serves as your primary driver?",
    options: [
      { text: "Preservation: Maintaining stability and temporal freedom", type: 'A' },
      { text: "Expansion: Driving impact and achieving ambitious milestones", type: 'B' }
    ]
  },
  {
    id: 2,
    dimension: DimensionType.VALUE_ORIENTATION,
    text: "When conceptualizing true wealth, which state feels most resonant?",
    options: [
      { text: "Independance: Having a secure base that ensures safety", type: 'A' },
      { text: "Manifestation: Scaling a legacy that reflects your vision", type: 'B' }
    ]
  },
  {
    id: 3,
    dimension: DimensionType.VALUE_ORIENTATION,
    text: "Which sacrifice are you more inclined to accept?",
    options: [
      { text: "Ceding rapid growth to ensure enduring tranquility", type: 'A' },
      { text: "Ceding comfort to pursue high-risk, high-reward horizons", type: 'B' }
    ]
  },
  {
    id: 4,
    dimension: DimensionType.VALUE_ORIENTATION,
    text: "Where do you find your highest form of fulfillment?",
    options: [
      { text: "Sustaining peace and personal mastery", type: 'A' },
      { text: "Disrupting norms and seeing tangible, global results", type: 'B' }
    ]
  },
  {
    id: 5,
    dimension: DimensionType.MONEY_RELATIONSHIP,
    text: "Upon receiving significant unexpected capital, your primary impulse is:",
    options: [
      { text: "Flow: Engaging with the momentum for immediate reinvestment or experience", type: 'A' },
      { text: "Anchor: Securing the asset within a structured long-term plan", type: 'B' }
    ]
  },
  {
    id: 6,
    dimension: DimensionType.MONEY_RELATIONSHIP,
    text: "Your internal framework for capital management is:",
    options: [
      { text: "Intuitive: Prioritizing flexibility and responsive flow", type: 'A' },
      { text: "Systemic: Prioritizing clarity, safety, and organization", type: 'B' }
    ]
  },
  {
    id: 7,
    dimension: DimensionType.MONEY_RELATIONSHIP,
    text: "Regarding high-value investments in self-development or experiences:",
    options: [
      { text: "I rely on energetic resonance—if the alignment is there, I act", type: 'A' },
      { text: "I rely on logical analysis—assessing the ROI before commitment", type: 'B' }
    ]
  },
  {
    id: 8,
    dimension: DimensionType.FINANCIAL_MODALITY,
    text: "How do you navigate the landscape of financial growth?",
    options: [
      { text: "Structured: Preferring predictable, methodical accumulation", type: 'A' },
      { text: "Agile: Preferring momentum-based, opportunistic growth", type: 'B' }
    ]
  },
  {
    id: 9,
    dimension: DimensionType.FINANCIAL_MODALITY,
    text: "What defines the architecture of your wealth building?",
    options: [
      { text: "Foundational: Creating robust, durable systems", type: 'A' },
      { text: "Pattern-Based: Identifying and riding future market shifts", type: 'B' }
    ]
  },
  {
    id: 10,
    dimension: DimensionType.FINANCIAL_MODALITY,
    text: "What level of oversight do you require for your financial systems?",
    options: [
      { text: "High: Absolute control over every structural detail", type: 'A' },
      { text: "Low: Trusting the natural timing and macro-alignment", type: 'B' }
    ]
  },
  {
    id: 11,
    dimension: DimensionType.PSYCHO_SPIRITUAL,
    text: "Do you believe your financial patterns mirror your internal state?",
    options: [
      { text: "Integrated: Financial flow is a reflection of consciousness", type: 'A' },
      { text: "Pragmatic: Wealth is a practical tool independent of emotion", type: 'B' }
    ]
  },
  {
    id: 12,
    dimension: DimensionType.PSYCHO_SPIRITUAL,
    text: "Where do you focus your energy to catalyze financial evolution?",
    options: [
      { text: "Consciousness: Clearing energetic and emotional blockages", type: 'A' },
      { text: "Logistics: Refined strategic planning and execution", type: 'B' }
    ]
  },
  {
    id: 13,
    dimension: DimensionType.PSYCHO_SPIRITUAL,
    text: "When encountering a financial contraction, your default is to:",
    options: [
      { text: "Inward: Seeking the subconscious resistance or block", type: 'A' },
      { text: "Outward: Analyzing data points and refining the strategy", type: 'B' }
    ]
  },
  {
    id: 14,
    dimension: DimensionType.PSYCHO_SPIRITUAL,
    text: "Following a sudden large wealth expansion, your priority is:",
    options: [
      { text: "Capacity: Expanding your emotional and energetic containers", type: 'A' },
      { text: "Allocation: Optimizing the management of the new assets", type: 'B' }
    ]
  }
];