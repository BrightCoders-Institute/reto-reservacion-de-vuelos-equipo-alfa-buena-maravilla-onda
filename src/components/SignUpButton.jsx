import React, { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import signInWithGoogle from '../hooks/SignInWithGoogle';
import LoadingModal from './LoadingModal';
import SignUpButtonStyles from '../styles/SignUpButtonStyles';
import { useNavigation } from '@react-navigation/native';

const SignUpButton = ({ isEnabled, onPress,  signUpButtonText, googleSignInButtonText }) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [signInCompleted, setSignInCompleted] = useState(false);


  const handleGoogleSignIn = useCallback(async () => {
    try {
      setModalVisible(true);
      setIsLoading(true);
      await signInWithGoogle();
      setIsLoading(false);
      setSignInCompleted(true);
      setModalVisible(false);
      navigation.replace('Home');
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      setIsLoading(false);
      setModalVisible(false);
    }
  }, []);

  return (
    <View style={SignUpButtonStyles.buttonContainer}>
      <TouchableOpacity
        style={[
          SignUpButtonStyles.button,
          isEnabled ? SignUpButtonStyles.enabledBtn : SignUpButtonStyles.disabledBtn,
        ]}
        disabled={!isEnabled || isLoading}
        onPress={onPress}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fbfbfc" animating={true} />
        ) : (
          <Text style={SignUpButtonStyles.buttonText}>{signUpButtonText}</Text>
        )}
      </TouchableOpacity>

      <Text style={SignUpButtonStyles.OrText}>Or</Text>
      <TouchableOpacity
        style={[
          SignUpButtonStyles.button,
          isEnabled ? SignUpButtonStyles.enabledBtn : SignUpButtonStyles.disabledBtn,
        ]}
        disabled={!isEnabled || isLoading}
        onPress={handleGoogleSignIn}
      >
        <View style={SignUpButtonStyles.buttonContent}>
          <Image
            source={{
              uri: 'https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background.png',
            }}
            style={SignUpButtonStyles.googleLogo}
          />
          <Text style={SignUpButtonStyles.buttonText}>{googleSignInButtonText}</Text>
        </View>
      </TouchableOpacity>

      <LoadingModal visible={modalVisible} completed={false} />
    </View>
  );
};



export default SignUpButton;
