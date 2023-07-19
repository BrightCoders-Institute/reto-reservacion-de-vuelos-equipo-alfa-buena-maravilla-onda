import {StyleSheet} from 'react-native';
import {blueShadow, grayColor, primaryBlue, whiteColor} from './colors';

const NextButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: primaryBlue,
    borderRadius: 8,
    elevation: 7,
    paddingHorizontal: 10,
    paddingVertical: 11,
    shadowColor: blueShadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    width: '90%',
  },
  buttonText: {
    color: whiteColor,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledBtn: {
    backgroundColor: grayColor,
  },
  enabledBtn: {
    backgroundColor: primaryBlue,
  },
});

export default NextButtonStyles;
