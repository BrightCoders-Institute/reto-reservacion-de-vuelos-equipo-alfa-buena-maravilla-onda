import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import TextAlert from './TextAlert';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormFieldStyles from '../styles/FormFieldStyles';
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

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prevState => !prevState);
  }, []);

  const handleChangeText = useCallback((text) => {
    onChangeText(text);
    setHasText(text !== '');
  }, [onChangeText]);

  const checkError = useCallback(() => {
    setShowError(error !== null && error.typeError === typeField);
  }, [error, typeField]);

  useEffect(() => {
    checkError();
  }, [checkError]);

  return (
    <View style={FormFieldStyles.container}>
      <View style={FormFieldStyles.rowText}>
        <Text style={FormFieldStyles.text}>{fieldText}</Text>
        {showError ? <TextAlert texto={error.message} /> : null}
      </View>
      <View style={[FormFieldStyles.row, hasText ? FormFieldStyles.rowHasText : FormFieldStyles.rowNoText]}>
        <TextInput
          style={FormFieldStyles.input}
          secureTextEntry={typeField === 'password' ? !showPassword : secureTextEntry}
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
              style={FormFieldStyles.icon}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};



export default FormField;
