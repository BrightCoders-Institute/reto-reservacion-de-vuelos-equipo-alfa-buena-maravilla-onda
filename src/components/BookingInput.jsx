import React from 'react';
import {View, TextInput} from 'react-native';
import BookingInputStyles from '../styles/BookingInputStyles';

const BookingInput = ({onChangeText, value}) => {
  return (
    <View style={BookingInputStyles.container}>
      <TextInput
        placeholder="Select location"
        placeholderTextColor="#bcbcbc"
        style={BookingInputStyles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
export default BookingInput;
