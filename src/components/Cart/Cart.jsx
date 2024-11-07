import React, { useContext, useEffect, useState } from 'react'
import { Cart as CartContext } from '../../context/CartProvider'
import CartItem from '../cartItem/CartItem';
import Style from './cart.module.css'
import { Link } from 'react-router-dom';
import endPurchase from '../../services/endPurchase';

const Cart = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [inputName, setInputName] = useState("")
    const [inputAddress, setInputAddress] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const { cart , clearCart, totalPrice  } = useContext(CartContext)

    useEffect(() => {

        const handleEscapeModal = (e) => {
            if (e.key === 'Escape') {
                setModalVisible(false)
            }
        }
        window.addEventListener("keydown", handleEscapeModal)

        return () => {
            window.removeEventListener("keydown", handleEscapeModal)

        }
    }, [])


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const handleFinalizePurchase = async () => {
        // Llama a endPurchase y espera a que se complete
        const orderId = await endPurchase(cart, inputName, inputEmail, inputAddress, modalVisible);
        
        if (orderId) {
            // Cierra el modal y resetea los campos de entrada si la compra fue exitosa
            setModalVisible(false);
            setInputName("");
            setInputAddress("");
            setInputEmail("");
            clearCart();
        }
    };





    return <div className={Style.container}>
        {cart.length ? (
            <div>
                {cart.map((cartItem) => {
                    return <CartItem item={cartItem} key={cartItem.id} />
                })}
                <button className={Style.buttonConfirm } onClick={() => setModalVisible(true)}>Confirmar compra</button>
                <p className={Style.price}>Precio Total: ${totalPrice.toFixed(2)} </p>
                {modalVisible && (
                    <div className={Style.modalContainer}>
                        <div className={Style.modal}></div>
                        <form >
                            <h1>Completa los datos por favor</h1>
                            <input
                                placeholder='Nombre...'
                                type="text"
                                alt='name-input'
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='Dirección'
                                alt='address-input'
                                value={inputAddress}
                                onChange={(e) => setInputAddress(e.target.value)}
                            />
                            <input type='email'
                                placeholder='Email'
                                alt='input-email'
                                value={inputEmail}
                                onChange={(e) => setInputEmail(e.target.value)}
                            />
                        </form>
                        <button className={Style.submitButton} type="submit" onClick={handleFinalizePurchase}>Finalizar compra</button>



                        <button className={Style.closeModalButton} onClick={() => setModalVisible(false)}>Cancelar Compra</button>

                    </div>
                )}
            </div>

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