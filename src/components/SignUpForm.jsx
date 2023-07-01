import React, { useState} from 'react';
import {SafeAreaView, Text, Pressable, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import handleSignup from '../hooks/HandleSignup';
import FormField from './FormField';
import SignUpButton from './SignUpButton';
import UseFormState from '../hooks/UseFormState';
import LoadingModal from './LoadingModal';
import SignUpLoginFormStyles from '../styles/SignUpLoginFormStyles';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
  const navigation = useNavigation();
  const {
    firstName,
    setFirstName,
    email,
    setEmail,
    password,
    setPassword,
    termsChecked,
    setTermsChecked,
    subscribeChecked,
    setSubscribeChecked,
    isButtonEnabled,
  } = UseFormState();

  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [signInCompleted, setSignInCompleted] = useState(false);

  const handleSignUp = async () => {
    try {
      setIsModalVisible(true);
      setIsSigningIn(true);
      const user = await handleSignup(firstName, email, password);
      if (user.hasOwnProperty('typeError')) {
        console.log(user);
        setSignUpError(user);
      } else {
        handleSignUpSuccess();
      }
      setIsSigningIn(false);
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error signing up:', error);
      setIsSigningIn(false);
      setIsModalVisible(false);
    }
  };

  const handleSignUpSuccess = () => {
    setFirstName('');
    setEmail('');
    setPassword('');
    setTermsChecked(false);
    setSubscribeChecked(false);
    setSignInCompleted(true);
    navigation.replace('Home')
  };

  const handleTermsCheck = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubscribeCheck = () => {
    setSubscribeChecked(!subscribeChecked);
  };

  return (
    <SafeAreaView >
      <Text style={SignUpLoginFormStyles.title}>Sign Up</Text>
      <FormField
        fieldText="First name*"
        typeField="string"
        value={firstName}
        onChangeText={setFirstName}
        error={signUpError}
      />
      <FormField
        fieldText="Email*"
        typeField="email"
        value={email}
        onChangeText={setEmail}
        error={signUpError}
      />

      <FormField
        fieldText="Password*"
        secureTextEntry={true}
        typeField="password"
        value={password}
        onChangeText={setPassword}
        error={signUpError}
      />
      <Text style={SignUpLoginFormStyles.textPass}>
        Use 8 or more characters with a mix of letters, numbers, and symbols
      </Text>

      <View style={SignUpLoginFormStyles.checkBoxContainer}>
        <View style={SignUpLoginFormStyles.checkBoxText}>
          <CheckBox
            disabled={false}
            value={termsChecked}
            onValueChange={handleTermsCheck}
          />
          <Text>
            I agree to the
            <Text style={SignUpLoginFormStyles.textUnderline}>Terms</Text> and{' '}
            <Text style={SignUpLoginFormStyles.textUnderline}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={SignUpLoginFormStyles.checkBoxText}>
          <CheckBox
            disabled={false}
            value={subscribeChecked}
            onValueChange={handleSubscribeCheck}
          />
          <Text>Subscribe for select product updates.</Text>
        </View>
      </View>
      <SignUpButton onPress={handleSignUp} isEnabled={isButtonEnabled}   signUpButtonText="Sign Up"
  googleSignInButtonText="Sign in with Google" />
      <LoadingModal
  visible={isModalVisible}
  message="Signing up..."
  completed={false}
  isSigningIn={isSigningIn}
  signInCompleted={signInCompleted}
/>
      <View style={SignUpLoginFormStyles.footerContainer}>
        <Text style={SignUpLoginFormStyles.text}>Already have an account? {''}</Text>
        <Pressable onPress={() => navigation.push('LogIn')}>
          <Text style={SignUpLoginFormStyles.singInText}>Log In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};



export default SignUpForm;
