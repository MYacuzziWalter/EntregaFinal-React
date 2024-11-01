import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()


    useEffect(() => {
        ; (async () => {

            try {
                let productsFiltered = []
                if (categoryId) {
                    const q = query
                    (collection(db, "Products"), 
                    where("category", "==", categoryId)
                );

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, " => ", doc.data());
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    });
                } else {
                    const querySnapshot = await getDocs(collection(db, "Products"));
                    querySnapshot.forEach((doc) => {
                        // console.log(`${doc.id} => ${doc.data()}`);
                        productsFiltered.push({ id: doc.id, ...doc.data() })
                    });
                }
                setProducts(productsFiltered)
            } catch (error) {
                console.log(error);

            }
        })()
    }, [categoryId])
    return loading ? (
        <div>
            <h2>Loading ... </h2>
        </div>
    ) : (
        <div>
            <ItemList products={products} />
        </div>
    );
}
export default ItemListContainer

