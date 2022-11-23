import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>HELLO WORLD!</h1>
    
      <h1>My name is Mika!</h1>
        <p>Follow the white rabbit...</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Adrenochrome_3D_ball.png/1920px-Adrenochrome_3D_ball.png" alt="adrenochrome" width="200" height="200"></img>
    </div>
  )
}

export default AboutMe

