import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: 'yellow',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },

    itemname: {
        marginBottom: 10

    },

    itemdescrib: {

    },

    itemprice: {
        marginTop: 10

    }

})

export default styles;