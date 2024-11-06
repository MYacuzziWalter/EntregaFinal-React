import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";
import {ProgressBar} from "react-loader-spinner"
import styles from './itemListContainer.module.css'
import Carusel from '../Carusel/Carusel';






const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
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

            } finally {
                setLoading(false)
            }
        })()
    }, [categoryId])


    return loading ? ( 
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
    ) : (
        <div className={styles.render}>
            <ItemList products={products} />
        </div>
    );
}
export default ItemListContainer

