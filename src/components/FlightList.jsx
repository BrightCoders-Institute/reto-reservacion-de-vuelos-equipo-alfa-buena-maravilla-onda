import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Card from './Card';
import GetFlights from '../hooks/GetFlights';
import CardStyles from '../styles/CardStyles';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    const getFlightsData = async () => {
      const getFlights = await GetFlights();
      setFlights(getFlights);
    };
    getFlightsData();
  }, []);

  const renderItem = ({item}) => (
    <View >
      <Card
        date={item.date}
        destinationCity={item.destinationCity}
        destinationCountry={item.destinationCountry}
        originCity={item.originCity}
        originCountry={item.originCountry}
        passengers={item.passengers}
        />
      <View style={CardStyles.containerWithLine}></View>
    </View>   
  );

  return (
    <FlatList
      data={flights}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default FlightList;
