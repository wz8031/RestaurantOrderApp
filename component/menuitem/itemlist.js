import React from 'react';
import { Text,ScrollView, SectionList, ImageBackground} from 'react-native';
import styles from '../menuitem/style';
import Menuitem from './index'

const Itemlist = ({meneitems, navigation}) =>{
  
    return(  
      
        <SectionList
            sections={meneitems}
            keyExtractor={(item) => item.id}
            renderItem={(({item})=>{
            return(
                <Menuitem descrition={item.descrition} navigation={navigation} image={item.image} name={item.name} price={item.price} id={item.id}/>)
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