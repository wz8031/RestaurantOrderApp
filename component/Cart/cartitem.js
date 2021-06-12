import React,{useContext,useState}from 'react';
import {FlatList, Text, View, TouchableOpacity, Modal} from 'react-native'
import CartConext from '../Context/CartContext'
import styles from './style'




const CartItem = ({cartData,footerComponent}) => {
  console.log(cartData)
  const {descrition, name, price, id, image} =cartData;
  const [itemQuantity, setItemQuantityCount] = useState(1);
  const[total, setTotalPrice] = useState(price * itemQuantity)

  const add = ()=>{
    const newQuantity = itemQuantity + 1
    setItemQuantityCount(newQuantity);
    setTotalPrice(price * newQuantity)
  }
  
  const minus= ()=>{
    if(itemQuantity>0){
        const newQuantity = itemQuantity - 1
        setItemQuantityCount(newQuantity);
        setTotalPrice(price * newQuantity)
    }}

  const [modalOpen,setModalOpen] = useState(false);

    return(
    <FlatList
    data={cartData}
    renderItem={({ item }) => {
      return (
        <View>
        
          <View>
            <Modal visible={modalOpen} animationType='slide' transparent={true}>
              <View style={styles.modalContent}>
                <View style={styles.wraper}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>{item.name}</Text>
                  <View>
                    <Text>Quantity</Text>
                  </View>
                  <View style={styles.count}>
                    <TouchableOpacity
                        onPress={add}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            +
                                </Text>
                    </TouchableOpacity>

                    <Text style={{ paddingHorizontal: 20 }}>{itemQuantity}</Text>

                    <TouchableOpacity
                        onPress={minus}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            -
                                </Text>
                    </TouchableOpacity>

                </View>
                  <TouchableOpacity
                    style={{...styles.button, ...styles.buttont}}
                    onPress={() => {
                      setModalOpen(false)
                    }}>
                      
                    <Text style={styles.buttonText}>Save Changes<Text>    </Text><Text>{total}</Text></Text>
                    
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          
          <TouchableOpacity onPress={() => {
          setModalOpen(true)
        }}>
          <View key={item.id}  >

            <View style={styles.itemText}>
              <Text >{item.name}</Text>
              <Text>{item.quantity}</Text>
              <Text >{item.price}</Text>
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