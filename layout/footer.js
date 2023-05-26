import React from 'react'
import styles from "./footer.module.css"
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { RiGooglePlayFill } from "@react-icons/all-files/ri/RiGooglePlayFill";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.row}>
                <div style={{ paddingRight: "205px" }} className={styles.column}>
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
                <p style={{paddingRight:"256px"}} className={styles.trademark}>©Branchsight2020.</p>
                <p style={{paddingRight:"183px"}} className={styles.trademark}>Privacy Policy  |  Terms & Conditions</p>
                <div className={styles.wrapper}>
                    <GrFacebookOption className={styles.icon} />
                    <RiLinkedinFill className={styles.icon} />
                    <AiOutlineTwitter className={styles.icon} />
                    <TiSocialInstagram className={styles.icon} />
                    <AiFillApple className={styles.icon} />
                    <RiGooglePlayFill className={styles.icon} />
                    <AiFillYoutube className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default Footer