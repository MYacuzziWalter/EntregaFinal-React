import React, { useContext } from 'react'
import { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../CartItem/CartItem';
import Style from './cart.module.css'
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../../firebase/config';
import endPurchase from '../../services/endPurchase';

const Cart = () => {
    const { cart } = useContext(CartContext)
    // console.log({ cart });

    const handlePurchase = async() => {
        const order = {
            buyer: {
                name: "walter",
                lastName: "chama",
                email: "m@hot"
            },
            products: cart,
            total: 1254 ,//Reduce y guardar en memo
            timestamp:  serverTimestamp()
        }

        
            try {
                const docRef = await addDoc(collection(db, "orders"), order);
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.log(error);
            }
        }
        
    


    return <div className={Style.container}>
        {cart.length ? (
            <>
                {cart.map((cartItem) => {
                    return <CartItem item={cartItem} key={cartItem.id} />
                })}
                <button onClick={() => endPurchase(cart)}>Finalizar compra</button>
            </>
        )
            :
            (
                <>
                    <h2>No hay productos en el cart</h2>
                    <Link to={'/'}>
                        Home
                    </Link>
                </>

            )}

    </div>

}

export default Cart