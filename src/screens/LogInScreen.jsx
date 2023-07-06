import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import LogInForm from '../components/LogInForm';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LogInScreenStyles from '../styles/LogInScreenStyles';

const LogInScreen = () => {
  return (
    <ImageBackground
      source={require('../../img/Coolsky.png')}
      style={LogInScreenStyles.imageBackground}>
      <View style={LogInScreenStyles.container}>
        <View style={LogInScreenStyles.logo}>
          <Text style={LogInScreenStyles.titletext}> ABC Corp </Text>
          <Fontisto name="paper-plane" size={200} color={'#5974f5'} />
        </View>
        <LogInForm />
      </View>
    </ImageBackground>
  );
};

export default LogInScreen;
