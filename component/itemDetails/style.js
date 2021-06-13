import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:60,
        marginHorizontal:20,
    },
   
    image:{
        width:'50%',
        height:'50%',
        resizeMode:'cover',
        position:'absolute'
      },

      backicon:{
          width:'10%'
      },

      header:{
          flex:1,
          flexDirection:'row',
          justifyContent:'center',
          width:'80%',
          alignItems:'center'
      },

      add:{
          width:'10%'
      },

      product:{
          flexDirection:'row',
          alignItems:'center',
          alignSelf:'center',
          paddingVertical:8,
          borderRadius:20,  
          backgroundColor:'grey',
          marginBottom:10

      },

      count:{
          flexDirection:'row',
          alignSelf:'center',
          alignItems:'center',
          backgroundColor:'grey',
          paddingHorizontal:20,
          paddingVertical:10,
          borderRadius:20,
          marginBottom:20
      },

      button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 20,
        width: Dimensions.get('window').width*0.5,
        alignItems:'center',
        alignSelf:'center',
        marginTop:30
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      }, 

});

export default styles;