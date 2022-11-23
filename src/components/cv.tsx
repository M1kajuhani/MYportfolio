import React from 'react'
import styles from './cv.module.scss'

type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div className={styles.cont}>
      <h1> Curriculum Vitae</h1>
      <p> CV
044 976 1136 mikajuhani13@gmail.com< br/>

Nimi: Mika Juhani Kuusela< br/>
Syntymääika: 13.03.1989< br/>
Kotiosoite: Kalevankatu 36 A, 00180 Helsinki< br/>

<h2>KOULUTUS:</h2>

Pietarin instituutti psykologia ja sosiaaliala 2012-2016< br/>
Valtion televiestintä yliopisto 2006-2008< br/>
Peruskoulu Pietarissa 1996-2006< br/>

<h2>MUUT KURSSIT:</h2>
Axxell kielikurssi 1/2020 - 5/2020< br/>
Eira Aikuislukio 8/2018 - 13/12/2018< br/>

<h2>KIELITATIO:</h2>
Venäjä äidinkieli< br/>
Englanti Intermediate< br/>
Suomi B 1.1< br/>

<h2>TYÖHAKEMUS JA VAHVUUDET:</h2>
Posti OY 1/2019-5/2019 Espoo< br/>
BN1 verkokauppa 2012-2017 Pietari< br/>
Quadro Electric Ltd 9/2012-2013 Pietari< br/>

<h2>VAHVUUDET:</h2>

sosiaalisuus / vastuu / tietokoneet ja niiden käyttö (HTML CSS, 3dsmax)< br/>

Ajokortti :  B  FIN 
</p>
    </div>
  )
};

export default CV