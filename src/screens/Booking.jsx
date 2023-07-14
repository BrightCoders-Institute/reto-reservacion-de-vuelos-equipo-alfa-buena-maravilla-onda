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
import { addFlightToFirestore } from '../hooks/SetFlights';


const Booking = ({navigation}) => {
  const {
    indice,
    setIndice,
    Nextclick,
    Textitle,
    PreviousClick,
    TexBtn,
  } = BookingRegister();
  const [date, setDate] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [error, setError] = useState(false);

  function handleDateChange(propDate) {
    const isoDate = moment(propDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
    const formattedDate = moment(isoDate).format('MMMM D, YYYY');
    setDate(formattedDate);
  }

  const dateRegex = /^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/;

  const setOriginData = (item) => {
    if (item !== null){
      setOriginCity(item.abreviacion);
      setOriginCountry(item.pais);
    }
  }

  const setDestinationData = (item) => {
    if (item !== null){
      setDestinationCity(item.abreviacion);
      setDestinationCountry(item.pais);
    }
  }

  const handleNext = async () => {
    setError(false);
    switch (indice) {
      case 0:
        originCity === '' || originCity === null ? setError(true) : Nextclick();
        break;
      case 1:
        destinationCity === '' ? setError(true) : Nextclick();
        break;
      case 2:
        !dateRegex.test(date) ? setError(true) : Nextclick();
        break;
      case 4:
        try{
          await addFlightToFirestore({
            date,
            destinationCity,
            destinationCountry,
            originCity,
            originCountry,
            passengers,
        });
        Nextclick();
        }catch(error){
          console.error(error);
          Alert.alert('Error while creating the reservation',
          'We could not save your reservation, try it later.', 
          [
            {
              text: 'Go home',
              onPress: () => navigation.push('Home'),
            }
          ])
        }
        finally{
          navigation.push('Home');
        }
        break;
      default:
          Nextclick();
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
      {error ? <View style={BookingStyles.alertStyle}><TextAlert texto="El campo no puede estar vacio" /></View> : null}
      <BookingHeaderText text={Textitle()} />
      {indice === 0 ? (
        <BookingInput value={originCity} onChangeText={setOriginData} />
      ) : null}
      {indice === 1 ? (
        <BookingInput
          value={destinationCity}
          onChangeText={setDestinationData}
        />
      ) : null}
      {indice === 2 ? (
        <DatePickerCalendar date={date} handleChange={handleDateChange} />
      ) : null}
      {indice === 3 ? (
         <PassengerPicker setSelectItem={setPassengers} value={passengers} />
      ) : null}
      <View style={BookingStyles.buttonContainer}>
        <NextButton nextClick={handleNext} text={TexBtn()} />
      </View>
    </View>
  );
};

export default Booking;
