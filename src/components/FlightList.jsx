import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import firestore from '@react-native-firebase/firestore';

const FlightList = () => { 
    const renderItem = ({ item }) => (
        <Card
        //Aqui se le pasa el item a la tarjeta
/>
    );
    return ( 
        <FlatList />
    )
};

export default FlightList;