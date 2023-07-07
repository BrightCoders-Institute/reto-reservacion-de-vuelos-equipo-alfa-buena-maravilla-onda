import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Booking from '../screens/Booking';
import BackHeaderButton from '../components/BackHeaderButton';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, headerLeft:() => (<BackHeaderButton/>)}}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="Booking" component = {Booking} options={{headerShown: true, title:''}} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
