import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LegalAnalysis, Bill } from '../../types';

interface AnalysisState {
  selectedBill: Bill | null;
  currentAnalysis: LegalAnalysis | null;
  analysisHistory: LegalAnalysis[];
  analysisTypes: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
    active: boolean;
  }>;
  isAnalyzing: boolean;
}

const initialState: AnalysisState = {
  selectedBill: {
    id: 1,
    title: 'Projet de loi sur la protection des données personnelles',
    bill_number: '2024-152',
    description: 'Cette loi vise à renforcer la protection des données personnelles des citoyens gabonais',
    full_text: '',
    status: 'debate',
    category: 'digital',
    author: 'Ministère du Numérique',
    submitted_date: '2024-01-15T10:00:00Z',
    last_updated: '2024-01-20T15:30:00Z',
    pages_count: 47,
    time_since_submitted: '5 jours',
  },
  currentAnalysis: null,
  analysisHistory: [
    {
      id: '1',
      bill_id: 2,
      analysis_type: 'summary',
      content: 'Analyse de la loi sur l\'agriculture durable',
      created_at: '2024-01-18T10:00:00Z',
      ai_confidence: 0.92,
    },
    {
      id: '2',
      bill_id: 3,
      analysis_type: 'legal_impact',
      content: 'Impact juridique du Code de la famille révisé',
      created_at: '2024-01-13T14:00:00Z',
      ai_confidence: 0.88,
    },
  ],
  analysisTypes: [
    {
      id: 'summary',
      name: 'Résumé simplifié',
      description: 'Une explication claire et accessible du texte de loi',
      icon: '📊',
      active: true,
    },
    {
      id: 'legal_impact',
      name: 'Impact juridique',
      description: 'Analyse des implications juridiques',
      icon: '⚖️',
      active: false,
    },
    {
      id: 'citizen_impact',
      name: 'Impact citoyen',
      description: 'Comment cette loi affecte les citoyens',
      icon: '👥',
      active: false,
    },
    {
      id: 'economic_impact',
      name: 'Impact économique',
      description: 'Conséquences économiques de la loi',
      icon: '💰',
      active: false,
    },
  ],
  isAnalyzing: false,
};

const analysisSlice = createSlice({
  name: 'analysis',
  initialState,
  reducers: {
    setSelectedBill: (state, action: PayloadAction<Bill>) => {
      state.selectedBill = action.payload;
    },
    setAnalysisType: (state, action: PayloadAction<string>) => {
      state.analysisTypes.forEach(type => {
        type.active = type.id === action.payload;
      });
    },
    startAnalysis: (state) => {
      state.isAnalyzing = true;
    },
    completeAnalysis: (state, action: PayloadAction<LegalAnalysis>) => {
      state.isAnalyzing = false;
      state.currentAnalysis = action.payload;
      state.analysisHistory.unshift(action.payload);
    },
    clearCurrentAnalysis: (state) => {
      state.currentAnalysis = null;
    },
  },
});

export const {
  setSelectedBill,
  setAnalysisType,
  startAnalysis,
  completeAnalysis,
  clearCurrentAnalysis,
} = analysisSlice.actions;

export default analysisSlice.reducer;
