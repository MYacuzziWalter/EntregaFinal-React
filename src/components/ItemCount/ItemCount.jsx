import React, { useState } from 'react'
import './itemCount.css'

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
            <div className='container'>
                <div className='buttonContainer'>
                    <button onClick={decrement}>-</button>
                    <h5 className='number'>{quantity}</h5>
                    <button onClick={increment}>+</button>
                </div>
                <div className='containerConfirm'>
                    <button className='buttonConfirm' onClick={() => addCart(quantity)} disabled={!stock}>Agregar</button>
                </div>
            </div>
        </>
    )
}
