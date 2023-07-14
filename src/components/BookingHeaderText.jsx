import React from 'react';
import {Text} from 'react-native';
import BookingHeaderTextStyles from '../styles/BookingHeaderTextStyles';

const BookingHeaderText = ({text}) => {
  return <Text style={BookingHeaderTextStyles.title}>{text}</Text>;
};

export default BookingHeaderText;
