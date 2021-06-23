import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    
      scrollView: {
        position: "absolute",
        bottom: 90,
        left: 0,
        right: 0,
        paddingVertical: 80,
      
      },
      endPadding: {
        paddingRight: Dimensions.get('window').width-30,
      },
      card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: 220,
        width: '90%',
            },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },

      markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
      },
      marker: {
        width: 30,
        height: 30,
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3
      },
      textSign: {
          fontSize: 14,
          fontWeight: 'bold'
      }
    })


export default styles;