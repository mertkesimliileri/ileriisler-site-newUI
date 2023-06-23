import React from 'react'
import styles from "./howWork.module.css"
import { useEffect, useState } from 'react';
import Header from '@/layout/header';
import sanityClient from "../sanity/lib/sanityClient"
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import Link from 'next/link';
import SanityBlockContent from '@sanity/block-content-to-react'
import Button from '@/components/button'
import Footer from '@/layout/footer'
import ContactForm from '@/components/contactForm';
import line1 from "../public/Vector 5.png"
import line2 from "../public/Vector 6.png"

const HowWork = () => {
    const [howWorkData, setHowWork] = useState(null);
    const builder = imageUrlBuilder(sanityClient)

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "howWork"]{
      banner,
      content,
      circle1Img,
      circle2Img,
      circle3Img,
      circle4Img,
      circle5Img,
      circle1Text,
      circle2Text,
      circle3Text,
      circle4Text,
      circle5Text,
      text,
      leftTitle,
      rightTitle,
      leftText,
      rightText,
      }`)
            .then((data) => setHowWork(data))
            .catch(console.error);
    }, [])

    return (
        <div>
            <Header buttonType={5} navType={2} />
            {howWorkData && howWorkData.map((post, index) =>
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
            <h1 className={styles.title}>How do we Work</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.content}>
                    <div className={styles.sections}>
                        <Link className={styles.first} href="/whatWeDo"><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />What we do</Link>
                        <Link className={styles.second} href="/insights">Insights <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                    </div>
                    <div className={styles.contentWrapper}>
                        {howWorkData && howWorkData.map((post, index) =>
                            <SanityBlockContent key={index} blocks={post.content} />
                        )}
                    </div>
                    {howWorkData && howWorkData.map((post, index) =>
                        <div key={index} className={styles.graphWrapper}>
                            <div style={{ paddingTop: "92px" }} className={styles.circleWrapper}>
                                <div className={styles.circle}>
                                    <div className={styles.mainCircle}>
                                        <div className={styles.shadowCircle}>
                                            <Image
                                                src={urlFor(post.circle1Img.asset._ref).url()}
                                                alt="icon"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>{post.circle1Text}</p>
                            </div>
                            <div className={styles.circleWrapper}>
                                <div className={styles.circle}>
                                    <div className={styles.mainCircle}>
                                        <div className={styles.shadowCircle}>
                                            <Image
                                                src={urlFor(post.circle2Img.asset._ref).url()}
                                                alt="icon"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>{post.circle2Text}</p>
                            </div>
                            <div style={{ paddingTop: "92px" }} className={styles.circleWrapper}>
                                <div className={styles.circle}>
                                    <div className={styles.mainCircle}>
                                        <div className={styles.shadowCircle}>
                                            <Image
                                                src={urlFor(post.circle3Img.asset._ref).url()}
                                                alt="icon"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>{post.circle3Text}</p>
                            </div>
                            <div className={styles.circleWrapper}>
                                <div className={styles.circle}>
                                    <div className={styles.mainCircle}>
                                        <div className={styles.shadowCircle}>
                                            <Image
                                                src={urlFor(post.circle4Img.asset._ref).url()}
                                                alt="icon"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>{post.circle4Text}</p>
                            </div>
                            <div style={{ paddingTop: "92px" }} className={styles.circleWrapper}>
                                <div className={styles.circle}>
                                    <div className={styles.mainCircle}>
                                        <div className={styles.shadowCircle}>
                                            <Image
                                                src={urlFor(post.circle5Img.asset._ref).url()}
                                                alt="icon"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p>{post.circle5Text}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", background: "#F1F3F8" }}>
                {howWorkData && howWorkData.map((post, index) =>
                    <div key={index} className={styles.bottomContent}>
                        <p className={styles.bottomText}>{post.text}</p>
                        <div className={styles.textWrapper}>
                            <div className={styles.box}>
                                <h3>{post.leftTitle}</h3>
                                <p>{post.leftText}</p>
                            </div>
                            <div className={styles.box}>
                                <h3>{post.rightTitle}</h3>
                                <p>{post.rightText}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "center", background: "#6CBA9F" }}>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactText}>
                        <h1>Let’s start with one project.</h1>
                        <p>Contact İlerişler</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
            <Footer hideColumns={true} />
        </div>
    )
}

export default HowWork