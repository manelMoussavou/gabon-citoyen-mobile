import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Configuration de base de l'API
const BASE_URL = __DEV__ ? 'http://127.0.0.1:8000/api/v1' : 'https://api.gaboncitoyen.com/api/v1';

// Instance Axios
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync('auth_token');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
    } catch (error) {
      console.error('Error getting auth token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs de réponse
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expiré, supprimer le token et rediriger vers login
      await SecureStore.deleteItemAsync('auth_token');
      // Ici, vous pouvez déclencher une action Redux pour déconnecter l'utilisateur
    }
    return Promise.reject(error);
  }
);

export default api;

// Types pour les réponses API
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

// Gestion des erreurs API
export const handleApiError = (error: any): string => {
  if (error.response) {
    // Le serveur a répondu avec un code d'erreur
    if (error.response.data?.message) {
      return error.response.data.message;
    }
    if (error.response.data?.detail) {
      return error.response.data.detail;
    }
    if (error.response.status === 500) {
      return 'Erreur interne du serveur. Veuillez réessayer plus tard.';
    }
    return `Erreur ${error.response.status}: ${error.response.statusText}`;
  } else if (error.request) {
    // La requête a été faite mais aucune réponse n'a été reçue
    return 'Impossible de contacter le serveur. Vérifiez votre connexion internet.';
  } else {
    // Erreur lors de la configuration de la requête
    return 'Une erreur inattendue s\'est produite.';
  }
};
