import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: 100,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth:1,
        borderColor:'grey'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    titleimage:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        height:100,
        opacity: 0.7

    },

    

    itemname: {
        marginBottom: 10

    },

    itemdescrib: {

    },

    itemprice: {
        marginTop: 10

    },

    titles:{
        fontWeight: 'bold',
        color:'black',
        fontSize:40,
        textAlign:'center',
    }

})

export default styles;