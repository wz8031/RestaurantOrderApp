import React, { useState } from 'react';
import { Text, View, Image, Pressable, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Itemlist from '../menuitem/itemlist'
import { ScrollView } from 'react-native-gesture-handler';
const database =[
    {
        title:'Appetizers',
        data:[
            { name: 'spring roll(4 pic)', price: 4.99, id: 1 },
            { name: 'Edemame(4 pic)', price: 5.99, id: 2 },
        ]
    },
    {
        title:'Sushi',
        data:[
            {name:'Gyoza(4 pic)', price: 4.99, id:3}
        ]
    },
    {
        title:'Rice',
        data:[
            {name:'haha(4 pic)', price: 4.99, id:4}
        ]
    },

];

const Home = ({ navigation }) => {
    const [selectedLocation, setSeletedLocation] = useState();
    return (
        
        <ScrollView>

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


            <Pressable onPress={() =>
                navigation.navigate('itemDetails', { name: 'itemDetails' })

            }>
                <Itemlist meneitems={database} />
            </Pressable>

        </ScrollView>
    );

};

export default Home;