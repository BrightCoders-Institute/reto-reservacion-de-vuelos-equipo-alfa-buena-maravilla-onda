import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackHeaderButtonStyles from '../styles/BackHeaderButtonStyles';
import {primaryBlue} from '../styles/colors';
const BackHeaderButton = ({previousClick}) => {
  return (
    <TouchableOpacity
      onPress={() => previousClick()}
      style={BackHeaderButtonStyles.container}>
      <Ionicons
        name="airplane-sharp"
        size={32}
        color={primaryBlue}
        style={BackHeaderButtonStyles.icon}
      />
    </TouchableOpacity>
  );
};

export default BackHeaderButton;
