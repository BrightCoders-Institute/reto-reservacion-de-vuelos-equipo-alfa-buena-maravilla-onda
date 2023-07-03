import {StyleSheet} from 'react-native';

const LoadingModalStyles = StyleSheet.create({
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

export default LoadingModalStyles;