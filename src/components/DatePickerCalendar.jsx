import React from 'react';
import {View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';

const DatePickerCalendar = ({handleChange, date}) => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const startDate = moment(today).format('YYYY-MM-DD');
  return (
    <View style={styles.modalView}>
      <DatePicker
        options={{
          mainColor: '#6172F6',
          textFontSize: 17,
          textHeaderFontSize: 20,
          selectedTextColor: '#fff',
        }}
        mode="calendar"
        minimumDate={startDate}
        selected={date}
        onSelectedChange={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: '20%',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
  },
});

export default DatePickerCalendar;
