import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import NextButtonStyles from '../styles/NextButtonStyles';

const NextButton = () => {
  return (

    <TouchableOpacity style={NextButtonStyles.button}>
      <Text style={NextButtonStyles.buttonText}>Next</Text>
    </TouchableOpacity>
    
  );
};

export default NextButton;
