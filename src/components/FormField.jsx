import React, {useState} from 'react';
import { Text, View, TextInput, StyleSheet, Pressable} from 'react-native'
import Ionicons  from 'react-native-vector-icons/Ionicons'

const FormField = ({fieldText, typeField, secureTextEntry = false}) =>{
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  


  return(
    <View style={styles.container}>
      <Text style={styles.text} >{fieldText}</Text>
      <View>

      </View>
      <View style={styles.row}>
        <TextInput 
          style={styles.input}
          secureTextEntry={!showPassword}
        />
      {typeField === 'password' ? <Pressable onPress={() => setShowPassword (!showPassword)}>
        <Ionicons name='eye' color='gray' size={25} style={styles.icon} />
      </Pressable>: ''}
      </View>
      {typeField === 'password' ? <Text>Use 8 or more characters with a mix of letters, numbers, and symbols</Text>:''}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    width:'90%',
  },
  row:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'black',
  },
  icon:{
    paddingTop:10,
  },
  text:{
    fontSize:16,
    marginBottom:5,
    marginTop:20,
  },
  input:{
    height:50,
    padding: 10,
    width:'90%'
  },
});
export default FormField