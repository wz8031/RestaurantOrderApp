import React, {useContext} from 'react';
import { Text, View, Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CartContext} from '../Context/CartContext'
import styles from './style';


const Menuitem = ({descrition, name, price, id, image, navigation})=>{

    // const {addItems} =useContext(CartContext);
   
    return(

        <TouchableOpacity onPress={()=>{
            navigation.navigate('itemDetails',{name,price,image,id})
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