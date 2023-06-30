import React from 'react';
import {View} from 'react-native';
import FormField from './FormField';
import UseFormState from '../hooks/UseFormState';
import SignUpButton from './SignUpButton';

const LogInForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isButtonEnabled,
  } = UseFormState();

  return (
    <View>
      <FormField
        fieldText="Email"
        typeField="email"
        value={email}
        onChangeText={setEmail}
        error={null}
      />

      <FormField
        fieldText="Password"
        secureTextEntry={true}
        typeField="password"
        value={password}
        onChangeText={setPassword}
        error={null}
      />

      <SignUpButton
        onPress={null}
        isEnabled={true}
        signUpButtonText="Log In"
        googleSignInButtonText="Log in with Google"
      />
    </View>
  );
};

export default LogInForm;
