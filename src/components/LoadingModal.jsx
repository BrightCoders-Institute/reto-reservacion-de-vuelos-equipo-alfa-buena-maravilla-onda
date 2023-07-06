import React from 'react';
import {View, Text, ActivityIndicator, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingModalStyles from '../styles/LoadingModalStyles';

const LoadingModal = ({
  visible,
  message,
  completed,
  isSigningIn,
  signInCompleted,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal transparent visible={visible}>
      <View style={LoadingModalStyles.modalContainer}>
        <View style={LoadingModalStyles.modalContent}>
          {completed ? (
            <>
              <Ionicons name="checkmark-circle" size={50} color="#5974f5" />
              <Text style={LoadingModalStyles.messageText}>Signed up</Text>
            </>
          ) : (
            <>
              <ActivityIndicator
                size="large"
                color="#5974f5"
                animating={isSigningIn}
                style={LoadingModalStyles.activityIndicator}
              />
              <Text style={LoadingModalStyles.messageText}>{message}</Text>
            </>
          )}
          {signInCompleted && (
            <Ionicons
              name="checkmark"
              size={30}
              color="#5974f5"
              style={LoadingModalStyles.checkmarkIcon}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
