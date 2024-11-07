import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../temList/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import { ProgressBar } from "react-loader-spinner"
import styles from './itemListContainer.module.css'
import Carusel from '../carusel/Carusel';






const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        setError(null)
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

                            productsFiltered.push({ id: doc.id, ...doc.data() })
                        });
                    } else {
                        const querySnapshot = await getDocs(collection(db, "Products"));
                        querySnapshot.forEach((doc) => {

                            productsFiltered.push({ id: doc.id, ...doc.data() })
                        });
                    }

                    if (productsFiltered.length === 0) {
                        setError("no se encontraron productos con esa categoría")
                    } else {
                        setProducts(productsFiltered)
                    }

                    setProducts(productsFiltered)
                } catch (error) {
                    setError("Error")

                } finally {
                    setLoading(false)
                }
            })()
    }, [categoryId])

    if (loading) {
        return (
            <div className={styles.loader}>
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor="#F4442E"
                    barColor="#51E5FF"
                />
            </div>
        )
    }
    return (

        <div className={styles.render}>
            <Carusel />
            {error ? (
                <div>{error}</div>
            ): ( 
                <ItemList products={products} />
            
            )}
        </div>
    );
}

export default ItemListContainer

