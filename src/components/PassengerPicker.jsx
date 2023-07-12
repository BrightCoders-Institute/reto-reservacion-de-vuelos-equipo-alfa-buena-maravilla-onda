import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'

//#5974f5

const PassengerPicker = () => {
    const [selectItem,setSelectItem]=useState(0)
    const numbPassengers=[
        '1',
        '2',
        '3',
        '4',
        '5'
    ]
    onItemSelected=selectItem=>{
        setSelectItem({selectItem})
    }

  return (
    <View style={{alignSelf:'center',marginTop:10}}>
        <WheelPicker
          selectedItem={selectItem}
          data={numbPassengers}
          onItemSelected={()=>onItemSelected}
          indicatorColor='#5974f5'
          isCyclic={true}
          indicatorWidth={3}
          selectedItemTextSize={25}
        />
    </View>
  );
}

export default PassengerPicker