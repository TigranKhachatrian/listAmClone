import { Pressable,Text,StyleSheet } from "react-native"

const Item = ({title}) => (
    <Pressable style={styles.view}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )

const styles = StyleSheet.create({
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
})

export default Item;
