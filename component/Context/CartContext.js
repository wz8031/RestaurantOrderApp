import React, { useState, useReducer } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {

    const itemReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM': {
                const nextCart = [...state.cart];
                const existingIndex = nextCart.findIndex((item) => item.id === action.payload.id);
                if (existingIndex >= 0) {
                    const newQuantity = Number(nextCart[existingIndex].quantity + action.payload.quantity);
                    nextCart[existingIndex] = {
                        ...nextCart[existingIndex],
                        quantity: newQuantity,
                    };
                } else {
                    nextCart.push(action.payload);
                }
                return {
                    cart: nextCart,
                }
            }
            case 'DELETE_ITEM': {
                return {
                    cart: state.cart.filter(cart => cart.id !== id),
                }
            }
            case 'REPLACE_ITEM': {
                const nextCart = [...state.cart];
                const existingIndex = nextCart.findIndex((item) => item.id === action.payload.id);
                if (existingIndex >= 0) {
                    nextCart[existingIndex] = action.payload
                }
                return {
                    cart: nextCart,
                }
            }

        }
    }

    const [state, dispatch] = useReducer(itemReducer, { cart: [], totalAmount: 0 });


    const addItems = ({ item, quantity }) => {
        dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } })
    };

    const deleteItems = (id) => {
        setcart(cart.filter(cart => cart.id !== id));
    };


    const getTotalPriceFromCart = () => {
        let total = 0;
        for (let i = 0; i < state.cart.length; i++) {
            total = total + (state.cart[i].price * state.cart[i].quantity)
        }
        return total;
    }

    const updateCartWithItem = (item) => {
        dispatch({ type: 'REPLACE_ITEM', payload: item })
    }

    const getTotalQuantity = () => {
        let total = 0;
        for (let i = 0; i < state.cart.length; i++) {
            total = total + state.cart[i].quantity
        }
        return total;
    }
    /**
     * [cart, addItems, deleteItems] = useContext(CartConext);
     * {addItems} = useContext(CartConext);
     * 
     * 
     */
    return (
        <CartContext.Provider value={{
            cart: state.cart,
            total: getTotalPriceFromCart,
            totalQuantity: getTotalQuantity,
            addItems,
            deleteItems,
            updateCartWithItem
        }}>
            {props.children}
        </CartContext.Provider>

    )
}