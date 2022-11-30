import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
       <ul className={styles.links}>
         <li><Link to="/">Home</Link></li>
         <li><Link to="cv">CV</Link></li>
         <li><Link to="projects">Projects</Link></li>
       </ul>
      </div>
    </div>
  )
}

export default Navbar
