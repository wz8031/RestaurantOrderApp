import React, { useState } from 'react';
import { Text, View, Image, Pressable, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Menuitem from '../menuitem'
import { ScrollView } from 'react-native-gesture-handler';

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
                <Menuitem />
            </Pressable>

        </ScrollView>
    );

};

export default Home;