import {StyleSheet} from 'react-native';

const LogInScreenStyles = StyleSheet.create({
  imageBackground: {
    height: '100%',
  },
  logo: {
    alignItems: 'center',
    marginTop: 40,
  },
  container: {
    marginTop: 30,
  },
  titletext: {
    transform: [{ rotate: '-30deg' }],
    position: 'absolute',
    top: 15,
    right: 126,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5974f5',
  },
  title: {
    color: '#5974f5',
    marginTop: 30,
    marginLeft: 20,
    fontWeight: '900',
    fontSize: 25,
  },
});

export default LogInScreenStyles;