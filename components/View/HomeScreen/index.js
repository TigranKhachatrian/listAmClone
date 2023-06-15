import React, { useContext } from 'react'
import {View,Text,StatusBar,StyleSheet,Pressable,TextInput,SafeAreaView,FlatList,Image} from 'react-native'
// import ImageLoad from 'react-native-image-placeholder';
import Svg, { Path } from "react-native-svg"
import SellItem from './components/SellItem'
import Item from './components/Item'
import CarContext from '../../../contexts/carContext/context'

function SvgComponent(props) {
  return (
    <Svg
      height={50}
      viewBox="0 0 20 20"
      width={50}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 5.475a.682.682 0 00-.682.681V9.28H6.195a.682.682 0 00-.674.582l-.008.1c0 .377.305.682.682.682h3.123v3.123c0 .343.252.626.581.675l.101.007a.682.682 0 00.682-.682l-.001-3.123h3.124a.682.682 0 00.674-.58l.008-.102a.682.682 0 00-.682-.681l-3.124-.001V6.156a.682.682 0 00-.58-.674z"
        fill="#555"
      />
    </Svg>
  )
}




const HomeScreen = ({navigation}) => {

    const cars = useContext(CarContext)
  const productSorts = ['Բեռնատարներ','Ավտոմեքենաներ','Հեծանիվներ','Մոտոցիկլներ']
  return (

    <SafeAreaView style={styles.container}> 
      <StatusBar animated={true} />
      <View style={styles.header}>
        <View style={styles.headerFirstLine} >
        <Pressable >
          <Text style={styles.btn}>{'<'}</Text>
        </Pressable>
        <TextInput style={styles.textInput} placeholder='Տրանսպորտ'   placeholderTextColor="white"/>
      <Pressable >
          <Text style={styles.btn}>{'%'}</Text>
        </Pressable>
        </View>
        <View 
        style={styles.flatList}>

        <FlatList
        data={productSorts}
        renderItem={({item}) => <Item title={item} /> }
        keyExtractor={item => productSorts.indexOf(item)}
       horizontal={true}
        />
       </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.header}>Թոփ հայտարարություններ</Text>
        <FlatList
        data={cars}
        renderItem={({item}) => <SellItem url={item.url} desc={item.desc} status={item.status} itemName={item.header} price={item.price} id={item.id} handlePress={() => navigation.navigate('Detail',{carId:item.id}) }/> }
        keyExtractor={item => item.id}
        />
      </View>
   
        <View style={styles.footer}>
        <Image source={
            {
              uri:'https://www.iconsdb.com/icons/preview/gray/apple-xxl.png'
              
            }
          } style={styles.pagesIcon} /> 
          <Image source={
            {
              uri:'https://www.iconsdb.com/icons/preview/gray/heart-5-xxl.png'
            }
          } style={styles.pagesIcon} /> 
          <SvgComponent /> 
          <Image source={
            {
              uri:'https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-part-2-1/80/Message_gray-512.png'
            }
          } style={styles.pagesIcon} /> 
             <Image source={
            {
              uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png'
            }
          } style={styles.pagesIcon} /> 
        </View>

    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor:'#1C1C1E'
  },
  
  btn:{
    color:'#2A80DA',
    fontSize:44,
    marginRight:15
  },
  textInput:{
    backgroundColor:'#494949',
    borderRadius:50,
    width:'75%',
    padding:5,
    marginRight:15,
    color:'white'
  },
  headerFirstLine:{
    flexDirection:'row',
    marginBottom:4,

  },
  text:{
    color:'white',
    fontSize:18

  },
  view:{
    padding:3,
    backgroundColor:'#494949',
    marginRight:3,
    borderRadius:5
  },
  flatList:{
    // flex:,
    justifyContent:'center'
  },
  header:{
    paddingLeft:5,

    // alignItems:'center'
  },

  main:{
    backgroundColor:'#333300',
    flexDirection:'column'
  },
  header:{
    fontSize:20,
    marginBottom:10,
    color:'white',
    paddingLeft:5
  },
  footer:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor:'black',
      flexDirection:'row',
      justifyContent:'space-around',
      padding:3
    },
    footerText:{
      color:'gray'
    },
  pagesIcon:{
    width:50,
    height:50
  }
})

export default HomeScreen;

   