"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './nav.module.scss'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'


type Props = {
    logo: JSX.Element
    links: JSX.Element
    booking: JSX.Element
}

const Menu = ({ logo, links, booking }: Props) => {

    const [menuOpen, setMenuOpen] = useState(false)
    

    return (
        <div className={styles.menu_container}>
            <div className={styles.menu_bar}>
                <div className={styles.menu_hamburger+ " " + (menuOpen ? styles.opened : "")}>    
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
                    </button>
                </div>
                <div className={styles.logo}>
                    {logo}
                </div>
                <div className={styles.links_and_toogle}>
                    {links}
                </div>
                <div className={styles.booking}>
                    {booking}
                </div>
            </div>
            {menuOpen && (
                <div className={styles.full_screen}>
                    <div className={styles.links}>
                        {links}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu