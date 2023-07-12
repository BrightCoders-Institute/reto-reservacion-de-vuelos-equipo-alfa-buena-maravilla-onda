import React from 'react'
import { Text,StyleSheet, View } from 'react-native'

const BookingHeaderText = ({text}) => {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:'900',
    color:'#000',
    marginTop:20,
    marginLeft:20,
    marginRight:150
  }
})
export default BookingHeaderText