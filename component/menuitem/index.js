import React, {useContext} from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CartContext} from '../Context/CartContext'
import styles from './style';


const Menuitem = ({item, navigation})=>{
    const {descrition, name, price, id, image} =item;

    return(

        <TouchableOpacity onPress={()=>{
            navigation.navigate('itemDetails',{item})
        }}>
        <View key={id} style={styles.container} >
          
                <Image source={image} style={{ width: 100, height: 100 }} />

                <View style={{marginLeft:5}}>
                    <Text style={styles.itemname}>{name}</Text>
                    <Text style={styles.itemdescrib}>{descrition}</Text>
                    <Text style={styles.itemprice}>{price}</Text>
                </View>

        </View>
        </TouchableOpacity>


    )

}

export default Menuitem;