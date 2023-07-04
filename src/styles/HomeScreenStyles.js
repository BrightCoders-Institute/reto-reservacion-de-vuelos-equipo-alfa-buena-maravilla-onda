import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff',
    flex:1,
  },
  container:{
    alignSelf:'center',
    width:'95%',
    marginTop:5,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
  },
  containerLogOut:{
    width:'35%',
    backgroundColor:'#5974f5',
    paddingVertical:5,  
    alignItems:'center',
    borderRadius:15    
  },
  textLogOut:{
    color:'#fbfbfc',
    marginLeft:9,
      fontWeight:'900',
      fontSize:20,
  },
  User:{
    color:'#5974f5',
    fontWeight:'900',
    fontSize:20,
    marginLeft:5,
  },
  title: {
    color: '#5974f5',
    marginTop: 10,
    marginLeft: 15,
    fontWeight: '900',
    fontSize: 35,
  },

})

export default HomeScreenStyles;