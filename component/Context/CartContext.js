import React, {useState, useReducer} from 'react';

export const CartContext = React.createContext();


const getTotalPriceFromCart =(cart)=>{
    let total = 0;
    for (let i =0; i <cart.length; i++){
        total = total+cart[i].price
    }
    return total;
}


export const CartProvider = (props) =>{

    const itemReducer = (state,action)=>{
        switch(action.type){
            case 'ADD_ITEM':
                return {
                    cart:[...state.cart, action.payload],
                    totalAmount:getTotalPriceFromCart([...state.cart, action.payload])
                }
            case 'DELETE_ITEM':
                 return {
                    cart:state.cart.filter(cart=>cart.id !== id),
                    totalAmount:getTotalPriceFromCart([...state.cart, action.payload])
                }
            
        }
    }

    const[state, dispatch] = useReducer(itemReducer,{cart:[], totalAmount:0});
    // const [cart, setcart] = useState([]); //hooks


    const addItems = (name,price) => {
        const item={name:name, price:price};
        // setcart(cart=>[...cart, item]);
        dispatch({type:'ADD_ITEM', payload:item})
     };

     const deleteItems = (id) =>{
         setcart(cart.filter(cart=>cart.id !== id));
     };


     /**
      * [cart, addItems, deleteItems] = useContext(CartConext);
      * {addItems} = useContext(CartConext);
      * 
      * 
      */
    return(
        <CartContext.Provider value={{
            cart:state.cart, 
            total:state.totalAmount, 
            addItems,
            deleteItems}}>   
            {props.children}
        </CartContext.Provider>

    )
}