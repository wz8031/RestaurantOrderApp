import React,{useContext,useState}from 'react';
import {FlatList, Text, View, TouchableOpacity, Modal} from 'react-native'
import CartConext from '../Context/CartContext'
import styles from './style'
// import { AntDesign } from '@expo/vector-icons'; 




const CartItem = ({cartData, onCartItemPress, footerComponent}) => {
  console.log(cartData)
  // const {descrition, name, price, id, image} =cartData;
  const [itemQuantity, setItemQuantityCount] = useState();
  const [itemPrice, setitemprice] = useState();
  const[total, setTotalPrice] = useState();

  const add = ()=>{
    // setItemQuantityCount(item.quantity)
    const newQuantity = itemQuantity + 1
    setItemQuantityCount(newQuantity);
    setTotalPrice(itemPrice * newQuantity)
  }
  
  const minus= ()=>{
    // setItemQuantityCount(item.quantity)
    if(itemQuantity>0){
        const newQuantity = itemQuantity - 1
        setItemQuantityCount(newQuantity);
        setTotalPrice(itemPrice * newQuantity)
    }}

    return(
    <FlatList
    data={cartData}
    renderItem={({ item }) => {
      return (
        <View>         
          <TouchableOpacity onPress={() => {
            onCartItemPress(item);
           }}>
          <View key={item.id}>
            <View style={styles.itemText}>
              <Text >{item.name}</Text>
              <Text>{item.quantity}</Text>
              <Text >{item.price}</Text>
              {/* <AntDesign onPress={deleteItem()} name="delete" size={24} color="black" /> */}
            </View>

          </View>
         </TouchableOpacity> 
         
         </View>
    )}}
    
    keyExtractor={(item) => `${item.id}`}
    ListEmptyComponent={()=>{
        return(  <Text>NO item found</Text>)
      }}
      ListFooterComponent={footerComponent}
  />)

}

export default CartItem;