import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import DatePickerCalendarStyles from '../styles/DatePickerCalendarStyles';

const DatePickerCalendar = ({ handleChange, date }) => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const startDate = moment(today).format('YYYY-MM-DD');
  return (
    <View style={DatePickerCalendarStyles.modalView}>
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

export default DatePickerCalendar;
