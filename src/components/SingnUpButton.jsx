import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'

const SingnUpButton = ({onPress}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity  style = {styles.button} onPress = {onPress}>
    <Text Text style = {styles.buttonText}> Sing Up </Text>
    </TouchableOpacity>
    <Text Text style = {styles.OrText}>Or</Text>
    <TouchableOpacity  style = {styles.button} onPress = {onPress}>
    <Text Text style = {styles.buttonText}> Sing Up with Google </Text>
    </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create ({
    buttonContainer: {
    alignItems:'center',
    marginTop:30,
    },
    button: {
     backgroundColor: '#5974f5',
     paddingVertical: 10,
     paddingHorizontal: 10,
     width:'90%',
     borderRadius: 8,
    },
    buttonText:{
      color: '#fbfbfc',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold'
    },
    OrText: {
        paddingVertical:20,
    }
});

export default SingnUpButton
