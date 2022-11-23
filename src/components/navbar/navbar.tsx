import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}
const NavbarProps: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
       <ul className={styles.links}>
         <li><Link to="/">About Me</Link></li>
         <li><Link to="cv">CV</Link></li>
         <li><Link to="project">Projects</Link></li>
       </ul>
      </div>
    </div>
  )
}

export default NavbarProps
