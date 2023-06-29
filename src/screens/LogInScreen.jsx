import {View, ImageBackground,StyleSheet} from 'react-native';
import React from 'react';
import LogInForm from '../components/LogInForm';
import Fontisto from 'react-native-vector-icons/Fontisto';

const LogInScreen = () => {

  return (
    <ImageBackground
      source={ require('../../img/Coolsky.png')}
      
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <Fontisto name="paper-plane" size={200} color={'#000'} />
        </View>
        <LogInForm />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  logo:{
    alignItems: 'center', 
    marginTop: 40,
  },
  container:{
    marginTop:30,
  },
})
export default LogInScreen;
