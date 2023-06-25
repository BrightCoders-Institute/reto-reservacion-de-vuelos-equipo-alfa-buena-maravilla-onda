import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator, Modal, StatusBar } from 'react-native';
import signInWithGoogle from '../hooks/SignInWithGoogle';
import { Image } from 'react-native';

const SignUpButton = ({ isEnabled, onPress }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setShowModal(true);
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    } finally {
      setIsLoading(false);
      setShowModal(false);
      setIsSignedUp(true); // Cambiamos el estado a "true" cuando se ha registrado correctamente
    }
  };

  const handleSignUp = async () => {
    try {
      setShowModal(true);
      setIsLoading(true);
      await onPress();
    } catch (error) {
      console.error('Error al registrar:', error);
    } finally {
      setIsLoading(false);
      setShowModal(false);
      setIsSignedUp(true); // Cambiamos el estado a "true" cuando se ha registrado correctamente
    }
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isEnabled ? '#5974f5' : '#d3d3d3' },
          ]}
          disabled={!isEnabled || isLoading}
          onPress={handleSignUp}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fbfbfc" animating={true} />
          ) : (
            <Text style={styles.buttonText}>{isSignedUp ? 'Signed Up' : 'Sign Up'}</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.OrText}>Or</Text>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isEnabled ? '#5974f5' : '#d3d3d3' },
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
      </View>

      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0.7)" />
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#5974f5" animating={true} />
            <Text style={styles.modalText}>{isSignedUp ? 'Signed up' : 'Signing up...'}</Text>
          </View>
        </View>
      </Modal>
    </>
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#21252b',
    padding: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%', 
  },
  modalText: {
    color: '#5167d7',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpButton;