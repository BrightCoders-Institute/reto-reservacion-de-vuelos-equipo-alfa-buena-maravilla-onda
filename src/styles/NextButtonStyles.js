import {StyleSheet} from 'react-native';
const NextButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#5974f5',
    paddingVertical: 11,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 8,
    elevation: 7,
    shadowColor: '#0000ff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
    fontSize: 19,
    fontWeight: 'bold',
  },
});

export default NextButtonStyles;
