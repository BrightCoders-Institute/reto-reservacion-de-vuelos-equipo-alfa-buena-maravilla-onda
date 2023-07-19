import {StyleSheet} from 'react-native';
import {whiteColor} from './colors';

const BookingStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  buttonContainer: {
    width: '100%',
    marginTop: '65%',
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    marginTop: 5,
    marginRight: '88%',
  },
  alertStyle: {
    marginLeft: 20,
  },
});

export default BookingStyles;
