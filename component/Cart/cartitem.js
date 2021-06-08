import React,{useContext}from 'react';
import {FlatList, Text,View} from 'react-native'
import CartConext from '../Context/CartContext'
import styles from './style'



const CartItem = ({cartData,footerComponent}) => {
    return(
    <FlatList
    data={cartData}
    renderItem={(({ item }) => {
      return (
        // <TouchableOpacity onPress={() => {
          
        // }}>
          <View key={item.id}  >

            <View style={styles.itemText}>
              <Text >{item.name}</Text>
              <Text>Quantity:1</Text>
              <Text >{item.price}</Text>
            </View>

          </View>
        // </TouchableOpacity>
    )})}
    keyExtractor={item => String(item.id)}
    ListEmptyComponent={()=>{
        return(  <Text>NO item found</Text>)
      }}
      ListFooterComponent={footerComponent}
  />)

}

export default CartItem;