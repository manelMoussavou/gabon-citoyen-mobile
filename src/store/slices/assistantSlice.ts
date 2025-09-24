import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatMessage, AdminProcedure } from '../../types';

interface AssistantState {
  messages: ChatMessage[];
  isTyping: boolean;
  procedures: AdminProcedure[];
  quickActions: AdminProcedure[];
}

const initialState: AssistantState = {
  messages: [
    {
      id: '1',
      text: 'Bonjour ! 👋 Je suis votre assistant pour toutes vos démarches administratives. Comment puis-je vous aider aujourd\'hui ?',
      isUser: false,
      timestamp: new Date(),
      type: 'text',
    },
  ],
  isTyping: false,
  procedures: [],
  quickActions: [
    {
      id: 'id_card',
      name: 'Carte d\'identité',
      category: 'documents',
      description: 'Demande ou renouvellement de carte d\'identité',
      requirements: ['Ancienne carte d\'identité', 'Acte de naissance récent', '2 photos d\'identité'],
      steps: ['Remplir le formulaire', 'Fournir les documents', 'Payer les frais', 'Retirer la carte'],
      cost: 15000,
      duration: '2-3 semaines',
      icon: '🆔',
    },
    {
      id: 'passport',
      name: 'Passeport',
      category: 'documents',
      description: 'Demande ou renouvellement de passeport',
      requirements: ['Ancien passeport', 'Acte de naissance', '2 photos d\'identité', 'Justificatif de domicile'],
      steps: ['Remplir le formulaire', 'Fournir les documents', 'Payer les frais', 'Retirer le passeport'],
      cost: 75000,
      duration: '3-4 semaines',
      icon: '📄',
    },
    {
      id: 'birth_certificate',
      name: 'Acte de naissance',
      category: 'état-civil',
      description: 'Demande d\'acte de naissance',
      requirements: ['Pièce d\'identité du demandeur', 'Informations sur la personne concernée'],
      steps: ['Remplir le formulaire', 'Fournir les informations', 'Payer les frais', 'Retirer l\'acte'],
      cost: 2000,
      duration: '1-2 jours',
      icon: '👶',
    },
    {
      id: 'property_title',
      name: 'Titre foncier',
      category: 'foncier',
      description: 'Demande de titre de propriété',
      requirements: ['Acte de vente', 'Plan cadastral', 'Certificat de domicile'],
      steps: ['Constituer le dossier', 'Déposer la demande', 'Enquête sur terrain', 'Délivrance du titre'],
      cost: 150000,
      duration: '3-6 mois',
      icon: '🏠',
    },
  ],
};

const assistantSlice = createSlice({
  name: 'assistant',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [state.messages[0]]; // Garder le message de bienvenue
    },
    addUserMessage: (state, action: PayloadAction<string>) => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        text: action.payload,
        isUser: true,
        timestamp: new Date(),
        type: 'text',
      };
      state.messages.push(message);
    },
    addBotMessage: (state, action: PayloadAction<string>) => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        text: action.payload,
        isUser: false,
        timestamp: new Date(),
        type: 'text',
      };
      state.messages.push(message);
    },
  },
});

export const {
  addMessage,
  setTyping,
  clearMessages,
  addUserMessage,
  addBotMessage,
} = assistantSlice.actions;

export default assistantSlice.reducer;
