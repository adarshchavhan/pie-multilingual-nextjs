import Image from 'next/image';
import styles from './knowPrice.module.css';

const data = {
    heading: 'Know Our Pricing',
    description: 'Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements.',
    url: '/',
    backgroundImg: '/imgs/pricing.png'
}

const KnowPrice = () => {
  return (
    <div className={styles.container}>
                <Image className={styles.bgImg} src={data.backgroundImg} alt="" width={1024} height={300}/>
        <div className={styles.content}>
            <div className={styles.left}>
                <h3 className={styles.heading}>{data.heading}</h3>
                <p className={styles.description}>{data.description}</p>
                <a className={styles.btn} href={data.url}>Know More</a>
            </div>
        </div>
    </div>
  )
}

export default KnowPrice