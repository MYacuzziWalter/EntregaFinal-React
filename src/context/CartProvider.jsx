import React, { useState } from 'react'
import { createContext } from "react";
import Item from '../components/Item/Item';


//1 crear el contexto
export const Cart = createContext()

// 2 crear el componente 
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const [quantity, setQuantity] = useState(0)
    

    const addCart = (product, productQuantity) => {

        const productInCart = isInCart(product.id)
        console.log(productInCart);
        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if(cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity 
                    }
                }
                return cartProduct;
            })
            
        } else {
            console.log(cartUpdated);
            cartUpdated.push({...product, quantity: productQuantity})

        }
        
        setCart(cartUpdated)
        unpdateQuantity(cartUpdated)
    }

    const removeItem = (product) => {
        const cartUpdated = cart.filter(prod => prod.id !== product.id)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    const unpdateQuantity = (cartItems) => {
        const totalQuantity = cartItems.reduce((acc, Item) => acc + Item.quantity, 0)
        setQuantity(totalQuantity)
    }

    return (
        <Cart.Provider value={{addCart, cart, quantity, removeItem, clearCart}}>{children}</Cart.Provider>
    )
}

export default CartProvider