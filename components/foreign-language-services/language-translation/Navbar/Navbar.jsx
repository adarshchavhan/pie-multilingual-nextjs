import Link from 'next/link';
import styles from './navbar.module.scss';

const data = {
    items: [
        {
            text: 'LANGUAGE TRANSLATION',
            url: '/',
            links: [
                {
                    text: 'link1',
                    url: '/'
                },
                {
                    text: 'link1',
                    url: '/'
                },
                {
                    text: 'link1',
                    url: '/'
                },
                {
                    text: 'link1',
                    url: '/'
                }
            ]
        },
        {
            text: 'INTERPRETATION',
            url:'/',
            links: [
                {
                    text: 'link2',
                    url: '/'
                },
                {
                    text: 'link2',
                    url: '/'
                },
                {
                    text: 'link2',
                    url: '/'
                },
                {
                    text: 'link2',
                    url: '/'
                }
            ]
        },
        {
            text: 'MULTILINGUAL TRANSCRIPTION',
            url: '/'
        },
        {
            text: 'VOICE OVER',
            url: '/',
            
        },
        {
            text: 'MULTILINGUAL RECRUITMENT',
            url: '/'
        },
        {
            text: 'LANGUAGE SUBTITLING',
            url: '/'
        },
        {
            text: 'APOSTILE SERVICE',
            url: '/'
        },
        {
            text: 'LANGUAGE TESTING',
            url: '/'
        }
    ]
}

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <nav className={styles.nav}>
                {data.items.map((item, i)=>
                    item.links ? (
                        <div className={styles.nav1} key={i}>
                            <Link className={styles.item} href={item.url} key={i}>{item.text}</Link>
                            {item.links && <nav className={styles.links}>
                                {item.links.map((item, i)=> (
                                    <Link className={styles.link} href={item.url} key={i}>{item.text}</Link>
                                ))}    
                            </nav>}
                        </div>
                    ) : (
                        <Link className={styles.item} href={item.url} key={i}>{item.text}</Link>
                    )
                )}
            </nav>
        </div>
    </div>
  )
}

export default Navbar