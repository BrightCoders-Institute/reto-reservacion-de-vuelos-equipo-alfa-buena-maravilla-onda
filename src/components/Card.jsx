import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardStyles from '../styles/CardStyles';

const Card = ({
  date,
  destinationCity,
  destinationCountry,
  originCity,
  originCountry,
  passengers,
}) => {
  return (
    <View>
      <View style={CardStyles.containerInfoCard}>
        <View style={CardStyles.infOne}>
          <Text style={CardStyles.ciudad}>{originCity}</Text>
          <Text style={CardStyles.pais}>{originCountry}</Text>
          <Text style={CardStyles.infoAdd}>{date}</Text>
        </View>
        <View style={CardStyles.iconContainerStyle}>
          <Ionicons name="airplane-sharp" size={32} color="#5974f5" />
        </View>
        <View style={CardStyles.infTwo}>
          <Text style={CardStyles.ciudad}>{destinationCity}</Text>
          <Text style={CardStyles.pais}>{destinationCountry}</Text>
          <Text style={CardStyles.infoAdd}> {passengers} passengers</Text>
        </View>
      </View>
      <View style={CardStyles.linea1} />
    </View>
  );
};

export default Card;
