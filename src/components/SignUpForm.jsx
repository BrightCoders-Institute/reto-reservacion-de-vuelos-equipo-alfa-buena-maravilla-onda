import React, { useState, useEffect } from 'react';
import TextAlert from './TextAlert';
import { StyleSheet, SafeAreaView, Text, Pressable, View } from 'react-native';
import FormField from './FormField';
import SignUpButton from './SignUpButton';
import CheckBox from '@react-native-community/checkbox';
import handleSignup from '../hooks/handleSignup';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [textAlert, setTextAlert] = useState(false);
  const [subscribeChecked, setSubscribeChecked] = useState(false);
  const [isButtonEnabled, setButtonEnabled] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignUp = async () => {
    const userPromise = handleSignup(firstName, email, password);

    if (userPromise instanceof Promise) {
      try {
        const user = await userPromise;
        if (user) {
          setButtonEnabled(false); // Deshabilitar el botón de registro
          setIsRegistered(true); // Establecer el estado de registro a true
        }
      } catch (error) {
        console.error('Error al registrarse:', error);
        setTextAlert(!textAlert);
      }
    }
  };

  const handleTermsCheck = () => {
    setTermsChecked(!termsChecked);
  };

  const handleSubscribeCheck = () => {
    setSubscribeChecked(!subscribeChecked);
  };

  const checkButtonEnabled = () => {
    if (termsChecked && subscribeChecked) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  };

  useEffect(() => {
    checkButtonEnabled();
  }, [termsChecked, subscribeChecked]);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Sign Up</Text>
      <FormField
        fieldText="First name*"
        typeField="string"
        value={firstName}
        onChangeText={setFirstName}
      />
      <FormField
        fieldText="Email*"
        typeField="email"
        value={email}
        onChangeText={setEmail}
      />

      {textAlert === true ? (
        <TextAlert position={'absolute'} left={'30%'} top={'39%'} texto="*Incorrect email and/or password" />
      ) : null}
      <FormField
        fieldText="Password*"
        secureTextEntry={true}
        typeField="password"
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxText}>
          <CheckBox disabled={false} value={termsChecked} onValueChange={handleTermsCheck} />
          <Text>
            I agree to the<Text style={{ textDecorationLine: 'underline' }}>Terms</Text> and{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.checkBoxText}>
          <CheckBox disabled={false} value={subscribeChecked} onValueChange={handleSubscribeCheck} />
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
});

export default SignUpForm;
