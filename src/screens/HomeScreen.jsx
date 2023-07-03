import React from 'react'
import {View,TouchableOpacity ,Text, Image,ImageBackground} from 'react-native'
import handleLogOut from '../hooks/HandleLogOut'
import OnAuthStateChanged from '../hooks/OnAuthStateChanged'
import HomeScreenStyles from '../styles/HomeScreenStyles'
import LogInScreenStyles from '../styles/LogInScreenStyles'
import { useNavigation } from '@react-navigation/native';

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
    <ImageBackground
    source={require('../../img/Coolsky2.png')}
    style={LogInScreenStyles.imageBackground}>
    <View>
      <View style={HomeScreenStyles.container}>
        <Text style={HomeScreenStyles.User}>{user}</Text>
        <TouchableOpacity onPress={handleOnLogOut} style={HomeScreenStyles.containerLogOut}>
            <Text style={HomeScreenStyles.textLogOut}>
                Log Out
            </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={{ width:'50%' , height:'50%', marginTop:'50%', marginLeft:'25%'}}
          source={{
            uri: 'https://i.ytimg.com/vi/GP7v1jACwc4/maxresdefault.jpg',
          }}
        />
      </View>
    </View>
    </ImageBackground>
  )
}

export default HomeScreen