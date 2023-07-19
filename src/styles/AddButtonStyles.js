import {StyleSheet} from 'react-native';
import {primaryBlue} from './colors';

const AddButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: primaryBlue,
    height: 90,
    width: 90,
    position: 'absolute',
    elevation: 5,
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddButtonStyles;
