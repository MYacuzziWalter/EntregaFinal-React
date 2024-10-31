
import React, { useContext } from 'react'
import cart from '../../assets/shopping-cart.png'
import './Cart.css'
import { Cart } from '../../context/CartProvider'



const CartWidget = () => {


    const {quantity} = useContext(Cart)

    

    return (
    <div>
        <img src={cart} alt='cart' className='cartwidget' />
        <span>{quantity}</span>
    </div>
    )
}

export default CartWidget