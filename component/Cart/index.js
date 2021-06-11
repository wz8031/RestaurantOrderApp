import React, { useContext } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import { CartContext } from '../Context/CartContext'
import styles from './style';
import CartItem from './cartitem'

const Cart = () => {
  const { cart, total } = useContext(CartContext);
  // const totalPrce = 



  return (
    <View>
      <CartItem cartData={cart}
        footerComponent={() => {
          return (
            <View style={styles.text}>
              {/* <Text>item in cart : {cart.length}</Text> */}
              <Text>Total Price : {total()}</Text>
            </View>
          )}}
      />
      <View>
        <TouchableOpacity onPress={() => alert('hah')} style={styles.button}>
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
