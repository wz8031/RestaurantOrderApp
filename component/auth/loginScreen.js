import React, { useState } from 'react';
import { ViewBase, TextInput,Text, Modal, View, Button, TouchableOpacity} from 'react-native';
import styles from './style';

const LoginScreen = ({ navigation, route }) => {
    // const isVisibleTrue=route.params;
    const [isVisible, setIsVisible] = useState(true)
    const [userName, setUserName] = useState()
    const [password, setPassword ] = useState()


    return (
        <View>
            <Modal visible={isVisible} animationType='slide' transparent={true}>
                <View style={styles.modalContent}>
                    <View style={styles.wraper}>
                        <View style={styles.container}>
                            <TextInput
                                value={userName}
                                onChangeText={(username) => setUserName({ userName })}
                                placeholder={'Username'}
                                style={styles.input}
                            />
                            <TextInput
                                value={password}
                                onChangeText={(password) => setPassword({ password })}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                style={styles.input}
                            />
                            <View style={{flex:1, }}>

                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                                    <Text style={styles.buttonText}>SignUp</Text>
                                </TouchableOpacity>


                            {/* <Button
                                title={'Login'}
                                style={styles.button}
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            />
                             <Button
                                title={'Login'}
                                style={styles.button}
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            /> */}
                            </View>
                        </View>
                       
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default LoginScreen;