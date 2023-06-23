import React from 'react'
import styles from "./footer.module.css"
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { useState, useEffect } from 'react';
import Link from 'next/link';


const Footer = (props) => {
    let display;
    let background;
    const [mobile, setMobile] = useState(false);

    if (props.hideColumns == true) {
        display = "none";
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
        }
    },);

    return (
        <div style={{ background: background }} className={styles.footer}>
            {mobile ? <div className={styles.mobile}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src='https://www.ileriisler.com/storage/temp/public/imageresizecache/687/218/d69/687218d69094c0711c78d7da917b41022d25f6a2c85968887e62e96df8b2d5c3.png' alt='logo'></img>
                    </Link>
                </div>
                <div className={styles.menu}>
                    <p>What we do</p>
                    <p>Who do we work with</p>
                    <p>Insights</p>
                    <Link href="/careers"><p>Careers</p></Link>
                    <Link href="/aboutUs"><p>About Us</p></Link>
                </div>
                <div className={styles.icons}>
                    <GrFacebookOption className={styles.icon} />
                    <RiLinkedinFill className={styles.icon} />
                    <AiOutlineTwitter className={styles.icon} />
                    <TiSocialInstagram className={styles.icon} />
                </div>
                <div className={styles.privacy}>
                    <p className={styles.mobileText}>Privacy Policy  |  Terms & Conditions</p>
                </div>
            </div> :
                <>
                    <div style={{ display: display }} className={styles.row}>
                        <div className={styles.mainColumn}>
                            <h2 className={styles.title}>Brancsight</h2>
                            <p style={{ paddingBottom: "19px" }} className={styles.text}>Lorem Ipsum, 235 Simply,<br></br>printing, Pin 309 309</p>
                            <p style={{ paddingBottom: "23px" }} className={styles.text}>roots00@gmail.com</p>
                            <p className={styles.text}>+91 80005 54442</p>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Information</h2>
                            <p className={styles.text}>Home</p>
                            <p className={styles.text}>About Us</p>
                            <p className={styles.text}>Services</p>
                            <p className={styles.text}>Gallery</p>
                            <p className={styles.text}>Blog</p>
                            <p className={styles.text}>Contact</p>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Services</h2>
                            <p className={styles.text}>Website Development</p>
                            <p className={styles.text}>Application Development</p>
                            <p className={styles.text}>UI/UX Design</p>
                            <p className={styles.text}>Digital Marketing</p>
                            <p className={styles.text}>SEO Backlinks</p>
                            <p className={styles.text}>Market Analysis</p>
                        </div>
                        <div className={styles.column}>
                            <h2 className={styles.subTitle}>Support</h2>
                            <p className={styles.text}>Help Center</p>
                            <p className={styles.text}>FAQ</p>
                            <p className={styles.text}>News</p>
                            <p className={styles.text}>Careers</p>
                            <p className={styles.text}>Terms of Use</p>
                        </div>
                    </div>
                    <div className={styles.bottomRow}>
                        <p className={styles.trademark1}>©Branchsight2020.</p>
                        <p className={styles.trademark2}>Privacy Policy  |  Terms & Conditions</p>
                        <div className={styles.wrapper}>
                            <GrFacebookOption className={styles.icon} />
                            <RiLinkedinFill className={styles.icon} />
                            <AiOutlineTwitter className={styles.icon} />
                            <TiSocialInstagram className={styles.icon} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Footer