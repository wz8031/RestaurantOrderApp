import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import HomeNavigator from '../HomeNavigation';
import itemDetails from '../itemDetails';

const Tab = createBottomTabNavigator();

const BottomNavigator = ()=>{
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Details" component={itemDetails} />
        <Tab.Screen name="Favorite" component={itemDetails} />
        <Tab.Screen name="Cart" component={itemDetails} />


      </Tab.Navigator>
    )
}

export default BottomNavigator;