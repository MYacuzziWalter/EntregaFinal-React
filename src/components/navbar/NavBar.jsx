import React from 'react'
import Styles from "./navBar.module.css"
import CartWidget from '../cartwidget/CartWidget'
import Icon from '../logo/Icon'
import Icon1 from '../../assets/logoDoopel.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={Styles.nav}>
            <Icon src={Icon1}/>
            <ul className={Styles.ul}>
                <li>
                    <Link className={Styles.link} to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={Styles.link} to={"/category/remeras"}>
                        Remeras
                    </Link>
                </li>
                <li>
                    <Link className={Styles.link} to={"/category/buzos"}>
                        Buzos
                    </Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        )
}

export default NavBar