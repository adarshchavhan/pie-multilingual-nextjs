import Link from 'next/link'
import styles from './header.module.scss'
import Image from 'next/image'
import Sidebar from '../sidebar/Sidebar'


export const topLinks = [
  {
    text: "Indrustries We Serve",
    url: "/"
  },
  {
    text: "Languages",
    links: [
      {
        text: "Spanish",
        url: ""
      },
      {
        text: "French",
        url: "/"
      },
      {
        text: "German",
        url: "/"
      }
    ]
  },
  {
    text: "About Us",
    url: "/"
  },
  {
    text: "Contact Us",
    url: "/"
  }
]

export const bottomLinks = [
  {
    icon: "flaticon-house",
    url: "/"
  },
  {
    text: "FOREGN LANGUAGE</br> SUPPORT",
    url: "/"
  },
  {
    text: "MARKET RESEARCH </br>& ANALYSIS",
    url: "/"
  },
  {
    text: "TRANSCRIPTION </br>SERVICES",
    url: "/"
  },
  {
    text: "MULTILINGUAL </br>CALL CENTER",
    url: "/"
  },
  {
    text: "DATA ENTRY </br>SERVICES",
    url: "/"
  },
  {
    text: "CREATIVE </br>SERVICES",
    url: "/"
  },{
    text: "PHOTO EDITING </br>SERVICES",
    url: "/"
  },
  {
    text: "VIRTUAL ASSISTANT </br>SERVICES",
    url: "/"
  },
  {
    text: "FINANCE & </br>ACCOUNTING",
    url:"/"
  },
  {
    text: "WEB DESIGN & </br>DEVELOPMENT",
    url: "/"
  }
]


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
          <div className={styles.left}>
            <Link href="/">
              <Image 
                src='/imgs/logo.svg'
                width={280} height={55}
                className={styles.logoImg}
                alt='pie-multilingual'
                priority
              />
            </Link>

            {/* <Sidebar links={bottomLinks} /> */}
          </div>
          
          <div className={styles.right}>
            <div className={styles.menu}>
              <Link href='/' className={styles.menuLink} >
                <i className='flaticon-gears'/>
                ALL SERVICES
              </Link>
              <span>
              {topLinks.map((item, i)=> <li key={i}>
                {item.url ? <>
                  <Link className={styles.menuLink} href={item.url}>
                    {item.text}
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
                <i className='flaticon-magnifying-glass'/>
              </button>
            </div>
          </div>
      </div>

      <div className={styles.bottomBar}>
        <ul className={styles.bottomBarContainer}>
          {bottomLinks.map((item, i)=> <li className={styles.bottomBarLink} key={i}>
            <Link className={styles.link} href={item.url}>
              {item.icon && <i className={item.icon} />}
              {item.text && <span dangerouslySetInnerHTML={{__html: item.text}}></span>}
            </Link>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Header

