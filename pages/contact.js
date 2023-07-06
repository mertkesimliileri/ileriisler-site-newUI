import React from 'react'
import Header from '@/layout/header';
import styles from "./contact.module.css"
import ContactUsForm from '@/components/contactUsForm';
import { useState, useEffect } from 'react';
import sanityClient from "../sanity/lib/sanityClient"
import Footer from '@/layout/footer';
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../locales/en'
import tr from '../locales/tr'

const Contact = () => {

    const [contactData, setContact] = useState(null);
    const builder = imageUrlBuilder(sanityClient);
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "contactUs"]{    
        "text" : text.${locale},
        "title" : title.${locale},
        phone,
        mail,
        banner
        }`)
            .then((data) => setContact(data))
            .catch(console.error);
    }, []);

    function urlFor(source) {
        return builder.image(source)
    }

    return (
        <div>
            <Header buttonType={5} navType={2} />
            {contactData && contactData.map((post, index) =>
                <div key={index} className={styles.imageWrapper}>
                    <Image
                        src={urlFor(post.banner.asset._ref).url()}
                        alt="banner"
                        width={1441}
                        height={400}
                        sizes="100vw"
                        style={{ width: '100%', height: '400px', position: "absolute" }}
                    />
                </div>
            )}
            <h1 className={styles.title}>{t.nav6}</h1>
            <div className={styles.wrapper}>
                <div className={styles.sections}>
                    <Link className={styles.first} href="/howWork"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{t.nav7}</Link>
                    <Link className={styles.second} href="/aboutUs">{t.nav5} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                </div>
                {contactData && contactData.map((post, index) =>
                    <div className={styles.texts} key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.text}</p>
                    </div>
                )}
                <ContactUsForm />
            </div>
            <div className={styles.divider}>
                <div className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.box}>
                            <h3><HiOutlineMail style={{ verticalAlign: "middle", marginRight: "13px" }} />{t.email}</h3>
                            {contactData && contactData.map((post, index) =>
                                <a key={index} href={"mailto:" + post.mail}><p>{post.mail}</p></a>
                            )}
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.box}>
                            <h3><BiPhoneCall style={{ verticalAlign: "middle", marginRight: "13px" }} />{t.phone}</h3>
                            {contactData && contactData.map((post, index) =>
                                <a key={index} href={"tel:" + post.phone}><p>{post.phone}</p></a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer hideColumns={true} />
        </div>
    )
}

export default Contact;