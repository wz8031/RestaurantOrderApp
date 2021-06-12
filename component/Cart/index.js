import React, { useContext, useState } from 'react';
import { Text, View,TouchableOpacity,Modal} from 'react-native';
import { CartContext } from '../Context/CartContext'
import styles from './style';
import CartItem from './cartitem'

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  // const totalPrce = 
  const [modalOpen,setModalOpen] = useState(false);

  return (

    <View>
      <Modal visible={modalOpen} animationType='slide' transparent={true}>
        <View style={styles.modalContent}>
          <View style={styles.wraper}>
          <Text>haha</Text>
          <TouchableOpacity
          style={styles.button}
            onPress={() => {
              setModalOpen(false)
            }}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <CartItem cartData={cart}
        footerComponent={() => {
          return (
            <View style={styles.text}>
              <Text>Total Price : {total()}</Text>
            </View>
          )}}
      />
      <View>
        <TouchableOpacity  onpress={setModalOpen(true)} style={styles.button}>
          <Text style={styles.buttonText}>Check Out</Text>
        </TouchableOpacity>
      </View>

      {/* const footerComponent=()=>{
        <View style={styles.text}>
        <Text>item in cart : {cart.length}</Text>
        <Text>Total Price : {total}</Text>} */}
        

    
    </View>
   
    
    
  );
};

export default Cart;
