import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({date, destinationCity, destinationCountry, originCity, originCountry, passengers}) => {
  return (
    <View> 
        <View style={styles.containerInfoCard}>
            <View style={styles.infOne}>
                <Text style={styles.ciudad}>{originCity}</Text>
                <Text style={styles.pais}>{originCountry}</Text>   
                <Text style={styles.infoAdd}>{date}</Text> 
            </View>
            <View style={{width:'18%',marginHorizontal:10,marginTop:10,alignItems:'center'}}>
            <Ionicons name='airplane-sharp' size={32} color='#5974f5'/>
            </View>
            <View style={styles.infTwo}>
                <Text style={styles.ciudad} >{destinationCity}</Text>
                <Text style={styles.pais} >{destinationCountry}</Text> 
                <Text style={styles.infoAdd}> {passengers} passengers</Text>
            </View>
        </View>
        <View style={styles.linea1}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    Screen:{

    },
    containerInfoCard:{
        backgroundColor:'#FFF',
        width:'90%',
        height:120,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:8,
        borderBottomColor:'gray',
        borderBottomWidth:2
    },
    infOne:{
        width:'40%',
        padding:10
    },
    infTwo:{
        width:'40%',
        alignItems:"flex-end",
        paddingRight:20,
        paddingTop:10
    },
    ciudad:{
        textTransform:'uppercase',
        fontWeight:'900',
        color:"#000",
        fontSize:22
    },
    infoAdd:{
        fontWeight:'bold',
        color:'#000'
    },
    linea1:{
      marginTop:10,
      position:'absolute',
      alignSelf:'center',
      top: 65,
      borderTopWidth:1,
      borderColor:'#bcbcbc',
      width:'90%',
    },
    pais:{ 
        color:'#bcbcbc',
        paddingVertical:6,
        fontWeight:'light',
        marginBottom:10,
    }, 
})

export default Card;