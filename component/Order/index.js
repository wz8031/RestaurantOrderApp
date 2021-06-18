import React, { useState, useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text, View, Modal, Image, ScrollView,Animated, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';

const Order = ({ navigation }) => {
    const markers = [
        {
          coordinate: {
            latitude: 47.549,
            longitude: -52.784,
          },
          title: "Amazing Food Place",
          description: "This is the best food place",
          
          rating: 4,
          reviews: 99,
        }, 
        {
          coordinate: {
            latitude: 47.564,
            longitude:  -52.707,
          },
          title: "Second Amazing Food Place",
          description: "This is the second best food place",
          
          rating: 5,
          reviews: 102,
        },]

    const { width, height } = Dimensions.get("window");
    const CARD_WIDTH = width * 0.8;
    return (
        



        <View style={styles.container}>

            <MapView style={styles.map}
                initialRegion={{
                    latitude: 47.55,
                    longitude: -52.77,
                    latitudeDelta: 0.322,
                    longitudeDelta: 0.221,
                }}>
                <Marker coordinate={{
                    latitude: 47.549,
                    longitude: -52.784,
                }}
                title='Sushi Island Kenmount.Rd'
                // onPress={()=>{
                //     setModalVisble(true)
                // }}
                >
                </Marker>
                <Marker coordinate={{
                    latitude: 47.564,
                    longitude: -52.707,
                    
                }}
                title='Sushi Island Water.St'
                // onPress={()=>{
                //     setModalVisble(true)
                // }}
                >
                </Marker>
               
            </MapView>
            <View>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width*0.8+20}
                    snapToAlignment='center'
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                    contentInset={{
                        top:0,
                        left:width*0.1-10,
                        bottom:0,
                        right:width*0.1-10,
                    }}
                    
                >

                    {markers.map((marker, index) => (

                            <View style={styles.card} key={index}>
                                <Image
                                    style={styles.cardImage}
                                    source={require('../../assets/sushi.png')}
                                />
                                <View style={styles.textContent}>
                                    <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                    <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                                    <View style={styles.button}>
                                        <TouchableOpacity
                                            onPress={() => { }}
                                            style={[styles.signIn, {
                                                borderColor: '#FF6347',
                                                borderWidth: 1
                                            }]}
                                        >
                                            <Text style={[styles.textSign, {
                                                color: '#FF6347'
                                            }]}>Order Now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    )}
                </Animated.ScrollView>
            </View>

        </View>

    )


}

export default Order;