import React from 'react'
import Header from '@/layout/header';
import styles from "./contact.module.css"
import ContactUsForm from '@/components/contactUsForm';
import { useState, useEffect } from 'react';
import sanityClient from "@/sanity/lib/sanityClient"
import Footer from '@/layout/footer';
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '@/locales/en'
import tr from '@/locales/tr'
import useCamelize from '@/hooks/useCamelize';

const Contact = (props) => {

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
        banner,
        _id,
        "pageName" : pageName.${locale},
        "pageNav": pageNav[]->{
            ...
            pageName,
          }
        }`)
            .then((data) => setContact(data))
            .catch(console.error);
    }, []);

    function urlFor(source) {
        return builder.image(source)
    }

    if (contactData && contactData.some(arr => useCamelize(arr.pageName) === props.pageName)) {
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
                {contactData && contactData.map((post, index) =>
                    <h1 key={index} className={styles.title}>{post.pageName}</h1>
                )}
                <div className={styles.wrapper}>
                    <div className={styles.sections}>
                        {contactData[0].pageNav && contactData[0].pageNav.map((post, index) => {
                            if (index === 0) {
                                return <Link key={index} className={styles.first} href={"/pages/" + useCamelize(post[locale])}><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{post[locale]}</Link>
                            }
                            if (index > 0) {
                                return <Link key={index} className={styles.second} href={"/pages/" + useCamelize(post[locale])}>{post[locale]} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                            }
                        })}
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
}

export default Contact;