export enum DimensionType {
  VALUE_ORIENTATION = 'D1: Value Orientation',
  MONEY_RELATIONSHIP = 'D2: Money Relationship',
  FINANCIAL_MODALITY = 'D3: Financial Modality',
  PSYCHO_SPIRITUAL = 'D4: Psycho-Spiritual Energy'
}

export type DimensionLetter = 'A' | 'B';

export interface ArchetypeData {
  id: string;
  title: string;
  animal: string;
  animalIcon: 'elephant' | 'otter' | 'tiger' | 'falcon' | 'turtle' | 'snake' | 'wolf' | 'dolphin';
  tagline: string;
  dimensions: {
    D1: DimensionLetter;
    D2: DimensionLetter;
    D3: DimensionLetter;
    D4: DimensionLetter;
  };
  keywords: string[];
  description: string;
  symbolism: string;
  color: string;
}

export interface Question {
  id: number;
  dimension: DimensionType;
  text: string;
  options: {
    text: string;
    type: DimensionLetter;
  }[];
}