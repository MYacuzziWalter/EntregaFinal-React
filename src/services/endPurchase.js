import { addDoc, collection, doc, runTransaction, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import Swal from 'sweetalert2'


const endPurchase = async (cart, inputName, inputEmail, inputAddress) => {
    const productsToUpdateRefs = []

    for (const cartProduct of cart) {
        const productRef = doc(db, "Products", cartProduct.id)
        productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id })
    }

    const orderCollectionRef = collection(db, "orders")

    try {
        const order = await runTransaction(db, async (transaction) => {
            const stocksUpdated = []

            for (const productsToUpdate of productsToUpdateRefs) {
                const { ref } = productsToUpdate
                const product = await transaction.get(ref)
                if (!product.exists()) {
                    throw "Lo sentimos, el producto no existe!"
                }
                console.log({ data: { ...product.data() } })

                const productInCart = cart.find(
                    (cartElement) => cartElement.id === product.id
                )

                console.log({ productInCart });

                const resultStock = product.data().stock - productInCart.quantity

                if (resultStock < 0)
                    throw `Product: ${product.data().tittle},
                    doesn´t have enough stock. Stock: ${product.data().stock
                    }, quantity added to cart ${productInCart.quantity}.`

                stocksUpdated.push({
                    productId: product.id,
                    stock: resultStock,
                })
            }


            for (const product of productsToUpdateRefs) {
                const { ref, id } = product
                const stockUpdated = stocksUpdated.find(
                    (stock) => stock.productId === id
                )
                console.log({ stockUpdated })
                transaction.update(ref, {
                    stock: stockUpdated.stock,
                })

            }

            const order = {
                products: { ...cart },
                user: {
                    name: { inputName },
                    email: { inputEmail },
                    domicilio: { inputAddress }

                },
                timestamp: serverTimestamp()
            }

            const orderDoc = await addDoc(orderCollectionRef, order)
            return orderDoc.id
        })

        Swal.fire({
            title: "Su compra fue realizada con éxito!",
            text: `Gracias ${inputName} por tu compra. 
            Su numero de order es : ${order}`,
            icon: "success",
        });
        
        return order
    } catch (error) {
        console.log(error);

    }
}

export default endPurchase