
import React, { useContext } from 'react'
import cart from '../../assets/shopping-cart.png'
import Styles from './cart.module.css'
import { Cart } from '../../context/CartProvider'



const CartWidget = () => {


    const {quantity} = useContext(Cart)

    

    return (
    <div>
        <img src={cart} alt='cart' className={Styles.cartwidget} />
        <span className={Styles.cardQuantity}>{quantity}</span>
    </div>
    )
}

export default CartWidget