import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Styles from "./itemDetail.module.css"
import { Cart } from '../../context/CartProvider';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {
    const { addCart, quantity } = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)

    const handleCart = (quantity) => {
        setItemCountVisibility(false)
        addCart({ ...product }, quantity)
    }

    return (
        <div className={Styles.centerContainer}>

            <div className={Styles.cardContainer}>
                <img src={product.pictureUrl} />
                
                <div className={Styles.detailRow}>
                <h1>{product.tittle}</h1>
                <p>$ {product.price} </p>
                <span>{product.description}</span>

                <p>Stock disponible: {product.stock}</p>
                {itemCountVisibility ? (<ItemCount addCart={handleCart} stock={product.stock - quantity} initial={1} />) : (
                    <Link to={'/cart'}>
                        <button className={Styles.buttonCart}>Ir al carro</button>
                    </Link>
                )}
                </div>

            </div>
        </div>
    )
}

export default ItemDetail