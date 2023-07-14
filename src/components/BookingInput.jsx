import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import BookingInputStyles from '../styles/BookingInputStyles';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import flightsData from '../data/Flights.json';

const BookingInput = ({onChangeText, value}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const data = flightsData.aeropuertos.map(item => ({
    id: item.id.toString(),
    title: item.title,
    abreviacion: item.abreviacion,
    pais: item.pais,
  }));

  const handleSelect = (item) => {
    setSelectedItem(item);
    onChangeText(item);  
  }
  return (
    <View style={BookingInputStyles.container}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onSelectItem={handleSelect}
        dataSet={data}
        textInputProps={
          {
            placeholder:'Select location',
            style:{backgroundColor:'#FFFFFF'}
          }
        }
        rightButtonsContainerStyle={{backgroundColor:'#FFFFFF'}}
      />
    </View>
  );
};
export default BookingInput;
