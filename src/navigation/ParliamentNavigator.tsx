import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ParliamentHomeScreen from '../screens/parliament/ParliamentHomeScreen';
import BillDetailScreen from '../screens/parliament/BillDetailScreen';
import BillSearchScreen from '../screens/parliament/BillSearchScreen';
import { ParliamentStackParamList } from '../types';

const Stack = createStackNavigator<ParliamentStackParamList>();

const ParliamentNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="ParliamentHome" 
        component={ParliamentHomeScreen}
      />
      <Stack.Screen 
        name="BillDetail" 
        component={BillDetailScreen}
        options={{ headerShown: true, title: 'Détail du projet' }}
      />
      <Stack.Screen 
        name="BillSearch" 
        component={BillSearchScreen}
        options={{ headerShown: true, title: 'Recherche' }}
      />
    </Stack.Navigator>
  );
};

export default ParliamentNavigator;
