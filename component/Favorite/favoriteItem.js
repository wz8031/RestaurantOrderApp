import React,{useContext,useState}from 'react';
import {FlatList, Text, View, TouchableOpacity, Modal} from 'react-native'
import CartConext from '../Context/CartContext'
import styles from './style'
const database =[
    
        
        
            {
                image: require('../../assets/springroll.png'),
                name: 'spring roll(4 pic)',
                price: 4.99,
                id: 1,
                descrition:'warp with vegetable',
                
            },
            {
                image: require('../../assets/edamame-thumb.png'),
                name: 'Edemame(4 pic)',
                price: 5.99,
                id: 2,
                descrition:'boilded green beans',
                
            },
        
    
    
        
     
            {
                image: require('../../assets/hahaS.png'),
                name: 'haha(4 pic)',
                price: 4.99,
                id: 4,
                descrition:'smiling face with tears',
                
            },
    
      
            {
                image: require('../../assets/Gyoza.png'),
                name: 'Gyoza(4 pic)',
                price: 4.99,
                id: 3,
                descrition:'deep fry dumplingb',
               
            }
        ]
 





const FavoriteItem=({FavoriteKey})=>{
    const currentFavorite = []
    for(let i=0; i < FavoriteKey.length ; i++){
    const existingIndex = database.findIndex((item) => item.id === FavoriteKey[i]);
    currentFavorite.push(database[existingIndex]);
    }
    return(
        <FlatList
        data={currentFavorite}
        renderItem={({ item }) => {
          return (
            <View>         
              {/* <TouchableOpacity onPress={() => {
                onCartItemPress(item);
               }}> */}
              <View key={item.id}>
                <View style={styles.itemText}>
                  <Text >{item.name}</Text>
                  <Text>{item.quantity}</Text>
                  <Text >{item.price}</Text>
                </View>
    
              </View>
             {/* </TouchableOpacity> */}
             </View>
        )}}
        
        keyExtractor={(item) => `${item.id}`}
        ListEmptyComponent={()=>{
            return(  <Text>NO item found</Text>)
          }}
          

          />)
}

export default FavoriteItem;

