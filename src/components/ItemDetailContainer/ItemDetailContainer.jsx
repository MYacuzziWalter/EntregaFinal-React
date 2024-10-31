import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const docRef = doc(db, "Products", id);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setProducts({...docSnap.data(), id})
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
                
            } catch (error) {
                console.log(error);
                
            }

        })()




        // const product = mockProducts.find(productToFind => productToFind.id === Number(id))

        // setProducts(product)


    }, [id])


    return (product && <ItemDetail product={product} />

    )
}

export default ItemDetailContainer