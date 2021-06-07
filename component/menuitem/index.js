import React, {useContext} from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CartContext} from '../Context/CartContext'
import styles from './style';
import itemDetails from '../itemDetails/index'


const Menuitem = ({name, price, id, image, navigation})=>{

    // const {addItems} =useContext(CartContext);
   
    return(

        <TouchableOpacity onPress={()=>{
            navigation.navigate('itemDetails',{name,price,image})
        }}>
        <View key={id} style={styles.container} >
          
                <Image source={image} style={{ width: 100, height: 100 }} />

                <View>
                    <Text style={styles.itemname}>{name}</Text>
                    <Text style={styles.itemdescrib}>Deep-fried vegeteran dumpling. One order comes with four pieces</Text>
                    <Text style={styles.itemprice}>{price}</Text>
                </View>

        </View>
        </TouchableOpacity>


    )

}

export default Menuitem;