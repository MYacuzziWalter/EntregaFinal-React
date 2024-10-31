import React from "react"
import Item from "../Item/Item"
import Styles from "./itemlist.module.css"



const ItemList = ({ products }) => {
    return (
        <div className={Styles.container}>
            {products.map((product) => {
                return (
                    <Item item={product} key={product.id}/>
                )
            })}
        </div>
    )
}

export default ItemList
