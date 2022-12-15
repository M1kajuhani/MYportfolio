import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
       <ul className={styles.navbar}>
         <li className={styles.navbarLinks}><Link to="/">Home</Link></li>
         <li className={styles.navbarLinks}><Link to="cv">CV</Link></li>
         <li className={styles.navbarLinks}><Link to="projects">Projects</Link></li>
       </ul>
    </div>
  )
}

export default Navbar
