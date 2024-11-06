import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import Styles from "./itemDetail.module.css"
import { Cart } from '../../context/CartProvider';
import { Link } from 'react-router-dom';


const ItemDetail = ({ product }) => {
    const { addCart } = useContext(Cart)
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
                <p>{product.category} </p>
                <p>Stock disponible: {product.stock}</p>
                {itemCountVisibility ? (<ItemCount addCart={handleCart} stock={10} initial={1} />) : (
                    <Link to={'/cart'}>
                        <button>Go to Cart</button>
                    </Link>
                )}
                </div>

            </div>
        </div>
    )
}

export default ItemDetail