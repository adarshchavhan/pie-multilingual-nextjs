"use client"
import Link from 'next/link'
import styles from './sidebar.module.scss'
import { useState } from 'react'
import Links from './Links'

const Sidebar = ({links}) => {

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);
    }

    const handleSearch = (e) => {
      console.log(e)
      // if(e.key === 'Enter' || e.key === 'Tab'){
      //   handleMenu();
      // }
    }

  return (
    <>
        <button className={styles.sideButton} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
         </button>

         <div className={`${open ? styles.sideMenu : styles.closeMenu}`}>
            <Links {...{handleMenu, links}}/>

            <div className={styles.search}>
                <input type="text" className={styles.input} placeholder='Search' onKeyDown={handleSearch} />
            </div>
         </div>
    </>
  )
}

export default Sidebar