import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    
    <div className={styles.container}>

      <h1>HELLO WORLD!</h1>
    
      <h2>I'm Mika From Finland</h2>
      
      
       {/* <p>Follow the white rabbit...</p>  */}
      
    </div>
  )
}

export default AboutMe

