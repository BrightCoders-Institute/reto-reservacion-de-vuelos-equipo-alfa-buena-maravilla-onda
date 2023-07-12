import React, { useState } from 'react'
import { View,Text} from 'react-native'
import Card from '../components/Card'
import BookingInput from '../components/BookingInput';
import BookingHeaderText from '../components/BookingHeaderText';
import NextButton from '../components/NextButton';
import BookingStyles from '../styles/BookingStyles';
import DatePickerCalendar from '../components/DatePickerCalendar';
import PassengerPicker from '../components/PassengerPicker';

const Booking = () => {
    const [date,setDate]=useState(new Date())
    const [destinationCity,setDestinationCity]=useState('')
    const [destinationCountry,setDestinationCountry]=useState('')
    const [originCity,setOriginCity]=useState('')
    const [originCountry,setOriginCountry]=useState('')
    const [passengers,setPassengers]=useState('')
  return (
    <View style= {BookingStyles.screenContainer}>
      <Card/>
      <BookingHeaderText text='How many passengers?'/> 
      {/* <BookingInput /> */}
      {/* <DatePickerCalendar/> */}
      <PassengerPicker/>
      <View style={BookingStyles.buttonContainer}>
        <NextButton/>  
      </View>
    </View>
  )
}

export default Booking;