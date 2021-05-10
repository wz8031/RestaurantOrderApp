import React from 'react';
import {View, StyleSheet} from 'react-native';
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const DrawerContent = (props)=>{
    return(
        //why it has to be flex 1 to be working????
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View>
                   {/* user info section */}
                    <View  style={{flexDirection:'row', marginTop:15}}>
                        <Avatar.Image
                            source={require('../../../assets/icon.png')}
                            size={50}
                        />
                        <View style={{flexDirection:'column', marginLeft:15}}>
                            <Title>Ray Zhen</Title>
                            <Caption>@rayzhen</Caption>
                        </View>

                    </View>
                    <Drawer.Section>
                        <DrawerItem
                            label='Home'
                        />
                        <DrawerItem
                            label='Point'
                        />
                        <DrawerItem
                            label='Setting'
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem 
                    label='sign out'
                />
            </Drawer.Section>
        </View>
        
    )
}

export default DrawerContent;