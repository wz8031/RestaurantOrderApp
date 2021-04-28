import React from 'react';
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from '../Home/HomeNavigation';
import Header from '../Cart';
import OrderNavigator from '../Order/OrderNavigation';
import TabViewExample from '../Scan';
import FavoriteNavigator from '../Favorite/FavoriteNavigation'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = ()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigator} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="Order" component={OrderNavigator} options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color }) => (
            <Ionicons name="hourglass-sharp" color={color} size={26} /> ),
        }}/>

        <Tab.Screen name="Scan" component={TabViewExample} options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color }) => (
            <Ionicons name="scan-sharp" color={color} size={26} /> ),
        }}/>

        <Tab.Screen name="Favorite" component={FavoriteNavigator} options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-sharp" color={color} size={26} /> ),
        }}/>

        <Tab.Screen name="Cart" component={Header} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-sharp" color={color} size={26}/>),
          }}/>


      </Tab.Navigator>
    )
}

export default BottomNavigator;