import { useContext, useEffect, useState } from "react"
import { View,Text,Image,StyleSheet} from "react-native"

import CarContext from "../../../contexts/carContext/context"

function DetailScreen({route}) {
    const cars = useContext(CarContext)
    const {carId} = route.params
    const [car,setCar] = useState({})
    useEffect(
     ()=>{
        const car = cars.find(item => carId === item.id)
        setCar(car)
     },[carId,cars])
     
    return(
        <View style={styles.sellItem}>
        <View style={styles.sellItemImage}>
          <Image source={{
            uri:car.url
          }} style={{width:400,height:250}} />
        </View>
    <View style={styles.styleItemTexts}>
      <Text style ={styles.sellItemHeader} >{car.header}</Text>
  <Text style={styles.sellItemPrice}>{'$' + car.price}</Text>

    <View style={car.status?.toLowerCase() === 'շտապ' ? styles.urgently: car.status?.toLowerCase() === 'դիլեր' ? styles.dealer : {} }>
      <Text style={styles.statusText}>{car.status}</Text>
    </View>
    
  <Text style={styles.sellItemDesc}>{car.desc}</Text>


        </View>
  </View>

    )
}

const styles = StyleSheet.create({
    sellItem:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      flexDirection:'column',
      backgroundColor:'#1C1C1E'
    
    },
    sellItemImage:{
      alignItems:'center',
      borderWidth:.5,
      borderColor:'white'
    },
    sellItemHeader:{
      fontSize:30,
      color:'white',
      marginHorizontal:7.5,
      textAlign:'justify'

    },
    sellItemPrice:{
      fontWeight:'bold',
      color:'white',
      fontSize:25,
      marginHorizontal:7.5,
      textAlign:'justify'


    },
    sellItemDesc:{
      // width:'70%',
      color:'white',
      fontSize:16,
      textAlign:'justify',
      marginHorizontal:7.5,
      textAlign:'justify'

    },
    urgently:{
        backgroundColor:'red',
        borderRadius:5,
        width:70,
        justifyContent:'center',
        fontSize:20,
        arginHorizontal:7.5,
        textAlign:'justify',
        justifyContent:'center'

    },
    dealer:{
        backgroundColor:'white',
        borderRadius:5,
        width:70,
        alignItems:'center',
        marginHorizontal:7.5,
        justifyContent:'center'
    },
    statusText:{
        textAlign:'justify',
        fontSize:20,
    }
    
  })
export  default DetailScreen;