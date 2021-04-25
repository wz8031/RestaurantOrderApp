import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home'
import itemDetails from '../itemDetails';
// import BottomNavigator from '../BottomNavigator';

const Stack = createStackNavigator();

const HomeNavigator = ()=>{
    return(
        
            <Stack.Navigator initialRouteName='Home' headeShown='false'>
                <Stack.Screen name='Home' component={Home} options={{title:'Sushi Island', headerTitleAlign:'center'}}/>
                <Stack.Screen name='itemDetails' component={itemDetails} options={{title:'Details',headerTitleAlign:'center'}}/>
            </Stack.Navigator>
    
    )
}

export default HomeNavigator;