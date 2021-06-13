import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { CartContext } from '../Context/CartContext'
import styles from './style';
import CartItem from './cartitem'

const Cart = () => {
  const [isVisible, setModalVisble] = useState(false);
  const { cart, total, updateCartWithItem } = useContext(CartContext);
  const [ viewedCartItem, setCartModalItem ] = useState({
    name: '',
    quantity: 0,
    price: 0
  })
  const onAddPress = () => {
    setCartModalItem({
      ...viewedCartItem,
      quantity: viewedCartItem.quantity + 1
    })

  }
  const onMinuPress = () => {
    setCartModalItem({
      ...viewedCartItem,
      quantity: viewedCartItem.quantity - 1
    })
  }
  return (
    <View>
      <Modal visible={isVisible} animationType='slide' transparent={true}>
        <View style={styles.modalContent}>
          <View style={styles.wraper}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{viewedCartItem.name}</Text>
            <View>
              <Text>Quantity</Text>
            </View>
            <View style={styles.count}>
              <TouchableOpacity
                onPress={onAddPress}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  +
                </Text>
              </TouchableOpacity>

              <Text style={{ paddingHorizontal: 20 }}>{viewedCartItem.quantity}</Text>

              <TouchableOpacity
                onPress={onMinuPress}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ ...styles.button, ...styles.button }}
              onPress={() => {
                updateCartWithItem(viewedCartItem)
                setCartModalItem({
                  name: '',
                  quantity: 0,
                  price: 0
                });
                setModalVisble(false)
              }}>
              <Text style={styles.buttonText}>Save Changes<Text>    </Text><Text>{viewedCartItem.quantity * viewedCartItem.price}</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <CartItem
        cartData={cart}
        onCartItemPress={(item) => {
          setCartModalItem(item);
          setModalVisble(true);
        }}
        footerComponent={() => {
          return (
            <View style={styles.text}>
              <Text>Total Price : {total()}</Text>
            </View>
          )
        }}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {
          // setModalOpen(true)
          alert('ha')
        }}>
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
