import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AddButtonStyles from '../styles/AddButtonStyles';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={AddButtonStyles.button}
      onPress={() => navigation.push('Booking')}>
      <FontAwesome name="plus" size={50} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddButton;
