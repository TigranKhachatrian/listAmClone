
import { View,Image,Text,StyleSheet,Pressable} from "react-native"


const SellItem = ({url,desc,price,itemName,status,handlePress}) => {
    const styles = StyleSheet.create({
      sellItem:{
        alignItems:'center',
        flexDirection:'row',
        marginBottom:10
      
      },
      sellItemImage:{
        alignItems:'center',
        marginRight:5
      },
      sellItemHeader:{
        fontSize:20,
        color:'white',
        marginBottom:5
  
      },
      sellItemPrice:{
        fontWeight:'bold',
        color:'white',
        fontSize:18,
  
  
      },
      sellItemDesc:{
        // width:'70%',
        color:'white'
      }
      
    })
    let descrip = desc
    if(desc.length >= 20) descrip = desc.slice(0,40) + '...'
    return(
    <Pressable style={styles.sellItem} onPress={handlePress}>
            <View style={styles.sellItemImage}>
              <Image source={{
                uri:url
              }} style={{width:150,height:75,borderRadius:10}} />
            </View>
        <View style={styles.styleItemTexts}>
          <Text style ={styles.sellItemHeader} >{itemName}</Text>
      <Text style={styles.sellItemPrice}>{'$' + price}</Text>
      {status && 
        <View style={status.toLowerCase() === 'շտապ' ? {backgroundColor:'red',borderRadius:5,width:45,justifyContent:'center'} : status.toLowerCase() === 'դիլեր' ? {backgroundColor:'white',borderRadius:5,width:45,alignItems:'center'} : {} }>
          <Text>{status}</Text>
        </View>
        }
      <Text style={styles.sellItemDesc}>{descrip}</Text>
  
  
            </View>
      </Pressable>
    )
   
  }

export default SellItem;