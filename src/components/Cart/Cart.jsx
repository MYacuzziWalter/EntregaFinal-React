import React, { useContext } from 'react'
import {Cart as CartContext} from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem';
import Style from './cart.module.css'
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart} = useContext(CartContext)
    console.log({cart});
    
    return <div className={Style.container}>
        {
            cart.length ?
            cart.map(cartItem => {
                return (
                    <CartItem item={cartItem} key={cartItem.id}/>
                )
            }) :
            <>
            <h2>No hay productos en el cart</h2>
            <Link to={'/'}>
            Home
            </Link>
            </>

        }
            
        </div>
    
}

export default Cart