import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../Home'
import itemDetails from '../../itemDetails';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import DrawerContent from './DrawerContent'

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
            //Adding a button to open the Drawer menu
            headerLeft:()=>(
                <Ionicons.Button name='menu-sharp' size={20}
                backgroundColor='#9AC4F8' onPress={()=>
                    navigation.openDrawer()
                }></Ionicons.Button>
            )
        }} />
        <HomeStack.Screen name='itemDetails' component={itemDetails}
            options={{
                headerRight:()=>(
                  <Ionicons.Button name='heart-outline' size={20}
                  backgroundColor='#9AC4F8'
                ></Ionicons.Button> 
                )
            }}
        
        />
    </HomeStack.Navigator>
    )
}

const HomeNavigator = ()=>{
    return(
        // <DrawerContentScrollView>
        //create a Drawer Navigator and pass in the HomeStackNavigator we just created
          <Drawer.Navigator drawerContent={props => <DrawerContent{...props}/>}>
              <Drawer.Screen name='Home' component={HomeStackScreen} />
          </Drawer.Navigator>
        //   </DrawerContentScrollView>
    )
}

export default HomeNavigator;