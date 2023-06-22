import React,{useState} from 'react'
import { StyleSheet, SafeAreaView ,Text,Pressable,View } from 'react-native'
import FormField from './FormField';
const SignUpForm = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Sign Up</Text>
      <FormField fieldText='First name'/>
      <FormField fieldText='Email*'/>
      <FormField fieldText='Password*' typeField='secure'/>
      <View style={styles.footerContainer}>
        <Text>
        Already have an account? {''}  
        </Text>
        <Pressable>
                <Text style={styles.logInText}>Log In</Text>
        </Pressable>
      </View>
      
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
 title:{
    color:'#707FF9',
    marginTop:40,
    marginLeft:30,
    fontWeight:'900',
    fontSize:25
 },
 logInText:{
    color:"#707FF9",
    textDecorationLine:"underline"
 },
 footerContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
 },
});

export default SignUpForm