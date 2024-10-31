import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={Styles.footerContainer}>
            
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/doopel_">Doopel</a>
                </li>
            
                        
        </footer>
    )
}

export default Footer