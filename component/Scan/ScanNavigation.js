import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabViewExample from './index';


const Stack = createStackNavigator();

const ScanNavigator = ()=>{
    return(
        
            <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: "#9AC4F8",
                },
                headerTintColor: "white",
                headerTitleAlign:'center'
              }}>
                <Stack.Screen name='Scan' component={TabViewExample} options={{title:'Scan Me!!', headerTitleAlign:'center'}}/>

            </Stack.Navigator>
    
    )
}

export default ScanNavigator;