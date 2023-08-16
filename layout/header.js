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
import sanityClient from '@/sanity/lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url'
import useCamelize from '@/hooks/useCamelize';

const Header = (props) => {

  const router = useRouter();
  const { locale } = router;
  const pathname = usePathname();
  const [localeText, setLocaleText] = useState("");
  const [navigationData, setNavigation] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const builder = imageUrlBuilder(sanityClient);
  const [mobile, setMobile] = useState(false);
  const t = locale === 'en' ? en : tr;
  let mobileIcon;

  useEffect(() => {
    if (locale === "en") {
      setLocaleText("tr");
    } else if (locale === "tr") {
      setLocaleText("en");
    }
  }, []);

  useEffect(() => {
    sanityClient.fetch(`*[_type=="navigation"]{
      "navItems": navItems[]->{
        ...
        pageName,
        _id
      },
      "navButton": navButton[]->{
        ...
        pageName,
        _id
      },
      logo
    }`)
      .then((data) => setNavigation(data))
      .catch(console.error);
  }, []);




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

  function urlFor(source) {
    return builder.image(source)
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
          {navigationData && <img src={urlFor(navigationData[0].logo.asset._ref).url()} alt='logo'></img> }
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
            {navigationData && navigationData[0].navItems.map((post, index) => {
              if (index < navigationData[0].navItems.length - 1) {
                return <Link key={index} href={"/pages/" + useCamelize(post[locale])}>{post[locale]}</Link>
              } else {
                return <Link key={index} style={{ borderRight: "1px solid " + divider }} className={styles.divider} href={"/pages/" + useCamelize(post[locale])}>{post[locale]}</Link>
              }
            }
            )}
            {navigationData && navigationData[0].navButton.map((post, index) =>
              <Link key={index} href={"/pages/" + useCamelize(post[locale])}>
                <Button buttonType={props.buttonType}>{post[locale]}</Button>
              </Link>
            )}
            <p onClick={changeLocale} className={styles.locale} style={{ marginRight: "100px", cursor: "pointer", color: divider, textTransform: "uppercase" }}>{localeText}</p>
          </>
        }

      </div>
      {mobileMenu ?
        <div className={styles.mobileNav}>
          {navigationData && navigationData[0].navItems.map((post, index) =>
            <Link key={index} href={"/pages/" + useCamelize(post[locale])}>
              <div className={styles.mobileNavItem}>
                {post[locale]}
              </div>
            </Link>
          )}
        </div>
        : undefined
      }
    </div>
  )
}

export default Header