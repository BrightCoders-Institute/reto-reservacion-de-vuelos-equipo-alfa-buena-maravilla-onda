import {StyleSheet} from 'react-native';

const SignUpLoginFormStyles = StyleSheet.create({
  title: {
    color: '#5974f5',
    marginTop: 40,
    marginLeft: 20,
    fontWeight: '900',
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  },
  singInText: {
    color: '#707FF9',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  logInText: {
    color: '#FFF',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  footerContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxContainer: {
    marginLeft: 13,
    marginTop: 20,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textPass:{
    marginHorizontal:25,
  }
});

export default SignUpLoginFormStyles;