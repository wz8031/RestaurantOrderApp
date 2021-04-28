import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Order from './index';


const Stack = createStackNavigator();

const OrderNavigator = ()=>{
    return(
        
            <Stack.Navigator initialRouteName='Order' headeShown='false'>
                <Stack.Screen name='Order' component={Order} options={{title:'Your orders', headerTitleAlign:'center'}}/>

            </Stack.Navigator>
    
    )
}

export default OrderNavigator;