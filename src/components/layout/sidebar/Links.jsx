import styles from './sidebar.module.scss'
import Link from 'next/link'
import React from 'react'

const Links = ({handleMenu, links}) => {
  return (
    <>
         <Link href='/' className={styles.menuLink} >
                <i className='flaticon-gears'/>
                ALL SERVICES
              </Link>
            {links.map((item, j) => <>
              <span onClick={handleMenu}>
                <Link href={item.url} className={styles.link} key={j} >{item.text}</Link>
              </span>
            </>)}
    
    </>
  )
}

export default Links