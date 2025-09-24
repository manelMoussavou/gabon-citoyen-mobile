import api, { ApiResponse } from './api';
import * as SecureStore from 'expo-secure-store';
import { User } from '../types';

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  location: 'gabon' | 'diaspora';
  circonscription?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';

  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login/', credentials);
    const { user, token } = response.data;
    
    // Sauvegarder le token et les données utilisateur
    await SecureStore.setItemAsync(this.TOKEN_KEY, token);
    await SecureStore.setItemAsync(this.USER_KEY, JSON.stringify(user));
    
    return response.data;
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register/', userData);
    const { user, token } = response.data;
    
    // Sauvegarder le token et les données utilisateur
    await SecureStore.setItemAsync(this.TOKEN_KEY, token);
    await SecureStore.setItemAsync(this.USER_KEY, JSON.stringify(user));
    
    return response.data;
  }

  async logout(): Promise<void> {
    // Supprimer les données stockées
    await SecureStore.deleteItemAsync(this.TOKEN_KEY);
    await SecureStore.deleteItemAsync(this.USER_KEY);
  }

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/auth/profile/');
    
    // Mettre à jour les données utilisateur stockées
    await SecureStore.setItemAsync(this.USER_KEY, JSON.stringify(response.data));
    
    return response.data;
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await api.patch<User>('/auth/profile/', userData);
    
    // Mettre à jour les données utilisateur stockées
    await SecureStore.setItemAsync(this.USER_KEY, JSON.stringify(response.data));
    
    return response.data;
  }

  async getStoredToken(): Promise<string | null> {
    return await SecureStore.getItemAsync(this.TOKEN_KEY);
  }

  async getStoredUser(): Promise<User | null> {
    const userData = await SecureStore.getItemAsync(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.getStoredToken();
    return !!token;
  }
}

export const authService = new AuthService();
