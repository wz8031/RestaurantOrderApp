import React,{useState, useContext} from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import {CartContext} from '../Context/CartContext'



const itemDetails = ({navigation,route}) =>{
    const {item} = route.params;
    const {descrition, name, price, id, image} =item;
    const {addItems} = useContext(CartContext);

    const [value, onChangeText] = React.useState('');
    const [itemQuantity, setItemQuantityCount] = useState(1);
    const[total, setTotalPrice] = useState(price * itemQuantity)

    const add = ()=>{
        const newQuantity = itemQuantity + 1
        setItemQuantityCount(newQuantity);
        setTotalPrice(price * newQuantity)
    }

    const minus= ()=>{
        if(itemQuantity>0){
            const newQuantity = itemQuantity - 1
            setItemQuantityCount(newQuantity);
            setTotalPrice(price * newQuantity)
        }

    }
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        
                        <Text>{descrition}</Text>

                    </View>
                  
                </View>
                <View style={styles.product}>
                    <Image source={image}
                        style={{
                            height: 300,
                            width: 300,
                            alignSelf: 'center'
                        }}
                    />
                </View>
                <View style={styles.count}>
                    <TouchableOpacity
                        onPress={add}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            +
                                </Text>
                    </TouchableOpacity>

                    <Text style={{ paddingHorizontal: 20 }}>{itemQuantity}</Text>

                    <TouchableOpacity
                        onPress={minus}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            -
                                </Text>
                    </TouchableOpacity>

                </View>

                <View style={{ paddingBottom: 20, }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Sushi Island</Text>

                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'grey' }}>Name:{name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-end' }}>Unit Price:{price}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-end' }}>Total:{total}</Text>
                    </View>
                


                </View>

                <View>

                    <Text style={{ color: 'grey' }}>Special Instructions</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 2, }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <TouchableOpacity onPress={() => addItems({item, quantity:itemQuantity})} style={styles.button}>
                        <Text style={styles.buttonText}>Add to chart</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View>
    )
}

export default itemDetails;