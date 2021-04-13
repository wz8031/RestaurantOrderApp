import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Menuitem from '../menu_item'
import itemDetails from '../itemDetails';

const Stack = createStackNavigator();

const MainStackNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='itemDetails'>
                <Stack.Screen name='Menuitem' component={Menuitem} options={{title:'Sushi Island'}}/>
                <Stack.Screen name='itemDetails' component={itemDetails} options={{title:'Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;