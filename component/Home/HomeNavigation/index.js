import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../Home'
import itemDetails from '../../itemDetails';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity} from 'react-native';
import DrawerContent from './DrawerContent'
import LoginScreen from '../../auth/loginScreen';

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
        {/* <HomeStack.Screen name='MyModal' component={LoginScreen}  /> */}

        <HomeStack.Screen name='itemDetails' component={itemDetails}
            options={()=>({
                headerRight:()=>(
                   
                  <Ionicons.Button 
                  name='heart-outline' 
                  size={20}
                  backgroundColor='#9AC4F8'
                ></Ionicons.Button> 
                
                )
            })}
        
        />
        <HomeStack.Screen name='Login' component={LoginScreen}  />
    </HomeStack.Navigator>
    )
}
// https://stackoverflow.com/questions/46200454/react-native-dynamically-update-header-title-in-stack-navigator
const HomeNavigator = ()=>{
    return(
        // <DrawerContentScrollView>
        //create a Drawer Navigator and pass in the HomeStackNavigator we just created
          <Drawer.Navigator  mode="modal" drawerContent={props => <DrawerContent{...props}/>}>
              <Drawer.Screen name='Home' component={HomeStackScreen} />
              {/* <Drawer.Screen name='MyModal' component={LoginScreen} /> */}

          </Drawer.Navigator>
        //   </DrawerContentScrollView>
    )
}

export default HomeNavigator;