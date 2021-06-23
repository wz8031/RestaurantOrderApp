import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavigator from './component/BottomNavigator'
import { CartProvider } from './component/Context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </CartProvider>


  );
}


