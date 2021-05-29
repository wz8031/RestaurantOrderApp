import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from './index';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const CartNavigator = ()=>{
    return(
        
            <Stack.Navigator initialRouteName='Cart'  screenOptions={{
                headerStyle: {
                  backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerBackTitle: "Back",
                headerTitleAlign:'center'
              }}>
                <Stack.Screen name='Cart' component={Cart} options={{title:'My Cart', headerTitleAlign:'center',
             headerLeft:()=>(
                <Ionicons.Button name='cart-outline' size={30}
                backgroundColor='#9AC4F8' onPress={()=>
                    navigation.openDrawer()
                }></Ionicons.Button>
            )
            }}/>

            </Stack.Navigator>
    
    )
}

export default CartNavigator;