import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FormField = ({
  fieldText,
  typeField,
  secureTextEntry = false,
  value,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fieldText}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          secureTextEntry={
            typeField === 'password' ? !showPassword : secureTextEntry
          }
          value={value}
          onChangeText={onChangeText}
        />
        {typeField === 'password' ? (
          <Pressable onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              color="gray"
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
    borderWidth: 1,
    borderColor: 'black',
  },
  icon: {
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    height: 50,
    padding: 10,
    width: '90%',
  },
});

export default FormField;
