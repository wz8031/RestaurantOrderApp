import React, {useContext} from 'react';
import { Text, View, Image, Pressable, Button, Alert } from 'react-native';
import {CartContext} from '../Cart/CartContext'
import styles from './style';


const Menuitem = ({name, price, id})=>{

    const {addItems} =useContext(CartContext);
    /**
     * addItems:[cart, addItems]
     */
    /**
     * addItems:{
     * cart,
     * addItems,
     * deleteItems
     * }
     * 
     */
    return(

        <View key={id} style={styles.container} >

            <Image source={require('../../assets/icon.png')} style={{ width: 100, height: 100 }} />

            <View>
                <Text style={styles.itemname}>{name}</Text>
                <Text style={styles.itemdescrib}>Deep-fried vegeteran dumpling. One order comes with four pieces</Text>
                <Text style={styles.itemprice}>{price}</Text>
                  <Pressable onPress={() =>
                  {
                    addItems(name,price);
                 
                  }

            }>
                 <Text>add</Text>
            </Pressable>
            </View>
           
        </View>


    )

}

export default Menuitem;