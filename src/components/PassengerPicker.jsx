import React from 'react';
import {View} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';

const PassengerPicker = ({setSelectItem, value}) => {
  const numbPassengers = ['1', '2', '3', '4', '5'];

  const handleItemSelected = index => {
    setSelectItem(Number(numbPassengers[index]));
  };

  const selectedIndex = numbPassengers.indexOf(String(value));
  const selectedItem = selectedIndex === -1 ? 0 : selectedIndex;

  return (
    <View style={{alignSelf: 'center', marginTop: 30}}>
      <WheelPicker
        selectedItem={selectedItem}
        data={numbPassengers}
        onItemSelected={handleItemSelected}
        indicatorColor="#5974f5"
        isCyclic={true}
        indicatorWidth={3}
        selectedItemTextSize={25}
      />
    </View>
  );
};

export default PassengerPicker;
