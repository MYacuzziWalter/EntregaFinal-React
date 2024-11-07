import React, { useState } from 'react'
import styles from './itemCount.module.css'

export const ItemCount = ({ stock, initial, addCart }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <button onClick={decrement}>-</button>
                    <h5 className={styles.number}>{quantity}</h5>
                    <button onClick={increment}>+</button>
                </div>
                <div className={styles.containerConfirm}>
                    <button className={styles.buttonConfirm} onClick={() => addCart(quantity)} disabled={!stock}>Agregar</button>
                </div>
            </div>
        </>
    )
}
