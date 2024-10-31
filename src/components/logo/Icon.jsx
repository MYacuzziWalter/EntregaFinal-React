import React from 'react'
import './Icon.css'



const Icon = ({ src }) => {
    return (
        <img src={src} alt="icon" className='logo' />
    )
}

export default Icon