import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) =>{

    const [cart, setcart] = useState([]);
    return(
        <CartContext.Provider value={[cart, setcart]}>
            {props.children}
        </CartContext.Provider>

    )
}