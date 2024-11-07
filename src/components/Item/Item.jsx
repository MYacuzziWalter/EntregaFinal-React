import React from 'react'
import Style from './item.module.css'
import { Link } from 'react-router-dom'


const Item = ({ item }) => {
    return (
        <div className={Style.cardContainer}>
            <img src={item.pictureUrl} />
            <h2>{item.tittle}</h2>
            <span className={Style.price}>${item.price}</span>
            <Link to={`/detail/${item.id}`}>
                <button className={Style.buttonDetail}>Detail</button>
            </Link>
        </div>
    )
}

export default Item