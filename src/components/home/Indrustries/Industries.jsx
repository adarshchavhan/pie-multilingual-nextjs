import styles from './industries.module.css'
import {industriesData} from '../../../../public/data/industriesData';
import Image from 'next/image';

const Industries = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.left}>
                <h3 className={styles.heading}>{industriesData.heading}</h3>
                <p className={styles.description}>{industriesData.description}</p>
                <ul className={styles.list}>
                    {industriesData.idustries.map((item, i)=> <li key={i} className={styles.itemWrapper}>
                        <div className={styles.item}>
                        <div className={styles.icon}>
                            <i className={item.icon}></i>
                        </div>
                            <p>{item.title}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
            <div className={styles.right}>
                <Image src={industriesData.img} width={300} height={200} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Industries