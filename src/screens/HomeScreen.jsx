import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import handleLogOut from '../hooks/HandleLogOut';
import OnAuthStateChanged from '../hooks/OnAuthStateChanged';
import HomeScreenStyles from '../styles/HomeScreenStyles';
import {useNavigation} from '@react-navigation/native';
import FlightList from '../components/FlightList';
import AddButton from '../components/AddButton';

const HomeScreen = () => {
  const user = OnAuthStateChanged();
  const navigation = useNavigation();

  const handleOnLogOut = async () => {
    Alert.alert('Cerraste Sesión');
    try {
      await handleLogOut();
      navigation.replace('SignUp');
    } catch (error) {
      Alert.alert('Error:', error);
    }
  };

  return (
    <View style={HomeScreenStyles.screen}>
      <View style={HomeScreenStyles.container}>
        <Text style={HomeScreenStyles.User}>{user}</Text>
        <TouchableOpacity
          onPress={handleOnLogOut}
          style={HomeScreenStyles.containerLogOut}>
          <Text style={HomeScreenStyles.textLogOut}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Text style={HomeScreenStyles.title}>My flights</Text>
      <FlightList />
      <AddButton />
    </View>
  );
};

export default HomeScreen;
