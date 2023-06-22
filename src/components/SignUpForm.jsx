import React,{useState} from 'react'
import { StyleSheet, SafeAreaView ,Text,Pressable,View } from 'react-native'
import FormField from './FormField';
import CheckBox from '@react-native-community/checkbox';
import SingnUpButton from './SingnUpButton';


const SignUpForm = () => {
  
  return (
    <SafeAreaView>
      <Text style={styles.title}>Sign Up</Text>
      <FormField fieldText='First name' typeField='string'/>
      <FormField fieldText='Email*' typeField='email'/>
      <FormField fieldText='Password*' secureTextEntry = 'true' typeField='password'/>
      
      

        <View style={styles.checkBoxContainer}>
            <View style={styles.checkBoxText}>
                <CheckBox
                disable={false}
                />
                <Text>I agree to the<Text style={{textDecorationLine:'underline'}}>Termns</Text> and <Text style={{textDecorationLine:'underline'}} >Privacy Policy</Text></Text>
            </View>
                <View style={styles.checkBoxText}>
                <CheckBox
                disable={false}
                />
                <Text>Subscribe for select product updates.</Text>
            </View>
        </View>
        
        <SingnUpButton/>
        
        <View style={styles.footerContainer}>
            <Text style={styles.text}>
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
    color:'#5974f5',
    marginTop:40,
    marginLeft:20,
    fontWeight:'900',
    fontSize:25
 },
 text:{
    fontSize:20
 },
 logInText:{
    color:"#707FF9",
    textDecorationLine:"underline",
    fontSize:20
 },
 footerContainer:{
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
 },
 checkBoxText:{
    flexDirection: 'row',
    alignItems: 'center',
    
 },
 checkBoxContainer:{
    marginLeft:13,
    marginTop:20
 },
});

export default SignUpForm