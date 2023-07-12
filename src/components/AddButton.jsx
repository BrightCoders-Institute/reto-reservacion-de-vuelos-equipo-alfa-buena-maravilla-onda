import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => navigation.push('Booking')}>
      <FontAwesome name="plus" size={50} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5974f5',
    height: 90,
    width: 90,
    position: 'absolute',
    elevation: 5,
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddButton;
