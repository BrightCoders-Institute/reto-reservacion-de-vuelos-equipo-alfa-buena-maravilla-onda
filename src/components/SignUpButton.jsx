import React, { useState, useCallback } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import signInWithGoogle from '../hooks/SignInWithGoogle';
import LoadingModal from './LoadingModal';

const SignUpButton = ({ isEnabled, onPress }) => {
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
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      setIsLoading(false);
      setModalVisible(false);
    }
  }, []);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          isEnabled ? styles.enabledBtn : styles.disabledBtn,
        ]}
        disabled={!isEnabled || isLoading}
        onPress={onPress}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fbfbfc" animating={true} />
        ) : (
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.OrText}>Or</Text>
      <TouchableOpacity
        style={[
          styles.button,
          isEnabled ? styles.enabledBtn : styles.disabledBtn,
        ]}
        disabled={!isEnabled || isLoading}
        onPress={handleGoogleSignIn}
      >
        <View style={styles.buttonContent}>
          <Image
            source={{
              uri: 'https://www.salesforceben.com/wp-content/uploads/2021/03/google-logo-icon-PNG-Transparent-Background.png',
            }}
            style={styles.googleLogo}
          />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>

      <LoadingModal visible={modalVisible} completed={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#5974f5',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 8,
  },
  enabledBtn: {
    backgroundColor: '#5974f5',
  },
  disabledBtn: {
    backgroundColor: '#9e9e9e',
  },
  buttonText: {
    color: '#fbfbfc',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  OrText: {
    paddingVertical: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default SignUpButton;
