import React from 'react'
import styles from "./header.module.css"
import Button from '@/components/button'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

const Header = (props) => {
  const [mobile, setMobile] = useState(false);
  let navStyle;
  let divider;
  let position;
  if (props.navType == 1) {
    navStyle = styles.nav;
  } else if (props.navType == 2) {
    navStyle = styles.nav2;
    divider = "white";
    position = "absolute";
  }

  useEffect(() => {
    const windowSize = window.innerWidth;
    if (windowSize < 992) {
      setMobile(true);
    }
  }, [])

  return (
    <div style={{ position: position }} className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png' alt='logo'></img>
        </Link>
      </div>
      <div className={navStyle}>
        {mobile ? <GiHamburgerMenu /> :
          <>
            <a>What we do</a>
            <a>Who we work with</a>
            <a>Insights</a>
            <Link href="/careers">Careers</Link>
            <Link style={{ borderRight: "1px solid " + divider }} className={styles.divider} href="/aboutUs">About Us</Link>
            <Link href="/contact" style={{ marginRight: "100px" }}>
              <Button buttonType={props.buttonType}>Contact us</Button>
            </Link>
          </>
        }

      </div>
    </div>
  )
}

export default Header