import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const currentDate = new Date().toISOString().slice(0, 10);
const maxDate = '2023-12-21';

const BookingCalendar = () => {
  const handleDayPress = (day) => {
    console.log('día seleccionado', day);
  };

  const handleMonthChange = (month) => {
    console.log('mes cambiado', month);
  };

  const renderArrow = (direction) => {
    return <Arrow />;
  };

  return (
    <View style={styles.container}>
    <Calendar
      current={currentDate}
      minDate={currentDate}
      maxDate={maxDate}
      onDayPress={handleDayPress}
      monthFormat={'yyyy MM'}
      onMonthChange={handleMonthChange}
      hideArrows={true}
      renderArrow={renderArrow}
      hideExtraDays={true}
      disableMonthChange={true}
      firstDay={1}
      hideDayNames={true}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  width: '100%',
  },
});

export default BookingCalendar;
