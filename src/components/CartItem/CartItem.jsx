import React, { useContext } from 'react'
import Styles from './cartItem.module.css'
import { Cart } from '../../context/CartProvider'

const CartItem = ({ item }) => {

    const { removeItem } = useContext(Cart);

    const handleRemoveItem = () => {
        removeItem(item);
    };


    return (
        


            <div className={Styles.container}>
                <img src={item.pictureUrl} />
                <h1>{item.tittle}</h1>
                <p>${item.price} c/u</p>
                <p>cantidad: {item.quantity}</p>
                <button className={Styles.buttonDelete} onClick={handleRemoveItem}>Delete</button>
            </div>
        

    )
}

export default CartItem