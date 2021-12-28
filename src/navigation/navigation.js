// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'LIST NEGARA', 
            headerStyle: {
              backgroundColor: '#A3E3FA',
            }, 
            // headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }} 
        />
        <Stack.Screen 
          name="Peta" 
          component={DetailScreen} 
          options={{ 
            title: 'PETA NEGARA', 
            headerStyle: {
              backgroundColor: '#A3E3FA',
            }, 
            // headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;