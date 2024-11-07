import React from 'react'
import styles from './Icon.module.css'



const Icon = ({ src }) => {
    return (
        <img src={src} alt="icon" className={styles.logo} />
    )
}

export default Icon