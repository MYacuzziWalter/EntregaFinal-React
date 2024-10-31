import React from 'react'
import Style from './item.module.css'
import { Link } from 'react-router-dom'
// {
//  "id":1,
//  "tittle":"Toshiba Excite 7c AT7-B8",
//  "description":"vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus",
//  "price":444,
//  "pictureUrl":"http://dummyimage.com/100x100.png/ff4444/ffffff"
// },



const Item = ({ item }) => {
    return (
        <div className={Style.cardContainer}>
            <img src={item.pictureUrl} />
            <h2>{item.tittle}</h2>
            <span className={Style.descript}>{item.description}</span>
            <span className={Style.price}>${item.price}</span>
            <Link to={`/detail/${item.id}`}>
                <button className={Style.buttonDetail}>Detail</button>
            </Link>
        </div>
    )
}

export default Item