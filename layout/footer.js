import React from 'react'
import styles from "./footer.module.css"
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@/sanity/lib/sanityClient';
import en from '../locales/en'
import tr from '../locales/tr'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils'


const Footer = (props) => {
    let display;
    let background;
    let paddingTop;
    const router = useRouter();
    const { locale } = router;
    const [mobile, setMobile] = useState(false);
    const [navigationData, setNavigation] = useState(null);
    const [footerNavigationData, setFooterNavigation] = useState(null);
    const builder = imageUrlBuilder(sanityClient);
    const t = locale === 'en' ? en : tr;

    function urlFor(source) {
        return builder.image(source)
    }

    if (props.hideColumns == true) {
        display = "none";
        paddingTop = "36px";
    } else {
        display = "flex";
    }

    if (props.background == true) {
        background = "#F7F8FE"
    } else {
        background = "#FFF"
    }



    useEffect(() => {
        const windowSize = window.innerWidth;
        if (windowSize < 576) {
            setMobile(true);
            sanityClient.fetch(`*[_type=="navigation"]{
                "navItems": navItems[]->{
                  ...
                  pageName,
                  _id
                },
                logo
              }`)
                .then((data) => setNavigation(data))
                .catch(console.error);
        }
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type=="footerNavigation"]{
          "firstColumn": firstColumn[]->{
            ...
            pageName,
            _id
          },
          "secondColumn": secondColumn[]->{
            ...
            pageName,
            _id
          },
          "thirdColumn": thirdColumn[]->{
            ...
            pageName,
            _id
          },
          socialMedia,
          title1,
          title2,
          title3,
          name,
          address,
          phone,
        }`)
            .then((data) => setFooterNavigation(data))
            .catch(console.error);
    }, []);

    function getWidth(url) {
        const { width } = getImageDimensions({
            url: url
        })
        return width;
    }

    function getHeight(url) {
        const { height } = getImageDimensions({
            url: url
        })
        return height;
    }

    return (
        <div style={{ background: background, paddingTop: paddingTop }} className={styles.footer}>
            {mobile ? <div className={styles.mobile}>
                <div className={styles.logo}>
                    <Link href="/">
                        {navigationData && <img src={urlFor(navigationData[0].logo.asset._ref).url()} alt='logo'></img> }
                    </Link>
                </div>
                <div className={styles.menu}>
                    {navigationData && navigationData[0].navItems.map((post, index) =>
                        <Link key={index} href={"/pages/" + post._id}>{post[locale]}</Link>
                    )}
                </div>
                <div className={styles.icons}>
                    {footerNavigationData && footerNavigationData[0].socialMedia.map((post, index) =>
                        <Link key={index} href={post.iconUrl}>
                            <Image
                                src={urlFor(post.asset._ref).url()}
                                alt={post.caption}
                                width={getWidth(urlFor(post.asset._ref).url())}
                                height={getHeight(urlFor(post.asset._ref).url())}
                                style={{
                                    width: 'auto !important',
                                    height: 'auto !important',
                                    margin: '0 12px'
                                }}

                            />
                        </Link>
                    )}
                </div>
            </div> :
                <>
                    <div style={{ display: display }} className={styles.row}>
                        <div className={styles.mainColumn}>
                            <h2 className={styles.title}>{footerNavigationData && <>{footerNavigationData[0].name}</>}</h2>
                            <p style={{ paddingBottom: "19px" }} className={styles.text}>{footerNavigationData && <>{footerNavigationData[0].address}</>}</p>
                            <p style={{ paddingBottom: "23px" }} className={styles.text}>{footerNavigationData && <>{footerNavigationData[0].mail}</>}</p>
                            <p className={styles.text}>{footerNavigationData && <>{footerNavigationData[0].phone}</>}</p>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Information</h2>
                            {footerNavigationData && footerNavigationData[0].firstColumn.map((post, index) =>
                                <Link key={index} href={"/pages/" + post._id}>
                                    <p className={styles.text}>
                                        {post[locale]}
                                    </p>
                                </Link>
                            )}
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Services</h2>
                            {footerNavigationData && footerNavigationData[0].secondColumn.map((post, index) =>
                                <Link key={index} href={"/pages/" + post._id}>
                                    <p className={styles.text}>
                                        {post[locale]}
                                    </p>
                                </Link>
                            )}
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Support</h2>
                            {footerNavigationData && footerNavigationData[0].thirdColumn.map((post, index) =>
                                <Link key={index} href={"/pages/" + post._id}>
                                    <p className={styles.text}>
                                        {post[locale]}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={styles.bottomRow}>
                        <p className={styles.trademark1}>{footerNavigationData && <>{"©" + footerNavigationData[0].name}</>}</p>
                        <div className={styles.wrapper}>
                            {footerNavigationData && footerNavigationData[0].socialMedia.map((post, index) =>
                                <Link key={index} href={post.iconUrl}>
                                    <Image
                                        src={urlFor(post.asset._ref).url()}
                                        alt={post.caption}
                                        width={getWidth(urlFor(post.asset._ref).url())}
                                        height={getHeight(urlFor(post.asset._ref).url())}
                                        style={{
                                            width: 'auto !important',
                                            height: 'auto !important',
                                            margin: '0 12px'
                                        }}

                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Footer