import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';





function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FFFFFF'/>
      <SignUpScreen/>
    </SafeAreaView>
  );
}

export default App;
