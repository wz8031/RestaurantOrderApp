import React, { useState, useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text, View, Modal, Image, ScrollView, Animated, TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';

const Order = ({ navigation }) => {
    const markers = [
        {
            id: 1,
            coordinate: {
                latitude: 47.549,
                longitude: -52.784,
            },
            title: "Sushi Island Kenmount.Rd",
            description: "This is the best food place",

            rating: 4,
            reviews: 99,
        },
        {
            id: 2,
            coordinate: {
                latitude: 47.564,
                longitude: -52.707,
            },
            title: "Sushi Island Water",
            description: "This is the second best food place",

            rating: 5,
            reviews: 102,
        },]

    const { width, height } = Dimensions.get("window");
    const mapRef = useRef(null)
    const cardRef = useRef(null)
    const CARD_WIDTH = width * 0.8;
    return (




        <View style={styles.container}>

            <MapView style={styles.map}
                ref={mapRef}
                initialRegion={{
                    latitude: 47.55,
                    longitude: -52.77,
                    latitudeDelta: 0.322,
                    longitudeDelta: 0.221,
                }}>
                {markers.map((marker, index) => (
                    <Marker coordinate={marker.coordinate}
                        key={marker.title}
                        title={marker.title}
                        onPress={() => {
                            cardRef.current.scrollTo({
                                x: index * width * 0.9, Animated: true
                            })
                        }}
                    >
                    </Marker>

                ))}

            </MapView>
            <View>
                <Animated.ScrollView
                    ref={cardRef}
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width * 0.8 + 20}
                    snapToAlignment='center'
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                    contentInset={{
                        top: 0,
                        left: width * 0.1 - 10,
                        bottom: 0,
                        right: width * 0.1 - 10,
                    }}
                    onScroll={({ nativeEvent }) => {
                        clearTimeout(setRegionTimeOut)
                        const setRegionTimeOut = setTimeout(() => {
                            const { contentOffset: { x } } = nativeEvent;
                            const index = Math.floor(x / (width * 0.9 - 30))
                            const marker = markers[index];
                            if (marker)
                                mapRef.current.animateToRegion({
                                    ...marker.coordinate,
                                    latitudeDelta: 0.322,
                                    longitudeDelta: 0.221,
                                })

                        }, 500)


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

        </View >

    )


}

export default Order;