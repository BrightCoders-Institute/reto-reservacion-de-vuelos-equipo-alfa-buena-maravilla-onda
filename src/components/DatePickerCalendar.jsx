import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, StyleSheet,Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker'
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';



const DatePickerCalendar = () => {
  const today = new Date ();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState('')
  
  function handleOnPress(){
   setOpen(!open);
  }

  function handleChange(propDate) {
    setDate(propDate);
    console.log(propDate);
  }
  

  return (
	
	<View style={styles.container}>

	<TouchableOpacity onPress={handleOnPress}>
	<Text>Open</Text>
	</TouchableOpacity>
	
	
	<Modal
	animationType="slide"
	transparent={true}
	visible={open}
	>
	
	<View style={styles.centeredView}>
	<View style={styles.modalView}>
	
	<DatePicker
  options={{
    mainColor: '#6172F6',
    textFontSize: 17,
    textHeaderFontSize: 20,
    selectedTextColor: '#fff',
  }}
	mode='calendar'
	minimumDate={startDate}
	selected={date}
	onSelectedChange={handleChange}
	 />
	

	<TouchableOpacity onPress={handleOnPress}>
	<Text>Close</Text>
	</TouchableOpacity>

	</View>
	</View>
    </Modal>
    </View>
	

  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  centeredView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 22,
  },
  modalView:{
  marginTop: 150,
  backgroundColor: 'white',
  borderRadius: 20,
  width: '110%',
  paddingHorizontal: 40,
  alignItems: 'center',
  shadowColor: '#000',
  },
});

export default DatePickerCalendar;