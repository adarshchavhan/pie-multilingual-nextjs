import styles from './industries.module.scss'
import Image from 'next/image';

export const industriesData = {
    heading: 'Industries We Serve To',
    description: 'We provide our services to multiple industries and verticals. Here is a break-up of the industries that we offer our services -',
    idustries: [
        {
            icon: '/other/plane.svg',
            title: 'Aerospace'
        },
        {
            icon: '/other/agriculture.svg',
            title: 'Agriculture'
        },
        {
            icon: '/other/car.svg',
            title: 'Automotive'
        },
        {
            icon: '/other/chemical.svg',
            title: 'Chemical'
        },
        {
            icon: '/other/brokerage.svg',
            title: 'Custom Brokerage'
        },
        {
            icon: '/other/defense.svg',
            title: 'Defense/Arm'
        },
        {
            icon: '/other/energy.svg',
            title: 'Energy'
        },
        {
            icon: '/other/education.svg',
            title: 'Education'
        },
        {
            icon: '/other/entertainment.svg',
            title: 'Entertainment'
        },
        {
            icon: '/other/finance.svg',
            title: 'Finance'
        }, 
        {
            icon: '/other/forestry.svg',
            title: 'Forestry'
        },
        {
            icon: '/other/food.svg',
            title: 'Food'
        },
        {
            icon: '/other/health.svg',
            title: 'Healthcare'
        },
        {
            icon: '/other/hospital.svg',
            title: 'Hospitality'
        },
        {
            icon: '/other/it.svg',
            title: 'Information Technology'
        },
        {
            icon: '/other/Logistics.svg',
            title: 'Logistics'
        },
        {
            icon: '/other/Manufacturing.svg',
            title: 'Manufacturing'
        },
        {
            icon: '/other/Mass.svg',
            title: 'Mass'
        },
        {
            icon: '/other/Multimedia.svg',
            title: 'Multimedia'
        },
        {
            icon: '/other/PublicSector.svg',
            title: 'Public Sector/Government'
        },
        {
            icon: '/other/Pharmaceutical.svg',
            title: 'Pharmaceutical'
        },
        {
            icon: '/other/Retail.svg',
            title: 'Retail & e-Commerce'
        },
        {
            icon: '/other/Telecommunications.svg',
            title: 'Telecommunications'
        },
        {
            icon: '/other/Transport.svg',
            title: 'Transport'
        }
    ],
    img: '/imgs/languages.png'
}

const Industries = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>{industriesData.heading}</h2>
                    <p className={styles.description}>{industriesData.description}</p>
                    <ul className={styles.list}>
                        {industriesData.idustries.map((item, i)=> <li key={i} className={styles.itemWrapper}>
                            <div className={styles.item}>
                            <div className={styles.icon}>
                                <Image src={item.icon} width={30} height={30} alt=''/>
                            </div>
                                <p>{item.title}</p>
                            </div>
                        </li>)}
                    </ul>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgWrapper}>
                        <Image src={industriesData.img} width={0} height={0} sizes='100%' alt="" />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Industries