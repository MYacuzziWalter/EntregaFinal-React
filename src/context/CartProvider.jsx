import React, { useMemo, useState } from 'react'
import { createContext } from "react";


//1 crear el contexto
export const Cart = createContext()

// 2 crear el componente 
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const [quantity, setQuantity] = useState(0)
    

    const addCart = (product, productQuantity) => {

        const productInCart = isInCart(product.id)
        // console.log(productInCart);
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
            // console.log(cartUpdated);
            cartUpdated.push({...product, quantity: productQuantity})

        }
        
        setCart(cartUpdated)
        unpdateQuantity(cartUpdated)
    }

    const removeItem = (product) => {
        const cartUpdated = cart.filter(prod => prod.id !== product.id)
        setCart(cartUpdated)
        unpdateQuantity(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setQuantity(0)
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    const unpdateQuantity = (cartItems) => {
        const totalQuantity = cartItems.reduce((acc, Item) => acc + Item.quantity, 0)
        setQuantity(totalQuantity)
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, Item) => acc + Item.price * Item.quantity, 0)
    }, [cart])

    return (
        <Cart.Provider value={{addCart, cart, quantity, totalPrice, removeItem, clearCart}}>{children}</Cart.Provider>
    )
}

export default CartProvider