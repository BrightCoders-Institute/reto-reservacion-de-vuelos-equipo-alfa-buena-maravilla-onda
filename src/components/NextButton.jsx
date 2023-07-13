import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import NextButtonStyles from '../styles/NextButtonStyles';

const NextButton = ({nextClick, disabled}) => {
  return (

    <TouchableOpacity style={NextButtonStyles.button} onPress={() => nextClick()} disabled={disabled}>
      <Text style={NextButtonStyles.buttonText}>Next</Text>
    </TouchableOpacity>
    
  );
};

export default NextButton;
