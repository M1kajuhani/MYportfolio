import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.hello}>
        <h1><span>H</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>O&nbsp;</span>
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>L</span>
            <span>D</span></h1>          
        </div>
    <p>I'm Mika WebDev based in Finland</p>

    </div>
  )
}

export default AboutMe

