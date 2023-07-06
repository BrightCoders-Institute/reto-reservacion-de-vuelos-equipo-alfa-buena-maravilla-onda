import {View} from 'react-native';
import React from 'react';
import SignUpForm from '../components/SignUpForm';
import SignUpScreenStyles from '../styles/SignUpScreenStyles';

const SignUpScreen = () => {
  return (
    <View style={SignUpScreenStyles.container}>
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;
