import React, {useState} from 'react';
import {View, Pressable, Text, Alert} from 'react-native';
import FormField from './FormField';
import UseFormState from '../hooks/UseFormState';
import SignUpButton from './SignUpButton';
import handleLogIn from '../hooks/HandleLogin';
import SignUpLoginFormStyles from '../styles/SignUpLoginFormStyles';
import {useNavigation} from '@react-navigation/native';

const LogInForm = () => {
  const navigation = useNavigation();
  const [logInError, setLogInError] = useState(null);
  const {email, setEmail, password, setPassword} = UseFormState();

  const handleOnLogin = async () => {
    const userOrError = await handleLogIn(email, password);
    if (userOrError.hasOwnProperty('typeError')) {
      setLogInError(userOrError);
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View>
      <FormField
        fieldText="Email"
        typeField="email"
        value={email}
        onChangeText={setEmail}
        error={logInError}
      />

      <FormField
        fieldText="Password"
        secureTextEntry={true}
        typeField="password"
        value={password}
        onChangeText={setPassword}
        error={logInError}
      />

      <SignUpButton
        onPress={handleOnLogin}
        isEnabled={true}
        signUpButtonText="Log In"
        googleSignInButtonText="Log in with Google"
      />

      <View style={SignUpLoginFormStyles.footerContainer}>
        <Text style={SignUpLoginFormStyles.text}>
          You dont have account? {''}
        </Text>
        <Pressable onPress={() => navigation.push('SignUp')}>
          <Text style={SignUpLoginFormStyles.logInText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LogInForm;
