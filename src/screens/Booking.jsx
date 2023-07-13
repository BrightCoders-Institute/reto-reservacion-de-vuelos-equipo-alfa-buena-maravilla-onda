import React, {useState} from 'react';
import {View} from 'react-native';
import Card from '../components/Card';
import BookingInput from '../components/BookingInput';
import BookingHeaderText from '../components/BookingHeaderText';
import NextButton from '../components/NextButton';
import BookingStyles from '../styles/BookingStyles';
import DatePickerCalendar from '../components/DatePickerCalendar';
import PassengerPicker from '../components/PassengerPicker';
import BookingRegister from '../hooks/BookingRegister';
import BackHeaderButton from '../components/BackHeaderButton';
import TextAlert from '../components/TextAlert';
import moment from 'moment';

const Booking = () => {
  const {
    indice,
    setIndice,
    Nextclick,
    Textitle,
    PreviousClick,
    handleInputChange,
  } = BookingRegister();
  const [date, setDate] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [error, setError] = useState(false);

  function handleDateChange(propDate) {
    const isoDate = moment(propDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
    const formattedDate = moment(isoDate).format('MMMM D, YYYY');
    setDate(formattedDate);
    console.log(formattedDate);
  }

  const handleNext = () => {
    setError(false);
    switch (indice) {
      case 0:
        originCity === '' ? setError(true) : Nextclick();
        break;
      case 1:
        destinationCity === '' ? setError(true) : Nextclick();
        break;
      case 2:
        date === '' ? setError(true) : Nextclick();
        break;
    }
  };

  return (
    <View style={BookingStyles.screenContainer}>
      <View style={BookingStyles.headerButton}>
        <BackHeaderButton previousClick={PreviousClick} />
      </View>

      <Card
        date={date}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        originCity={originCity}
        originCountry={originCountry}
        passengers={passengers}
      />
      {error ? <TextAlert texto="El campo no puede estar vacio" /> : null}
      <BookingHeaderText text={Textitle()} />
      {indice === 0 ? (
        <BookingInput value={originCity} onChangeText={setOriginCity} />
      ) : null}
      {indice === 1 ? (
        <BookingInput
          value={destinationCity}
          onChangeText={setDestinationCity}
        />
      ) : null}
      {indice === 2 ? (
        <DatePickerCalendar date={date} handleChange={handleDateChange} />
      ) : null}
      {indice === 3 ? (
         <PassengerPicker setSelectItem={setPassengers} value={passengers} />
      ) : null}
      <View style={BookingStyles.buttonContainer}>
        <NextButton nextClick={handleNext} disabled={buttonStatus} />
      </View>
    </View>
  );
};

export default Booking;
