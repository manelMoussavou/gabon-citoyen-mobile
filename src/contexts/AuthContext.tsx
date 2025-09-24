import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { loadStoredAuth } from '../store/slices/authSlice';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  token: null,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated, isLoading, token } = useSelector(
    (state: RootState) => state.auth
  );
  
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await dispatch(loadStoredAuth());
      } catch (error) {
        console.log('No stored auth found');
      } finally {
        setInitializing(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  const contextValue: AuthContextType = {
    user,
    isAuthenticated,
    isLoading: isLoading || initializing,
    token,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
