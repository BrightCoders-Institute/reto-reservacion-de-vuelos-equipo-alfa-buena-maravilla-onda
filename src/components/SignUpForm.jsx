import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, Pressable, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import handleSignup from '../hooks/HandleSignup';
import FormField from './FormField';
import SignUpButton from './SignUpButton';
import UseFormState from '../hooks/UseFormState';  

const SignUpForm = () => {
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

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const user = await handleSignup(firstName, email, password);
      if (user.hasOwnProperty('typeError')) {
        console.log(user);
        setSignUpError(user);
      } else {
        handleSignUpSuccess();
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignUpSuccess = () => {
    setFirstName('');
    setEmail('');
    setPassword('');
    setTermsChecked(false);
    setSubscribeChecked(false);
    setIsLoading(false);
  };

  const handleTermsCheck = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubscribeCheck = () => {
    setSubscribeChecked(!subscribeChecked);
  };


  return (
    <SafeAreaView>
      <Text style={styles.title}>Sign Up</Text>
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

      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxText}>
          <CheckBox
            disabled={false}
            value={termsChecked}
            onValueChange={handleTermsCheck}
          />
          <Text>
            I agree to the
            <Text style={styles.textUnderline}>Terms</Text> and{' '}
            <Text style={styles.textUnderline}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.checkBoxText}>
          <CheckBox
            disabled={false}
            value={subscribeChecked}
            onValueChange={handleSubscribeCheck}
          />
          <Text>Subscribe for select product updates.</Text>
        </View>
      </View>
      <SignUpButton onPress={handleSignUp} isEnabled={isButtonEnabled} />
      <View style={styles.footerContainer}>
        <Text style={styles.text}>Already have an account? {''}</Text>
        <Pressable>
          <Text style={styles.logInText}>Log In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#5974f5',
    marginTop: 40,
    marginLeft: 20,
    fontWeight: '900',
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  },
  logInText: {
    color: '#707FF9',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  footerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxContainer: {
    marginLeft: 13,
    marginTop: 20,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
});

export default SignUpForm;
