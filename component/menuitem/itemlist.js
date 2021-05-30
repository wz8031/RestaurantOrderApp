import React from 'react';
import {View, Text,SafeAreaView, SectionList} from 'react-native';
import Menuitem from './index'

const Itemlist = ({meneitems}) =>{
  
    return(  
        <SafeAreaView>
        <SectionList
            sections={meneitems}
            keyExtractor={(item) => item.id}
            renderItem={(({item})=>{
            return(
                <Menuitem name={item.name} price={item.price} id={item.id}/>)
            })}
            renderSectionHeader={({section:{title}})=>(
                <Text>{title}</Text>
            )}
            ListEmptyComponent={()=>{
              return(  <Text>NO item found</Text>)
            }}
         />
         </SafeAreaView>
       
    )


}   

export default Itemlist;