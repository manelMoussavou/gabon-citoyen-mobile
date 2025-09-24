import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import parliamentReducer from './slices/parliamentSlice';
import assistantReducer from './slices/assistantSlice';
import diasporaReducer from './slices/diasporaSlice';
import analysisReducer from './slices/analysisSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    parliament: parliamentReducer,
    assistant: assistantReducer,
    diaspora: diasporaReducer,
    analysis: analysisReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
