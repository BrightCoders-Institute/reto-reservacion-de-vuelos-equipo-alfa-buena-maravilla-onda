import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';
import Card from '../components/Card';
import BookingInput from '../components/BookingInput';
import BookingHeaderText from '../components/BookingHeaderText';
import NextButton from '../components/NextButton';
import BookingStyles from '../styles/BookingStyles';
import NextButtonStyles from '../styles/NextButtonStyles';
import DatePickerCalendar from '../components/DatePickerCalendar';
import PassengerPicker from '../components/PassengerPicker';
import BookingRegister from '../hooks/BookingRegister';
import BackHeaderButton from '../components/BackHeaderButton';
import TextAlert from '../components/TextAlert';
import moment from 'moment';
import {addFlightToFirestore} from '../hooks/SetFlights';
import ValidateInputs from '../hooks/ValidateInputs';

const Booking = ({navigation}) => {
  const {indice, setIndice, Nextclick, Textitle, PreviousClick, TexBtn} =
    BookingRegister();
  const [date, setDate] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [originCity, setOriginCity] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [error, setError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleDateChange(propDate) {
    const isoDate = moment(propDate, 'YYYY/MM/DD').format('YYYY-MM-DD');
    const formattedDate = moment(isoDate).format('MMMM D, YYYY');
    setDate(formattedDate);
  }

  const setOriginData = item => {
    if (item !== null) {
      setOriginCity(item.abreviacion);
      setOriginCountry(item.pais);
    }
  };

  const setDestinationData = item => {
    if (item !== null) {
      setDestinationCity(item.abreviacion);
      setDestinationCountry(item.pais);
    }
  };

  const handleNext = async () => {
    let input;
    switch (indice) {
      case 0:
        input = originCity;
        break;
      case 1:
        input = destinationCity;
        break;
      case 2:
        input = date;
        break;
      default:
        input = '';
        break;
    }
    const [hasError, errorMessage] = ValidateInputs(input, indice);
    setError(hasError);
    if (hasError) {
      Alert.alert(errorMessage);
      setIsButtonDisabled(true);
    } else {
      if (indice === 4) {
        try {
          await addFlightToFirestore({
            date,
            destinationCity,
            destinationCountry,
            originCity,
            originCountry,
            passengers,
          });
          Nextclick();
          setIsButtonDisabled(false);
        } catch (error) {
          Alert.alert(
            'Error while creating the reservation',
            'We could not save your reservation, try it later.',
            [
              {
                text: 'Go home',
                onPress: () => navigation.push('Home'),
              },
            ],
          );
        } finally {
          navigation.push('Home');
        }
      } else {
        Nextclick();
        setIsButtonDisabled(false);
      }
    }
  };

  useEffect(() => {
    let input;
    switch (indice) {
      case 0:
        input = originCity;
        break;
      case 1:
        input = destinationCity;
        break;
      case 2:
        input = date;
        break;
      default:
        input = '';
        break;
    }
    const [hasError, errorMessage] = ValidateInputs(input, indice);
    setIsButtonDisabled(hasError);
  }, [originCity, destinationCity, date, indice]);

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
      {error ? (
        <View style={BookingStyles.alertStyle}>
          <TextAlert texto="El campo no puede estar vacio" />
        </View>
      ) : null}
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
        <NextButton
          nextClick={handleNext}
          text={TexBtn()}
          style={
            isButtonDisabled
              ? NextButtonStyles.disabledBtn
              : NextButtonStyles.enabledBtn
          }
        />
      </View>
    </View>
  );
};

export default Booking;
