import React, {useState} from 'react';

const BookingRegister = () => {
  const [indice, setIndice] = useState(0);

  const Nextclick = () => {
    setIndice(indice + 1);
  };
  const PreviousClick = () => {
    setIndice(indice - 1);
  };
  const handleInputChange=(text)=> {
    if (text.length === 0){
      return true;
    }
    else{
      return false;
    }
  }
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

  return {
    indice,
    setIndice,
    Nextclick,
    Textitle,
    PreviousClick,
    handleInputChange,
  };
};
export default BookingRegister;
