import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

import ParliamentNavigator from './ParliamentNavigator';
import DeputyNavigator from './DeputyNavigator';
import AssistantNavigator from './AssistantNavigator';
import DiasporaNavigator from './DiasporaNavigator';
import AnalysisNavigator from './AnalysisNavigator';

import { MainTabParamList } from '../types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Parliament':
              iconName = focused ? 'business' : 'business-outline';
              break;
            case 'Deputy':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Assistant':
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              break;
            case 'Diaspora':
              iconName = focused ? 'globe' : 'globe-outline';
              break;
            case 'Analysis':
              iconName = focused ? 'analytics' : 'analytics-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Parliament" 
        component={ParliamentNavigator}
        options={{ tabBarLabel: 'Parlement' }}
      />
      <Tab.Screen 
        name="Deputy" 
        component={DeputyNavigator}
        options={{ tabBarLabel: 'Mon Député' }}
      />
      <Tab.Screen 
        name="Assistant" 
        component={AssistantNavigator}
        options={{ tabBarLabel: 'Assistant' }}
      />
      <Tab.Screen 
        name="Diaspora" 
        component={DiasporaNavigator}
        options={{ tabBarLabel: 'Diaspora' }}
      />
      <Tab.Screen 
        name="Analysis" 
        component={AnalysisNavigator}
        options={{ tabBarLabel: 'Analyse' }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
