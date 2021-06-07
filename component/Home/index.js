import React, { useState } from 'react';
import { Text, View, Image, Pressable,SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Itemlist from '../menuitem/itemlist'
const database =[
    {
        title:'Appetizers',
        data:[
            { image: require('../../assets/springroll.png'), name: 'spring roll(4 pic)', price: 4.99, id: 1 },
            { image: require('../../assets/edamame-thumb.png'), name: 'Edemame(4 pic)', price: 5.99, id: 2 },
        ]
    },
    {
        title:'Sushi',
        data:[
            {image: require('../../assets/Gyoza.png'), name:'Gyoza(4 pic)', price: 4.99, id:3}
        ]
    },
    {
        title:'Rice',
        data:[
            {image: require('../../assets/hahaS.png'), name:'haha(4 pic)', price: 4.99, id:4}
        ]
    },

];

const Home = ({ navigation }) => {
    const [selectedLocation, setSeletedLocation] = useState();
    return (
        
        <SafeAreaView>

            <View>

                <Picker
                    selectedValue={selectedLocation}
                    onValueChange={(itemValue, itemIndex) =>
                        setSeletedLocation(itemValue)
                    }>

                    <Picker.Item
                        label="Water Street"
                        value="downtown"
                    />

                    <Picker.Item
                        label="Kenmount"
                        value="uptown"
                    />
                </Picker>

            </View>


            {/* <Pressable onPress={() =>
                navigation.navigate('itemDetails', { name: 'itemDetails' })

            }> */}
                <Itemlist navigation={navigation} meneitems={database} />
            {/* </Pressable> */}

        </SafeAreaView>
    );

};

export default Home;