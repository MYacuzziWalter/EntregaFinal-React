import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config'
import { ProgressBar } from 'react-loader-spinner';

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const docRef = doc(db, "Products", id);
                const docSnap = await getDoc(docRef);
        
                if (docSnap.exists()) {
                    
                    setProducts({...docSnap.data(), id})
                } else {
                    
                    console.log("No such document!");
                }
                
            } catch (error) {
                console.log(error);
                
            } finally {
                setLoading(false)
            }

        })()


    }, [id])


    return (
        <div>
            {loading ? (
                <ProgressBar 
                height="80" 
                width="80" 
                ariaLabel="progress-bar-loading" 
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#F4442E"
                barColor="#51E5FF"
            />
            ) : (product && <ItemDetail product={product} />)}
        
        </div>

    )
}

export default ItemDetailContainer