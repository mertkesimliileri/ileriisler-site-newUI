import React from 'react'
import styles from "./header.module.css"
import Button from '@/components/button'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png' alt='logo'></img>
        </div>
        <div className={styles.nav}>
            <a>What we do</a>
            <a>Who we work with</a>
            <a>Insights</a>
            <a>Careers</a>
            <a className={styles.divider}>About us</a>
            <a>
                <Button buttonType={2}>Contact us</Button>
            </a>
        </div>
    </div>
  )
}

export default Header