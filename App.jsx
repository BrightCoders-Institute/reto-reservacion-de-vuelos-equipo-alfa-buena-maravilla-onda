import React from 'react';
import {
  SafeAreaView,
  StatusBar,

} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import SingnUpButton from './src/components/SingnUpButton';



function App() {

  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FFFFFF'/>
      <SignUpScreen/>
      <SingnUpButton/>
    </SafeAreaView>
  );
}

export default App;
