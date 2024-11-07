import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./footer.module.css"
import img1 from '../../assets/instaIcon.png'

const Footer = () => {

    const insta = () => {
        window.location.href = "https://www.instagram.com/doopel_"
    }
    
    return (
        <footer className={Styles.footerContainer}>
            <li>
                <Link to={"/"}>
                    Home
                </Link>
            </li>
            <li>
                <a href="https://www.instagram.com/doopel_" target='_blank'>
                    <img src={img1} className={Styles.iconImage} />
                </a>
            </li>
            <li> 
                <Link>
                    Contacto
                </Link>
            </li>


        </footer>
    )
}

export default Footer