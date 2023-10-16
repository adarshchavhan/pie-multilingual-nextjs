import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import Sidebar from '../sidebar/Sidebar';
import {topLinks, bottomLinks} from '@/../../public/data/headerData'

const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
          <div className={styles.left}>
            <Link href="/">
              <Image 
                src='/icons/logo.svg'
                width={280} height={55}
                className={styles.logoImg}
                alt='pie-multilingual'
                priority
              />
            </Link>

            <Sidebar links={bottomLinks} />
          </div>
          
          <div className={styles.right}>
            <div className={styles.menu}>
              <Link href='#' className={styles.menuLink} >
                <Image src="/icons/gears.svg" width={14} height={14} alt="services" />
                ALL SERVICES
              </Link>
              <span>
              {topLinks.map((item, i)=> <li key={i}>
                {item.url ? <>
                  <Link className={styles.menuLink} href={item.url}>{item.text}
                  </Link>
                </> : <button className={styles.menuLink}>{item.text}</button>}
                
                  {item.links && <nav>
                    {item.links.map((link, i) => <Link href={link.url} key={i}>{link.text}</Link>)}
                  </nav>}
              </li>)}
              </span>
            </div>

            <div className={styles.search}>
              <input type="text" className={styles.searchInput} placeholder='Search...' />
              <button className={styles.searchBtn}>
                <Image src="/icons/search.svg" width={20} height={20} alt="" />
              </button>
            </div>
          </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContainer}>
          {bottomLinks.map((item, i)=> <li className={styles.bottomBarLink} key={i}>
            <Link href={item.url}>
              <span>{item.text}</span>
          </Link>
          </li>)}
        </div>
      </div>
    </div>
  )
}

export default Header