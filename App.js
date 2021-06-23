import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import BottomNavigator from './component/BottomNavigator'
import {CartProvider} from './component/Context/CartContext'
// import firebase from 'firebase/app'
// import keys from './config/keys';

export default function App() {
  
    // Initialize Firebase
    // firebase.initializeApp(keys.firebaseConfig);
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(keys.firebaseConfig);
  //  }else {
  //     firebase.app(); // if already initialized, use that one
  //  }
  return (
      <CartProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
      </CartProvider>
    
     
  );
}


