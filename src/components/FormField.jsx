import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'

const FormField = ({fieldText, typeField}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.text} >{fieldText}</Text>
      <TextInput 
        style={styles.input}
        secureTextEntry={typeField === 'secure' ? true : false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    width:'90%',
  },
  text:{
    fontSize:16,
    marginBottom:5,
    marginTop:20,
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    height:50,
    padding: 10,
    width:'100%'
  },
});
export default FormField