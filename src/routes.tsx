import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from './pages/Dashboard';
import Info from './pages/Info';

const AppStack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="Info" component={Info} />
    </AppStack.Navigator>
  </NavigationContainer>
);

export default Routes;
