import React from 'react';
import {View, TextInput} from 'react-native';
import BookingInputStyles from '../styles/BookingInputStyles';

const BookingInput = () => {
  return(
    <View style={BookingInputStyles.container}>
      <TextInput placeholder='Select location' placeholderTextColor='#bcbcbc' style={BookingInputStyles.input}/>
    </View>
  );
}
export default BookingInput;