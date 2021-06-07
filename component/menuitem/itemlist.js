import React from 'react';
import { Text,ScrollView, SectionList} from 'react-native';
import Menuitem from './index'

const Itemlist = ({meneitems, navigation}) =>{
  
    return(  
      
        <SectionList
            sections={meneitems}
            keyExtractor={(item) => item.id}
            renderItem={(({item})=>{
            return(
                <Menuitem navigation={navigation} image={item.image} name={item.name} price={item.price} id={item.id}/>)
            })}
            renderSectionHeader={({section:{title}})=>(
                <Text>{title}</Text>
            )}
            ListEmptyComponent={()=>{
              return(  <Text>NO item found</Text>)
            }}
         />
         
        
       
    )


}   

export default Itemlist;