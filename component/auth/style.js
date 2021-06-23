import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    modalContent:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    wraper:{
        position: 'absolute',
        bottom:0,
        alignItems: 'center',
        backgroundColor: "#fff",
        width: '100%',
        height: 400,
        
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 5,
        borderColor: 'black',
        marginBottom: 10,
      },

      button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width*0.5,
        alignItems:'center',
        alignSelf:'center',
        marginTop:10
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      }, 
});

export default styles;
