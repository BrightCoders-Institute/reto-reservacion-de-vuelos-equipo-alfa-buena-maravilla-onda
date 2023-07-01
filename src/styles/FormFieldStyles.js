import {StyleSheet} from 'react-native';

const FormFieldStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:'rgba(255,255,255,0.5)'
  },
  rowText: {
    marginBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
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
    marginRight: 10,
    fontWeight:'600',
    textTransform:'uppercase'
  },
  input: {
    height: 50,
    padding: 10,
    width: '90%',
  },
});

export default FormFieldStyles;