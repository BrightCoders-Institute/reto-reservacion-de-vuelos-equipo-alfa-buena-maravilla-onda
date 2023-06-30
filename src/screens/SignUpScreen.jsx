import {View, StyleSheet} from 'react-native';
import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = () => {
  return (
    <View  style={styles.container} >
      <SignUpForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
export default SignUpScreen;
