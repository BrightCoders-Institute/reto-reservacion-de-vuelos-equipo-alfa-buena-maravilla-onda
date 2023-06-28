import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoadingModal = ({ visible, message, completed, isSigningIn, signInCompleted }) => {
    if (!visible) {
      return null;
    }
  
    return (
      <Modal transparent visible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {completed ? (
              <>
                <Ionicons name="checkmark-circle" size={50} color="#5974f5" />
                <Text style={styles.messageText}>Signed up</Text>
              </>
            ) : (
              <>
                <ActivityIndicator size="large" color="#5974f5" animating={isSigningIn} style={styles.activityIndicator} />
                <Text style={styles.messageText}>{message}</Text>
              </>
            )}
            {signInCompleted && (
              <Ionicons name="checkmark" size={30} color="#5974f5" style={styles.checkmarkIcon} />
            )}
          </View>
        </View>
      </Modal>
    );
  };

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#21252b',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    height: '20%',
  },
  spinnerContainer: {
    marginBottom: 20,
  },
  messageText: {
    marginTop: 25,
    color: '#5974f5',
    fontSize: 17,
  },  
  checkmarkIcon: {
    marginTop: 10,
  },
  activityIndicator: {
    transform: [{ scale: 2 }], 
  },
});

export default LoadingModal;
