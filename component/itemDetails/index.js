import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';
import { CartContext } from '../Context/CartContext'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const itemDetails = ({ navigation, route }) => {
    const { item } = route.params;
    const { descrition, name, price, id, image } = item;
    const { addItems } = useContext(CartContext);

    const [value, onChangeText] = React.useState('');
    const [itemQuantity, setItemQuantityCount] = useState(1);
    const [total, setTotalPrice] = useState(price * itemQuantity)

    useEffect(() => {
        navigation.setOptions({
            headerRight:()=>(

                <Ionicons.Button 
                clear text-center click="toggle()" 
                onPress={() => asynData(item)} 
                name='heart-outline'
                // name={visible ? 'arrow-drop up-circle':'arrow-drop down-circle'}
                size={20}
                backgroundColor='#9AC4F8'
              ></Ionicons.Button> 
                
              
              )
        })
    }, [])
    const add = () => {
        const newQuantity = itemQuantity + 1
        setItemQuantityCount(newQuantity);
        setTotalPrice(price * newQuantity)
    }

    const minus = () => {
        if (itemQuantity > 0) {
            const newQuantity = itemQuantity - 1
            setItemQuantityCount(newQuantity);
            setTotalPrice(price * newQuantity)
        }
    }

    const asynData = async(item) => {
        try{
        // console.log(item)
        const thisItem= await AsyncStorage.getItem(item.id.toString())
        if(!thisItem){
        // const jsonValue = JSON.stringify(item.id)
        await AsyncStorage.setItem(item.id.toString(),item.name)
        }else{
            alert('already added')
        }
        // console.log(jsonValue)
        } catch(err){
            alert('error')
        }
    }

    // const getAsynData = async()=>{
    //     try {
    //         // const keys=[]= await AsyncStorage.getAllKeys();
    //         const jsonValue = await AsyncStorage.getItem(item.name);
    //         const itemList=JSON.parse(jsonValue)
    //         if(itemList!=null){
    //             console.log(itemList.name)
    //         }
    //       } catch(e) {
    //         alert('error')
    //       }
    //     }
    // getAsynData();
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
                    <TouchableOpacity onPress={() => addItems({ item, quantity: itemQuantity })} style={styles.button}>
                        <Text style={styles.buttonText}>Add to chart</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View>
    )
}

export default itemDetails;