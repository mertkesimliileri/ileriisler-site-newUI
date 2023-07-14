import React from 'react'
import styles from "./header.module.css"
import Button from '@/components/button'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import en from '../locales/en'
import tr from '../locales/tr'
import { CgClose } from "@react-icons/all-files/cg/CgClose";

const Header = (props) => {

  const router = useRouter();
  const { locale } = router;
  const pathname = usePathname();
  const [localeText, setLocaleText] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = locale === 'en' ? en : tr;
  let mobileIcon;

  useEffect(() => {
    if (locale === "en") {
      setLocaleText("tr");
    } else if (locale === "tr") {
      setLocaleText("en");
    }
  }, []);


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

  const changeLocale = () => {
    if (localeText === "en") {
      let locale = "en"
      router.push(pathname, pathname, { locale });
      setLocaleText("tr")
    } else if (localeText === "tr") {
      let locale = "tr"
      router.push(pathname, pathname, { locale });
      setLocaleText("en")
    }
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  if (!mobileMenu) {
    mobileIcon = <GiHamburgerMenu onClick={handleMobileMenu} />
  } else {
    mobileIcon = <CgClose onClick={handleMobileMenu} />
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
        {mobile ?
          <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
            <p onClick={changeLocale} style={{ marginRight: "32px", paddingTop: "2px", cursor: "pointer", color: divider, textTransform: "uppercase" }}>{localeText}</p>
            {mobileIcon}
          </div>
          :
          <>
            <a>{t.nav1}</a>
            <a>{t.nav2}</a>
            <a>{t.nav3}</a>
            <Link href="/careers">{t.nav4}</Link>
            <Link style={{ borderRight: "1px solid " + divider }} className={styles.divider} href="/aboutUs">{t.nav5}</Link>
            <Link href="/contact">
              <Button buttonType={props.buttonType}>{t.nav6}</Button>
            </Link>
            <p onClick={changeLocale} className={styles.locale} style={{ marginRight: "100px", cursor: "pointer", color: divider, textTransform: "uppercase" }}>{localeText}</p>
          </>
        }

      </div>
      {mobileMenu ?
        <div className={styles.mobileNav}>
          <a>
            <div className={styles.mobileNavItem}>
              {t.nav1}
            </div>
          </a>
          <a>
            <div className={styles.mobileNavItem}>
              {t.nav2}
            </div>
          </a>
          <a>
            <div className={styles.mobileNavItem}>
              {t.nav3}
            </div>
          </a>
          <Link href="/careers">
            <div className={styles.mobileNavItem}>
              {t.nav4}
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className={styles.mobileNavItem}>
              {t.nav5}
            </div>
          </Link>
          <Link href="/contact">
            <div className={styles.mobileNavItem}>
              {t.nav6}
            </div>
          </Link>
        </div>
        : undefined
      }
    </div>
  )
}

export default Header