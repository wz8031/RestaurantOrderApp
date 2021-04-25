import React,{useState} from 'react';
import { Text, View, Image, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';


const itemDetails = () =>{

    const [value, onChangeText] = React.useState('');
    const[price, setprice] = useState(7.99)
    const [count, setcount] = useState(1);
    const add = ()=>{
        setcount(prevState => prevState + 1);
        setprice(prevState=>prevState+price)
    }

    const minus= ()=>{
        if(count>0){
            setcount(prevState => prevState - 1);
            setprice(prevState=>prevState-7.99)
        }

    }
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.backicon}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goback(null)}
                        >
                            <Image
                                source={require('../../assets/favicon.png')}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.header}>
                        <Text>this is details</Text>

                    </View>
                    <View style={styles.add}>
                        <TouchableOpacity
                        >
                            <Image
                                source={require('../../assets/favicon.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.product}>
                    <Image source={require('../../assets/adaptive-icon.png')}
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

                    <Text style={{ paddingHorizontal: 20 }}>{count}</Text>

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
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'grey' }}>Sipcy Tuna Roll</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-end' }}>{price}</Text>
                    </View>

                </View>

                <View>

                    <Text style={{ color: 'grey' }}>Special Instructions</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 2, }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
                        <Text style={styles.buttonText}>Add to chart</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View>
    )
}

export default itemDetails;