import {StyleSheet} from 'react-native';

const SignUpButtonStyles = StyleSheet.create({
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
    fontWeight: '500',
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

export default SignUpButtonStyles;