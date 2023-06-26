import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextAlert = ({texto}) => {
  return (
    <View >
      <Text style={styles.textoAlerta}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textoAlerta: {
    color: 'red',
  },
});

export default TextAlert;
