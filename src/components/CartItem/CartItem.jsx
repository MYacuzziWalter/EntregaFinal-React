import React from 'react'
import Styles from './cartItem.module.css'

const CartItem = ({item}) => {
    return (
    <div className={Styles.container}>
        <img src={item.pictureUrl} />
        <h1>{item.tittle}</h1>
        <span>{item.description}</span>
        <p>{item.quantity}</p>
        <button>Delete</button>
    </div>
    )
}

export default CartItem