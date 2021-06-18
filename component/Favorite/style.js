import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width*0.5,
    alignItems:'center',
    alignSelf:'center',
    marginTop:100
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  
  itemText:{
    alignItems: 'center',
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
},

})

export default styles;