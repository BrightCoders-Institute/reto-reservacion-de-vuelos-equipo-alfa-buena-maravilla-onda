import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
  Screen: {},
  containerInfoCard: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 120,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  infOne: {
    width: '40%',
    padding: 10,
  },
  infTwo: {
    width: '40%',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  ciudad: {
    textTransform: 'uppercase',
    fontWeight: '900',
    color: '#000',
    fontSize: 22,
  },
  infoAdd: {
    fontWeight: 'bold',
    color: '#000',
  },
  linea1: {
    marginTop: 10,
    position: 'absolute',
    alignSelf: 'center',
    top: 65,
    borderTopWidth: 1,
    borderColor: '#bcbcbc',
    width: '90%',
  },
  pais: {
    color: '#bcbcbc',
    paddingVertical: 6,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  iconContainerStyle: {
    width: '18%',
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  containerWithLine:{
    width:'90%',
    alignSelf:'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  }
});

export default CardStyles;
