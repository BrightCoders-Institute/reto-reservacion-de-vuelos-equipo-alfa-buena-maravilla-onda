import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import NextButtonStyles from '../styles/NextButtonStyles';

const NextButton = ({nextClick,text}) => {
  return (

    <TouchableOpacity style={NextButtonStyles.button} onPress={() => nextClick()}>
      <Text style={NextButtonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
    
  );
};

export default NextButton;
