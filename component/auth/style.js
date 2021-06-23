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
});

export default styles;
