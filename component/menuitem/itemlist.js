import React from 'react';
import {View, Text} from 'react-native';
import Menuitem from './index'

const Itemlist = () =>{
    const database =[
        {name:'spring roll(4 pic)', price: 4.99, id:1},
        {name:'Edemame(4 pic)', price: 5.99, id:2},
        {name:'Gyoza(4 pic)', price: 4.99, id:3},
        {name:'haha(4 pic)', price: 4.99, id:4}

    ];

    const item = Menuitem(database);
    return(
        <View>
            {item.map((s)=>(
                <View>{s}</View>
            ))}
        </View>
    )

}   

export default Itemlist;