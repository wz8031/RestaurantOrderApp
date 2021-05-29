import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {CartContext} from '../Cart/CartContext'
import { ScrollView } from 'react-native-gesture-handler';


const Cart = () => {
  const [cart, setcart]= useContext(CartContext)
  return (
    <ScrollView sty>
    <View>
        <Text>item in cart : 0</Text>
        <Text>Total Price : 0</Text>

    </View>
    </ScrollView>
    
    
  );
};

const styles = {
  headerStyle: {
    flex: 0.2,
    elevation: 2,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2'
  }
};

export default Cart;
