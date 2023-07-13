import React, {useState} from 'react';
import {View, Text, S} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';


const PassengerPicker = ({setSelectItem, value}) => {
  const numbPassengers = ['1', '2', '3', '4', '5'];

  return (
    <View style={{alignSelf: 'center', marginTop: 30}}>
      <WheelPicker
        selectedItem={value}
        data={numbPassengers}
        onItemSelected={setSelectItem}
        indicatorColor="#5974f5"
        isCyclic={true}
        indicatorWidth={3}
        selectedItemTextSize={25}
      />
    </View>
  );
};

export default PassengerPicker;
