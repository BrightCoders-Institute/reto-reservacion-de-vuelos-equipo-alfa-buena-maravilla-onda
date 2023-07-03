import React from 'react';
import { View, Text} from 'react-native';
import TextAlertStyles from '../styles/TextAlertStyles'

const TextAlert = ({ texto }) => {
  return (
    <View>
      <Text style={TextAlertStyles.textoAlerta}>{texto}</Text>
    </View>
  );
};



export default TextAlert;
