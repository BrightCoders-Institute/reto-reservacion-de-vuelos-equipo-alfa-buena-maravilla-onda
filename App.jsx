import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';

function App({ navigation }) {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer> 
  );
}

export default App;
