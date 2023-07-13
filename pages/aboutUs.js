import React from 'react'
import Header from '@/layout/header'
import sanityClient from "../sanity/lib/sanityClient"
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import styles from "./aboutUs.module.css"
import Link from 'next/link';
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import SanityBlockContent from '@sanity/block-content-to-react'
import Button from '@/components/button'
import Footer from '@/layout/footer'
import { useRouter } from 'next/router'
import en from '../locales/en'
import tr from '../locales/tr'
import MuxPlayer from '@mux/mux-player-react'


const AboutUs = () => {

    const [aboutData, setAbout] = useState(null);
    const builder = imageUrlBuilder(sanityClient)
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? en : tr;

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "aboutUs"]{
      banner,
      "content1" : content1.${locale},
      "content2" : content2.${locale},
      "text" : text.${locale},
      "buttonText" : buttonText.${locale},
      contentImage,
      video,
      }`)
            .then((data) => setAbout(data))
            .catch(console.error);
    }, [])

    return (
        <div>
            <Header buttonType={5} navType={2} />
            {aboutData && aboutData.map((post, index) =>
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
            <h1 className={styles.title}>About Us</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.content}>
                    <div className={styles.sections}>
                        <Link className={styles.first} href="/careers"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{t.nav4}</Link>
                        <Link className={styles.second} href="/howWork">{t.nav7} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                    </div>
                    <div className={styles.contentWrapper}>
                        {aboutData && aboutData.map((post, index) =>
                            <div key={index}>
                                <SanityBlockContent blocks={post.content1} />
                                <div className={styles.secondText}>
                                    <SanityBlockContent style={{paddingTop: "24px"}} blocks={post.content2} />
                                </div>
                            </div>
                        )}
                    </div>
                    {aboutData && aboutData.map((post, index) =>
                        <video key={index} loop muted className={styles.video} autoPlay src={post.video}></video>
                    )}
                </div>
            </div>
            {aboutData && aboutData.map((post, index) =>
                <div key={index} className={styles.divider}>
                    <h1 className={styles.dividerText}>{post.text}</h1>
                    <Link href="/careers"><Button buttonType={6}>{post.buttonText}</Button></Link>
                </div>
            )}
            <Footer hideColumns={true} />
        </div>
    )
}

export default AboutUs