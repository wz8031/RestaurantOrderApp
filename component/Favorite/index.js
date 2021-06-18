import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import FavoriteItem from './favoriteItem';

const myFavorite = ({ navigation }) => {
    const [Favorkey, setFavorKey] = useState([]);

    const getAsynData = async () => {
        try {
            const Favorkeys = await AsyncStorage.getAllKeys();
            // const items = await AsyncStorage.multiGet(keys)

            const keyList = Favorkeys.map(allKey => JSON.parse(allKey))

            setFavorKey(keyList)
            // if(itemList!=null){
            // 
        } catch (e) {
            alert('errkor')
        }
    }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
            setFavorKey([])
        } catch (e) {
            // clear error
        }

        console.log('Done.')
    }

    useEffect(() => {
        getAsynData();
    });

    return (

        <View>
            <View>
                <FavoriteItem FavoriteKey={Favorkey} />
               
                
                 {/* <Text>{Favorkey}</Text> */}
                
            </View>
            <View>
            <TouchableOpacity onPress={() => clearAll()} style={styles.button}>
                <Text style={styles.buttonText}>clear</Text>
            </TouchableOpacity>
            </View>

        </View>

    )


}

export default myFavorite;