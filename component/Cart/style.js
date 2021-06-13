import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
   
    text:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop:'100%',
        alignSelf:'flex-end'
},
itemText:{
    alignItems: 'center',
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
},

button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width*0.5,
    alignItems:'center',
    alignSelf:'center',
    marginTop:100,
    resizeMode:'contain'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 

  buttont:{
    width:Dimensions.get('window').width*0.9
  },

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

 
});

export default styles;