import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { addFlightToFirestore } from '../hooks/SetFlights';
const BookingRegister = () => {
  const [indice, setIndice] = useState(0);
  const navigation = useNavigation();

  const Nextclick = () => {
    setIndice(indice + 1);
  };
  const PreviousClick = () => {
    if (indice - 1 === -1 ){
      navigation.goBack();
    }
    else{
      setIndice(indice - 1);
    }
  };

  
  const Textitle = () => {
    switch (indice) {
      case 0:
        return 'where are you now?';
      case 1:
        return 'where will you be flying to?';
      case 2:
        return 'Select date';
      case 3:
        return 'How many passengers?';
      case 4:
        return 'Your request was received';
      default:
        return null;
    }
  };

  const TexBtn = () => {
    return indice === 4 ? 'Go flight!' : 'Next';
  };
  
  return {
    indice,
    setIndice,
    Nextclick,
    Textitle,
    PreviousClick,
    TexBtn,
  };
};
export default BookingRegister;
