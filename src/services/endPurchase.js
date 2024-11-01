import {addDoc, collection, doc, runTransaction, serverTimestamp} from "firebase/firestore"
import {db} from "../firebase/config"

const endPurchase = async (cart) => {
    const productsToUpdateRefs = []

    for (const cartProduct of cart) {
        const productRef = doc(db, "Products", cartProduct.id)
        productsToUpdateRefs.push({ref: productRef, id: cartProduct.id})
    }

    const orderCollectionRef = collection(db, "orders")

    try {
        const order = await runTransaction(db, async (transaction) => {
            const stocksUpdated = []

            for (const productsToUpdate of productsToUpdateRefs) {
                const {ref} = productsToUpdate
                const product = await transaction.get(ref)
                if (!product.exists()) {
                    throw "product does not exist!"
                }
                console.log({data: {...product.data() }})

                const productInCart = cart.find(
                    (cartElement) => cartElement.id === product.id
                )

                console.log({productInCart});

                const resultStock = product.data().stock - productInCart.quantity

                if(resultStock < 0)
                throw `Product: ${
                    product.data().tittle},
                    doesn´t have enough stock. Stock: ${
                        product.data().stock
                    }, quantity added to cart ${productInCart.quantity}.`

                    stocksUpdated.push({
                        productId: product.id,
                        stock: resultStock,
                    })
            }

            for (const product of productsToUpdateRefs) {
                const {ref, id} = product
                const stockUpdated = stocksUpdated.find(
                    (stock) => stock.productId === id
                )
                console.log({stockUpdated})
                transaction.update(ref, {
                    stock: stockUpdated.stock,
                })
                
            }

            const order = {
                products: {...cart},
                user: {
                    name: "walter"
                },
                timestamp: serverTimestamp()
            }
            console.log(order)
            addDoc(orderCollectionRef, order)
            return order
        })

        console.log("order created successfully!", order);
    } catch (error) {
        console.log(error);
        
    }
}

export default endPurchase