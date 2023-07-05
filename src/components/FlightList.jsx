import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from './Card';
import GetFlights from '../hooks/GetFlights';

const FlightList = () => {
    const [flights, setFlights] = useState([])
    useEffect(() =>{
        const getFlightsData = async () => {
            const getFlights = await GetFlights();
            setFlights(getFlights);
        }
        getFlightsData();
    },[]);
   
  const renderItem = ({item}) => (
    <Card
      date={item.date}
      destinationCity={item.destinationCity}
      destinationCountry={item.destinationCountry}
      originCity={item.originCity}
      originCountry={item.originCountry}
      passengers={item.passengers}
    />
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
