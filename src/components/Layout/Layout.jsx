import React from 'react'
import NavBar from '../navbar/NavBar'
import Styles from "./layout.module.css"
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
                <div className={Styles.mainContainer}>
                    {children}
                </div>
            <Footer/>
        </>
            
        
    )
}

export default Layout