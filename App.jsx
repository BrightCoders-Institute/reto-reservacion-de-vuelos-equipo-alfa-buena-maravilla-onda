import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/Navigation/AppNavigation';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'

function App({navigation}) {
  return (
    <AutocompleteDropdownContextProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </AutocompleteDropdownContextProvider>
  );
}

export default App;
