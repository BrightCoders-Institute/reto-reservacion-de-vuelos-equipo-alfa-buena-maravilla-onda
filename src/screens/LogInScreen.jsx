import {View, ImageBackground, StyleSheet, Animated, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import LogInForm from '../components/LogInForm';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const LogInScreen = () => {
  const [iconPosition] = useState(new Animated.Value(0));

  useEffect(() => {
    animateIcon();
  }, []);

  const animateIcon = () => {
    Animated.sequence([
      Animated.timing(iconPosition, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(iconPosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const interpolateIconTranslateX = iconPosition.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 500, -500],
  });

  const interpolatedIconStyle = {
    transform: [{translateX: interpolateIconTranslateX}],
  };

  return (
    <ImageBackground
      source={require('../../img/Coolsky.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Animated.View style={interpolatedIconStyle}>
          <Text style={styles.titletext}> ABC Corp </Text>
            <Fontisto name="paper-plane" size={200} color={'#5974f5'} />
          </Animated.View>
        </View>
        <Text style={styles.title}>Sign In</Text>
        <LogInForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    transform: [{ rotate: '-32deg' }],
    position: 'absolute',
    top: 18,
    right: 25,
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

export default LogInScreen;
