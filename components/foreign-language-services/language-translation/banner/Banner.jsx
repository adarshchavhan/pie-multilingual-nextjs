import Image from 'next/image';
import styles from './banner.module.scss';
import Links from '@/components/layout/sidebar/Links';
import Link from 'next/link';

const data = {
    heading: 'LANGUAGE TRANSLATION',
    text: 'Hire Language Translation Expert with:-',
    items: [
        'Native Translator', 'Accuracy & transparency', 'Competitive Pricing'
    ],
    image: {
        data: {
            url: '/imgs/language-translation/Language-Translation.jpg'
        }
    }
}

const Banner = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.heading}>{data.heading}</h1>
            <p className={styles.text}>{data.text}</p>
            <div className={styles.div}>
                <ul className={styles.items}>
                    {data.items.map((item, i)=> <li key={i}>{item}</li>)}
                </ul>
                <Link className={styles.link} href='/'>FREE CONSULTATION</Link>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <Image src={data.image.data.url} width={0} height={0} sizes='100%' alt='' priority/>
        </div>
    </div>
  )
}

export default Banner