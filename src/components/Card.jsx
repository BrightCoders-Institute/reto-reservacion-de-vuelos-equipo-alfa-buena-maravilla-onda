import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//airplane-sharp
//5974f5
const Card = () => {
  return (
    <View> 
        <View style={styles.containerInfoCard}>
            <View style={styles.infOne}>
                <Text style={styles.ciudad}>BEG</Text>
                <Text style={styles.pais}>Serbia</Text>   
                <Text style={styles.infoAdd}>September 3, 2020</Text> 
            </View>
            <View style={{width:'18%',marginHorizontal:10,marginTop:10,alignItems:'center'}}>
            <Ionicons name='airplane-sharp' size={32} color='#5974f5'/>
            </View>
            <View style={styles.infTwo}>
                <Text style={styles.ciudad} >AMS</Text>
                <Text style={styles.pais} >Netherlands</Text> 
                <Text style={styles.infoAdd}>2 passengers</Text>
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
        width:'100%',
        height:120,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:8,
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
      width:'95%',
    },
    pais:{ 
        color:'#bcbcbc',
        paddingVertical:6,
        fontWeight:'light',
        marginBottom:10,
    }
    
})

export default Card;