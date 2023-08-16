import React from 'react'
import styles from "./pageType2.module.css"
import { useEffect, useState } from 'react';
import Header from '@/layout/header';
import sanityClient from "@/sanity/lib/sanityClient"
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';
import Link from 'next/link';
import SanityBlockContent from '@sanity/block-content-to-react'
import Footer from '@/layout/footer'
import ContactForm from '@/components/contactForm';
import { useRouter } from 'next/router';
import en from '@/locales/en'
import tr from '@/locales/tr'
import useCamelize from '@/hooks/useCamelize';

const PageType2 = (props) => {
    const [pageData, setPageData] = useState(null);
    const builder = imageUrlBuilder(sanityClient)
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : tr;

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "pageType2"]{
      "pageName" : pageName.${locale},
      banner,
      "content" : content.${locale},
      circle1Img,
      circle2Img,
      circle3Img,
      circle4Img,
      circle5Img,
      "circle1Text" : circle1Text.${locale},
      "circle2Text" : circle2Text.${locale},
      "circle3Text" : circle3Text.${locale},
      "circle4Text" : circle4Text.${locale},
      "circle5Text" : circle5Text.${locale},
      "text" : text.${locale},
      "leftTitle" : leftTitle.${locale},
      "rightTitle" : rightTitle.${locale},
      "leftText" : leftText.${locale},
      "rightText" : rightText.${locale},
      _id,
      "pageNav": pageNav[]->{
        ...
        pageName,
      }
      }`)
            .then((data) => setPageData(data))
            .catch(console.error);
    }, [])

    if (pageData && pageData.some(arr => useCamelize(arr.pageName) === props.pageName)) {
        return (
            <>
                {pageData && pageData.filter(arr => useCamelize(arr.pageName) === props.pageName).map((post, index) =>
                    <div key={index}>
                        <Header buttonType={5} navType={2} />
                        <div className={styles.imageWrapper}>
                            <Image
                                src={urlFor(post.banner.asset._ref).url()}
                                alt="banner"
                                width={1441}
                                height={400}
                                sizes="100vw"
                                style={{ width: '100%', height: '400px', position: "absolute" }}
                            />
                        </div>
                        <h1 className={styles.title}>{post.pageName}</h1>
                        <div className={styles.pd32} style={{ display: "flex", justifyContent: "center" }}>
                            <div className={styles.content}>
                                <div className={styles.sections}>
                                    {post.pageNav && post.pageNav.map((page, index) => {
                                        if (index === 0) {
                                            return <Link key={index} className={styles.first} href={"/pages/" + useCamelize(page[locale])}><HiChevronLeft style={{ marginRight: "10px", verticalAlign: "middle", color: "#C20713" }} />{page[locale]}</Link>
                                        }
                                        if (index > 0) {
                                            return <Link key={index} className={styles.second} href={"/pages/" + useCamelize(page[locale])}>{page[locale]} <HiChevronRight style={{ marginLeft: "10px", verticalAlign: "middle", color: "#C20713" }} /></Link>
                                        }
                                    })}
                                </div>
                                <div className={styles.contentWrapper}>
                                    <SanityBlockContent blocks={post.content} />
                                </div>
                                <div className={styles.graphWrapper}>
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
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", background: "#F1F3F8" }}>
                            <div className={styles.bottomContent}>
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
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", background: "#6CBA9F" }}>
                            <div className={styles.contactWrapper}>
                                <div className={styles.contactText}>
                                    <h1>{t.start}</h1>
                                    <p>{t.contactİleri}</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                        <Footer hideColumns={true} />
                    </div>
                )}
            </>
        )
    }
}

export default PageType2