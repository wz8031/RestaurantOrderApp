import React from 'react';
import { Text,ScrollView, SectionList, ImageBackground} from 'react-native';
import styles from '../menuitem/style';
import Menuitem from './index'

const Itemlist = ({meneitems, navigation}) =>{
    return(  
      
        <SectionList
            style={{padding:5, flex:1}}
            contentContainerStyle={{paddingBottom:5}}
            sections={meneitems}
            keyExtractor={(item) => String(item.id)}
            renderItem={(({item})=>{
            return(
                <Menuitem 
                navigation={navigation}
                item={item}
                />)
            })}
            renderSectionHeader={({section: {title}})=>(

                <ImageBackground source={title.image} style={styles.titleimage} >
                <Text style={styles.titles}>{title.app}</Text>
                 </ImageBackground>
                
             
            )}
            ListEmptyComponent={()=>{
              return(  <Text>NO item found</Text>)
            }}
         />
         
        
       
    )


}   

export default Itemlist;