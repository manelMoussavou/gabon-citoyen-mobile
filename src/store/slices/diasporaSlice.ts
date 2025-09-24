import { createSlice } from '@reduxjs/toolkit';
import { DiasporaService, DiasporaEvent } from '../../types';

interface DiasporaState {
  services: DiasporaService[];
  events: DiasporaEvent[];
  userLocation: string;
  communityStats: {
    membersCount: number;
    location: string;
  } | null;
  news: Array<{
    id: string;
    title: string;
    summary: string;
    date: string;
  }>;
}

const initialState: DiasporaState = {
  services: [
    {
      id: 'embassy',
      name: 'Ambassade la plus proche',
      type: 'consular',
      description: 'Trouvez votre représentation diplomatique',
      icon: '🏛️',
    },
    {
      id: 'remote_procedures',
      name: 'Démarches à distance',
      type: 'consular',
      description: 'Procédures disponibles en ligne',
      icon: '📋',
    },
    {
      id: 'voting_abroad',
      name: 'Vote à l\'étranger',
      type: 'consular',
      description: 'Modalités de vote depuis l\'étranger',
      icon: '🗳️',
    },
  ],
  events: [
    {
      id: 'independence_day',
      title: 'Fête de l\'indépendance',
      description: 'Célébration de l\'indépendance du Gabon',
      date: '2024-08-17T14:00:00Z',
      location: 'Parc de Vincennes, Paris',
      type: 'cultural',
      organizer: 'Communauté gabonaise de Paris',
    },
  ],
  userLocation: 'Paris, France',
  communityStats: {
    membersCount: 2847,
    location: 'Paris, France',
  },
  news: [
    {
      id: '1',
      title: 'Nouveau gouvernement : les principales nominations',
      summary: 'Le président a nommé les nouveaux membres du gouvernement',
      date: '2024-01-15',
    },
    {
      id: '2',
      title: 'Économie : croissance de 3,2% au 2e trimestre',
      summary: 'L\'économie gabonaise affiche une croissance positive',
      date: '2024-01-12',
    },
    {
      id: '3',
      title: 'Infrastructure : inauguration de l\'autoroute Libreville-Lambaréné',
      summary: 'Une nouvelle infrastructure majeure pour le pays',
      date: '2024-01-10',
    },
  ],
};

const diasporaSlice = createSlice({
  name: 'diaspora',
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    updateCommunityStats: (state, action) => {
      state.communityStats = action.payload;
    },
  },
});

export const { setUserLocation, updateCommunityStats } = diasporaSlice.actions;
export default diasporaSlice.reducer;
