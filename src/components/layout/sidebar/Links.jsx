import styles from './sidebar.module.scss'
import Link from 'next/link'
import React from 'react'

const Links = ({handleMenu, links}) => {
  return (
    <>
            {links.map((item, j) => <>
              <span onClick={handleMenu}>
                <Link href={item.url} className={styles.link} key={j} >
                  <span dangerouslySetInnerHTML={{__html: item.text}}></span>
                </Link>
              </span>
            </>)}
    
    </>
  )
}

export default Links