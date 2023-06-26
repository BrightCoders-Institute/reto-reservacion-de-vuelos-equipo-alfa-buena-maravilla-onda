import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, StyleSheet, Pressable, Alert} from 'react-native';
import TextAlert from './TextAlert';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FormField = ({
  fieldText,
  typeField,
  secureTextEntry = false,
  value,
  onChangeText,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [showError, setShowError] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChangeText = text => {
    onChangeText(text);
    if (text !== '') {
      setHasText(true);
    } else {
      setHasText(false);
    }
  };

  const checkError = () => {
    if (error !== null && error.typeError === typeField ){
      setShowError(true);
    }
    else{
      setShowError(false);
    }
  }
  useEffect(() => {
    checkError();
  },[error])

  return (
    <View style={styles.container}>
      <View style={styles.rowText} >
        <Text style={styles.text}>{fieldText}</Text>
        {showError ? <TextAlert texto={error.message}/> : null}
      </View>
      <View
        style={[styles.row, hasText ? styles.rowHasText : styles.rowNoText]}>
        <TextInput
          style={styles.input}
          secureTextEntry={
            typeField === 'password' ? !showPassword : secureTextEntry
          }
          value={value}
          onChangeText={handleChangeText}
          onEndEditing={() => setShowError(false)}
        />
        {typeField === 'password' ? (
          <Pressable onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              color={hasText ? '#5974f5' : 'gray'}
              size={25}
              style={styles.icon}
            />
          </Pressable>
        ) : null}
      </View>
      {typeField === 'password' ? (
        <Text>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 2,
  },
  rowText:{
    marginBottom: 5,
    marginTop: 20,
    flexDirection:'row',
  },
  rowNoText: {
    borderColor: 'gray',
  },
  rowHasText: {
    borderColor: '#5974f5',
  },
  icon: {
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    marginRight:10,
  },
  input: {
    height: 50,
    padding: 10,
    width: '90%',
  },
});

export default FormField;
