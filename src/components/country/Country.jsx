import Image from 'next/image';
import styles from './country.module.css'
import {countryData} from '@./../../public/data/countryData'

const Country = async() => {
    const {data:{attributes}} = countryData;

  return (
    <div className={styles.container}>
         <div className={styles.left}>
            <h1 className={styles.heading}>{attributes.heading}</h1>
            <p className={styles.desc}>{attributes.description}</p>
         </div>
         <div className={styles.right}>
            <Image 
                src={attributes.img.data.attributes.url} 
                width={568} height={480}
                alt=''
                className={styles.img}
            />
         </div>
    </div>
  )
}

export default Country