import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Couleurs de l'application basées sur les maquettes
export const colors = {
  primary: '#0066cc',
  primaryDark: '#004499',
  secondary: '#2d7d32',
  accent: '#ffa726',
  error: '#ff4444',
  success: '#4caf50',
  warning: '#ffa726',
  info: '#0066cc',
  
  // Couleurs de statut
  statusActive: '#4caf50',
  statusPending: '#ffa726',
  statusInactive: '#999',
  
  // Couleurs de fond
  background: '#f8f9fa',
  surface: '#ffffff',
  cardBackground: '#ffffff',
  
  // Couleurs de texte
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  textOnPrimary: '#ffffff',
  
  // Couleurs de bordure et de séparation
  border: '#e3e3e3',
  divider: '#f0f0f0',
  
  // Couleurs de catégories (pour les projets de loi)
  categories: {
    agriculture: '#4caf50',
    economy: '#ff9800',
    education: '#2196f3',
    health: '#e91e63',
    digital: '#9c27b0',
    environment: '#8bc34a',
    justice: '#607d8b',
    defense: '#795548',
    social: '#f44336',
    infrastructure: '#009688',
    other: '#757575',
  },
};

// Configuration du thème Paper
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    surface: colors.surface,
    background: colors.background,
    text: colors.text,
    onSurface: colors.text,
    onBackground: colors.text,
  },
};

// Dimensions et espacements
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Tailles de police
export const typography = {
  h1: 24,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  body1: 16,
  body2: 14,
  caption: 12,
  small: 10,
};

// Border radius
export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  round: 50,
};

// Ombres
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
};

// Dimensions
export const dimensions = {
  screenWidth,
  screenHeight,
  headerHeight: 60,
  tabBarHeight: 60,
  statusBarHeight: 25,
};