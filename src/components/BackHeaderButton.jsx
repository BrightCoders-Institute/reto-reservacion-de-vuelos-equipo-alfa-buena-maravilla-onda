import React from 'react';
import { TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackHeaderButtonStyles from '../styles/BackHeaderButtonStyles';

const BackHeaderButton = () => {
  const navigation = useNavigation();
  return(
  <TouchableOpacity onPress={() => navigation.goBack()} style={BackHeaderButtonStyles.container}>
    <Ionicons name="airplane-sharp" size={32} color="#5974f5" style={BackHeaderButtonStyles.icon} />
  </TouchableOpacity>
  );
}

export default BackHeaderButton;