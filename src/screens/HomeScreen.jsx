import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import handleLogOut from '../hooks/HandleLogOut';
import OnAuthStateChanged from '../hooks/OnAuthStateChanged';
import HomeScreenStyles from '../styles/HomeScreenStyles';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import AddButton from '../components/AddButton';

const HomeScreen = () => {
  const user = OnAuthStateChanged();
  const navigation = useNavigation();

  const handleOnLogOut = async () => {
    console.log('handleOnLogOut executed');
    try {
      console.log('Before handleLogOut');
      await handleLogOut();
      console.log('After handleLogOut');
      navigation.replace('SignUp');
    } catch (error) {
      console.log('Error:', error);
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      <AddButton />
    </View>
  );
};

export default HomeScreen;
