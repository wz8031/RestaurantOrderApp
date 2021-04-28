import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../Home'
import itemDetails from '../../itemDetails';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>{

    return(
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign:'center'
      }}>
        <HomeStack.Screen name='Sushi Island' component={Home} options={{
            headerLeft:()=>(
                <Ionicons.Button name='menu-sharp' size={20}
                backgroundColor='#9AC4F8' onPress={()=>
                    navigation.openDrawer()
                }></Ionicons.Button>
            )
        }} />
        <HomeStack.Screen name='itemDetails' component={itemDetails}/>
    </HomeStack.Navigator>
    )
}

const HomeNavigator = ()=>{
    return(
        //create a Drawer Navigator and pass in the HomeStackNavigator we just created
          <Drawer.Navigator>
              <Drawer.Screen name='Home' component={HomeStackScreen} />
          </Drawer.Navigator>
    )
}

export default HomeNavigator;