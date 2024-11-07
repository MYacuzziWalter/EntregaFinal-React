
import React, { useContext } from 'react'
import cart from '../../assets/shopping-cart.png'
import Syles from './cart.module.css'
import { Cart } from '../../context/CartProvider'



const CartWidget = () => {


    const {quantity} = useContext(Cart)

    

    return (
    <div>
        <img src={cart} alt='cart' className={Syles.cartwidget} />
        <span>{quantity}</span>
    </div>
    )
}

export default CartWidget