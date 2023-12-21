import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload);
        case 'UPDATE_QUANTITY':
            return state.map((item) =>
                item.id === action.payload.itemId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const updateCartItemQuantity = (itemId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
    };

    const findCartItemInCart = (productId) => {
        return cart.find((item) => item.id === productId);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateCartItemQuantity, findCartItemInCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };
