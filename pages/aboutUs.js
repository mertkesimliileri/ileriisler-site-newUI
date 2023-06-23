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


const AboutUs = () => {

    const [aboutData, setAbout] = useState(null);
    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "aboutUs"]{
      banner,
      content1,
      content2,
      text,
      buttonText,
      contentImage
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
                        <Link className={styles.first} href="/whatWeDo"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />What we do</Link>
                        <Link className={styles.second} href="/insights">Insights <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
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
                        <Image
                            src={urlFor(post.contentImage.asset._ref).url()}
                            alt="image"
                            width={1128}
                            height={482}
                            sizes="100vw"
                        />
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