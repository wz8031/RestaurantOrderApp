import React,{useContext}from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native'
import CartConext from '../Context/CartContext'
import styles from './style'



const CartItem = ({cartData,footerComponent}) => {
  console.log(cartData)
    return(
    <FlatList
    data={cartData}
    renderItem={({ item }) => {
      return (
        <TouchableOpacity onPress={() => {
          alert('gaga')
        }}>
          <View key={item.id}  >

            <View style={styles.itemText}>
              <Text >{item.name}</Text>
              <Text>{item.quantity}</Text>
              <Text >{item.price}</Text>
            </View>

          </View>
        </TouchableOpacity>
    )}}
    
    keyExtractor={(item) => `${item.id}`}
    ListEmptyComponent={()=>{
        return(  <Text>NO item found</Text>)
      }}
      ListFooterComponent={footerComponent}
  />)

}

export default CartItem;