import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'
import styles from './footer.module.scss'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
      <div className={styles.container}>
         <a className={styles.links} href="https://www.linkedin.com/in/mika-juhani-a3b481252/" target="_blank" rel="noreferrer"><BsLinkedin/></a>     
         <a className={styles.links} href="mailto:mikajuhani13@gmail.com" target="_blank"rel="noreferrer"><GoMail/></a>
         <a className={styles.links} href="https:/github.com/m1kajuhani" target="_blank" rel="noreferrer"><BsGithub/></a>
      </div>
  )
}

export default Footer
