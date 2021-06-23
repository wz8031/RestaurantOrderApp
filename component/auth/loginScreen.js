import React, { useState } from 'react';
import { ViewBase, Text, Modal, View, Button } from 'react-native';
import styles from './style';

const LoginScreen = ({ navigation, route }) => {
    // const isVisibleTrue=route.params;
    const [isVisible, setIsVisible] = useState(true)
    return (
        <View>
            <Modal visible={isVisible} animationType='slide' transparent={true}>
                <View style={styles.modalContent}>
                    <View style={styles.wraper}>
                        <Text>LoginScreen</Text>
                        <Button onPress={() => {
                            navigation.navigate('Home')
                             setIsVisible(false)}} 
                             title="Dismisssss" />
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default LoginScreen;