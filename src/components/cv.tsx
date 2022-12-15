import React from 'react'
import styles from './cv.module.scss'
import {BsTelephone} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

type CVProps = {

}

const CV: React.FC<CVProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
      
<h1>Mika Juhani Kuusela</h1>< br/>
Date of birth: 13.03.1989< br/>
<CiLocationOn/> Kalevankatu 36 A, 00180 Helsinki< br/>
<BsTelephone/> 044 976 1136 
<h2>Education</h2>
Vantaan ammattiopisto Varia 2021- continue< br/>
St.Petersburg State Institute of Psychology and Social Work 2012-2016< br/>
St.Petersburg State University of Telecommunications 2006-2008< br/>
School №204 Pietarissa 1996-2006< br/>

<h2>Additional courses:</h2>
Axxell kielikurssi 1/2020 - 5/2020< br/>
Eira Aikuislukio 8/2018 - 13/12/2018< br/>

<h2>Languages:</h2>
Russian Native< br/>
English Intermediate< br/>
Finnish B2 < br/>

<h2>Working Experience:</h2>
Posti OY 1/2019-5/2019 Espoo, Finland< br/>
Rostelecom 9/2017-2018 Saint-Petersburg, Russia< br/>
BN1 e-commerce 1/2013-2017 Saint-Petersburg, Russia< br/>
Quadro Electric Ltd 9/2011-2013 Saint-Petersburg, Russia< br/>

<h2>Skills:</h2>
* HTML5
* CSS
* Python 
* C# + Unity
| Frameworks:
* React
* Typescript
* NodeJs< br/>
</div>
    </div>
  )
};

export default CV